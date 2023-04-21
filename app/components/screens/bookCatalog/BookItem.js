import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

import styles from './BookItem.module.scss'
import MyButton from '@/app/shared/UI/button/MyButton'
import { removeBook } from '@/app/redux/slices/bookSlice'

const BookItem = props => {
	const { title, author, genre, publisher, image, id } = props
	const userRole = useSelector(state => state.auth.userRole)
	const dispatch = useDispatch()

	const isAdmin = userRole === 'admin' || userRole === 'libriran'

	const handleRemoveBook = id => {
		console.log(id)
		dispatch(removeBook(id))
	}

	return (
		<div className={styles.card}>
			<Image
				className={styles.image}
				src={image}
				width={161}
				height={237}
				alt='logoBook'
			/>
			<p className={styles.title}>{title}</p>
			<p>
				{author} - {publisher}
			</p>
			<p>{genre}</p>
			{isAdmin ? (
				<MyButton
					className={styles.button}
					onClick={() => handleRemoveBook(id)}
				>
					Удалить
				</MyButton>
			) : (
				''
			)}
		</div>
	)
}
export default BookItem
