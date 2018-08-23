/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    render: function () {
        var node = $('#' + this.id);
        node.attr('type', 'checkbox');
        ['checked', 'disabled', 'indeterminate'].forEach(function (key) {
            if (typeof (node.attr('mx-' + key)) == 'undefined') {
                node.prop(key, false);
            }
            else {
                node.prop(key, true);
            }
        });
    }
});

});