let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-util/monitor');
let format = t => {
    if (t < 10) return '0' + t;
    return t;
};
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{owner.node}'] = $('#' + me.id);

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');

        Monitor['@{setup}']();
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });

        let time = extra.time;
        if (!time) {
            let d = new Date();
            time = format(d.getHours()) + ':' +
                format(d.getMinutes()) + ':' +
                format(d.getSeconds());
        }
        
        me.updater.set({
            viewId: me.id,
            disabled,
            time,
            types: extra.types,
            expand: false //列表是否展开
        });
        me['@{owner.node}'].val(time);
    },
    render() {
        this.updater.digest({});
    },
    '@{hide}'() {
        let me = this;
        let expand = me.updater.get('expand');
        if (expand) {
            me.updater.digest({
                expand: false
            });
            Monitor['@{remove}'](me);
        }
    },
    '@{show}<click>'(e) {
        let me = this;
        let expand = me.updater.get('expand');
        if (!expand) {
            let d = {
                expand: true
            }
            let r = me.updater.get('rList');
            if (!r) {
                d.rList = true;
            }
            me.updater.digest(d);
            Monitor['@{add}'](me);
        }
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}<click>'(e) {
        let me = this;

        let oldTime = me.updater.get('time');
        let newTime = oldTime;
        if (e.params.enter) {
            // 确定
            let vf = Magix.Vframe.get(me.id + '_content');
            newTime = vf.invoke('val');
        }
        me['@{hide}']();
        if (e.params.enter) {
            if(oldTime != newTime){
                me.updater.digest({
                    time: newTime
                });
                me['@{owner.node}'].val(newTime).trigger({
                    type: 'change',
                    time: newTime
                });
            }
        }
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});