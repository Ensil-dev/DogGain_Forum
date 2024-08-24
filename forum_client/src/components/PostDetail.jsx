import React, { useEffect, useState } from 'react';
import UnifiedDivider from './UnifiedDivider';
import { useDispatch, useSelector } from 'react-redux';
import { DEV_POST_URL } from '../api/api';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import PostDetailHeader from './PostDetailHeader';
import styled from 'styled-components';
import { deletePost, postWritingModalChange, saveEditingPost } from '../redux/constants/constant';

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
            // console.log('post.postId: ', post.postId)
            // console.log('fetchingPostId: ', fetchingPostId)
            return Number(post.postId) === Number(fetchingPostId);
        })[0];
    };

    const postDetailInfo = filteredPost(postId);

    console.log(postDetailInfo);

    // @media screen and (min-width: 550px) {
    //     // 너비가 550px보다 클 때 적용할 CSS
    //     grid-template-columns: 3fr 2fr;

    //     /* background-color: black; */
    // }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickDeleteButton = () => {
        let result = window.confirm('정말로 이 게시글을 삭제 하시겠습니까?');
        if (result) {
            dispatch(deletePost(postId));
            navigate('/', { replace: true });
            alert('삭제 완료했습니다!');
        } else {
        }
    };
    const handleClickEditButton = () => {
        let result = window.confirm('이 게시글을 수정 하시겠습니까?');
        if (result) {

            navigate('/', { replace: true });
            
            dispatch(saveEditingPost(postDetailInfo))

            dispatch(postWritingModalChange());

            alert('게시글 수정을 시작합니다!');
        } else {
        }
    };

    return (
        <main>
            <PostDetailHeader title={postDetailInfo.title} category={postDetailInfo.category.name} />

            <Content>
                <p style={{ padding: '0px 20px 0px 20px', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{postDetailInfo.content}</p>
            </Content>

            <UnifiedDivider $padding="0px 10px" $border="1px solid gray" $opacity="0.15" />

            {/* <div> */}
            <div style={{ display: 'grid', gridTemplateColumns: '9fr 1fr 1fr', alignContent: 'center', width: '100%', padding: '12px 0px', gap: '4px' }}>
                <div style={{ width: '100%', padding: '0px 20px 0px 20px', lineHeight: 1.5, fontWeight: '600' }}>{postDetailInfo.profile.nickname}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', gap: '4px', border: '2px solid lightgray', cursor: 'pointer' }} onClick={handleClickEditButton}>
                    <FaEdit style={{ width: '24px', height: '24px', color: 'lightgray' }} />
                    <div style={{ fontSize: 'small' }}>수정</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', gap: '4px', marginRight: '20px', border: '2px solid lightgray', cursor: 'pointer' }} onClick={handleClickDeleteButton}>
                    <MdDeleteForever style={{ width: '24px', height: '24px', color: 'lightgray' }} />
                    <div style={{ fontSize: 'small' }}>삭제</div>
                </div>
            </div>
            {/* </div> */}

            <UnifiedDivider $padding="0px 0px" $border="4px solid gray" $opacity="0.15" />

            {/* {posts.map((post) => <ForumPost key={post.postId} post={post} />)} */}
        </main>
    );
}
