import Breadcrumb from '@/components/breadcrumb';
import Hero from '@/components/home/hero';
import ProductDetails from '@/components/home/product-details';
import ProductReviews from '@/components/home/product-reviews';
import SimilarItems from '@/components/home/similar-items';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />

			<Breadcrumb />
			<ProductDetails />
			<ProductReviews />
			<SimilarItems />

			<Footer />

			{/* <Full /> */}
		</>
	);
}
