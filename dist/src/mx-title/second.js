/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/second",["magix","$","mx-title/base"],(require,exports,module)=>{
/*Magix,$,Base*/

var Magix = require("magix");
var $ = require("$");
var Base = require("mx-title/base");
module.exports = Base.extend({
    render: function () {
        this.updater.digest({
            second: true
        });
    }
});

});