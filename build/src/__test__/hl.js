/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/hl",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    assign: function (data, ops) {
        ops.deep = false;
        if (ops.html) {
            $('#' + this.id).html(ops.inner);
        }
        return ops.html;
    },
    render: function () {
        var node = Magix.node(this.id);
        hljs.highlightBlock(node);
    }
});

});