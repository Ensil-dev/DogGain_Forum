import React, { useEffect, useLayoutEffect, useState } from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';
import { postsSortedByLatest } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { POST_URL } from '../api/api';
import { latestPostDataSave } from '../redux/constants/constant';

export default function PostContentsBox() {
    const [postContent, setPostContent] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);

    const clickInfoStore = useSelector((state) => state.clickInfo);
    const postInfoStore = useSelector((state) => state.postInfo);
    const optionStore = useSelector((store) => store.filteringOption);
    // console.log(postInfoStore.latestPostData?.length);
    // const scrollLocation = clickInfoStore.touchedPostScrollY;
    // const scrollEl = clickInfoStore.scrollElement;

    // if (scrollEl && isPostLoading === true) {
    //     console.log(clickInfoStore.scrollElement);
    // }

    const filteringPostOption = (postContent, option) => {
        console.log(postContent)
        if (option !== '최신') {
            return postContent.filter((post) => post.category.name.includes(option));
        }

        return postContent;
    };

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (clickInfoStore.touchedPostScrollY !== 0 && isPostLoading === true) {
            const rootEl = document.getElementById('topLayout');
            rootEl.scrollTo(0, clickInfoStore.touchedPostScrollY);

            console.log(`scrollTo: ${clickInfoStore.touchedPostScrollY}`);
        }
    }, [clickInfoStore.touchedPostScrollY, dispatch, isPostLoading]);

    useEffect(() => {
        console.log('컨텐츠박스 첫 로드 시작');

        const postsData = postInfoStore.latestPostData;

        if (postsData === null) {
            fetch(POST_URL)
                .then((res) => res.json())
                .then((data) => {
                    const sortedPost = postsSortedByLatest(data).slice();

                    setPostContent((initialPost) => sortedPost);
                    dispatch(latestPostDataSave(sortedPost));
                    setIsPostLoading((state) => true);
                });
        } else {
            setPostContent((initialPost) => postsData);
            setIsPostLoading((state) => true);
        }
    }, [dispatch, postInfoStore.latestPostData]);

    useEffect(() => {
        console.log(`isPostLoading: ${isPostLoading}`);
    }, [isPostLoading]);

    return (
        <main>
            <PostHeader />
            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />
            {isPostLoading && filteringPostOption(postContent, optionStore.filteringOption).map((post) => <ForumPost key={post.postId} post={post} />)}
        </main>
    );
}
