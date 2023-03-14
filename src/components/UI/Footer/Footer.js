import React from 'react';
import classes from './Footer.module.css';
import {
	FaInstagram,
	FaFacebook,
	FaLinkedin,
	FaTelegram,
} from 'react-icons/fa';

const footer = (props) => {
	return (
		<div className={classes.Footer}>
			<section className={classes.Social}>
				<h3>Social media</h3>
				<a href="https://facebook.com/chocodeofficial">
					<FaFacebook />
				</a>
				<a href="https://instagram.com/chocodeofficial">
					<FaInstagram />
				</a>
				<a href="https://www.linkedin.com/company/chocode/">
					<FaLinkedin />
				</a>
				<a href="https://t.me/chocode">
					<FaTelegram />
				</a>
			</section>
			<section className={classes.Links}>
				<h3>Kiemelt tartalom</h3>
				<p>
					<a href="/apply">Jelentkezés</a>
				</p>
				<p>
					<a href="/aszf">ÁSZF</a>
				</p>
				<p>
					<a href="/adatkezeles">Adatkezelési tájékoztató</a>
				</p>
				<p>
					<a href="/courses">Kurzusok menete</a>
				</p>
			</section>
			<section>
				<h3>Kapcsolat</h3>
				<p>hello@chocode.org</p>
				<p>chocodeschool@gmail.com</p>
				<p>Sipőcz és Ferenczi Kft.</p>
				<p>1142 Budapest, Erzsébet királyné útja 70/B. I./6.</p>
				<p>Cégjegyzék szám: 01-09-270780</p>
				<p>Adószám: 14015186-1-42</p>
			</section>
		</div>
	);
};

export default footer;
