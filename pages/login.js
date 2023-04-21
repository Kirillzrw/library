import Login from '@/app/components/screens/login/Login'
import Head from 'next/head'

const login = () => {
	return (
		<>
			<Head></Head>
			<main>
				<Login />
			</main>
		</>
	)
}

// login.getLayout = page => page

export default login
