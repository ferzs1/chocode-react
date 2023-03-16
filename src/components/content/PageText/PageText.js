import React from 'react';
import classes from './PageText.module.css';

const pageText = (props) => {
    const text = {
        'aszf': <section><h2> ÁSZF </h2> <p>Szövege szövege</p></section>,
        'adatkezeles': <section><h2> Adatkezelés </h2> <p>Szöveg szöveg asd</p></section>,
    };
    return (
        <div className={classes.PageText}>
            {text[props.txt]}
        </div>
    );
};

export default pageText;