import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login(state, actions) {
            return actions.payload
        },
        logout(state, actions) {
            return actions.payload
        }
    }
})

export default authSlice
export const { login, logout } = authSlice.actions