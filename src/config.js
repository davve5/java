const Validator = require('./Validator');

const questions = [
	{
		type: 'text',
		name: 'city',
		message: 'Enter a city',
		validate: (value) => Validator.isCityValid(value),
	},
	{
		type: 'text',
		name: 'name',
		message: 'Enter a name',
		validate: (value) => Validator.isNameValid(value),
	},
	{
		type: 'text',
		name: 'lastName',
		message: 'Enter a surename',
		validate: (value) => Validator.isLastNameValid(value),
	},
	{
		type: 'text',
		name: 'pesel',
		message: 'Enter a pesel',
		validate: (value) => Validator.isValidPesel(value),
	},
];

const goNextQuestion = {
	type: 'toggle',
	name: 'goNext',
	message: 'Czy chcesz wpisywać dalej?',
	initial: true,
	active: 'yes',
	inactive: 'no',
};

module.exports = {
	questions,
	goNextQuestion,
};