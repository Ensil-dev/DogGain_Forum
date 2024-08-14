import React, { useEffect, useState } from 'react';
import UnifiedDivider from './UnifiedDivider';
import { useDispatch, useSelector } from 'react-redux';
import { POST_URL } from '../api/api';
import { useParams } from 'react-router-dom';
import PostDetailHeader from './PostDetailHeader';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 12px 0px;

    /* font-size: large; */
    word-break: keep-all;
`;

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

    // @media screen and (min-width: 550px) {
    //     // 너비가 550px보다 클 때 적용할 CSS
    //     grid-template-columns: 3fr 2fr;

    //     /* background-color: black; */
    // }

    return (
        <main>
            <PostDetailHeader title={postDetailInfo.title} category={postDetailInfo.category.name} />

            <Content>
                <p style={{ padding: '0px 20px 0px 20px', lineHeight: 1.5 }}>{postDetailInfo.content}</p>
            </Content>

            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />

            <div style={{ display: 'flex', width: '100%', padding: '12px 0px' }}>
                <p style={{ padding: '0px 20px 0px 20px', lineHeight: 1.5, fontWeight: '500' }}>{postDetailInfo.profile.nickname}</p>
            </div>

            <UnifiedDivider $padding='0px 0px' $border='4px solid gray' $opacity='0.15' />

            {/* {posts.map((post) => <ForumPost key={post.postId} post={post} />)} */}
        </main>
    );
}
