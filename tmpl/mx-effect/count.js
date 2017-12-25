/*
ver:1.3.10
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let FX = require('../mx-runner/fx');
module.exports = Magix.View.extend({
    mixins: [FX],
    init(extra) {
        let me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me['@{fx}'] = me['@{getFX}']();
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        me['@{new.value}'] = +ops.value;
        me['@{duration}'] = +ops.duration || 500;
        me['@{number.fixed}'] = +ops.fixed || 0;
        me['@{fx}']['@{stop}']();
        return true;
    },
    render() {
        let me = this;
        let node = me['@{owner.node}'];
        let tag = node.prop('tagName');
        let fx = me['@{fx}'];
        let nValue = me['@{new.value}'];
        let key = (tag == 'INPUT' || tag == 'TEXTAREA') ? 'val' : 'html';
        let oValue = +node[key]();
        fx['@{run}'](me['@{duration}'], alg => {
            node[key](alg(oValue, nValue).toFixed(me['@{number.fixed}']));
        });
    }
});