import React, { Component } from 'react';
import classes from './Layout.module.css';

class Layout extends Component {
    render () {
        return (
            <div className={classes.Layout}>
                <h2>Header</h2>
                <p>Text</p>      
            </div>
        );
    }
}

export default Layout;