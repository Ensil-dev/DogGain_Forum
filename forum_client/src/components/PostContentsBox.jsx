import React, { useEffect, useLayoutEffect, useState } from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';
import { postsSortedByLatest } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { touchedPostInfoSave } from '../redux/constants/constant';

export default function PostContentsBox() {
    const [postContent, setPostContent] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);

    const clickInfoStore = useSelector((state) => state.clickInfo);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (clickInfoStore.touchedPostScrollY !== 0 && isPostLoading === true) {
            console.log(`scrollTo: ${clickInfoStore.touchedPostScrollY}`);
            // setTimeout(() => {
            window.scrollTo(0, clickInfoStore.touchedPostScrollY, 'instant');
            // }, 500);

            // scroll 위치 초기화
            dispatch(touchedPostInfoSave(0));
        }
    }, [clickInfoStore.touchedPostScrollY, isPostLoading, dispatch]);

    useEffect(() => {
        console.log('컨텐츠박스 첫 로드 시작');
        // http 주소를 이용할 경우
        // fetch('http://localhost:3000/data/recommendData.json');

        // public 폴더의 절대 경로를 이용할 경우
        // fetch('/data/recommendData.json');

        // Network 주소 사용
        fetch('http://192.168.0.29:3000/mockData/post.json')
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

    // useEffect(() => {
    //     console.log(postContent);
    // }, [postContent]);

    useEffect(() => {
        console.log(`isPostLoading: ${isPostLoading}`);
        if (isPostLoading === true) {
        }
    }, [isPostLoading]);

    return (
        <main>
            <PostHeader />

            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />

            {isPostLoading && postContent.map((post) => <ForumPost key={post.postId} post={post} />)}

            {/* {postContent.map((post) => (
                <ForumPost key={post.postId} />
            ))} */}
        </main>
    );
}
