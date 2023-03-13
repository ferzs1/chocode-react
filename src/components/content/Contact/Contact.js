import React from 'react';
import classes from './Contact.module.css';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const contact = (props) => {
	return (
		<div className={classes.Contact}>
			<h2>Kapcsolat</h2>
			<p>Vedd fel velünk a kapcsolatot.</p>
			<section className={classes.Content}>
				<ul>
					<li>
						<span>Telefon:</span> +36-30/363-9135
					</li>
					<li>
						<span>E-mail:</span> info@chocode.org
					</li>
				</ul>
				<section className={classes.Socials}>
					<a href="https://facebook.com/chocodeofficial">
						<FaFacebook />
					</a>
					<a href="https://instagram.com/chocodeofficial">
						<FaInstagram />
					</a>
					<a href="https://www.linkedin.com/company/chocode/">
						<FaLinkedin />
					</a>
				</section>
			</section>
		</div>
	);
};

export default contact;
