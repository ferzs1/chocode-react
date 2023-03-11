import React from 'react';
import classes from './Discount.module.css';

const discount = (props) => {
    let cls = [];
    if (props.color === 'Blue') {
        cls = [classes.Blue, classes.Discount];
    } else if (props.color === 'Brown') {
        cls = [classes.Brown, classes.Discount];
    }
    return (
        <p className={cls.join(' ')}>{props.children}</p>
    );
};

export default discount;