/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me['@{owner.node}'].addClass('@index.less:as-input');
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        me['@{width}'] = +ops.width || 340;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{value}'] = +ops.value || 0;
        me['@{fixed}'] = +ops.fixed || 0;
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            width: me['@{width}']
        });
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('@index.less:notallowed');
        me.val(me['@{value}']);
    },
    val(v) {
        let me = this;
        let nv = +v;
        if (nv || nv === 0) {
            if (nv < 0) nv = 0;
            else if (nv > 1) nv = 1;
            let rail = me['@{owner.node}'].find('.@index.less:rail');
            let rWidth = rail.width();
            let left = rWidth * nv;
            let tracker = me['@{owner.node}'].find('.@index.less:tracker');
            tracker.width(left);
            let indicator = me['@{owner.node}'].find('.@index.less:pointer-label');
            let text = (nv * 100).toFixed(me['@{fixed}']) + '%';
            indicator.html(text);
            let w = indicator.width();
            left -= w / 2;
            if (left < 0) left = 0;
            else if (left > (rWidth - w)) left = rWidth - w;
            indicator.css({
                left
            });
            me['@{value}'] = nv;
        }
        return me['@{value}'];
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});