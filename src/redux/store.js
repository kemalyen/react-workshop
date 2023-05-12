import { configureStore } from '@reduxjs/toolkit';

import { authApi } from '../api/authApi'
import { userApi } from '../api/userApi'
import userReducer from '../features/userSlice'

export const store = configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [userApi.reducerPath]: userApi.reducer,

      userState: userReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([
        authApi.middleware,
        userApi.middleware,
        // Add the PostApi middleware to the store
        //postApi.middleware,
      ]),
  });
  
 