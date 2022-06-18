const fs = require('fs');

class Service {
	constructor() {
		this.people = new Map();
		this.cities = new Map();
	}

	insert({ city, name, lastName, pesel }) {
		this.people.set(pesel, { name, lastName, pesel });
		
		if (!this.cities.has(city)) {
			this.cities.set(city, new Map());
		}

		for (const city of this.cities.values()) {
			if (city.has(pesel)) {
				city.delete(pesel);
			};
		}

		const people = this.cities.get(city);
		people.set(pesel, this.people.get(pesel))
		this.cities.set(city, people);
	}

	write() {
		fs.writeFileSync(`./dawid.json`, JSON.stringify(Object.fromEntries(this.people)));
	}

	print() {
		console.log(Object.fromEntries(this.cities));
	}
}

module.exports = Service;
