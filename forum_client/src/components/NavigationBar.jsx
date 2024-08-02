import React from 'react';
import styled from 'styled-components';
import UnifyedButton from './UnifyedButton';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { getNavigationBoxFontSize } from '../utils/util';

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

const MenueOptionBox = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    /* padding: 0px 5px; */
    /* margin-left: 30px; */
    /* border: 3px solid gray; */
    font-size: ${(props) => props.fontSize};
`;

export default function NavigationBar({ isDarkMode, handleClickModeButton }) {
    return (
        <header>
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
        </header>
    );
}
