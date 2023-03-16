import React, { useState, useEffect } from 'react';
import classes from './SubscriptionForm.module.css';
import Input from '../../components/UI/Input/Input';
import { checkValidity } from '../../shared/utility';
import Spinner from '../../components/UI/Spinner/Spinner';

const SubscriptionForm = (props) => {
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
			valid: false,
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
			valid: false,
			shouldValidate: false,
			touched: false,
		},
	});
	const [formIsValid, setFormIsValid] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// remove it TODO
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);

	const onInputChangeHandler = (event, inputId) => {
		const updatedFormElement = {
			...formData[inputId],
			value: event.target.value,
			valid: checkValidity(event.target.value, formData[inputId].validation),
			touched: true,
		};
		const updatedOrderForm = { ...formData, [inputId]: updatedFormElement };

		let formIsValid = true;
		for (let key in updatedOrderForm) {
			formIsValid = updatedOrderForm[key].valid && formIsValid;
		}
		setFormIsValid(formIsValid);
		setFormData(updatedOrderForm);
	};

	const applyHandler = () => {};

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
				touched={data.touched}
				change={(event) => onInputChangeHandler(event, element)}
			/>
		);
	});

	if (loading) {
		return <Spinner />;
	}

	return (
		<section className={classes.Form}>
			<div>Töltsd ki az alábbi űrlapot!</div>
			<form className={classes.Subform}>
				{formInner}
				<button onClick={applyHandler} className={classes.Button}>
					KÜLDÉS
				</button>
			</form>
		</section>
	);
};

export default SubscriptionForm;
