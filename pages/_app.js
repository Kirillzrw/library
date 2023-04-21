import { Provider } from 'react-redux'
import { useRouter } from 'next/router'

import Layout from '@/app/components/layout/Layout'
import store from '@/app/redux/store'
import 'app/assets/styles/globals.scss'

export default function App({ Component, pageProps }) {
	const router = useRouter()

	if (router.pathname === '/login')
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		)

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
