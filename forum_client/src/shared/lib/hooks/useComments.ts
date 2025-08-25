import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
    collection,
    query,
    where,
    orderBy,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    increment,
} from 'firebase/firestore';
import { db } from '../../api/firebase';
import { STALE_TIME } from '../../config/constants/staleTime';
import type { Comment } from '../../types';

export function useComments(postId: string | number | undefined) {
    const key = String(postId);
    return useQuery<Comment[]>(
        ['comments', key],
        async () => {
            if (!postId) return [];
            const q = query(
                collection(db, 'comments'),
                where('postId', '==', key),
                orderBy('created')
            );
            const data = await getDocs(q);
            return data.docs.map((doc) => ({ ...(doc.data() as Comment), id: doc.id }));
        },
        {
            staleTime: STALE_TIME.COMMENT,
        }
    );
}

export function useAddComment() {
    const queryClient = useQueryClient();
    return useMutation(
        async (comment: Omit<Comment, 'id'>) => {
            const docRef = await addDoc(collection(db, 'comments'), comment);
            if (comment.postDocId) {
                await updateDoc(doc(db, 'posts', String(comment.postDocId)), {
                    comments: increment(1),
                });
            }
            return { ...comment, id: docRef.id } as Comment;
        },
        {
            onSuccess: (newComment, variables) => {
                queryClient.setQueryData(['comments', String(variables.postId)], (old) =>
                    old ? [...old, newComment] : [newComment]
                );
                queryClient.invalidateQueries('posts');
            },
        }
    );
}

export function useDeleteComment() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ id, postId, postDocId }: { id: string; postId: string | number; postDocId?: string }) => {
            await deleteDoc(doc(db, 'comments', id));
            if (postDocId) {
                await updateDoc(doc(db, 'posts', String(postDocId)), {
                    comments: increment(-1),
                });
            }
        },
        {
            onSuccess: (_, variables) => {
                queryClient.setQueryData(['comments', String(variables.postId)], (old) =>
                    old ? old.filter((c) => c.id !== variables.id) : []
                );
                queryClient.invalidateQueries('posts');
            },
        }
    );
}

export function useCommentsByUser(uid: string | undefined) {
    return useQuery<Comment[]>(
        ['commentsByUser', uid],
        async () => {
            if (!uid) return [];
            const q = query(collection(db, 'comments'), where('profile.uid', '==', uid));
            const data = await getDocs(q);
            return data.docs.map((doc) => ({ ...(doc.data() as Comment), id: doc.id }));
        },
        {
            staleTime: STALE_TIME.COMMENT,
        }
    );
}

export function useAllComments() {
    return useQuery<Comment[]>(
        'allComments',
        async () => {
            const q = query(collection(db, 'comments'), orderBy('created', 'desc'));
            const data = await getDocs(q);
            return data.docs.map((doc) => ({ ...(doc.data() as Comment), id: doc.id }));
        },
        {
            staleTime: STALE_TIME.COMMENT,
        }
    );
}
