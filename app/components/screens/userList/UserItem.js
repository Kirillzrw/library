import MyButton from '@/app/shared/UI/button/MyButton'
import styles from './UserItem.module.scss'
import { useDispatch } from 'react-redux'
import { removeUser } from '@/app/redux/slices/usersSlice'

const UserItem = props => {
	const { name, password, role, id } = props

	const dispatch = useDispatch()

	const handleRemoveUser = id => {
		dispatch(removeUser(id))
	}

	return (
		<div className={styles.card}>
			<p className={styles.name}>Имя пользователя: {name}</p>
			<p className={styles.password}>Пароль: {password}</p>
			<p className={styles.role}>Его текущая роль: {role}</p>
			<MyButton className={styles.button} onClick={() => handleRemoveUser(id)}>
				Удалить
			</MyButton>
		</div>
	)
}
export default UserItem
