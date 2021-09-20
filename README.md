# CURRENCY CONVERTER APP

Small web app that allows you to convert exchange rates between different currencies using the last exchange rates available online through https://fixer.io/ API. The currency display information is loaded into the form upon loading the page ('/'). When submiting the form the amount entered will be converted/exchanged and returned to the user in the second input box.

As it is a async/await call you might see a loading message while the conversion is made. I've set the default values in the convert to EUR and CZK. If the page refreshes these values will be loaded. If the first (top) input inbox is empty an amount will be requested.

**Features**

* NodeJS
* Express
* EJS
* Axios
* Chalk (just for code debug and terminal print) :)
* CMD-ENV
* Bootstrap
* JQuery
* Sass

**Status**
* Application deployed using Heroku at https://i-coin.herokuapp.com;
* Working on error handling;

**Upgrades**

* Display the Exchange Date;
* Complete the About Page - DONE;
* Fix broken GitHub link - DONE;
* Add Fixer.io link on about page;
* Use Selectize;
* UI improvement.

**Problems**

* Environment Variables - FIXED;
* If the value entered is using a float number using comma (,) type NaN will be returned, in the UI the user * will see the error 'Please enter a valid number value'. The workaround for now is to use dot (.);
