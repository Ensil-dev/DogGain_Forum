import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from 'react-query';
import type { Post } from '../../types';
import {
    collection,
    doc,
    addDoc,
    deleteDoc,
    updateDoc,
    getDocs,
    getDoc,
    setDoc,
    query,
    orderBy,
    limit as fsLimit,
    startAfter,
    increment,
    QueryDocumentSnapshot,
    DocumentData,
} from 'firebase/firestore';
import { db } from '../../api/firebase';
import { STALE_TIME } from '../../config/constants/staleTime';

export function usePosts(limitCount?: number) {
    return useQuery<Post[]>(
        ['posts', limitCount],
        async () => {
            let postsRef = collection(db, 'posts');
            if (typeof limitCount === 'number') {
                postsRef = query(postsRef, orderBy('created', 'desc'), fsLimit(limitCount));
            } else {
                postsRef = query(postsRef, orderBy('created', 'desc'));
            }
            const data = await getDocs(postsRef);
            const newData = data.docs.map((doc) => ({ ...(doc.data() as Post), id: doc.id }));
            return newData;
        },
        {
            staleTime: STALE_TIME.NONE,
            refetchOnWindowFocus: true,
        }
    );
}

export function useAddPost() {
    const queryClient = useQueryClient();
    return useMutation(
        async (post: Omit<Post, 'id'>) => {
            const docRef = await addDoc(collection(db, 'posts'), post);
            return { ...post, id: docRef.id } as Post;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('posts');
                queryClient.invalidateQueries('postsInfinite');
                queryClient.invalidateQueries(['posts', 'infinite']);
            },
        }
    );
}

export function useDeletePost() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ id }: { id: string }) => {
            await deleteDoc(doc(db, 'posts', id));
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('posts');
                queryClient.invalidateQueries('postsInfinite');
                queryClient.invalidateQueries(['posts', 'infinite']);
            },
        }
    );
}

export function useUpdatePost() {
    const queryClient = useQueryClient();
    return useMutation(
        async (post: Post) => {
            await updateDoc(doc(db, 'posts', String(post.id)), post);
            return post;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('posts');
                queryClient.invalidateQueries('postsInfinite');
                queryClient.invalidateQueries(['posts', 'infinite']);
            },
        }
    );
}

export function useIncreaseView() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ id }: { id: string | number }) => {
            await updateDoc(doc(db, 'posts', String(id)), {
                views: increment(1),
            });
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('posts');
            },
        }
    );
}

export async function fetchPostById(id: string | undefined): Promise<Post | null> {
    if (!id) return null;
    const docRef = doc(db, 'posts', id);
    const data = await getDoc(docRef);
    if (!data.exists()) return null;
    return { ...(data.data() as Post), id: data.id };
}

export function usePostById(id: string | undefined) {
    return useQuery<Post | null>(
        ['post', id],
        () => fetchPostById(id),
        {
            staleTime: STALE_TIME.POST_DETAIL,
        }
    );
}

export function useInfinitePosts(limitCount = 20) {
    return useInfiniteQuery<{ posts: Post[]; lastVisible: QueryDocumentSnapshot<DocumentData> | undefined }>(
        ['posts', 'infinite', limitCount],
        async ({ pageParam }) => {
            let postsQuery;
            if (pageParam) {
                postsQuery = query(
                    collection(db, 'posts'),
                    orderBy('created', 'desc'),
                    startAfter(pageParam),
                    fsLimit(limitCount)
                );
            } else {
                postsQuery = query(
                    collection(db, 'posts'),
                    orderBy('created', 'desc'),
                    fsLimit(limitCount)
                );
            }
            const snap = await getDocs(postsQuery);
            const posts = snap.docs.map((doc) => ({ ...(doc.data() as Post), id: doc.id }));
            const lastVisible = snap.docs.length > 0 ? snap.docs[snap.docs.length - 1] : undefined;
            return { posts, lastVisible };
        },
        {
            getNextPageParam: (lastPage) => lastPage.lastVisible,
            staleTime: STALE_TIME.NONE,
            refetchOnWindowFocus: true,
        }
    );
}

