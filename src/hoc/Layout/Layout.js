import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/UI/Footer/Footer';

class Layout extends Component {
    state = {
        sideDrawer: false,
    }

    closeSideDrawer = (prevState) => {
        this.setState({sideDrawer: false});
    }

    toggleSideDrawer = (prevState) => {
        this.setState({sideDrawer: !prevState.sideDrawer});
    }
    
    render () {
        return (
            <div className={classes.Layout}>
                <SideDrawer open={this.state.sideDrawer} closeSideDrawer={this.closeSideDrawer}/>
                <Toolbar toggleSideDrawer={this.toggleSideDrawer}/>
                <main className={classes.Main}>
                    {this.props.children}
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default Layout;