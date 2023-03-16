import React from 'react';
import classes from './Button.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Button = (props) => {
	const navigate = useNavigate();
  	const location = useLocation();

	const scrollToSection = async (sec) => {
		if (location.pathname !== '/') {
			await navigate('/');
		}
		document.getElementById(sec.substring(1)).scrollIntoView({ behavior: 'smooth' });
	};

	let cls = [classes.Link];
	if (props.btnStyle === 'button') {
		cls = [classes.Button, classes[props.type]].join(' ');
	}

	let elem = '';
	if (props.href.startsWith('#')) {
		// scroll smooth
		elem = (
			<span onClick={() => {scrollToSection(props.href);}} className={cls}>
				{props.children}
			</span>
		);
	} else {
		// href
		elem = (
			<a href={props.href} className={cls}>
				{props.children}
			</a>
		);
	}

    return elem;
};

export default Button;
