import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { UserInfo } from '../../../shared/types/user';

interface UserInfoState {
    loginUser: UserInfo | null;
}
const initialState: UserInfoState = {
    loginUser: null,
};

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        saveLoginUser(state, action: PayloadAction<UserInfo | null>) {
            if (action.payload) {
                const { accessToken, displayName, email, emailVerified, photoURL, uid } = action.payload;
                state.loginUser = { accessToken, displayName, email, emailVerified, photoURL, uid };
            } else {
                state.loginUser = action.payload;
            }
        },
    },
});

export const { saveLoginUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
