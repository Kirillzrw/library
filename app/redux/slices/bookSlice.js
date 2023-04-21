import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
	name: 'books',
	initialState: {
		books: [
			{
				id: 1,
				title: '1. К себе нежно. Книга о том, как ценить и беречь себя',
				author: 'Антон Антоныч',
				genre: 'Психология',
				publisher: 'ЭХО',
				image: 'https://i.imgur.com/WkRjtns.jpg',
			},
			{
				id: 2,
				title: 'Стоял на МО 6 сроков',
				author: 'Назар Губич',
				genre: 'Фэнтези',
				publisher: 'Даймонд',
				image: 'https://i.imgur.com/WkRjtns.jpg',
			},
			{
				id: 3,
				title: 'Успешный успех, как стать сильным',
				author: 'Максим Драгинич',
				genre: 'Саморазвитие',
				publisher: 'Токийский',
				image: 'https://i.imgur.com/WkRjtns.jpg',
			},
			{
				id: 4,
				title: 'Из человека в свинью, курс за 20 минут',
				author: 'Андрей Протосевич',
				genre: 'Триллер',
				publisher: 'Пак',
				image: 'https://i.imgur.com/WkRjtns.jpg',
			},
			{
				id: 5,
				title: 'Как я стал директором Рубль Бум',
				author: 'Егор Большивиков',
				genre: 'Драма',
				publisher: 'ЛГМ',
				image: 'https://i.imgur.com/WkRjtns.jpg',
			},
			{
				id: 6,
				title: 'Сломан и подавлен',
				author: 'Руслан Ризванов',
				genre: 'Боевик',
				publisher: 'РАССА',
				image: 'https://i.imgur.com/WkRjtns.jpg',
			},
		],
	},
	reducers: {
		addBook: (state, action) => {
			state.books.push(action.payload)
		},
		removeBook(state, action) {
			const bookId = action.payload
			state.books = state.books.filter(book => book.id !== bookId)
		},
	},
})

export const { addBook, removeBook } = bookSlice.actions

export default bookSlice.reducer
