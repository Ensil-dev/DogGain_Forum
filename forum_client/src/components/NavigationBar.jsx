import styled from 'styled-components';
import UnifiedButton from './UnifiedButton';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { getNavigationBoxFontSize } from '../utils/util';
import { HamburgerMenu } from './HamburgerMenu';
import { useDispatch, useSelector } from 'react-redux';

const SubNavigationContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 2fr;
    height: 90%;
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

export default function NavigationBar({ isDarkMode, handleClickModeButton, isModalOpened, handleHamburgerMenuModal }) {

    const modalStore = useSelector(state => state)
    console.log(modalStore.mode.isDarkMode)

    const modeDispatch = useDispatch();

    return (
        <header>
            <SubNavigationContainer>
                <HomeLogoBox fontSize={getNavigationBoxFontSize('HomeLogoBox')}>
                    <UnifiedButton text='Forum'></UnifiedButton>
                </HomeLogoBox>
                <MenuOptionBox fontSize={getNavigationBoxFontSize('MenuOptionBox')}>
                    <UnifiedButton text='로그인' $marginLeft='0px' $marginRight='0px' $fontSize='medium' $opacity='0.65' $backgroundColor='#006699' $color='white' $radius='8px' $padding='4px 8px'></UnifiedButton>

                    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleClickModeButton()}>
                        {modalStore.mode.isDarkMode === false ? (
                            <MdDarkMode style={{ width: '28px', height: '28px', color: 'lightgray' }} />
                        ) : (
                            <MdLightMode style={{ width: '28px', height: '28px', color: 'white', background: 'black' }} />
                        )}
                    </button>

                    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleClickModeButton()}>
                        <FaSearch style={{ width: '24px', height: '24px', color: 'lightgray' }} />
                    </button>


                    <HamburgerMenu />


                </MenuOptionBox>
            </SubNavigationContainer>
        </header>
    );
}
