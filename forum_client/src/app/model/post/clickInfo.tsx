// src/modules/modal.js

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ClickInfoState {
    touchedPostScrollY: number;
    scrollElement: HTMLElement | null;
}
const initialState: ClickInfoState = {
    touchedPostScrollY: 0,
    scrollElement: null,
};

const clickInfoSlice = createSlice({
    name: 'clickInfo',
    initialState,
    reducers: {
        scrollLocationSave(state, action: PayloadAction<number>) {
            state.touchedPostScrollY = action.payload;
        },
        scrollElementSave(state, action: PayloadAction<HTMLElement>) {
            if (state.scrollElement === null) {
                state.scrollElement = action.payload as unknown as HTMLElement;
            }
        },
        resetScrollLocation(state) {
            state.touchedPostScrollY = 0;
        },
    },
});

export const {
    scrollLocationSave,
    scrollElementSave,
    resetScrollLocation,
} = clickInfoSlice.actions;
export default clickInfoSlice.reducer;
