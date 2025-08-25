import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
    keyword: string;
    type: string;
}
const initialState: SearchState = {
    keyword: '',
    type: 'title',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchKeywordSave(state, action: PayloadAction<string>) {
            state.keyword = action.payload;
        },
        searchTypeSave(state, action: PayloadAction<string>) {
            state.type = action.payload;
        },
        searchClear(state) {
            state.keyword = '';
            state.type = 'title';
        },
    },
});

export const { searchKeywordSave, searchTypeSave, searchClear } = searchSlice.actions;
export default searchSlice.reducer;
