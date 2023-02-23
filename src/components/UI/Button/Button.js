import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    let cls = [classes.Button, classes[props.type]].join(' ')
    return (
        <button
            onClick={props.onClick}
            className={cls}>
            {props.children}
        </button>
    );
}

export default button;