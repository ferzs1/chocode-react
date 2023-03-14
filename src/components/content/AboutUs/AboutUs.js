import React from 'react';
import classes from './AboutUs.module.css';

const aboutUs = (props) => {
	return (
		<section className={classes.Section} id="about-us">
			<h2 className={classes.Header}>Rólunk</h2>
			<h3 className={classes.Subheader}>Motiváció</h3>
			<p>
				A ChoCode csapata hisz abban, hogy bármit el lehet sajátítani, ha az
				ember megkapja a megfelelő eszközöket, és emellett eléggé elszánt és
				kitartó. Célunk, hogy lehetőséget biztosítsunk mindazok számára, akik
				még soha nem programoztak, hogy betekintést nyerhessenek a kódolás
				izgalmas világába. Közérthetően, játékosan próbáljuk elősegíteni a
				programozás elsajátítását, a mindennapi életben felmerülő problémákra
				próbáljuk fektetni a hangsúlyt, hogy a képzés végére az ember önállóan
				is meg tudjon oldani olyan feladatokat, melyek a hétköznapokban gyakran
				előkerülnek.
			</p>
			<h3 className={classes.Subheader}>Hogy miért válassz minket?</h3>
			<ul>
				<li>
					programozási készségeket fejlesztünk kezdőknek és olyanoknak, akik már
					kicsit belekóstoltak a programozók életébe, és szeretnék elmélyíteni
					tudásukat
				</li>
				<li>heti egyszer másfél órában tanulhatsz, munka, iskola után</li>
				<li>
					önállóan is elvégezhető bármely képzésünk, nem szükséges jelen lenned
					az online órákon
				</li>
				<li>
					segítünk a kezdeti nehézségeket legyőzni átfogó képet adunk arról,
					mire is kell számítanod, ha programozó szeretnél lenni
				</li>
				<li>
					széleskörű eszköztár áll rendelkezésünkre, melyet a képzés során
					igénybe vehetsz
				</li>
				<li>
					több programnyelv közül választhatsz, hogy a neked megfelelő irányba
					mehess később tovább
				</li>
			</ul>
			<h3 className={classes.Subheader}>Kedvezmények</h3>
			<p className={classes.Discounts}>
				az itt felsorolt kedvezményekről további információt <a href="/discounts">itt</a> találhatsz
			</p>
		</section>
	);
};

export default aboutUs;
