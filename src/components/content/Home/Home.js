import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutUs from '../AboutUs/AboutUs';
import Discounts from '../Discounts/Discounts';
import Packages from '../Packages/Packages';
import Teachers from '../Teachers/Teachers';
import Contact from '../Contact/Contact';
import Header from '../../UI/Header/Header';
import classes from './Home.module.css';

const home = (props) => (
	<ParallaxProvider>
		<div className={classes.Home}>
            <Header />
			<AboutUs />
			<Discounts />
			<Packages />
			<Teachers />
			<Contact />
		</div>
	</ParallaxProvider>
);

export default home;
