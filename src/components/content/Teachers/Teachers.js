import React from 'react';
import Teacher from './Teacher/Teacher';
import classes from './Teachers.module.css';

const teachers = (props) => {
	const teachers = [
		{
			name: 'Ferenczi Zsanett',
			intro: [
				'Ferenczi Zsanett vagyok, a ChoCode alapítója, számítógépes nyelvész, programozó és a PPKE Doktori Iskolájának hallgatója.',
				'Már gimnáziumban is szerettem programozni, eleinte csak hobbiszinten, 2016-ban azonban elköteleztem magam a kódolás mellett, és időm nagy részét ez tölti ki. Ez idő alatt több programnyelvet is volt lehetőségem megismerni. Már több éve foglalkozom mentorálással, fejlesztéssel, korrepetálással, mindig is szerettem volna átadni tudásomat másoknak, irányt mutatni, segítséget nyújtani.',
				'Hiszem, hogy a programozáshoz jóval több kreativitás kell, mint matematika, valamint sokkal inkább elhivatottság, érdeklődés és idő kérdése. Ez utóbbi miatt tartom hasznosnak, hogy valaki akár munka mellett is kipróbálhassa magát a kódolásban.',
				'Célom, hogy a kódolást ne csak egyszerűen megtanítsam, hanem meg is szerettessem veled. Olyan stabil alapot szeretnék adni, amivel a későbbiekben akár magadat is képezheted, hosszú hónapokat, éveket spórolva.',
				'Ha bármilyen kérdésed lenne, a következő e-mail címen érhetsz el: hello@chocode.org',
			],
			image: 'zsani.jpg',
		},
	];
	const teachersJsx = teachers.map((teacher) => (
		<li key={teacher.name}>
			<Teacher name={teacher.name} intro={teacher.intro} img={teacher.image} />
		</li>
	));
	return (
		<div id="teachers" className={classes.Teachers}>
			<h2 className={classes.Header}>Tanáraink</h2>
			<ul className={classes.TeacherList}>{teachersJsx}</ul>
			<span className={classes.Text}>
				Mindig is gondolkoztál, vajon menne-e a programozás? A döntés a te
				kezedben van. Jelentkezz kurzusainkra <a href="/apply">itt</a>!
			</span>
		</div>
	);
};

export default teachers;
