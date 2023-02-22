import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    return (
        <a href={props.link} className={classes.NavItemLink}><li className={classes.NavItem}>{props.children}</li></a>
    );
};

export default navigationItem;