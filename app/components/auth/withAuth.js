import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const withAuth = WrappedComponent => {
	const AuthenticatedComponent = () => {
		const userRole = useSelector(state => state.auth.userRole)
		const router = useRouter()

		useEffect(() => {
			if (userRole === 'ghost') {
				router.push('/login')
			}
		}, [router, userRole])

		return <WrappedComponent />
	}

	return AuthenticatedComponent
}

export default withAuth
