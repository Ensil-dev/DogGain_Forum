import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { darkmodeChange, hamburgerModalChange } from '../redux/constants/constant';
import { setContainerContentBox } from '../utils/util';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;

    /* border: 3px solid gray; */
`;

const ContainerBox = styled.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.

    height: 40px;
`;

const mainContainerBox = ['Navigation', 'PostDetail'];

export default function Post() {

    const dispatch = useDispatch();

    const handleClickModeButton = () => {
        // dispatch의 인자로 Action creator 사용
        dispatch(darkmodeChange());
    };

    const handleHamburgerMenuModal = () => {
        dispatch(hamburgerModalChange());
    };

    return (
        <MainContainer>
            {mainContainerBox.map((container) => {
                return <ContainerBox key={container}>{setContainerContentBox(container, handleClickModeButton, handleHamburgerMenuModal)}</ContainerBox>;
            })}
        </MainContainer>
    );
}
