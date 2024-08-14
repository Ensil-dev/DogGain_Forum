import styled, { keyframes } from 'styled-components';
import UnifiedButton from './UnifiedButton';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { getNavigationBoxFontSize } from '../utils/util';
import { HamburgerMenu } from './HamburgerMenu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SubNavigationContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 2fr;
    height: 90%;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 3fr 2fr;
    }

    /* border: 5px solid black; */
`;

const HomeLogoBox = styled.div`
    width: 100%;
    font-size: ${(props) => props.fontSize};

    /* border: 3px solid gray; */
`;

const MenuOptionBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    /* padding: 0px 5px; */
    /* margin-left: 30px; */
    /* border: 3px solid gray; */
    font-size: ${(props) => props.fontSize};
`;

export const ModalView = styled.div.attrs((props) => ({
    role: 'dialog',
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 200px;
    height: 100px;
    border-radius: 1rem;
    background-color: white;
    > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DarkModeIcon = styled(MdDarkMode)`
    width: 28px;
    height: 28px;
    color: lightgray;
    cursor: pointer;
    /* animation: ${fadeIn} 1.5s ease-in-out; */
`;

const LightModeIcon = styled(MdLightMode)`
    width: 28px;
    height: 28px;
    color: white;
    background: black;
    cursor: pointer;
    animation: ${fadeIn} 1.5s ease-in-out;
`;

export default function NavigationBar({ handleClickModeButton, handleHamburgerMenuModal }) {
    const modeStore = useSelector((state) => state.mode);
    const navigate = useNavigate();

    return (
        <header>
            <SubNavigationContainer>
                <HomeLogoBox fontSize={getNavigationBoxFontSize('HomeLogoBox')}>
                    <UnifiedButton text='Forum' $onClick={() => navigate('/')}></UnifiedButton>
                </HomeLogoBox>
                <MenuOptionBox fontSize={getNavigationBoxFontSize('MenuOptionBox')}>
                    <UnifiedButton text='로그인' $marginLeft='0px' $marginRight='0px' $fontSize='medium' $opacity='0.65' $backgroundColor='#006699' $color='white' $radius='8px' $padding='4px 8px'></UnifiedButton>

                    {modeStore.isDarkMode === false ? <DarkModeIcon onClick={() => handleClickModeButton()} /> : <LightModeIcon onClick={() => handleClickModeButton()} />}

                    <FaSearch style={{ width: '24px', height: '24px', color: 'lightgray', cursor: 'pointer' }} onClick={() => handleClickModeButton()} />

                    <HamburgerMenu handleHamburgerMenuModal={handleHamburgerMenuModal} />
                </MenuOptionBox>
            </SubNavigationContainer>
        </header>
    );
}
