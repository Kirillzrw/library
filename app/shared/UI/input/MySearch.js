import { Input } from 'antd'

const { Search } = Input

const MyInput = props => {
	return <Search style={{ width: 800 }} {...props} />
}
export default MyInput
