import React, { useEffect, useLayoutEffect, useState, useMemo } from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';
import { postsSortedByLatest } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { POST_URL } from '../api/api';

export default function PostContentsBox() {
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

    useEffect(() => {
        console.log('컨텐츠박스 첫 로드 시작');
        // http 주소를 이용할 경우
        // fetch('http://localhost:3000/data/recommendData.json');

        // public 폴더의 절대 경로를 이용할 경우
        // fetch('/data/recommendData.json');

        // Network 주소 사용
        // fetch('http://192.168.0.13:3000/mockData/post.json')
        fetch(POST_URL)
            .then((res) => res.json())
            .then((data) => {
                const sortedPost = postsSortedByLatest(data).slice();

                setPostContent((initialPost) => sortedPost);
                setIsPostLoading((state) => true);
            });

        // Local 주소 사용
        // fetch('http://localhost:3000/mockData/post.json')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         const sortedPost = postsSortedByLatest(data).slice();

        //         setPostContent((initialPost) => sortedPost);
        //         setIsPostLoading((state) => true);
        //     });
    }, []);

    const memoizedPostContent = useMemo(() => postContent, [postContent]);

    // useEffect(() => {
    //     console.log(postContent);
    // }, [postContent]);

    useEffect(() => {
        console.log(`isPostLoading: ${isPostLoading}`);
    }, [isPostLoading]);

    // * useSWR hooks를 사용한 data fetching 방법

    // const fetcher = (url) => fetch(url).then((res) => res.json());
    // const { data, error } = useSWR('http://192.168.0.40:3000/mockData/post.json', fetcher);

    // if (error) return <div>Failed to load</div>;
    // if (!data) return <div>Loading...</div>;

    // const sortedPost = postsSortedByLatest(data);
    // console.log(sortedPost)

    return (
        <main>
            <PostHeader />

            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />

            {isPostLoading && memoizedPostContent.map((post) => <ForumPost key={post.postId} post={post} />)}

            {/* {postContent.map((post) => (
                <ForumPost key={post.postId} />
            ))} */}
        </main>
    );
}
