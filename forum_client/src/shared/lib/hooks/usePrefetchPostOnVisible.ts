import { useEffect, useRef } from 'react';
import { useQueryClient } from 'react-query';
import { fetchPostById } from './usePosts';

export default function usePrefetchPostOnVisible(postId: string | undefined) {
    const ref = useRef<HTMLElement | null>(null);
    const queryClient = useQueryClient();

    useEffect(() => {
        const target = ref.current;
        if (!target || !postId) return;
        const rootEl = document.getElementById('topLayout');
        const observer = new IntersectionObserver(
            (entries, obs) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    queryClient.prefetchQuery(['post', postId], () => fetchPostById(postId));
                    obs.unobserve(entry.target);
                }
            },
            { root: rootEl, threshold: 0.1 }
        );
        observer.observe(target);
        return () => observer.disconnect();
    }, [postId, queryClient]);

    return ref;
}
