import { useQuery, useMutation, useQueryClient } from 'react-query';
import type { Post } from '../../types';
import {
    collection,
    doc,
    setDoc,
    deleteDoc,
    getDocs,
    getDoc,
    query,
    orderBy,
} from 'firebase/firestore';
import { db } from '../../api/firebase';
import { STALE_TIME } from '../../config/constants/staleTime';

export function useBookmarks(uid?: string | null) {
    return useQuery<Post[]>(
        ['bookmarks', uid],
        async () => {
            if (!uid) return [];
            const q = query(
                collection(db, 'users', uid, 'bookmarks'),
                orderBy('created', 'desc')
            );
            const snap = await getDocs(q);
            const posts: Post[] = [];
            for (const d of snap.docs) {
                const postRef = doc(db, 'posts', d.id);
                const postSnap = await getDoc(postRef);
                if (postSnap.exists()) {
                    posts.push({ ...(postSnap.data() as Post), id: postSnap.id });
                }
            }
            return posts;
        },
        { staleTime: STALE_TIME.NONE }
    );
}

export function useAddBookmark() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ postId, uid }: { postId: string | number; uid: string }) => {
            const ref = doc(db, 'users', uid, 'bookmarks', String(postId));
            await setDoc(ref, {
                postId,
                created: Date.now(),
            });
        },
        {
            onSuccess: (_, variables) => {
                queryClient.invalidateQueries(['bookmarks', variables.uid]);
                queryClient.invalidateQueries([
                    'isBookmarked',
                    variables.postId,
                    variables.uid,
                ]);
            },
        }
    );
}

export function useDeleteBookmark() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ postId, uid }: { postId: string | number; uid: string }) => {
            const ref = doc(db, 'users', uid, 'bookmarks', String(postId));
            await deleteDoc(ref);
        },
        {
            onSuccess: (_, variables) => {
                queryClient.invalidateQueries(['bookmarks', variables.uid]);
                queryClient.invalidateQueries([
                    'isBookmarked',
                    variables.postId,
                    variables.uid,
                ]);
            },
        }
    );
}

export function useIsBookmarked(postId?: string | number, uid?: string | null) {
    return useQuery(
        ['isBookmarked', postId, uid],
        async () => {
            if (!postId || !uid) return false;
            const ref = doc(db, 'users', uid, 'bookmarks', String(postId));
            const snap = await getDoc(ref);
            return snap.exists();
        },
        { staleTime: STALE_TIME.NONE }
    );
}
