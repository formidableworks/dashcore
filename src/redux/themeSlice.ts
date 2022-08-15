import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'light' | 'dark' | 'system';

interface State {
  themeType: ThemeType;
}

const initialState: State = {
  themeType: 'system',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeType: (state, action: PayloadAction<State['themeType']>) => {
      state.themeType = action.payload;
    },
  },
});

export const { changeThemeType } = themeSlice.actions;
