import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import PostControllerBar from './PostControllerBar';
import PostContentsBox from './PostContentsBox';
import { useDispatch } from 'react-redux';
import { darkmodeChange, hamburgerModalChange } from '../redux/constants/constant';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: full;
    gap: 10px;

    /* border: 3px solid gray; */
`;

// const topic = {
//     id: '18825',
//     rowId: 'ember719',
//     category: '%EC%9E%90%EC%9C%A0%ED%8F%AC%EB%9F%BC',
//     isLastViewed: 'false',
//     profileLink:
//         '/forum/t/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%EB%B2%A4%ED%8B%B0-%EA%B0%80%EA%B2%A9-6%EC%B2%9C-%EC%9B%90-%ED%9B%8C%EC%A9%8D%E2%80%A6%EB%82%B4%EB%8B%AC-2%EC%9D%BC%EB%B6%80%ED%84%B0-%EA%B0%80%EA%B2%A9-%EC%9D%B8%EC%83%81/18825/19',
//     avatarSrc: '/forum/letter_avatar_proxy/v4/letter/z/db5fbb/60.png',
//     avatarTitle: '커피전문가',
//     topicLink:
//         '/forum/t/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%EB%B2%A4%ED%8B%B0-%EA%B0%80%EA%B2%A9-6%EC%B2%9C-%EC%9B%90-%ED%9B%8C%EC%A9%8D%E2%80%A6%EB%82%B4%EB%8B%AC-2%EC%9D%BC%EB%B6%80%ED%84%B0-%EA%B0%80%EA%B2%A9-%EC%9D%B8%EC%83%81/18825/17',
//     title: '스타벅스 벤티 가격 6천 원 훌쩍…내달 2일부터 가격 인상',
//     replyCount: '16',
//     categoryColor: '#0E76BD',
//     categoryTextColor: '#FFFFFF',
//     categoryLink: '/forum/c/%EC%9E%90%EC%9C%A0%ED%8F%AC%EB%9F%BC/5',
//     categoryId: '5',
//     categoryTitle: '우리 모두 자유롭게 이야기해요',
//     categoryName: '자유포럼 💬',
//     created: '2024 7월 31 오후 3:21',
//     lastActivity: '2024 8월 1 오후 7:06',
//     lastActivityLink:
//         '/forum/t/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%EB%B2%A4%ED%8B%B0-%EA%B0%80%EA%B2%A9-6%EC%B2%9C-%EC%9B%90-%ED%9B%8C%EC%A9%8D%E2%80%A6%EB%82%B4%EB%8B%AC-2%EC%9D%BC%EB%B6%80%ED%84%B0-%EA%B0%80%EA%B2%A9-%EC%9D%B8%EC%83%81/18825/19',
//     lastActivityTime: '1722506780249',
//     relativeTime: '14시간',
// };

export default function ForumMain() {
    const dispatch = useDispatch();

    // const ReduxStore = useSelector(state => state.module)
    const handleClickModeButton = () => {
        // dispatch의 인자로 Action creator 사용
        dispatch(darkmodeChange());
        // console.log(`modeStore.isDarkMode: ${modeStore.isDarkMode}`);
    };

    const handleHamburgerMenuModal = () => {
        dispatch(hamburgerModalChange());
    };

    return (
        <MainContainer>
            <NavigationBar handleClickModeButton={handleClickModeButton} handleHamburgerMenuModal={handleHamburgerMenuModal} />
            <PostControllerBar />
            <PostContentsBox />
        </MainContainer>
    );
}
