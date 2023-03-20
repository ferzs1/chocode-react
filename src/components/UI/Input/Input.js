import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
	let inputElement = null;
	let label = <label className={classes.Label}>{props.label}</label>;
	const inputClasses = [classes.InputElement];
	if (props.touched && !props.valid && props.shouldValidate) {
		inputClasses.push(classes.Invalid);
	}

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					// {...props.elementConfig}
					value={props.value}
					onChange={props.change}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.change}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select className={classes.Select} onChange={props.change}>
					{props.elementConfig.options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.name}
						</option>
					))}
				</select>
			);
			break;
		case 'checkbox':
			label = null;
			inputElement = (
				<span>
					<input
						type="checkbox"
						required={props.required}
						name={props.name}
						id={props.name}
						style={{display: 'inline', width: '40px'}}
						onChange={props.change}
						/>
					<label className={classes.Label} htmlFor={props.name}
						style={{display: 'inline', width: '40px'}}
					>
						{props.label}
					</label>
				</span>
			);
			break;
		default:
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.change}
				/>
			);
	}

	return (
		<div className={classes.Input}>
			{label}
			{inputElement}
		</div>
	);
};

export default input;
