import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Post } from '../../../shared/types/post';

interface PostInfoState {
    latestPostData: Post[] | null;
    informationOfModifyingPost: Post | null;
}
const initialState: PostInfoState = {
    latestPostData: null,
    informationOfModifyingPost: null,
};

const postInfoSlice = createSlice({
    name: 'postInfo',
    initialState,
    reducers: {
        latestPostDataSave(state, action: PayloadAction<Post[]>) {
            if (state.latestPostData === null) {
                state.latestPostData = action.payload;
            }
        },
        addPost(state, action: PayloadAction<Post>) {
            if (state.latestPostData) {
                state.latestPostData.unshift(action.payload);
            } else {
                state.latestPostData = [action.payload];
            }
        },
        deletePost(state, action: PayloadAction<number>) {
            if (state.latestPostData) {
                state.latestPostData = state.latestPostData.filter((post) => Number(post.postId) !== Number(action.payload));
            }
        },
        saveEditingPost(state, action: PayloadAction<Post | null>) {
            state.informationOfModifyingPost = action.payload;
        },
        updatePost(state) {
            if (state.latestPostData) {
                state.latestPostData = [...state.latestPostData];
            }
        },
    },
});

export const { latestPostDataSave, addPost, deletePost, saveEditingPost, updatePost } = postInfoSlice.actions;
export default postInfoSlice.reducer;
