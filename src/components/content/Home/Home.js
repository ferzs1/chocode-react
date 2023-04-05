import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutUs from '../AboutUs/AboutUs';
import Discounts from '../Discounts/Discounts';
import Packages from '../Packages/Packages';
import Teachers from '../Teachers/Teachers';
import Contact from '../Contact/Contact';
import Header from '../../UI/Header/Header';
import classes from './Home.module.css';
import CookieConsent from 'react-cookie-consent';

const home = (props) => (
	<ParallaxProvider>
		<div className={classes.Home}>
			<Header />
			<AboutUs />
			<Discounts />
			<Packages />
			<Teachers />
			<Contact />
			<CookieConsent
				debug={false}
				style={{ background: '#725757' }}
				buttonStyle={{ color: 'white', background: '#5a3d3d' }}
				buttonText='Elfogad'
			>
				Ezen a weboldalon cookie-kat használunk a felhasználói élmény fokozása
				érdekében.
			</CookieConsent>
		</div>
	</ParallaxProvider>
);

export default home;
