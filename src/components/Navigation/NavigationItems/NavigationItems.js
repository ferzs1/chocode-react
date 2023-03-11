import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'; 
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <NavigationItem link="/">Főoldal</NavigationItem>
            <NavigationItem link="/about-us">Rólunk</NavigationItem>
            <NavigationItem link="/courses">Kurzusok</NavigationItem>
            <NavigationItem link="/apply">Jelentkezés</NavigationItem>
            <NavigationItem link="/teachers">Tanáraink</NavigationItem>
            <NavigationItem link="/#contact">Kapcsolat</NavigationItem>
        </ul>
    );
};

export default navigationItems;