import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';
import Header from './components/UI/Header/Header';
import AboutUs from './components/content/AboutUs/AboutUs';
import { ParallaxProvider } from 'react-scroll-parallax';
import Discounts from './components/content/Discounts/Discounts';
import Packages from './components/content/Packages/Packages';
import Teachers from './components/content/Teachers/Teachers';
import Contact from './components/content/Contact/Contact';
import Footer from './components/UI/Footer/Footer';

function App() {
  return (
		<ParallaxProvider>
			<div className={classes.App}>
				<Layout>
					<Header />
					<AboutUs />
					<Discounts />
          			<Packages />
					<Teachers />
					<Contact />
					<Footer />
				</Layout>
			</div>
		</ParallaxProvider>
	);
}

export default App;
