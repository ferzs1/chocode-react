import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import logo from '../../../assets/images/chocode-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';


class Toolbar extends Component {
    render () {
        return (
            <header className={classes.Toolbar}>
                <div className={classes.InnerToolbar}>
                    <DrawerToggle clicked={this.props.toggleSideDrawer}/>
                    <div className={classes.Logo}>
                        <img src={logo} alt="" />
                    </div>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems />
                    </nav>
                </div>
            </header>
        );
    }
};

export default Toolbar;