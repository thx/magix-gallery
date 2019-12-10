let Chartx = require('../../chartpark/index');
debugger
Chartx = Chartx.default || Chartx;

let ChartFactory = require('./chart');

let View = ChartFactory(Chartx);

module.exports = View;