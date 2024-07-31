import styled from 'styled-components';
import UnifyedButton from './components/UnifyedButton';

const ForumContainer = styled.div`
    /* width: full; */

    height: 100vh;

    max-width: 550px;
    min-width: 330px;
    border: 5px solid black;
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
    border: 3px solid gray;
`;

const StBox = styled.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
    width: 100px;
    height: 100px;

    border: 5px solid ${(props) => props.$bordercolor};

    padding: 10px;
`;

const boxList = ['orange', 'green', 'blue', 'tomato'];

const getBoxName = (color) => {
    switch (color) {
        case 'orange':
            return '오렌지 박스';
        case 'green':
            return '초록 박스';
        case 'blue':
            return '파랑 박스';
        case 'tomato':
            return 'tomato 박스';
        default:
            return '검정 박스';
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
                    {boxList.map((box) => {
                        return (
                            <StBox key={box} $bordercolor={box}>
                                {getBoxName(box)}
                            </StBox>
                        );
                    })}
                </MainContainer>
            </ForumContainer>
        </>
    );
}

export default App;
