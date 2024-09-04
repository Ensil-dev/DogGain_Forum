import styled, { keyframes } from 'styled-components';
import UnifiedButton from './UnifiedButton';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { getNavigationBoxFontSize } from '../utils/util';
// import { HamburgerMenu } from './HamburgerMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { checkGoogleLogin, handleGoogleLogout } from '../api/login';
import { saveLoginUser } from '../redux/constants/constant';

const SubNavigationContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    height: 90%;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 2fr 1fr;
    }
`;

const HomeLogoBox = styled.div`
    width: 100%;
    font-size: ${(props) => props.fontSize};
`;

const MenuOptionBox = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;

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
    const loginStore = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();

    console.log(loginStore);
    // console.log(loginStore.loginUser)

    const navigate = useNavigate();

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
            .then((data) => {
                console.log(data.user); // console로 들어온 데이터 표시
                dispatch(saveLoginUser(data.user));
                // setUserData(data.user); // user data 설정
                checkGoogleLogin();
            })
            .catch((err) => {
                console.log(err);
                alert('로그인이 동작하지 않습니다.');
            });
    }

    return (
        <header>
            <SubNavigationContainer>
                <HomeLogoBox fontSize={getNavigationBoxFontSize('HomeLogoBox')}>
                    <UnifiedButton text='Forum' $onClick={() => navigate('/')}></UnifiedButton>
                </HomeLogoBox>
                <MenuOptionBox fontSize={getNavigationBoxFontSize('MenuOptionBox')}>
                    {modeStore.isDarkMode === false ? <DarkModeIcon onClick={() => handleClickModeButton()} /> : <LightModeIcon onClick={() => handleClickModeButton()} />}

                    <FaSearch style={{ width: '24px', height: '24px', color: 'lightgray', cursor: 'pointer' }} onClick={() => handleClickModeButton()} />

                    {loginStore?.loginUser === null ? (
                        <UnifiedButton
                            $onClick={handleGoogleLogin}
                            text='로그인'
                            $marginLeft='0px'
                            $marginRight='0px'
                            $fontSize='medium'
                            $opacity='0.65'
                            $backgroundColor='#006699'
                            $color='white'
                            $radius='8px'
                            $padding='4px 8px'
                        ></UnifiedButton>
                    ) : (
                        <UnifiedButton
                            $onClick={() => handleGoogleLogout(loginStore.loginUser, dispatch)}
                            text='로그아웃'
                            $marginLeft='0px'
                            $marginRight='0px'
                            $fontSize='medium'
                            $opacity='0.5'
                            $backgroundColor='#006699'
                            $color='white'
                            $radius='8px'
                            $padding='4px 8px'
                        ></UnifiedButton>
                    )}

                    {/* <HamburgerMenu handleHamburgerMenuModal={handleHamburgerMenuModal} /> */}
                </MenuOptionBox>
            </SubNavigationContainer>
        </header>
    );
}
