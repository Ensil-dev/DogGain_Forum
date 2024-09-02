import React, { useEffect, useLayoutEffect, useState } from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';
import { filteringPostOption, postsSortedByLatest } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { DEV_POST_URL, getPosts, PRODUCTION_POST_URL } from '../api/api';
import { latestPostDataSave } from '../redux/constants/constant';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function PostContentsBox() {
    const [postContent, setPostContent] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);

    const clickInfoStore = useSelector((state) => state.clickInfo);
    const postInfoStore = useSelector((state) => state.postInfo);
    const optionStore = useSelector((store) => store.filteringOption);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (clickInfoStore.touchedPostScrollY !== 0 && isPostLoading === true) {
            const rootEl = document.getElementById('topLayout');
            rootEl.scrollTo(0, clickInfoStore.touchedPostScrollY);

            console.log(`scrollTo: ${clickInfoStore.touchedPostScrollY}`);
        }
    }, [clickInfoStore.touchedPostScrollY, dispatch, isPostLoading]);

    useEffect(() => {
        const postsData = postInfoStore.latestPostData;

        console.log(postsData);

        if (postsData === null) {
            // const postPromise = getPosts();
            // console.log(postPromise)

            async function getPosts() {
                const data = await getDocs(collection(db, 'posts')); // create라는 collection 안에 모든 document를 읽어올 때 사용한다.
                const newData = data.docs.map((doc) => ({ ...doc.data() }));
                console.log(newData);
                console.log(typeof newData);

                dispatch(latestPostDataSave(newData));
            }

            getPosts();

            // fetch(DEV_POST_URL || PRODUCTION_POST_URL)
            //     .then((res) => res.json())
            //     .then((data) => {
            //         const sortedPost = postsSortedByLatest(data).slice();

            //         setPostContent((initialPost) => sortedPost);
            //         dispatch(latestPostDataSave(sortedPost));
            //         setIsPostLoading((state) => true);
            //     });
        } else {
            setPostContent((initialPost) => postsData);
            setIsPostLoading((state) => true);
        }
    }, [dispatch, postInfoStore.latestPostData]);

    // useEffect(() => {
    //     console.log(`isPostLoading: ${isPostLoading}`);
    // }, [isPostLoading]);

    return (
        <main>
            <PostHeader />
            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />
            {isPostLoading && filteringPostOption(postContent, optionStore.filteringOption).map((post) => <ForumPost key={post.postId} post={post} />)}
        </main>
    );
}
