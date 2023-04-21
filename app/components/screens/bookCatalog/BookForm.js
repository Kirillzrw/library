import { addBook } from '@/app/redux/slices/bookSlice'
import MyButton from '@/app/shared/UI/button/MyButton'
import { Input } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const BookForm = ({ closeModal }) => {
	const [book, setBook] = useState({
		author: '',
		title: '',
		genre: '',
		publisher: '',
		image: '',
	})
	const dispatch = useDispatch()

	const addNewBook = e => {
		e.preventDefault()
		const newBook = {
			...book,
			id: Date.now(),
		}
		dispatch(addBook(newBook))
		closeModal()
		setBook({
			author: '',
			title: '',
			genre: '',
			publisher: '',
			image: '',
		})
	}

	return (
		<div>
			<Input
				placeholder='Автор'
				value={book.author}
				onChange={e => setBook({ ...book, author: e.target.value })}
			/>
			<Input
				placeholder='Заголовок'
				value={book.title}
				onChange={e => setBook({ ...book, title: e.target.value })}
			/>
			<Input
				placeholder='Жанр'
				value={book.genre}
				onChange={e => setBook({ ...book, genre: e.target.value })}
			/>
			<Input
				placeholder='Издатель'
				value={book.publisher}
				onChange={e => setBook({ ...book, publisher: e.target.value })}
			/>
			<Input
				placeholder='Изображения с imgur(ссылка)'
				value={book.image}
				onChange={e => setBook({ ...book, image: e.target.value })}
			/>
			<MyButton type='default' onClick={addNewBook}>
				Добавить
			</MyButton>
		</div>
	)
}
export default BookForm
