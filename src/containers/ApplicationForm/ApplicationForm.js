import React, { useState, useEffect } from 'react';
import classes from './ApplicationForm.module.css';
import Input from '../../components/UI/Input/Input';
import { checkValidity } from '../../shared/utility';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';

const ApplicationForm = (props) => {
	const [formData, setFormData] = useState({
		name: {
			type: 'text',
			config: {
				label: 'Név',
			},
			validation: {
				required: true,
				minLength: 2,
			},
			value: '',
			valid: false,
			shouldValidate: true,
			touched: false,
		},
		email: {
			type: 'email',
			config: {
				label: 'Email cím',
			},
			validation: {
				required: true,
				isEmail: true,
			},
			value: '',
			valid: false,
			shouldValidate: true,
			touched: false,
		},
		address: {
			type: 'text',
			config: {
				label: 'Cím',
			},
			validation: {
				required: true,
				minLength: 8,
			},
			value: '',
			valid: false,
			shouldValidate: true,
			touched: false,
		},
		course: {
			type: 'select',
			config: {
				label: 'Melyik kurzusra jelentkezel?',
				options: [
					{ name: 'Python kezdő', value: 'python-beg' },
					{ name: 'Python haladó', value: 'python-adv' },
					{ name: 'JavaScript kezdő', value: 'js-beg' },
					{ name: 'JavaScript haladó', value: 'js-adv' },
				],
			},
			validation: {
				required: true,
			},
			value: 'python-beg',
			valid: true,
			shouldValidate: false,
			touched: false,
		},
		package: {
			type: 'select',
			config: {
				label: 'Melyik csomagot vennéd igénybe?',
				options: [
					{ name: 'ECO csomag', value: 'eco' },
					{ name: 'PRO csomag', value: 'pro' },
					{ name: 'VIP csomag', value: 'vip' },
				],
			},
			validation: {
				required: true,
			},
			value: 'eco',
			valid: true,
			shouldValidate: false,
			touched: false,
		},
		aszf: {
			type: 'checkbox',
			config: {
				label: 'Elolvastam az ÁSZF-et.*',
			},
			validation: {
				required: true,
			},
			value: '',
			valid: false,
			shouldValidate: true,
			touched: false,
		},
		datapriv: {
			type: 'checkbox',
			config: {
				label: 'Elolvastam az adatkezelési tájékoztatót.*',
			},
			validation: {
				required: true,
			},
			value: '',
			valid: false,
			shouldValidate: true,
			touched: false,
		},
	});
	const [formIsValid, setFormIsValid] = useState(false);
	const [loading, setLoading] = useState(true);
	const [appliedState, setAppliedState] = useState(false);

	useEffect(() => {
		// remove it TODO
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);

	const onInputChangeHandler = (event, inputId) => {
		const updatedFormElement = {
			...formData[inputId],
			value:
				event.target.type === 'checkbox'
					? event.target.checked
					: event.target.value,
			valid: checkValidity(
				event.target.type === 'checkbox'
					? event.target.checked
					: event.target.value,
				formData[inputId].validation,
				event.target.type
			),
			touched: true,
		};
		const updatedOrderForm = { ...formData, [inputId]: updatedFormElement };

		let formIsValid = true;
		for (let key in updatedOrderForm) {
			formIsValid = updatedOrderForm[key].valid && formIsValid;
		}
		console.log('form is valid:' + formIsValid);
		setFormIsValid(formIsValid);
		setFormData(updatedOrderForm);
	};

	const applyHandler = (event) => {
		setLoading(true);
		event.preventDefault();
		const data = {};
		for (let datum in formData) {
			data[datum] = formData[datum].value;
		}
		// save application to db, TODO
		axios.post('http://react-app.chocode.org/api/applications/save', {
			data: data
		}).then( resp => {
			console.log(resp.data);
		});
		;
		// send user to thank you page
		setAppliedState(true);
		setLoading(false);
	};

	let formInner = Object.keys(formData).map((element) => {
		const data = formData[element];
		return (
			<Input
				key={element}
				elementType={data.type}
				elementConfig={data.config}
				label={data.config.label}
				validation={data.validation}
				shouldValidate={data.shouldValidate}
				valid={data.valid}
				touched={data.touched}
				change={(event) => onInputChangeHandler(event, element)}
			/>
		);
	});

	if (loading) {
		return <Spinner />;
	}
	let cls = [classes.Button, !formIsValid ? classes.ButtonInactive : null];

	let form = (
		<section className={classes.Form}>
			<div>Töltsd ki az alábbi űrlapot!</div>
			<form className={classes.Subform}>
				{formInner}
				<button
					onClick={applyHandler}
					className={cls.join(' ')}
					disabled={!formIsValid}
				>
					KÜLDÉS
				</button>
			</form>
		</section>
	);

	return appliedState ? (
		<p className={classes.ThankYou}>
			Köszönjük a jelentkezést! <a href="/">Vissza a főoldalra!</a>
		</p>
	) : (
		form
	);
};

export default ApplicationForm;
