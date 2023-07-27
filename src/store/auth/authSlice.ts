import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
export interface User {
  id: string;
  name: string;
  loginState: boolean;
}
const initialState: User = {
  id: '',
  name: '',
  loginState: false,
};
export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      const { id, name, loginState } = action.payload;
      state.id = id;
      state.name = name;
      state.loginState = loginState;
    },
    logout: (state) => {
      state.loginState = false;
    },
  },
});
export const { login, logout } = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;
