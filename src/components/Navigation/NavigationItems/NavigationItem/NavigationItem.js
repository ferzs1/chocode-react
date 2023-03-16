import React from 'react';
import classes from './NavigationItem.module.css';
import { useNavigate } from 'react-router-dom';

const NavigationItem = (props) => {
	const navigate = useNavigate();

    const scrollToSection = async (sec) => {
		await navigate('/');
		document.getElementById(sec.substring(1)).scrollIntoView({ behavior: 'smooth' });
	};

	let elem = '';
	if (props.link.startsWith('#')) {
		// scroll smooth
		elem = (
			<span onClick={() => { scrollToSection(props.link); }} className={classes.NavItemLink} >
				<li className={classes.NavItem}>{props.children}</li>
			</span>
		);
	} else {
		// href
		elem = (
			<a href={props.link} className={classes.NavItemLink}>
				<li className={classes.NavItem}>{props.children}</li>
			</a>
		);
	}
	return elem;
};

export default NavigationItem;
