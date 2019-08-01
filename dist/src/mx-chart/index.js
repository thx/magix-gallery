/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-chart/index",["../../chartpark/index","./chart"],(require,exports,module)=>{
/*Chartx,ChartFactory*/

var Chartx = require("../../chartpark/index");
Chartx = Chartx["default"] || Chartx;
var ChartFactory = require("./chart");
var View = ChartFactory(Chartx);
module.exports = View;

});