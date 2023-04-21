import BookCatalogPrivate from '@/app/components/screens/bookCatalog/BookCatalogPrivate'
import withAuth from '@/app/components/auth/withAuth'

const bookcatalog_admin = () => {
	return (
		<main>
			<BookCatalogPrivate />
		</main>
	)
}
export default withAuth(bookcatalog_admin)
