import { Button, Form, Input } from 'antd'
import styles from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setUserRole } from '@/app/redux/slices/authSlice'
import { useRouter } from 'next/router'

const Login = () => {
	const users = useSelector(state => state.users.users)
	const dispath = useDispatch()
	const router = useRouter()

	const onFinish = data => {
		const hasMatch = users.some(
			user => user.name === data.name && user.password === data.password
		)

		if (hasMatch) {
			const userInfo = users.find(
				user => user.name === data.name && user.password === data.password
			)

			if (userInfo.role === 'admin' || userInfo.role === 'librarian') {
				dispath(setUserRole(userInfo.role))
				return router.push('/booklist_admin')
			} else {
				dispath(setUserRole(userInfo.role))
				return router.push('/')
			}
		}

		return alert('Логин или пароль неверный')
	}

	return (
		<div className={styles.login}>
			<h1>Авторизация пользователей</h1>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				autoComplete='off'
				onFinish={onFinish}
			>
				<Form.Item
					label='Username'
					name='name'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary submit' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
export default Login
