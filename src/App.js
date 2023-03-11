import classes from './App.module.css';
// import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Layout from './hoc/Layout/Layout';
import Header from './components/UI/Header/Header';
import AboutUs from './components/content/AboutUs/AboutUs';
import { ParallaxProvider } from 'react-scroll-parallax';
import Discounts from './components/content/Discounts/Discounts';

function App() {
  return (
		<ParallaxProvider>
			<div className={classes.App}>
				<Layout>
					<Header />
					<AboutUs />
					<Discounts />
          {/* <Courses /> */}
					{/* <Teachers /> */}
					{/* <Contact /> */}
					{/* <Footer /> */}
				</Layout>
			</div>
		</ParallaxProvider>
	);
}

export default App;
