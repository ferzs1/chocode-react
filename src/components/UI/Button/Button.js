import React from 'react';
import classes from './Button.module.css';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
	const navigate = useNavigate();

	const scrollToSection = async (sec) => {
		await navigate('/');
		document
			.getElementById(sec.substring(1))
			.scrollIntoView({ behavior: 'smooth' });
	};

	let cls = [classes.Button, classes[props.type]].join(' ');

	let elem = '';
	if (props.href.startsWith('#')) {
		// scroll smooth
		elem = (
			<span onClick={() => {scrollToSection(props.href); }} className={cls}>
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
	return (
		<a href={props.href} className={cls}>
			{props.children}
		</a>

	);
};

export default Button;
