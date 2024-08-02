import styled from 'styled-components';
import UnifyedButton from './components/UnifyedButton';
// import UnifiedImage from './components/UnifyedImage';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import ForumContent from './components/ForumContent';
import TopicListHeader from './components/TopicListHeader';

const ForumContainer = styled.div`
    max-width: 550px;
    min-width: 330px;
    height: 100vh;

    margin: 0 auto;
    overflow: scroll;

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
    const topic = {
        id: '18825',
        rowId: 'ember719',
        category: '%EC%9E%90%EC%9C%A0%ED%8F%AC%EB%9F%BC',
        isLastViewed: 'false',
        profileLink:
            '/forum/t/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%EB%B2%A4%ED%8B%B0-%EA%B0%80%EA%B2%A9-6%EC%B2%9C-%EC%9B%90-%ED%9B%8C%EC%A9%8D%E2%80%A6%EB%82%B4%EB%8B%AC-2%EC%9D%BC%EB%B6%80%ED%84%B0-%EA%B0%80%EA%B2%A9-%EC%9D%B8%EC%83%81/18825/19',
        poster: 'zzzm5',
        avatarSrc: '/forum/letter_avatar_proxy/v4/letter/z/db5fbb/60.png',
        avatarTitle: '커피전문가',
        topicLink:
            '/forum/t/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%EB%B2%A4%ED%8B%B0-%EA%B0%80%EA%B2%A9-6%EC%B2%9C-%EC%9B%90-%ED%9B%8C%EC%A9%8D%E2%80%A6%EB%82%B4%EB%8B%AC-2%EC%9D%BC%EB%B6%80%ED%84%B0-%EA%B0%80%EA%B2%A9-%EC%9D%B8%EC%83%81/18825/17',
        title: '스타벅스 벤티 가격 6천 원 훌쩍…내달 2일부터 가격 인상',
        replyCount: '16',
        categoryColor: '#0E76BD',
        categoryTextColor: '#FFFFFF',
        categoryLink: '/forum/c/%EC%9E%90%EC%9C%A0%ED%8F%AC%EB%9F%BC/5',
        categoryId: '5',
        categoryTitle: '우리 모두 자유롭게 이야기해요',
        categoryName: '자유포럼 💬',
        created: '2024 7월 31 오후 3:21',
        lastActivity: '2024 8월 1 오후 7:06',
        lastActivityLink:
            '/forum/t/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%EB%B2%A4%ED%8B%B0-%EA%B0%80%EA%B2%A9-6%EC%B2%9C-%EC%9B%90-%ED%9B%8C%EC%A9%8D%E2%80%A6%EB%82%B4%EB%8B%AC-2%EC%9D%BC%EB%B6%80%ED%84%B0-%EA%B0%80%EA%B2%A9-%EC%9D%B8%EC%83%81/18825/19',
        lastActivityTime: '1722506780249',
        relativeTime: '14시간',
    };

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
                    <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px', color: 'gray' }}>
                        <div style={{ fontWeight: 'bold' }}>제목</div>
                        <div style={{ textAlign: 'center', fontSize: 'small', fontWeight: 'bold' }}>게시자</div>
                        <div style={{ textAlign: 'center', fontSize: 'small', fontWeight: 'bold' }}>댓글</div>
                        <div style={{ textAlign: 'center', fontSize: 'small', fontWeight: 'bold' }}>작성일</div>
                    </div>

                    <div style={{ padding: '12px 10px' }}>
                        <hr style={{ border: '2px solid gray', opacity: 0.15 }} />
                    </div>

                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 1fr 2fr', padding: '12px 10px' }}>
                            <div>
                                <div style={{ fontSize: 'medium', fontWeight: 'bold' }}>무료 백신 추천하실 만한 것 있나요?</div>
                                <div style={{ fontSize: 'x-small' }}>🟠 자유포럼🗽</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>벨루가벨루가</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'small' }}>3</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ textAlign: 'center', fontSize: 'x-small' }}>24/08/02/15:00</div>
                            </div>
                        </div>
                        <div style={{ padding: '12px 10px' }}>
                            <hr style={{ border: '1px solid gray', opacity: 0.15 }} />
                        </div>
                    </div>
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
