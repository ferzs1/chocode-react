import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let classForDrawer = [classes.SideDrawer, props.open ? classes.Active : classes.Inactive];
    return (
        <Aux>
            <div className={classForDrawer.join(' ')} onClick={props.closeSideDrawer}>
                <NavigationItems/>
            </div>
            <Backdrop open={props.open} clicked={props.closeSideDrawer}/>
        </Aux>
    );
};

export default sideDrawer;