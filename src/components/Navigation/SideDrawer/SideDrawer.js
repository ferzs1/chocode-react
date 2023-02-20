import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    const styles = {
        display: props.open ? 'block' : 'none',
    };
    return (
        <Aux>
            <div style={styles} className={classes.SideDrawer}>
                <NavigationItems/>
            </div>
            <Backdrop open={props.open} clicked={props.closeSideDrawer}/>
        </Aux>
    );
};

export default sideDrawer;