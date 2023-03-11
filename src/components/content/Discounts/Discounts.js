import React from 'react';
import Discount from './Discount/Discount';
import { FaBook, FaHandPeace, FaUsers } from 'react-icons/fa';
import classes from './Discounts.module.css';

const discounts = (props) => {
	return (
		<div className={classes.Discounts}>
			<Discount color="Blue">
				<FaUsers />
				Hozz magaddal valakit, és kaptok egy 45 perces, kétfős mentorálást
				ajándékba!
			</Discount>
			<Discount color="Brown">
				<FaBook />
				Már jártál hozzánk? A PRO és VIP csomagok esetén 10% kedvezményben
				részesülsz!
			</Discount>
			<Discount color="Blue">
				<FaHandPeace />
				Ha egyszerre két fejlesztés-sorozatra jelentkezel, egy 30 perces egyéni
				online mentorálást kapsz ajándékba!
			</Discount>
		</div>
	);
};

export default discounts;
