import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import usersReducer from './slices/usersSlice'
import booksReducer from './slices/bookSlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		users: usersReducer,
		books: booksReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(store => next => action => {
			if (action.type === 'auth/setUserRole') {
				localStorage.setItem('userRole', action.payload)
			}
			return next(action)
		}),
})

export default store
