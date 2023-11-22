import { createSlice } from "@reduxjs/toolkit";

type User = {
    userphone: string
}

type AuthState = {
    user: User | null
}

const initialState: AuthState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearState: (state) => {
            state.user = null
        }
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer