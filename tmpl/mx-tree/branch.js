/*
ver:1.3.4
*/
/*
    author:xinglie.lkf@taobao.com
 */
'ref@./index.less';
let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: '@branch.html',
    init(extra) {
        let me = this;
        me.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest({
            id: me.id
        });
    },
    checkAll(state) {
        $('#' + this.id + ' input[type="checkbox"]').prop('checked', state);
    },
    '@{toggle}<click>' (e) {
        let node = $('#' + this.id + '_' + e.params.id);
        let current = $(e.eventTarget).find('span');
        let val = $.trim(current.html());
        if (val == '+') {
            node.slideDown();
            current.html('-');
        } else {
            node.slideUp();
            current.html('+');
        }
    },
    '@{check}<change>' (e) {
        let me = this;
        let vf = Magix.Vframe.get(me.id + '_' + e.eventTarget.value);
        if (vf) {
            vf.invoke('checkAll', [e.eventTarget.checked]);
        }
    }
});