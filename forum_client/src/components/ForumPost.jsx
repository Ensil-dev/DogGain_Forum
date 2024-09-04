import styled from 'styled-components';
import UnifiedDivider from './UnifiedDivider';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { scrollLocationSave } from '../redux/constants/constant';
import { getRootScrollTop } from '../utils/util';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    cursor: pointer;
`;

const Tr = styled.tr`
    display: grid;
    grid-template-columns: 7fr 4fr 2fr 3fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 10fr 3fr 2fr 3fr;
    }

    padding: 12px 10px;
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
    color: black;
    opacity: 0.75;
    padding-right: 5px;
`;

const ForumType = styled.div`
    font-size: x-small;
`;

const Username = styled.div`
    font-size: small;
    font-weight: bold;
    opacity: 0.5;
    padding-left: 5px;
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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 1. post를 클릭했을 때의 post id정보를 전역 데이터(redux store)에 저장 - ForumPost 컴포넌트에서 클릭 이벤트 설정
    // 2. 이전 페이지('/')로 돌아왔을 때 redux store에 저장된 post id 정보가 있다면 해당 post를 focus - 상위 컴포넌트에서 해당되는 id를 가진 ForumPost 컴포넌트를 포커싱
    const handlePostClick = (postId) => {
        dispatch(scrollLocationSave(getRootScrollTop()));
        navigate(`/post/${postId}`);
    };

    return (
        <>
            <Table id={post.postId} onClick={() => handlePostClick(post.postId)}>
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
            </Table>
            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />
        </>
    );
}
