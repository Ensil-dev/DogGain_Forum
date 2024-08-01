import styled from 'styled-components';
import UnifyedButton from './components/UnifyedButton';

const ForumContainer = styled.div`
    max-width: 550px;
    min-width: 330px;
    height: 100vh;

    margin: 0 auto;

    border: 3px solid lightgray;
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

    width: full;
    height: 50px;

    /* border: 5px solid ${(props) => props.$bordercolor}; */

    padding: 5px;
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
    height: 90%;
    /* border: 5px solid black; */
`;

const HomeLogoBox = styled.div`
    width: 100%;
    font-size: ${(props) => props.fontSize};

    /* border: 3px solid gray; */
`;

const MenueOptionBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* margin-left: 30px; */
    gap: 5px;
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

const setContainerContentBox = (container) => {
    switch (container) {
        case 'Navigation':
            return (
                <>
                    <SubNavigationContainer>
                        <HomeLogoBox fontSize={getNavigationBoxFontSize('HomeLogoBox')}>
                            <UnifyedButton text='Forum'></UnifyedButton>
                        </HomeLogoBox>
                        <MenueOptionBox fontSize={getNavigationBoxFontSize('MenueOptionBox')}>
                            <UnifyedButton text='로그인'></UnifyedButton>
                            <UnifyedButton text='모드'></UnifyedButton>
                            <UnifyedButton text='검색'></UnifyedButton>
                            <UnifyedButton text='메뉴'></UnifyedButton>
                        </MenueOptionBox>
                    </SubNavigationContainer>
                </>
            );
        case 'Filtering':
            return (
                <>
                    <FilteringContainer>
                        <div className='custom-select'>
                            <select id='options' style={{ textAlign: 'center', fontSize: 'larger', padding: '4px 8px', borderRadius: '8px' }}>
                                <option value='최신'>최신</option>
                                <option value='카테고리'>카테고리</option>
                                <option value='주요'>주요</option>
                            </select>
                        </div>
                        <SelectFilteringContainer fontSize={getNavigationBoxFontSize('writeBox')}>
                            <UnifyedButton text='✚ 글쓰기' $backgroundColor='#E9E9E9' $padding='6px 12px' $radius='6px' $fontSize='18px' $fontWeight='larger'></UnifyedButton>
                        </SelectFilteringContainer>
                    </FilteringContainer>
                </>
            );
        case 'Post':
            return 'blue';
        default:
            return 'black';
    }
};

function App() {
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
                                {setContainerContentBox(container)}
                            </ContainerBox>
                        );
                    })}
                </MainContainer>
            </ForumContainer>
        </>
    );
}

export default App;
