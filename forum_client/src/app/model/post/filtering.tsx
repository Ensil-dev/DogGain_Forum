// src/modules/modal.js

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FilteringState {
    filteringOption: string;
}
const initialState: FilteringState = {
    filteringOption: '최신',
};

const filteringSlice = createSlice({
    name: 'filteringOption',
    initialState,
    reducers: {
        filteringOptionSave(state, action: PayloadAction<string>) {
            state.filteringOption = action.payload;
        },
    },
});

export const { filteringOptionSave } = filteringSlice.actions;
export default filteringSlice.reducer;
