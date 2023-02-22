import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import img from '../../../assets/images/banner.jpg'
import Aux from '../../../hoc/Aux/Aux';
import classes from './Header.module.css';

const header = (props) => {
    return (
        // <Aux>
            <ParallaxBanner
                // style={{height: '650px', width:'100vw', padding: '0', margin: '0'}}
                // layers={[{ image: img, speed: -90}]}
                className={classes.Header}
            >
                <h1>Programozás<span className={classes.Dot}>.</span></h1>
                <h2>Könnyen<span className={classes.Dot}>.</span> Érthetően<span className={classes.Dot}>.</span></h2>
                <ParallaxBannerLayer image={img} speed={-90} style={{zIndex: '-100', backgroundSize: 'cover', inset: '-300px 0'}}/>
            </ParallaxBanner>
        // </Aux>
    );
};

export default header;