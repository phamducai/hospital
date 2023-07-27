import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/auth/authSlice';
import userReducer from '@/store/user/userSlice';
import dateReducer from '@/store/schedule/scheduleSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    dateReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
