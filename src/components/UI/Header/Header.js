import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import img from '../../../assets/images/banner.jpg'
import classes from './Header.module.css';
import Button from '../Button/Button';

const header = (props) => {
    return (
        <ParallaxBanner
            // style={{height: '650px', width:'100vw', padding: '0', margin: '0'}}
            // layers={[{ image: img, speed: -90}]}
            className={classes.Header}
        >
            <h1>Programozás<span className={classes.Dot}>.</span></h1>
            <h2>Könnyen<span className={classes.Dot}>.</span> Érthetően<span className={classes.Dot}>.</span></h2>
            <p className={classes.Text}>Tanulj meg kódolni az alapoktól online. Szeretnél betekintést nyerni a programozás világába, 
                de úgy érzed, neked ez nem menne? Mi biztosítunk afelől, 
                hogy képes vagy rá! <a href="/apply">Jelentkezz</a> a ChoCode fejlesztés-sorozataira most!</p>
            <div className={classes.Buttons}>
                <Button type="Normal" href="#packages">Csomagjaink</Button>
                <Button type="CTA" href="/apply">Jelentkezés</Button>
            </div>
            <ParallaxBannerLayer image={img} speed={-90} style={{zIndex: '-100', backgroundSize: 'cover', inset: '-300px 0'}}/>
        </ParallaxBanner>
    );
};

export default header;