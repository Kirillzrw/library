import BookItem from './BookItem'
import styles from './BookList.module.scss'

const BookList = ({ books }) => {
	return (
		<>
			<h2 className={styles.title}>Библиотека книг</h2>
			<div className={styles.cards}>
				{books.map(book => (
					<BookItem key={book.id} {...book} />
				))}
			</div>
		</>
	)
}
export default BookList
