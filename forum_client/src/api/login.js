import { auth } from '../firebase';
import { saveLoginUser } from '../redux/constants/constant';

export async function handleGoogleLogout(userData, dispatch) {
    if (typeof dispatch === 'function') {
        console.log('로그아웃 시작');
        dispatch(saveLoginUser(null))
        await auth.signOut();
        if (userData === null) {
            await checkGoogleLogin();
        }
    } else {
        console.log('인자값을 확인해주세요.');
    }
}

export async function checkGoogleLogin() {
    auth.onAuthStateChanged((user) => {
        // user.currentUser 를 통해 현재 로그인 중인 사용자에 대한 정보를 이용할 수 있습니다.

        if (user !== null) {
            console.log('로그인 상태입니다.');

            // const { accessToken, displayName, email, emailVerified, photoURL } = user;

            // const userInfo = {
            //     accessToken,
            //     displayName,
            //     email,
            //     emailVerified,
            //     photoURL,
            // };

            // console.log(userInfo);
            
        } else {
            console.log('로그아웃 상태입니다.');
        }
    });
}
