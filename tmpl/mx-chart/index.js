let Chartx = require('../../chartpark/index');
Chartx = Chartx.default || Chartx;

let ChartFactory = require('./chart');

let View = ChartFactory(Chartx);

module.exports = View;