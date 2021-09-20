require('dotenv').config({ path: 'config.env' });

const express = require('express');
const convertRoute = require('./routes/convert');
const path = require('path');
const port = process.env.PORT;
const app = express();
// ------------------------------------------------ \\

// -- SERVE PUBLIC DIRECTORY, BOOTSTRAP & JQUERY -- \\
const publicDir = express.static(path.join(__dirname, '../public')),
	cssDir = express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')),
	jsDir = express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')),
	jqDir = express.static(path.join(__dirname, '../node_modules/jquery/dist/'));
// ------------------------------------------------- \\

app.use(publicDir);
app.use(cssDir);
app.use(jsDir);
app.use(jqDir);

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(convertRoute);

app.get('*', (req, res) => {
	res.send('Page Not Found!');
});

app.listen(port, () => {
	console.log(`\nServer Running on Port -> ${port}\n`);
});
