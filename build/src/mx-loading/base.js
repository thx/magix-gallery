/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/base",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

var $ = require("$");
var Magix = require("magix");
module.exports = {
    ctor: function () {
        var me = this;
        var maskId = me.id + '_loading';
        me.on('destroy', function () {
            me.hideLoading();
            var node = $('#' + maskId);
            if (node && node.length) {
                node.remove();
            }
            var backNode = $('#' + maskId + '_mask');
            if (backNode && backNode.length) {
                backNode.remove();
            }
        });
    },
    hideLoading: function () {
        var me = this;
        var maskId = me.id + '_loading';
        var node = me['@{loading.build}']();
        node.css({
            display: 'none'
        });
        var backNode = $('#' + maskId + '_mask');
        if (backNode.length > 0) {
            backNode.css({
                display: 'none'
            });
        }
    }
};

});