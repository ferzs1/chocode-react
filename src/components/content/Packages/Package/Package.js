import React from 'react';
import { FaCode, FaCheckCircle, FaMinusCircle } from 'react-icons/fa';
import classes from './Package.module.css';

const packageComp = (props) => {
	let contentList = Object.keys(props.content).map((elem) => {
		return (
			<li
				key={elem}
				className={props.content[elem] ? classes.Good : classes.Bad}
			>
				{props.content[elem] ? <FaCheckCircle /> : <FaMinusCircle />}
				{elem}
			</li>
		);
	});
	return (
		<section className={classes.Package}>
			<FaCode className={classes.Icon} />
			<div className={classes.PckName}>{props.name}</div>
			<ul className={classes.List}>{contentList}</ul>
			<p className={classes.Price}>
				<span>Ár:</span> {props.price}
			</p>
		</section>
	);
};

export default packageComp;
