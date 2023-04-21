import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userRole: 'ghost',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserRole: (state, action) => {
			state.userRole = action.payload
			localStorage.setItem('userRole', action.payload)
		},
	},
})

export const { setUserRole } = authSlice.actions

export default authSlice.reducer
