/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchKeyword: '',
};
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searched: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { searched } = searchSlice.actions;
