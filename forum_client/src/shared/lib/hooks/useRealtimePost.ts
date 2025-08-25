import { useEffect, useState } from 'react';
import type { Post } from '../../types';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../api/firebase';

export function useRealtimePost(postId: string | undefined, initialData: Post | null = null) {
    const [post, setPost] = useState<Post | null>(initialData);

    useEffect(() => {
        if (!postId) return;
        const unsubscribe = onSnapshot(doc(db, 'posts', String(postId)), (snap) => {
            if (snap.exists()) {
                setPost({ ...(snap.data() as Post), id: snap.id });
            }
        });
        return () => unsubscribe();
    }, [postId]);

    return post;
}
