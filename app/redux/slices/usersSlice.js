import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [
			{ name: 'admin', password: 'admin', role: 'admin', id: 1 },
			{ name: 'user', password: 'user', role: 'user', id: 2 },
			{ name: 'libriran', password: 'libriran', role: 'libriran', id: 3 },
		],
	},
	reducers: {
		addUser: (state, action) => {
			state.users.push(action.payload)
		},
		removeUser: (state, action) => {
			state.users = state.users.filter(user => user.id !== action.payload)
		},
	},
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer
