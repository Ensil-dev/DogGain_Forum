import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import UnifiedButton from '../../../shared/ui/UnifiedButton';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileMenu from '../../../features/profile/ui/ProfileMenu';
import { createProfileImage } from '../../../shared/lib/utils/profileImage';
import type { RootState } from '../../../app/model/store';
import { searchClear } from '../../../app/model/search/search';

const BiContainer = styled.div`
    align-content: center;
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 25px;
    background-color: ${(props) => props.theme.biContainerBackground};
    color: ${(props) => props.theme.biContainerText};

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
    width: 36px;
    height: 36px;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Added shadow */
    cursor: pointer;
`;

const LogoContainer = styled.div``;

const LayoutDummyContainer = styled.div`
    width: 28px;
    height: 28px;
`;

export default function Bi() {
    const loginStore = useSelector((state: RootState) => state.userInfo);
    const { loginUser } = loginStore;

    const [showModal, setShowModal] = useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();

    // console.log(loginUser);

    const navigate = useNavigate();
    const handleBiButtonTouched = () => {
        dispatch(searchClear());
        navigate('/', { replace: true });
    };

    const handleProfileClick = () => {
        if (loginUser) {
            setShowModal(true);
        }
    };

    return (
        <BiContainer>
            <LogoContainer>
                <UnifiedButton
                    text='DogGain'
                    $backgroundColor={theme.biButtonBgColor}
                    $color={theme.biButtonTextColor}
                    $onClick={handleBiButtonTouched}
                ></UnifiedButton>
            </LogoContainer>

            <UserProfileWrapper>
                <LayoutDummyContainer />
                <LayoutDummyContainer />
                <ImageContainer>
                    {loginUser !== null && (
                        <StyledImage
                            src={
                                loginUser.photoURL
                                    ? loginUser.photoURL
                                    : createProfileImage(
                                          loginUser.displayName?.charAt(0) || ' ',
                                          '#888888'
                                      )
                            }
                            alt=''
                            referrerPolicy='no-referrer'
                            onClick={handleProfileClick}
                        />
                    )}
                </ImageContainer>
            </UserProfileWrapper>
            {showModal && <ProfileMenu onClose={() => setShowModal(false)} />}
        </BiContainer>
    );
}
