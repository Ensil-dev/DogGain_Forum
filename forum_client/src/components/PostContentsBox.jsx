import React, { useEffect, useLayoutEffect } from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';
import { filteringPostOption, postsSortedByLatest } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { latestPostDataSave } from '../redux/constants/constant';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import PostLoadingIndicator from './PostLoadingIndicator';

export default function PostContentsBox() {
    const clickInfoStore = useSelector((state) => state.clickInfo);
    const postInfoStore = useSelector((state) => state.postInfo);
    const optionStore = useSelector((store) => store.filteringOption);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (clickInfoStore.touchedPostScrollY !== 0 && postInfoStore.latestPostData) {
            const rootEl = document.getElementById('topLayout');
            rootEl.scrollTo(0, clickInfoStore.touchedPostScrollY);

            // console.log(`scrollTo: ${clickInfoStore.touchedPostScrollY}`);
        }
    }, [clickInfoStore.touchedPostScrollY, dispatch, postInfoStore.latestPostData]);

    useEffect(() => {
        const postsData = postInfoStore.latestPostData;
        if (postsData === null) {
            async function getPosts() {
                const data = await getDocs(collection(db, 'posts')); // 'posts' collection 안에 모든 document를 읽어올 때 사용한다.
                const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })); // 문서 데이터에 id 필드를 추가
                const processedPost = postsSortedByLatest(newData);

                dispatch(latestPostDataSave(processedPost));
            }

            getPosts();
        }
    }, [dispatch, postInfoStore.latestPostData]);

    return (
        <main>
            <PostHeader />
            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />
            {postInfoStore.latestPostData === null ? <PostLoadingIndicator /> : filteringPostOption(postInfoStore.latestPostData, optionStore.filteringOption).map((post) => <ForumPost key={post.postId} post={post} />)}
        </main>
    );
}
