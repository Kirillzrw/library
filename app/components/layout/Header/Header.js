import Image from 'next/image'
import styles from './Header.module.scss'
import MyButton from '@/app/shared/UI/button/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveRole, setUserRole } from '@/app/redux/slices/authSlice'
import MyModal from '@/app/shared/UI/modal/MyModal'
import BookForm from '../../screens/bookCatalog/BookForm'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
	const [modal, setModal] = useState(false)
	const dispatch = useDispatch()
	const userRole = useSelector(state => state.auth.userRole)

	const isAdmin = userRole === 'admin' || userRole === 'libriran'

	const handleSubmit = () => {
		dispatch(setUserRole('ghost'))
	}

	const closeModal = () => {
		setModal(false)
	}

	return (
		<>
			<div className={styles.header}>
				<Link href='/'>
					<Image
						src='https://i.imgur.com/dlRHehD.png'
						alt='logo'
						height={100}
						width={100}
					/>
				</Link>

				{userRole === 'admin' ? (
					<Link href='/userlist' className={styles.userList}>
						Список пользователей
					</Link>
				) : (
					''
				)}

				{isAdmin ? (
					<div>
						<MyModal visible={modal} setVisible={setModal}>
							<BookForm closeModal={closeModal} />
						</MyModal>
						<MyButton onClick={() => setModal(true)} type='default'>
							Добавить новую книгу
						</MyButton>
					</div>
				) : (
					''
				)}

				<MyButton onClick={handleSubmit}>Выход</MyButton>
			</div>
		</>
	)
}
export default Header