export function useLikePost() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ postId, uid }: { postId: string | number; uid: string }) => {
            const likeRef = doc(db, 'posts', String(postId), 'likes', uid);
            const snap = await getDoc(likeRef);
            if (snap.exists()) {
                throw new Error('already liked');
            }
            await setDoc(likeRef, {
                uid,
                created: Date.now(),
            });
            await updateDoc(doc(db, 'posts', String(postId)), {
                likesCount: increment(1),
            });
        },
        {
            onMutate: async (variables) => {
                const { postId, uid } = variables;
                await Promise.all([
                    queryClient.cancelQueries('posts'),
                    queryClient.cancelQueries('postsInfinite'),
                    queryClient.cancelQueries({ queryKey: ['posts', 'infinite'] }),
                    queryClient.cancelQueries(['post', postId]),
                    queryClient.cancelQueries(['isLiked', postId, uid]),
                ]);

                const prevPost = queryClient.getQueryData<Post | null>(['post', postId]);
                const prevIsLiked = queryClient.getQueryData<boolean>(['isLiked', postId, uid]);
                const prevPosts = queryClient.getQueriesData<Post[]>({ queryKey: ['posts'] });
                const prevInfinite = queryClient.getQueriesData<any>({ queryKey: ['posts', 'infinite'] });

                const increase = (p: Post) => ({ ...p, likesCount: (p.likesCount ?? 0) + 1 });

                queryClient.setQueryData(['post', postId], (old: Post | null | undefined) =>
                    old ? increase(old) : old
                );

                prevPosts.forEach(([key, data]) => {
                    if (Array.isArray(data)) {
                        queryClient.setQueryData(key, (old: Post[] | undefined) =>
                            old?.map((p) => (p.id === String(postId) || p.postId === postId ? increase(p) : p))
                        );
                    }
                });

                prevInfinite.forEach(([key, data]) => {
                    if (data && Array.isArray(data.pages)) {
                        const newPages = data.pages.map((page: any) => ({
                            ...page,
                            posts: page.posts.map((p: Post) =>
                                p.id === String(postId) || p.postId === postId ? increase(p) : p
                            ),
                        }));
                        queryClient.setQueryData(key, { ...data, pages: newPages });
                    }
                });

                queryClient.setQueryData(['isLiked', postId, uid], true);

                return { prevPost, prevPosts, prevInfinite, prevIsLiked };
            },
            onError: (_err, variables, context) => {
                if (!context) return;
                const { prevPost, prevPosts, prevInfinite, prevIsLiked } = context as any;
                if (prevPost !== undefined) queryClient.setQueryData(['post', variables.postId], prevPost);
                prevPosts?.forEach(([key, data]: any) => queryClient.setQueryData(key, data));
                prevInfinite?.forEach(([key, data]: any) => queryClient.setQueryData(key, data));
                if (prevIsLiked !== undefined) queryClient.setQueryData(['isLiked', variables.postId, variables.uid], prevIsLiked);
            },
            onSettled: (_, __, variables) => {
                queryClient.invalidateQueries('posts');
                queryClient.invalidateQueries('postsInfinite');
                queryClient.invalidateQueries(['posts', 'infinite']);
                queryClient.invalidateQueries(['post', variables.postId]);
                queryClient.invalidateQueries(['isLiked', variables.postId, variables.uid]);
            },
        }
    );
}

export function useUnlikePost() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ postId, uid }: { postId: string | number; uid: string }) => {
            const likeRef = doc(db, 'posts', String(postId), 'likes', uid);
            const snap = await getDoc(likeRef);
            if (!snap.exists()) {
                throw new Error('not liked');
            }
            await deleteDoc(likeRef);
            await updateDoc(doc(db, 'posts', String(postId)), {
                likesCount: increment(-1),
            });
        },
        {
            onMutate: async (variables) => {
                const { postId, uid } = variables;
                await Promise.all([
                    queryClient.cancelQueries('posts'),
                    queryClient.cancelQueries('postsInfinite'),
                    queryClient.cancelQueries({ queryKey: ['posts', 'infinite'] }),
                    queryClient.cancelQueries(['post', postId]),
                    queryClient.cancelQueries(['isLiked', postId, uid]),
                ]);

                const prevPost = queryClient.getQueryData<Post | null>(['post', postId]);
                const prevIsLiked = queryClient.getQueryData<boolean>(['isLiked', postId, uid]);
                const prevPosts = queryClient.getQueriesData<Post[]>({ queryKey: ['posts'] });
                const prevInfinite = queryClient.getQueriesData<any>({ queryKey: ['posts', 'infinite'] });

                const decrease = (p: Post) => ({ ...p, likesCount: (p.likesCount ?? 0) - 1 });

                queryClient.setQueryData(['post', postId], (old: Post | null | undefined) =>
                    old ? decrease(old) : old
                );

                prevPosts.forEach(([key, data]) => {
                    if (Array.isArray(data)) {
                        queryClient.setQueryData(key, (old: Post[] | undefined) =>
                            old?.map((p) => (p.id === String(postId) || p.postId === postId ? decrease(p) : p))
                        );
                    }
                });

                prevInfinite.forEach(([key, data]) => {
                    if (data && Array.isArray(data.pages)) {
                        const newPages = data.pages.map((page: any) => ({
                            ...page,
                            posts: page.posts.map((p: Post) =>
                                p.id === String(postId) || p.postId === postId ? decrease(p) : p
                            ),
                        }));
                        queryClient.setQueryData(key, { ...data, pages: newPages });
                    }
                });

                queryClient.setQueryData(['isLiked', postId, uid], false);

                return { prevPost, prevPosts, prevInfinite, prevIsLiked };
            },
            onError: (_err, variables, context) => {
                if (!context) return;
                const { prevPost, prevPosts, prevInfinite, prevIsLiked } = context as any;
                if (prevPost !== undefined) queryClient.setQueryData(['post', variables.postId], prevPost);
                prevPosts?.forEach(([key, data]: any) => queryClient.setQueryData(key, data));
                prevInfinite?.forEach(([key, data]: any) => queryClient.setQueryData(key, data));
                if (prevIsLiked !== undefined) queryClient.setQueryData(['isLiked', variables.postId, variables.uid], prevIsLiked);
            },
            onSettled: (_, __, variables) => {
                queryClient.invalidateQueries('posts');
                queryClient.invalidateQueries('postsInfinite');
                queryClient.invalidateQueries(['posts', 'infinite']);
                queryClient.invalidateQueries(['post', variables.postId]);
                queryClient.invalidateQueries(['isLiked', variables.postId, variables.uid]);
            },
        }
    );
}

export function useIsPostLiked(postId: string | number | undefined, uid: string | undefined) {
    return useQuery(
        ['isLiked', postId, uid],
        async () => {
            if (!postId || !uid) return false;
            const likeRef = doc(db, 'posts', String(postId), 'likes', uid);
            const snap = await getDoc(likeRef);
            return snap.exists();
        },
        { staleTime: STALE_TIME.NONE }
    );
}
