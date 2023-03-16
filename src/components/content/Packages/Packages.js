import React from 'react';
import PackageComp from './Package/Package';
import classes from './Packages.module.css';

const packages = (props) => {
	let eco = {
		'tananyag, feladatok': true,
		'bármely programozási nyelv': true,
		'online órákon való részvétel (10x90 perc)': false,
		'kiegészítő tananyag': false,
		'házi feladat ellenőrzés': false,
		'1-on-1 mentorálás (4x45 perc)': false,
	};
	let pro = {
		'tananyag, feladatok': true,
		'bármely programozási nyelv': true,
		'online órákon való részvétel (10x90 perc)': true,
		'kiegészítő tananyag': true,
		'házi feladat ellenőrzés': true,
		'1-on-1 mentorálás (4x45 perc)': false,
	};

	let vip = {
		'tananyag, feladatok': true,
		'bármely programozási nyelv': true,
		'online órákon való részvétel (10x90 perc)': true,
		'kiegészítő tananyag': true,
		'házi feladat ellenőrzés': true,
		'1-on-1 mentorálás (4x45 perc)': true,
	};
	return (
		<section className={classes.Main} id="packages">
			<h2 className={classes.Header}>Csomagjaink</h2>
			<section className={classes.Packages}>
				<PackageComp
					name={'ECO csomag'}
					price={'44.900 Ft'}
					content={eco}
				></PackageComp>
				<PackageComp
					name={'PRO csomag'}
					price={'59.900 Ft'}
					content={pro}
				></PackageComp>
				<PackageComp
					name={'VIP csomag'}
					price={'159.900 Ft'}
					content={vip}
				></PackageComp>
			</section>
		</section>
	);
};

export default packages;
