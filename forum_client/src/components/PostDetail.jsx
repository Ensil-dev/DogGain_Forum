import React, { useEffect, useState } from 'react';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';
import { postsSortedByLatest } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { POST_URL } from '../api/api';
import { useParams } from 'react-router-dom';
import PostDetailHeader from './PostDetailHeader';
import { useQuery } from 'react-query';

export default function PostDetail() {
    const [postDetailContent, setPostContent] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);

    const param = useParams();
    const postId = param.id;
    console.log('postId: ', postId);

    // useEffect(() => {
    //     console.log('컨텐츠박스 첫 로드 시작');

    //     fetch(POST_URL + postId)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const sortedPost = postsSortedByLatest(data).slice();

    //             setPostContent((initialPost) => sortedPost);
    //             setIsPostLoading((state) => true);
    //         });
    // }, [postId]);

    // useEffect(() => {
    //     console.log(`isPostLoading: ${isPostLoading}`);
    // }, [isPostLoading]);

    const { data: posts, status } = useQuery(['posts']);

    // if (status === 'loading') return <p>Loading summary...</p>;
    // if (status === 'error') return <p>Error loading summary.</p>;

    console.log(posts);

    const filteredPosts = (fetchingPostId) => {
        return posts.filter((post) => {
            return post.postId === fetchingPostId;
        });
    };

    console.log(filteredPosts(postId)[0]);

    const postDetailInfo = filteredPosts(postId)[0];

    return (
        <main>
            <PostDetailHeader title={postDetailInfo.title} category={postDetailInfo.category.name} />

            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />

            <p>Total Posts: {posts.length}</p>

            {/* {isPostLoading && posts.map((post) => <ForumPost key={post.postId} post={post} />)} */}
        </main>
    );
}
