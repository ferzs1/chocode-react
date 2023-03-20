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
		privacy: {
			type: 'checkbox',
			config: {
				label: 'Az Adatkezelési tájékoztatót elolvastam.*',
			},
			validation: {
				required: true,
			},
			value: '',
			valid: false,
			shouldValidate: true,
			touched: false,
		},
		accept: {
			type: 'checkbox',
			config: {
				label: 'Fel szeretnék iratkozni a ChoCode hírlevélre.*',
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

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);

	const onInputChangeHandler = (event, inputId) => {
		let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		const updatedFormElement = {
			...formData[inputId],
			value: value,
			valid: checkValidity(value, formData[inputId].validation, event.target.type),
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

	const applyHandler = () => {
		// TODO
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
				touched={data.touched}
				valid={data.valid}
				change={(event) => onInputChangeHandler(event, element)}
			/>
		);
	});

	if (loading) {
		return <Spinner />;
	}

	return (
		<section className={classes.Form}>
			<div>Hírlevélre való feliratkozás</div>
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
