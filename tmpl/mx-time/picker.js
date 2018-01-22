/*
ver:2.0.3
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@picker.less');
let format = t => {
    if (t < 10) return '0' + t;
    return t;
};
module.exports = Magix.View.extend({
    tmpl: '@picker.html',
    init(extra) {
        let me = this;
        Monitor['@{setup}']();
        let oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        let click = () => {
            me['@{show}']();
        };
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['@{owner.node}'] = oNode;
        oNode.prop('autocomplete', 'off');
        let time = oNode.val().trim();
        if (!time) {
            let d = new Date();
            time = format(d.getHours()) + ':' +
                format(d.getMinutes()) + ':' +
                format(d.getSeconds());
        }
        extra.time = time;
        me['@{time}'] = time;
        me['@{time.bak}'] = time;
        me.updater.set(extra);
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, 'temp_' + me.id) ||
            Magix.inside(node, this['@{owner.node}'][0]);
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.shown}']) {
            let node = me['@{relate.node}'],
                ref = me['@{owner.node}'];
            node.show();
            me['@{ui.shown}'] = true;
            Monitor['@{add}'](me);
            let offset = ref.offset();
            let left, top;
            let data = me.updater.get();
            switch (data.placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (data.align) {
                case 'right':
                    left = offset.left + ref.outerWidth() - node.outerWidth();
                    break;
                default:
                    left = offset.left;
                    break;
            }
            node.offset({
                left: left,
                top: top
            });
            let v = me['@{owner.node}'].val().trim();
            if (v && me['@{time}'] != v) {
                me['@{time}'] = v;
                me['@{time.bak}'] = v;
                $('#time_' + me.id).invokeView('val', [v]);
            }
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.shown}']) {
            me['@{ui.shown}'] = false;
            me['@{relate.node}'].hide();
            Monitor['@{remove}'](me);
            if (me['@{time}'] != me['@{time.bak}']) {
                me['@{time}'] = me['@{time.bak}'];
                $('#time_' + me.id).invokeView('val', [me['@{time}']]);
            }
        }
    },
    '@{take}<change>'(e) {
        this['@{time}'] = e.time;
    },
    '@{hide}<click>'(e) {
        let me = this;
        if (e.params.enter) {
            me['@{time.bak}'] = me['@{time}'];
        }
        me['@{hide}']();
        if (e.params.enter) {
            me['@{owner.node}'].val(me['@{time}']).trigger('change');
        }
    }
});