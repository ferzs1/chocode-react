import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    const scrollToSection = (sec) => {
        document.getElementById(sec.substring(1)).scrollIntoView({ behavior: 'smooth' });
    };

    let elem = "";
    if (props.smooth) {
        // scroll smooth
        elem = <a onClick={() => scrollToSection(props.link)} className={classes.NavItemLink}><li className={classes.NavItem}>{props.children}</li></a>;
    } else {
        // href
        elem = <a href={props.link} className={classes.NavItemLink}><li className={classes.NavItem}>{props.children}</li></a>;
    }
    return elem;
};

export default navigationItem;