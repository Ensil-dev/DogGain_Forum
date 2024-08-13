import React, { useEffect, useState } from 'react';
import UnifiedDivider from './UnifiedDivider';
import { useDispatch, useSelector } from 'react-redux';
import { POST_URL } from '../api/api';
import { useParams } from 'react-router-dom';
import PostDetailHeader from './PostDetailHeader';

export default function PostDetail() {
    const [postComment, setPostComment] = useState(null);
    const [isPostCommentLoading, setisPostCommentLoading] = useState(false);

    const param = useParams();
    const postId = param.id;
    // console.log('postId: ', postId);

    const postInfoStore = useSelector((state) => state.postInfo);

    // console.log(postInfoStore);

    const posts = postInfoStore.latestPostData;

    const filteredPost = (fetchingPostId) => {
        return posts.filter((post) => {
            return post.postId === fetchingPostId;
        })[0];
    };

    const postDetailInfo = filteredPost(postId);

    console.log(postDetailInfo);

    return (
        <main>
            <PostDetailHeader title={postDetailInfo.title} category={postDetailInfo.category.name} />

            <div style={{ display: 'flex', width: '100%', padding: '12px 0px' }}>
                <p style={{ padding: '0px 20px 0px 20px', lineHeight: 1.5 }}>{postDetailInfo.content}</p>
            </div>

            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />

            <div style={{ display: 'flex', width: '100%', padding: '12px 0px' }}>
                <p style={{ padding: '0px 20px 0px 20px', lineHeight: 1.5, fontWeight:'500' }}>{postDetailInfo.profile.nickname}</p>
            </div>

            <UnifiedDivider $padding='0px 0px' $border='4px solid gray' $opacity='0.15' />

            {/* {posts.map((post) => <ForumPost key={post.postId} post={post} />)} */}
        </main>
    );
}
