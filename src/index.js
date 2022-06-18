const prompt = require('prompts');
const { questions, goNextQuestion } = require('./config');
const Service = require('./Service');

const service = new Service();

async function main() {
	while (true) {
		const response = await prompt(questions);

		service.insert(response);

		if (!(await prompt(goNextQuestion)).goNext) {
			service.write();
			break;
		}
		// service.print();
	}
}

main();
