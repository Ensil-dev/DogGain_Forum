import { LOGIN_USER_SAVE } from '../constants/constant';

// 초기 상태값
const initialState = {
    loginUser: null,
};

// 리듀서
const userInfo = (state = initialState, action) => {
    
    // console.log(`🖼️ clickInfo action : ${action.type}`); // 여기에 console.log(action.type) 추가
    // console.log(`🖼️ clickInfo initialState: ${state}`); // 여기에 console.log(state.isDarkMode) 추가
    switch (action.type) {
        case LOGIN_USER_SAVE:
            // console.log('LOGIN_USER_SAVE!!');

            if (state.loginUser === null) {
                const { accessToken, displayName, email, emailVerified, photoURL } = action.payload;

                const userInfo = {
                    accessToken,
                    displayName,
                    email,
                    emailVerified,
                    photoURL,
                };

                // console.log(userInfo);

                return Object.assign({}, state, {
                    loginUser: userInfo,
                });
            } else {
                return Object.assign({}, state, {
                    loginUser: action.payload,
                });
            }

        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default userInfo;
