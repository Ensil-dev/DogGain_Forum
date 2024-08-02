import styled from 'styled-components';
import UnifyedButton from './components/UnifyedButton';
// import UnifiedImage from './components/UnifyedImage';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import ForumContent from './components/ForumContent';

const ForumContainer = styled.div`
    max-width: 550px;
    min-width: 330px;
    height: 100vh;

    margin: 0 auto;

    border: 1px solid lightgray;
`;

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    height: 40px;
    gap: 10px;

    /* border: 3px solid gray; */
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: full;
    gap: 10px;
    /* border: 3px solid gray; */
`;

const ContainerBox = styled.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.

    /* width: full; */
    height: 40px;

    /* border: 5px solid ${(props) => props.$bordercolor}; */

    padding: '5px';
`;

const SubNavigationContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 2fr;
    height: 90%;
    /* border: 5px solid black; */
`;

const FilteringContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    /* border: 5px solid black; */
`;

const HomeLogoBox = styled.div`
    width: 100%;
    font-size: ${(props) => props.fontSize};

    /* border: 3px solid gray; */
`;

const MenueOptionBox = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    /* margin-left: 30px; */
    gap: 20px;
    /* border: 3px solid gray; */
    font-size: ${(props) => props.fontSize};
`;

const mainContainerBoxs = ['Navigation', 'Filtering', 'Post'];

// const navigationBoxs = [SubNavigationContainer, HomeLogoBox, MenueOptionBox];

const getContainerBoxColor = (container) => {
    switch (container) {
        case 'Navigation':
            return 'orange';
        case 'Filtering':
            return 'green';
        case 'Post':
            return 'blue';
        default:
            return 'black';
    }
};

const getNavigationBoxFontSize = (container) => {
    switch (container) {
        case 'HomeLogoBox':
            return 'xx-large';
        case 'MenueOptionBox':
            return 'medium';
        case 'writeBox':
            return 'medium';
        default:
            return 'medium';
    }
};

const SelectFilteringContainer = styled.div`
    font-size: ${(props) => props.fontSize};
    text-align: end;
    margin-right: 10px;
