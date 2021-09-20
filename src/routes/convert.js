const express = require('express'),
	{ getCurrencies, convertCurrency } = require('../utils/currencyData'),
	router = new express.Router();
// -------------------------------------------------------------------------- \\
const chalk = require('chalk');
(log = console.log), (err = chalk.bold.red), (msg = chalk.bold.blue), (warn = chalk.bold.yellow);
// -------------------------------------------------------------------------- \\

router.get('/', async (req, res) => {
	try {
		const { data } = await getCurrencies();
		log(warn(JSON.stringify(data)));
		res.render('index', {
			currency: Object.keys(data.rates),
			date: data.date
		});
	} catch (e) {
		log(err(e));
		res.status(404).send(e.message);
	}
});

router.get('/currencies', async ({ query }, res) => {
	try {
		const { amount, currencyFrom, currencyTo } = query;

		if (!amount) {
			return res.send({
				error: 'Please provide an amount to convert!'
			});
		}

		var result = await convertCurrency(amount, currencyFrom, currencyTo);
		res.send({
			result
		});
	} catch (e) {
		log(err(e));
		res.status(500).send();
	}
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/github', (req, res) => {
	res.redirect('https://github.com/ptnerd/currency-converter');
});

router.get('/fixer', (req, res) => {
	res.redirect('https://fixer.io');
});

module.exports = router;
