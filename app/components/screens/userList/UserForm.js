import { addUser } from '@/app/redux/slices/usersSlice'
import MyButton from '@/app/shared/UI/button/MyButton'
import { Input, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const UserForm = ({ closeModal }) => {
	const [user, setUser] = useState({
		name: '',
		password: '',
		role: '',
	})
	const [buttonDisabled, setButtonDisabled] = useState(true)
	const dispatch = useDispatch()

	const addNewUser = e => {
		e.preventDefault()
		const newUser = {
			...user,
			id: Date.now(),
		}
		dispatch(addUser(newUser))
		closeModal()
		setUser({
			name: '',
			password: '',
			role: '',
		})
	}

	useEffect(() => {
		if (user.name && user.password && user.role) {
			setButtonDisabled(false)
		} else {
			setButtonDisabled(true)
		}
	}, [user.name, user.password, user.role])

	return (
		<div>
			<Input
				placeholder='Имя пользователя'
				value={user.name}
				onChange={e => setUser({ ...user, name: e.target.value })}
			/>
			<Input
				placeholder='Пароль'
				value={user.password}
				onChange={e => setUser({ ...user, password: e.target.value })}
			/>
			<Select
				defaultValue='Выберите роль'
				w={500}
				onChange={role => setUser({ ...user, role: role })}
			>
				<option value='admin'>Админ</option>
				<option value='librarian'>Библиотекарь</option>
				<option value='user'>Пользователь</option>
			</Select>
			<br />
			<MyButton disabled={buttonDisabled} type='default' onClick={addNewUser}>
				Добавить
			</MyButton>
		</div>
	)
}
export default UserForm
