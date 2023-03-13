import React from 'react';
import classes from './Teacher.module.css';

const teacher = (props) => {
	return (
		<React.Fragment>
			<img
				src={require(`../../../../assets/images/${props.img}`)}
				alt=""
				className={classes.Profile}
			/>
			<span>
				<p className={classes.Name}>{props.name}</p>
				<section className={classes.Text}>
					{props.intro.map((txt, id) => {
						return <p key={id}>{txt}</p>;
					})}
				</section>
			</span>
		</React.Fragment>
	);
};

export default teacher;
