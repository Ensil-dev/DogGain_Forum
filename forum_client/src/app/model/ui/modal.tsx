// src/modules/modal.js

import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
    isHamburgerModalOpen: boolean;
    isPostWritingModalOpen: boolean;
    isSearchModalOpen: boolean;
}
const initialState: ModalState = {
    isHamburgerModalOpen: false,
    isPostWritingModalOpen: false,
    isSearchModalOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        hamburgerModalChange(state) {
            state.isHamburgerModalOpen = !state.isHamburgerModalOpen;
        },
        postWritingModalChange(state) {
            state.isPostWritingModalOpen = !state.isPostWritingModalOpen;
        },
        searchModalChange(state) {
            state.isSearchModalOpen = !state.isSearchModalOpen;
        },
    },
});

export const { hamburgerModalChange, postWritingModalChange, searchModalChange } = modalSlice.actions;
export default modalSlice.reducer;
