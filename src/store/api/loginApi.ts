import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = 'http://161.35.153.209:5430/api'

type LoginPayload = {
    email: string
    password: string
}

type LoginData = {
    user_id: string
    status: number
}

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
    endpoints: builder => ({
        loginUser: builder.mutation<any, LoginPayload>({
            query: payload => ({
                url: '/login',
                method: 'POST',
                body: payload
            })
        }),
        getUser: builder.query<any, any>({
            query: (userId: string) => '/user/${userId}'
        }),
        registerUser: builder.mutation<any, any>({
            query: payload => ({
                url: '/registration',
                method: 'POST',
                body: payload
            })
        })
    })
})

export const {
    useLazyGetUserQuery,
    useLoginUserMutation,
    useRegisterUserMutation
} = loginApi