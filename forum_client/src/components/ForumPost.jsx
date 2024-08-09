import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import UnifiedDivider from './UnifiedDivider';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { touchedPostIdSave } from '../redux/constants/constant';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    /* &:hover {
        background-color: #e0e0e0;
    } */
`;

const Tr = styled.tr`
    display: grid;
    grid-template-columns: 6fr 3fr 1fr 3fr;
    padding: 12px 10px;

    &:hover {
        background-color: #e0e0e0;
    }
`;

const Td = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    &:first-child {
        justify-content: start;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Title = styled.div`
    font-size: medium;
    font-weight: bold;
    color: gray;
    padding-right: 5px;
`;

const ForumType = styled.div`
    font-size: x-small;
`;

const Username = styled.div`
    font-size: small;
    font-weight: bold;
    opacity: 0.5;
`;

const Count = styled.div`
    font-size: small;
    opacity: 0.5;
`;

const Date = styled.div`
    font-size: x-small;
    opacity: 0.5;
`;

export default function ForumPost({ post }) {
    const [focusedElementId, setFocusedElementId] = useState(null);

    const postRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 1. post를 클릭했을 때의 post id정보를 전역 데이터(redux store)에 저장 - ForumPost 컴포넌트에서 클릭 이벤트 설정
    // 2. 이전 페이지('/')로 돌아왔을 때 redux store에 저장된 post id 정보가 있다면 해당 post를 focus - 상위 컴포넌트에서 해당되는 id를 가진 ForumPost 컴포넌트를 포커싱
    const handlePostClick = () => {
        console.log(postRef);
        setFocusedElementId(post.postId);
        console.log(post.postId)
        dispatch(touchedPostIdSave(post.postId));
        navigate('/post');
    };

    useEffect(() => {
        // Check if the focusedElementId is set and the location is '/'
        if (focusedElementId && location.pathname === '/') {
            const element = document.getElementById(focusedElementId);
            if (element) {
                element.focus();
            }
        }
    }, [focusedElementId, location.pathname]);

    // useEffect(() => {
    //     console.log(`postRef: ${postRef}`);
    //     console.log(`focusedElementId: ${focusedElementId}`);
    // }, [focusedElementId]);

    // useEffect(() => {
    //     // console.log(`postRef: ${postRef}`);
    //     console.log(postRef);
    //     // console.log(`focusedElementId: ${focusedElementId}`);
    // }, [postRef]);

    return (
        <>
            {/* <Table> */}
            <Table id={post.postId} ref={postRef} onClick={() => handlePostClick()}>
                {/* <Link to='/post' style={{}}> */}
                <tbody>
                    <Tr>
                        <Td>
                            <Title>{post.title}</Title>
                            <ForumType>{post.category.name}</ForumType>
                        </Td>
                        <Td>
                            <Username>{post.profile.nickname}</Username>
                        </Td>
                        <Td>
                            <Count>{post.comments}</Count>
                        </Td>
                        <Td>
                            <Date>{post.created}</Date>
                        </Td>
                    </Tr>
                </tbody>
                {/* </Link> */}
            </Table>
            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />
        </>
    );
}
