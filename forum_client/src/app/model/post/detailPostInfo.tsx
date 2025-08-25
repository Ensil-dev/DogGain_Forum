import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Post } from '../../../shared/types/post';

interface DetailPostInfoState {
    detailPostInfo: Post | null;
}
const initialState: DetailPostInfoState = {
    detailPostInfo: null,
};

const detailPostInfoSlice = createSlice({
    name: 'detailPostInfo',
    initialState,
    reducers: {
        saveDetailPost(state, action: PayloadAction<Post | null>) {
            state.detailPostInfo = action.payload;
        },
    },
});

export const { saveDetailPost } = detailPostInfoSlice.actions;
export default detailPostInfoSlice.reducer;