`;

const setContainerContentBox = (container, isDarkMode, handleClickModeButton) => {
    const topics = [
        {
            id: '18832',
            rowId: 'ember26',
            category: '%EC%9E%90%EC%9C%A0%ED%8F%AC%EB%9F%BC',
            additionalClasses: 'unseen-topic last-visit',
            topicLink: '/forum/t/%EB%AC%B4%EB%A3%8C-%EB%B0%B1%EC%8B%A0-%EC%B6%94%EC%B2%9C%ED%95%98%EC%8B%A4-%EB%A7%8C%ED%95%9C-%EA%B2%83-%EC%9E%88%EB%82%98%EC%9A%94/18832',
            title: '무료 백신 추천하실 만한 것 있나요?',
            categoryColor: '#0E76BD',
            categoryTextColor: '#FFFFFF',
            categoryLink: '/forum/c/%EC%9E%90%EC%9C%A0%ED%8F%AC%EB%9F%BC/5',
            categoryId: '5',
            categoryTitle: '우리 모두 자유롭게 이야기해요',
            categoryName: '자유포럼 💬',
            posters: [
                { userCard: 'kd1je', profileLink: '/forum/u/kd1je', avatarSrc: '/forum/letter_avatar_proxy/v4/letter/k/a698b9/60.png', title: '메탈릭그레이 - 원본 게시자', isLatest: false },
                { userCard: 'y3m1z', profileLink: '/forum/u/y3m1z', avatarSrc: '/forum/user_avatar/www.algumon.com/y3m1z/60/5853_2.png', title: '자몽허니블랙티 - 자주 게시하는 사용자', isLatest: false },
                { userCard: 'z5ry5', profileLink: '/forum/u/z5ry5', avatarSrc: '/forum/letter_avatar_proxy/v4/letter/z/58956e/60.png', title: '어마어마한_게사니_z5ry5 - 자주 게시하는 사용자', isLatest: false },
                { userCard: 'z5ex5', profileLink: '/forum/u/z5ex5', avatarSrc: '/forum/letter_avatar_proxy/v4/letter/z/b2d939/60.png', title: '대박난_거북 - 자주 게시하는 사용자', isLatest: false },
                { userCard: '62n3m', profileLink: '/forum/u/62n3m', avatarSrc: '/forum/letter_avatar_proxy/v4/letter/6/f14d63/60.png', title: '가소로운 기니피그 - 최근 게시자', isLatest: true },
            ],
            replyCount: '12',
            views: '1.4천',
            created: '2024 7월 31 오후 10:54',
            lastActivity: '2024 8월 1 오후 6:09',
            lastActivityLink: '/forum/t/%EB%AC%B4%EB%A3%8C-%EB%B0%B1%EC%8B%A0-%EC%B6%94%EC%B2%9C%ED%95%98%EC%8B%A4-%EB%A7%8C%ED%95%9C-%EA%B2%83-%EC%9E%88%EB%82%98%EC%9A%94/18832/14',
            lastActivityTime: '1722503366094',
            relativeTime: '15시간',
        },
    ];

    switch (container) {
        case 'Navigation':
            return (
                <>
                    <SubNavigationContainer>
                        <HomeLogoBox fontSize={getNavigationBoxFontSize('HomeLogoBox')}>
                            <UnifyedButton text='Forum'></UnifyedButton>
                        </HomeLogoBox>
                        <MenueOptionBox fontSize={getNavigationBoxFontSize('MenueOptionBox')}>
                            <UnifyedButton text='로그인' $marginLeft='0px' $marginRight='0px' $fontSize='medium' $opacity='0.65' $backgroundColor='#006699' $color='white' $radius='8px' $padding='4px 8px'></UnifyedButton>

                            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleClickModeButton()}>
                                {isDarkMode === false ? (
                                    <MdDarkMode style={{ width: '28px', height: '28px', color: 'lightgray' }} />
                                ) : (
                                    <MdLightMode style={{ width: '28px', height: '28px', color: 'white', background: 'black' }} />
                                )}
                            </button>

                            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleClickModeButton()}>
                                <FaSearch style={{ width: '24px', height: '24px', color: 'lightgray' }} />
                            </button>

                            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleClickModeButton()}>
                                <GiHamburgerMenu style={{ width: '24px', height: '24px', color: 'lightgray', marginRight: '5px' }} />
                            </button>
                        </MenueOptionBox>
                    </SubNavigationContainer>
                </>
            );
        case 'Filtering':
            return (
                <>
                    <FilteringContainer>
                        <div className='custom-select'>
                            <select id='options' style={{ textAlign: 'center', fontSize: 'larger', padding: '4px 8px', marginLeft: '5px', borderRadius: '8px' }}>
                                <option value='최신'>최신</option>
                                <option value='카테고리'>카테고리</option>
                                <option value='주요'>주요</option>
                            </select>
                        </div>
                        <SelectFilteringContainer fontSize={getNavigationBoxFontSize('writeBox')}>
                            <UnifyedButton text='✚ 글쓰기' $backgroundColor='#E9E9E9' $padding='6px 12px' $radius='6px' $fontSize='18px' $fontWeight='larger' $color='orange'></UnifyedButton>
                        </SelectFilteringContainer>
                    </FilteringContainer>
                </>
            );
        case 'Post':
            return (
                <>
                    <hr style={{ border: '1px solid gray', opacity: 0.2, paddingRight: '10px' }} />
                    <table>
                        <tbody>
                            {topics.map((topic) => (
                                <ForumContent key={topic.id} topic={topic} />
                            ))}
                        </tbody>
                    </table>
                </>
            );
        default:
            return 'black';
    }
};

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClickModeButton = () => {
        setIsDarkMode((mode) => !mode);
        console.log('isDarkMode?: ', isDarkMode);
    };

    return (
        <>
            <ForumContainer>
                <TopContainer>
                    <UnifyedButton text='DogGain'></UnifyedButton>
                </TopContainer>
                <MainContainer>
                    {mainContainerBoxs.map((container) => {
                        return (
                            <ContainerBox key={container} $bordercolor={getContainerBoxColor(container)}>
                                {setContainerContentBox(container, isDarkMode, handleClickModeButton)}
                            </ContainerBox>
                        );
                    })}
                </MainContainer>
            </ForumContainer>
        </>
    );
}

export default App;
