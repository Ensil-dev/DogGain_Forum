import { createSlice } from '@reduxjs/toolkit';

interface ModeState {
    isDarkMode: boolean;
}
const initialState: ModeState = {
    isDarkMode: false,
};

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        darkmodeChange(state) {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { darkmodeChange } = modeSlice.actions;
export default modeSlice.reducer;
