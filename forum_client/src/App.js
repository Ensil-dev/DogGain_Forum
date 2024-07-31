import styled from 'styled-components';

const StContainer = styled.div`
    display: flex;
`;

const StBox = styled.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
    width: 100px;
    height: 100px;
    border: 5px solid ${(props) => props.borderColor};
    padding: 10px;
`;

const boxList = ['orange', 'green', 'blue'];

const getBoxName = (color) => {
    switch (color) {
        case 'orange':
            return '오렌지 박스';
        case 'green':
            return '초록 박스';
        case 'blue':
            return '파랑 박스';
        default:
            return '검정 박스';
    }
};

function App() {
    return (
        <>
            <StContainer>
                {boxList.map((box) => {
                    return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
                })}
            </StContainer>
        </>
    );
}

export default App;
