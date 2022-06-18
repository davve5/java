const Validator = require('../Validator');
const Service = require('../Service');

describe('Validator tests', () => {
	test('should return ture if peses is valid', () => {
		const femalePesel = '55090221628';
		const malePesel = '66120852455';
		expect(Validator.isValidPesel(femalePesel)).toBeTruthy();
		expect(Validator.isValidPesel(malePesel)).toBeTruthy();
	});
	test('should return ture false peses is valid', () => {
		const femalePesel = '55090221624';
		const malePesel = '66120852453';
		expect(Validator.isValidPesel(femalePesel)).toBeFalsy();
		expect(Validator.isValidPesel(malePesel)).toBeFalsy();
	});
})

describe('Service tests', () => {

	test('should return ture if person is in People Map', () => {
		const service = new Service()
		const person = { city: 'Warsaw', name: 'Dawid', lastName: 'Kowalski', pesel: '55090221628' }
		service.insert(person)
		expect(service.people.has(person.pesel)).toBeTruthy();
	});
	test('should return ture if person is not in People Map', () => {
		const service = new Service()
		const person = { city: 'Warsaw', name: 'Dawid', lastName: 'Kowalski', pesel: '55090221628' }
		expect(service.people.has(person.pesel)).toBeFalsy();
	});
})