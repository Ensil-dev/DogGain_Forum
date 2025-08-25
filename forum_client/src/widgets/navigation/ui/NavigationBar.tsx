import styled, { keyframes, css, useTheme } from 'styled-components';
import UnifiedButton from '../../../shared/ui/UnifiedButton';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { searchModalChange } from '../../../app/model/ui/modal';
import { getNavigationBoxFontSize } from '../../../shared/lib/utils/util';
import AlertModal from '../../../shared/ui/AlertModal';
import { useState } from 'react';
import { darkmodeChange } from '../../../app/model/ui/mode';
import { toast } from 'react-toastify';
// import { HamburgerMenu } from './HamburgerMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../shared/api/firebase';
import { checkGoogleLogin, handleGoogleLogout } from '../../../shared/api/login';
import { saveLoginUser } from '../../../app/model/user/userInfo';
import type { RootState, AppDispatch } from '../../../app/model/store';

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
  background-color: ${(props) => props.theme.navTitleContainerBackground};
  color: ${(props) => props.theme.navTitleContainerText};
`;

const MenuOptionBox = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;

  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.theme.loginContainerBackground};
  color: ${(props) => props.theme.loginContainerText};
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const DarkModeIcon = styled(MdDarkMode)<{ $animate?: boolean }>`
  width: 28px;
  height: 28px;
  color: ${(props) => props.theme.darkModeIconColor};
  cursor: pointer;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${rotate} 0.3s;
    `};
`;

const LightModeIcon = styled(MdLightMode)<{ $animate?: boolean }>`
  width: 28px;
  height: 28px;
  color: ${(props) => props.theme.darkModeIconColor};
  cursor: pointer;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${rotate} 0.3s;
    `};
`;

const NavigationButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  cursor: pointer;
`;

interface NavigationBarProps {
  handleHamburgerMenuModal: () => void;
}

export default function NavigationBar({ handleHamburgerMenuModal }: NavigationBarProps) {
  const modeStore = useSelector((state: RootState) => state.mode);
  const loginStore = useSelector((state: RootState) => state.userInfo);
  const dispatch = useDispatch<AppDispatch>();
  const [modalMessage, setModalMessage] = useState('');
  const [iconAnimate, setIconAnimate] = useState(false);
  const theme = useTheme();

  const toggleDarkMode = () => {
    setIconAnimate(true);
    dispatch(darkmodeChange());
    if (modeStore.isDarkMode) {
      toast.info('라이트 모드로 전환되었습니다');
    } else {
      toast.info('다크 모드로 전환되었습니다');
    }
  };

  // console.log(loginStore);
  // console.log(loginStore.loginUser)

  const navigate = useNavigate();

  function handleGoogleLogin() {
    // 카카오톡 인앱 브라우저에서는 구글 로그인 팝업이 차단되기 때문에
    // 외부 브라우저로 이동하여 로그인하도록 처리한다.
    const isInKakaoInAppBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return userAgent.includes('kakao');
    };

    if (isInKakaoInAppBrowser()) {
      const cleanUrl = window.location.href;
      window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(cleanUrl)}`;
      return;
    }

    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        // console.log(data.user); // console로 들어온 데이터 표시
        dispatch(saveLoginUser(data.user));
        // setUserData(data.user); // user data 설정
        checkGoogleLogin();
      })
      .catch((err) => {
        if (err.code === 'auth/popup-blocked') {
          setModalMessage(
            '카카오톡 인앱브라우저에서는 로그인 팝업이 차단될 수 있습니다. 외부 브라우저에서 다시 시도해주세요.'
          );
          if (isInKakaoInAppBrowser()) {
            const cleanUrl = window.location.href;
            window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(
              cleanUrl
            )}`;
          }
        } else {
          console.log(err);
        }
      });
  }

  return (
    <>
      <header>
        <SubNavigationContainer>
          <HomeLogoBox fontSize={getNavigationBoxFontSize('HomeLogoBox')}>
            <UnifiedButton
              text="Forum"
              $backgroundColor={theme.navButtonBgColor}
              $color={theme.navButtonTextColor}
              $onClick={() => navigate('/')}
            ></UnifiedButton>
          </HomeLogoBox>
          <MenuOptionBox fontSize={getNavigationBoxFontSize('MenuOptionBox')}>
            <NavigationButton>
              {modeStore.isDarkMode === false ? (
                <DarkModeIcon
                  onClick={toggleDarkMode}
                  $animate={iconAnimate}
                  onAnimationEnd={() => setIconAnimate(false)}
                />
              ) : (
                <LightModeIcon
                  onClick={toggleDarkMode}
                  $animate={iconAnimate}
                  onAnimationEnd={() => setIconAnimate(false)}
                />
              )}
            </NavigationButton>

            <NavigationButton>
              <FaSearch
                style={{ width: '24px', height: '24px', color: 'lightgray', cursor: 'pointer' }}
                onClick={() => dispatch(searchModalChange())}
              />
            </NavigationButton>

            {loginStore?.loginUser === null ? (
              <UnifiedButton
                $onClick={handleGoogleLogin}
                text="로그인"
                $marginLeft="0px"
                $marginRight="0px"
                $fontSize="medium"
                $opacity={modeStore.isDarkMode ? '1' : '0.65'}
                $backgroundColor={theme.primaryButtonBackground}
                $color={theme.primaryButtonTextColor}
                $radius="8px"
                $padding="4px 8px"
              ></UnifiedButton>
            ) : (
              <UnifiedButton
                $onClick={() => handleGoogleLogout(loginStore.loginUser, dispatch)}
                text="로그아웃"
                $marginLeft="0px"
                $marginRight="0px"
                $fontSize="medium"
                $opacity={modeStore.isDarkMode ? '1' : '0.5'}
                $backgroundColor={theme.primaryButtonBackground}
                $color={theme.primaryButtonTextColor}
                $radius="8px"
                $padding="4px 8px"
              ></UnifiedButton>
            )}

            {/* <HamburgerMenu handleHamburgerMenuModal={handleHamburgerMenuModal} /> */}
          </MenuOptionBox>
        </SubNavigationContainer>
      </header>
      {modalMessage && <AlertModal message={modalMessage} onClose={() => setModalMessage('')} />}
    </>
  );
}
