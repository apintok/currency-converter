const axios = require('axios'),
	api = 'http://data.fixer.io/api/latest?access_key=' + process.env.API_KEY + '&format=1';
// -------------------------------------------------------------------------------------------------- \\
const chalk = require('chalk');
(log = console.log), (err = chalk.bold.red), (msg = chalk.bold.blue), (warn = chalk.bold.yellow);
// ------------------------------- \\

const getCurrencies = async () => {
	try {
		log(msg(api));
		return axios.get(api); // Returns the API Promise Object
	} catch (error) {
		throw error || new Error('Unable to Connect to Currency Exchange API.');
	}
};

const convertCurrency = async (currencyAmount = 1, currencyFrom = 'EUR', currencyTo = 'EUR') => {
	try {
		const { data } = await getCurrencies();

		log(warn('CURRENCY FROM: ') + currencyFrom + warn(' CURRENCY TO: ') + currencyTo);

		const valueInEur = (1 / data.rates[currencyFrom]) * currencyAmount;
		log(warn('EXCHANGE RATE: ') + data.rates[currencyFrom]);
		log(warn('VALUE IN EUROS: ') + valueInEur);
		log(msg('RESULT: ') + data.rates[currencyTo] * valueInEur);
		return data.rates[currencyTo] * valueInEur;
	} catch (err) {
		log(err('ERROR: ') + err);
	}
};

module.exports = { getCurrencies, convertCurrency };
