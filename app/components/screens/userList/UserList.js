import { useDispatch, useSelector } from 'react-redux'

import MyButton from '@/app/shared/UI/button/MyButton'
import UserItem from './UserItem'
import styles from './UserList.module.scss'
import { useState } from 'react'
import MyModal from '@/app/shared/UI/modal/MyModal'
import UserForm from './UserForm'

const UserList = () => {
	const [modal, setModal] = useState(false)
	const users = useSelector(state => state.users.users)

	const closeModal = () => {
		setModal(false)
	}

	return (
		<div>
			<MyModal visible={modal} setVisible={setModal}>
				<UserForm closeModal={closeModal} />
			</MyModal>
			<MyButton className={styles.button} onClick={() => setModal(true)}>
				Добавить нового пользователя
			</MyButton>
			<div className={styles.card}>
				{users.map(user => (
					<UserItem key={user.name} {...user} />
				))}
			</div>
		</div>
	)
}
export default UserList
