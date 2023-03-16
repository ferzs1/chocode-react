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
		accept: {
			type: 'checkbox',
			config: {

			},
			validation: {
				required: true,
			},
			valid: false,
			shouldValidate: true,
			touched: false,
		}
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
