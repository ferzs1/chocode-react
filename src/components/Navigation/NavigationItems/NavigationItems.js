import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'; 
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/about-us">About us</NavigationItem>
            <NavigationItem link="/courses">Courses</NavigationItem>
            <NavigationItem link="/apply">Apply NOW!</NavigationItem>
            <NavigationItem link="/#contact">Contact us</NavigationItem>
        </ul>
    );
};

export default navigationItems;