/*
ver:1.3.8
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        me['@{number}'] = ops.number | 0 || 5;
        me['@{value}'] = ops.value | 0 || 0;
        me['@{readonly}'] = (ops.readonly + '') === 'true';
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            readonly: me['@{readonly}'],
            value: me['@{value}'],
            number: me['@{number}']
        });
    },
    '@{hover}<mouseover,mouseout>'(e) {
        let me = this;
        if (me['@{readonly}']) return;
        clearTimeout(me['@{delay.timer}']);
        me['@{delay.timer}'] = setTimeout(me.wrapAsync(() => {
            let value = e.params.i + 1;
            me.updater.digest({
                value: e.type == 'mouseout' ? me['@{value}'] : value
            });
            if (e.type == 'mouseover') {
                me['@{owner.node}'].trigger({
                    type: 'itemover',
                    value
                });
            } else {
                me['@{owner.node}'].trigger({
                    type: 'itemout',
                    value: me['@{value}']
                });
            }
        }), 0);
    },
    '@{setValue}<click>'(e) {
        let me = this;
        if (me['@{readonly}']) return;
        let last = me['@{value}'];
        let value = e.params.i + 1;
        if (value != last) {
            me['@{value}'] = value;
            me['@{owner.node}'].prop({ value }).trigger({
                type: 'change',
                value
            });
        }
    }
});