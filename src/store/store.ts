import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import authSlice from "./authSlice";
import { loginApi } from "./api/loginApi";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [loginApi.reducerPath]: loginApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        loginApi.middleware
    ])
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
