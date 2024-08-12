import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { darkmodeChange, hamburgerModalChange } from '../redux/constants/constant';
import { setContainerContentBox } from '../utils/util';
import { useEffect } from 'react';

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

const mainContainerBox = ['Navigation', 'PostControllerBar', 'PostContentsBox'];

export default function Home() {
    const dispatch = useDispatch();

    const clickInfoStore = useSelector((state) => state.clickInfo);
    // const Store = useSelector((state) => state);
    // console.log(Store)

    useEffect(() => {
        console.log('Home.jsx is rendering');
        console.log(clickInfoStore);
    }, [clickInfoStore]);

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
            {mainContainerBox.map((container) => {
                return <ContainerBox key={container}>{setContainerContentBox(container, handleClickModeButton, handleHamburgerMenuModal)}</ContainerBox>;
            })}
        </MainContainer>
    );
}
