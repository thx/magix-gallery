/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/count",["magix","$","../mx-runner/fx"],(require,exports,module)=>{
/*Magix,$,FX*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var FX = require("../mx-runner/fx");
module.exports = Magix.View.extend({
    mixins: [FX],
    init: function (extra) {
        var me = this;
        me['__i'] = $('#' + me.id);
        me['__cD'] = me['__cE']();
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['__cF'] = +ops.value;
        me['__cG'] = +ops.duration || 500;
        me['__cH'] = +ops.fixed || 0;
        me['__cD']['__as']();
        return true;
    },
    render: function () {
        var me = this;
        var node = me['__i'];
        var tag = node.prop('tagName');
        var fx = me['__cD'];
        var nValue = me['__cF'];
        var key = (tag == 'INPUT' || tag == 'TEXTAREA') ? 'val' : 'html';
        var oValue = +node[key]();
        fx['__cI'](me['__cG'], function (alg) {
            node[key](alg(oValue, nValue).toFixed(me['__cH']));
        });
    }
});

});