/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/ctrl",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    init: function () {
        this.$left = 200;
        this.$node = $('#' + this.id);
    },
    assign: function (data, ops) {
        console.log(data, ops);
        this.$node.css({
            left: this.$left += 20
        });
    }
});

});