import React, { useEffect, useLayoutEffect, useState, useMemo } from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';
import { postsSortedByLatest } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, POST_URL } from '../api/api';
import { useQuery } from 'react-query';

export default function PostContentsBox() {
    const {
        data: posts,
        status,
        error,
        refetch,
    } = useQuery(['posts'], fetchPosts, {
        staleTime: 1000 * 30, // 30 seconds
        // staleTime: 1000 * 60 * 1, // 1 minutes
    });

    const [postContent, setPostContent] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);

    const clickInfoStore = useSelector((state) => state.clickInfo);
    const scrollLocation = clickInfoStore.touchedPostScrollY;
    const scrollEl = clickInfoStore.scrollElement;

    // if (scrollEl && isPostLoading === true) {
    //     console.log(clickInfoStore.scrollElement);
    // }

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (clickInfoStore.touchedPostScrollY !== 0 && isPostLoading === true) {
            const rootEl = document.getElementById('topLayout');
            rootEl.scrollTo(0, clickInfoStore.touchedPostScrollY);

            console.log(`scrollTo: ${clickInfoStore.touchedPostScrollY}`);
        }
    }, [clickInfoStore.touchedPostScrollY, dispatch, isPostLoading, scrollEl, scrollLocation]);

    // useEffect(() => {
    //     console.log('컨텐츠박스 첫 로드 시작');

    //     fetch(POST_URL)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const sortedPost = postsSortedByLatest(data).slice();

    //             setPostContent((initialPost) => sortedPost);
    //             setIsPostLoading((state) => true);
    //         });
    // }, []);

    // const memoizedPostContent = useMemo(() => postContent, [postContent]);

    useEffect(() => {
        setIsPostLoading(true);
    }, []);

    useEffect(() => {
        console.log(`isPostLoading: ${isPostLoading}`);
    }, [isPostLoading]);

    return (
        <main>
            <PostHeader />
            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />
            {status === 'loading' && <p>Loading...</p>}
            {status === 'error' && <p>Error: {error.message}</p>}
            {status === 'success' && posts.map((post) => <ForumPost key={post.postId} post={post} />)}
            <button onClick={refetch}>Refresh Posts</button> {/* Optional Refresh Button */}
        </main>
    );
}
