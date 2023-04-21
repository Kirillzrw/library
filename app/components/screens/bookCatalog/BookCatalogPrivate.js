import { useMemo, useState } from 'react'
import BookList from './BookList'
import MySelect from '@/app/shared/UI/select/MySelect'
import MyInput from '@/app/shared/UI/input/MySearch'

import { useSelector } from 'react-redux'

const BookCatalogPrivate = () => {
	const books = useSelector(state => state.books.books)

	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedBooks = useMemo(() => {
		if (selectedSort) {
			return [...books].sort((a, b) =>
				a[selectedSort].localeCompare(b[selectedSort])
			)
		}
		return books
	}, [selectedSort, books])

	const sortBooks = sort => {
		setSelectedSort(sort)
	}

	const sortedAndSearchedBooks = useMemo(() => {
		const regex = new RegExp(searchQuery, 'i')
		return sortedBooks.filter(
			book =>
				regex.test(book.genre) ||
				regex.test(book.author) ||
				regex.test(book.title)
		)
	}, [searchQuery, sortedBooks])

	return (
		<div>
			<MyInput
				placeholder='Поиск...'
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>

			<br />

			<MySelect
				value={selectedSort}
				onChange={sortBooks}
				options={[
					{ value: 'author', name: 'По автору' },
					{ value: 'genre', name: 'По жанру' },
					{ value: 'title', name: 'По заголовку' },
				]}
			/>

			{sortedAndSearchedBooks.length === 0 ? (
				<h1 style={{ textAlign: 'center' }}>Книги не найдены</h1>
			) : (
				<BookList books={sortedAndSearchedBooks} />
			)}
		</div>
	)
}
export default BookCatalogPrivate
