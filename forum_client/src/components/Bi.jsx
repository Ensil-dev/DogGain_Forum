import React from 'react';
import styled from 'styled-components';
import UnifiedButton from './UnifiedButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BiContainer = styled.div`
    align-content: center;
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        align-content: center;
        grid-template-columns: 2fr 1fr;
    }
    height: 60px;
`;

const UserProfileWrapper = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;

    text-align: end;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        padding-right: 20px;
    }
`;

const ImageContainer = styled.div`
    margin-top: 6px;
`;

const StyledImage = styled.img`
    padding: 3px 6px;
    width: 36px;
    height: 36px;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Added shadow */
`;

const LogoContainer = styled.div``;

const LayoutDummyContainer = styled.div`
    width: 28px;
    height: 28px;
`;

export default function Bi() {
    const loginStore = useSelector((state) => state.userInfo);
    const { loginUser } = loginStore;

    // console.log(loginUser);

    const navigate = useNavigate();
    const handleBiButtonTouched = () => {
        // navigate('/', { replace: true });
        window.location.reload();
    };

    return (
        <BiContainer>
            <LogoContainer>
                <UnifiedButton text='DogGain' $onClick={handleBiButtonTouched}></UnifiedButton>
            </LogoContainer>

            <UserProfileWrapper>
                <LayoutDummyContainer />
                <LayoutDummyContainer />
                <ImageContainer>
                    {loginUser !== null && <StyledImage src={loginUser.photoURL ? loginUser.photoURL : 'https://ensil-dev.github.io/DogGain_Forum/logo512.png'} alt='' referrerPolicy='no-referrer' />}
                </ImageContainer>
            </UserProfileWrapper>
        </BiContainer>
    );
}
