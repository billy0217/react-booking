import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="c-home-container container">
				<Featured />
				<h2>Browse by property type</h2>
				<PropertyList />
				<h2>Homes guests love</h2>
				<FeaturedProperties />
				<MailList />
			</div>
			<Footer />
		</div> 
	)
}


export default Home
