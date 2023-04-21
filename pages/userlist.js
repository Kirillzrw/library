import withAuth from '@/app/components/auth/withAuth'
import UserList from '@/app/components/screens/userList/UserList'

const userlist = () => {
	return (
		<main>
			<UserList />
		</main>
	)
}
export default withAuth(userlist)
