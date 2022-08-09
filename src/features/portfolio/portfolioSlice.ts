import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ThemeState {
	navForward: boolean;
}

const initialState: ThemeState = {
	navForward: true
};

export const themeSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setNavForward: (state, action) => {
      state.navForward = action.payload;
    },
  },
  extraReducers: {
  },
});

export const { setNavForward } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.invert;
export const selectCoordinates = (state: RootState) => state.theme.globalCoordinates;

export default themeSlice.reducer;
