import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ThemeState {
	currentTheme: string;
  invert: boolean;
	globalCoordinates: object;
}

const initialState: ThemeState = {
	currentTheme: 'white',
  invert: true,
	globalCoordinates: {}
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    invertTheme: (state) => {
      state.invert = !state.invert;
    },
		setCoordinates: (state, action) => {
			state.globalCoordinates = action.payload
		}
  },
  extraReducers: {
  },
});

export const { invertTheme, setCoordinates } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.invert;
export const selectCoordinates = (state: RootState) => state.theme.globalCoordinates;

export default themeSlice.reducer;
