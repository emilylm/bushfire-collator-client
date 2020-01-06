import React from "react";

export const customStylesCity = {
	container: styles => ({
		...styles,
		width: '150px',
		maxHeight: '31px',
		height: '31px',
		//marginBottom: '5px',
	}),
	control: (styles, { isFocused, isDisabled }) => ({
		...styles,
		width: '99%',
		height: '31px',
		minHeight: '31px',
		maxHeight: '31px',
		backgroundColor: 'white',
		borderRadius: '0px',
		boxShadow: '0px',
		borderWidth: isDisabled
			? '0px' : '1px',
		borderStyle: 'solid',
    borderColor: isFocused
    ? '#2684ff' : '#ced4da',
		paddingLeft: '8px',
		paddingRight: '1px',
    '&:hover': { borderColor: '#2684ff' },
    '&:focus': { borderColor: '#2684ff' }
	}),
	option: (styles, { isSelected, isFocused }) => ({
		...styles,
		height: '31px',
		maxHeight: '31px',
		fontSize: '.875rem',
		paddingTop: '5px',
		paddingBottom: '5px'
	}),
	input: styles => ({
		...styles,
		fontSize: '.875rem',

	}),
	singleValue: styles => ({
		...styles,
		fontSize: '1rem',
		color: '#495057',
	}),
	valueContainer: styles => ({
		...styles,
		position: 'none',
		padding: '0px',
	}),
	indicatorsContainer: (styles, { isDisabled }) => ({
		...styles,
		height: '31px',
		maxHeight: '31px',
		padding: '0px',
		color: isDisabled ? 'transparent' : '#ced4da',
	}),
  indicatorSeparator: (styles, { isDisabled }) => ({
		...styles,
		backgroundColor: 'transparent',
	}),
	dropdownIndicator: (styles, { isDisabled }) => ({
		...styles,
		paddingTop: '4px',
		paddingRight: '4px',
		paddingBottom: '4px',
		paddingLeft: '4px',
		color: isDisabled ? 'transparent' : 'hsl(0,0%,60%)',
	}),
	placeholder: (styles, { isDisabled }) => ({
		...styles,
		height: '21px',
		maxHeight: '21px',
		fontSize: '1rem',
		color: isDisabled ? 'transparent' : '#ced4da',
	}),
  menu: provided => ({ ...provided, zIndex: 9999 })
};

export const customStylesState = {
	container: styles => ({
		...styles,
		width: '200px',
		maxHeight: '31px',
		height: '31px',
		//marginBottom: '5px',
	}),
	control: (styles, { isFocused, isDisabled }) => ({
		...styles,
		width: '99%',
		height: '31px',
		minHeight: '31px',
		maxHeight: '31px',
		backgroundColor: 'white',
		borderRadius: '0px',
		boxShadow: '0px',
		borderWidth: isDisabled
			? '0px' : '1px',
		borderStyle: 'solid',
		borderColor: isFocused
    ? '#2684ff' : '#ced4da',
		paddingLeft: '8px',
		paddingRight: '0px',
    '&:hover': { borderColor: '#2684ff' }
	}),
	option: (styles, { isSelected, isFocused }) => ({
		...styles,
		height: '31px',
		maxHeight: '31px',
		fontSize: '.875rem',
		paddingTop: '5px',
		paddingBottom: '5px'
	}),
	input: styles => ({
		...styles,
		fontSize: '.875rem',

	}),
	singleValue: styles => ({
		...styles,
		fontSize: '1rem',
		color: '#495057',
	}),
	valueContainer: styles => ({
		...styles,
		position: 'none',
		padding: '0px',
	}),
	indicatorsContainer: (styles, { isDisabled }) => ({
		...styles,
		height: '31px',
		maxHeight: '31px',
		padding: '0px',
		color: isDisabled ? 'transparent' : '#ced4da',
	}),
	indicatorSeparator: (styles, { isDisabled }) => ({
		...styles,
		backgroundColor: 'transparent',
	}),
	dropdownIndicator: (styles, { isDisabled }) => ({
		...styles,
		paddingTop: '4px',
		paddingRight: '4px',
		paddingBottom: '4px',
		paddingLeft: '4px',
		color: isDisabled ? 'transparent' : 'hsl(0,0%,60%)',
	}),
	placeholder: (styles, { isDisabled }) => ({
		...styles,
		height: '21px',
		maxHeight: '21px',
		fontSize: '.875rem',
		color: isDisabled ? 'transparent' : '#ced4da',
	}),
  menu: provided => ({ ...provided, zIndex: 9999 })
};
