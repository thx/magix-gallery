/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-effect/count',["magix","$","../mx-runner/fx"],function(require,exports,module){
/*Magix,$,FX*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
var FX = require('../mx-runner/fx');
module.exports = Magix.View.extend({
    mixins: [FX],
    init: function (extra) {
        var me = this;
        me['_h'] = $('#' + me.id);
        me['_bH'] = me['_bI']();
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['_bJ'] = +ops.to;
        me['_bK'] = +ops.duration || 500;
        me['_bL'] = +ops.fixed || 0;
        me['_bH']['_bA']();
        return true;
    },
    render: function () {
        var me = this;
        var node = me['_h'];
        var tag = node.prop('tagName');
        var fx = me['_bH'];
        var nValue = me['_bJ'];
        var key = (tag == 'INPUT' || tag == 'TEXTAREA') ? 'val' : 'html';
        var oValue = +node[key]();
        fx['_bM'](me['_bK'], function (alg) {
            node[key](alg(oValue, nValue).toFixed(me['_bL']));
        });
    }
});

});