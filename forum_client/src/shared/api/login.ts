import { auth } from './firebase';
import { saveLoginUser } from '../../app/model/user/userInfo';
import type { AppDispatch } from '../../app/model/store';
import type { UserInfo } from '../types/user';
import type { User } from 'firebase/auth';

export async function handleGoogleLogout(
    userData: UserInfo | null,
    dispatch: AppDispatch,
): Promise<void> {
    if (typeof dispatch === 'function') {
        // console.log('로그아웃 시작');
        dispatch(saveLoginUser(null))
        await auth.signOut();
        if (userData === null) {
            await checkGoogleLogin();
        }
    } else {
        console.log('Please Check your argument');
    }
}

export async function checkGoogleLogin(): Promise<void> {
    auth.onAuthStateChanged((user: User | null) => {
        // user.currentUser 를 통해 현재 로그인 중인 사용자에 대한 정보를 이용할 수 있습니다.

        if (user !== null) {
            // console.log('로그인 상태입니다.');

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
            // console.log('로그아웃 상태입니다.');
        }
    });
}
