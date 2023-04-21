import { Button } from 'antd'

const MyButton = props => {
	return (
		<Button type='primary' size='large' {...props}>
			{props.children}
		</Button>
	)
}
export default MyButton
