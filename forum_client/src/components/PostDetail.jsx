import React from 'react';
import UnifiedDivider from './UnifiedDivider';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import PostDetailHeader from './PostDetailHeader';
import styled from 'styled-components';
import { deletePost, postWritingModalChange, saveEditingPost } from '../redux/constants/constant';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 12px 0px;

    word-break: keep-all;
`;

const UserControlContainer = styled.div`
    display: grid;
    grid-template-columns: 9fr 1fr 1fr;
    align-content: center;
    width: 100%;
    padding: 12px 0;
    gap: 4px;
`;

const Nickname = styled.div`
    width: 100%;
    padding: 0 20px;
    line-height: 1.5;
    font-weight: 600;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    gap: 4px;
    border: 2px solid lightgray;
    cursor: pointer;
`;

const Icon = styled.div`
    width: 24px;
    height: 24px;
    color: lightgray;
`;

const SmallText = styled.div`
    font-size: small;
`;

export default function PostDetail() {
    const param = useParams();
    const postId = param.id;

    const postInfoStore = useSelector((state) => state.postInfo);

    const posts = postInfoStore.latestPostData;

    const filteredPost = (fetchingPostId) => {
        return posts.filter((post) => {
            return Number(post.postId) === Number(fetchingPostId);
        })[0];
    };

    const postDetailInfo = filteredPost(postId);

    console.log(postDetailInfo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickDeleteButton = () => {
        let result = window.confirm('정말로 이 게시글을 삭제 하시겠습니까?');
        if (result) {
            dispatch(deletePost(postId));

            // 게시글 DELETE 삭제
            deleteDoc(doc(db, 'posts', postDetailInfo.id));

            navigate('/', { replace: true });
            alert('삭제 완료했습니다!');
        } else {
        }
    };
    const handleClickEditButton = () => {
        let result = window.confirm('이 게시글을 수정 하시겠습니까?');
        if (result) {
            navigate('/', { replace: true });

            dispatch(saveEditingPost(postDetailInfo));

            dispatch(postWritingModalChange());

            alert('게시글 수정을 시작합니다!');
        }
    };

    return (
        <main>
            <PostDetailHeader title={postDetailInfo.title} category={postDetailInfo.category.name} />

            <Content>
                <p style={{ padding: '0px 20px 0px 20px', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{postDetailInfo.content}</p>
            </Content>

            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />

            <UserControlContainer>
                <Nickname>{postDetailInfo.profile.nickname}</Nickname>
                <Button onClick={handleClickEditButton}>
                    <Icon as={FaEdit} />
                    <SmallText>수정</SmallText>
                </Button>
                <Button onClick={handleClickDeleteButton} style={{ marginRight: '20px' }}>
                    <Icon as={MdDeleteForever} />
                    <SmallText>삭제</SmallText>
                </Button>
            </UserControlContainer>

            <UnifiedDivider $padding='0px 0px' $border='4px solid gray' $opacity='0.15' />
        </main>
    );
}
