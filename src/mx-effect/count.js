/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/count",["magix","$","../mx-runner/fx"],(require,exports,module)=>{
/*Magix,$,FX*/

/*
ver:2.0.6
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
        me['@{owner.node}'] = $('#' + me.id);
        me['@{fx}'] = me['@{getFX}']();
        me.assign(extra);
    },
    assign: function (ops, ctrl) {
        var me = this;
        if (ctrl)
            ctrl.deep = 0;
        me['@{new.value}'] = +ops.value;
        me['@{duration}'] = +ops.duration || 500;
        me['@{number.fixed}'] = +ops.fixed || 0;
        me['@{fx}']['@{stop}']();
        return true;
    },
    render: function () {
        var me = this;
        var node = me['@{owner.node}'];
        var tag = node.prop('tagName');
        var fx = me['@{fx}'];
        var nValue = me['@{new.value}'];
        var key = (tag == 'INPUT' || tag == 'TEXTAREA') ? 'val' : 'html';
        var oValue = +node[key]();
        fx['@{run}'](me['@{duration}'], function (alg) {
            node[key](alg(oValue, nValue).toFixed(me['@{number.fixed}']));
        });
    }
});

});