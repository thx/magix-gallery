var Magix = require('magix');
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@alert.less');

module.exports = Magix.View.extend({
    tmpl: '@confirm.html',
    init(extra) {
        var me = this;
        me['@{dialog}'] = extra.dialog;
        me['@{string.content}'] = extra.content;
        me['@{string.title}'] = extra.title || I18n['dialog.tip'];
        me['@{string.enter}'] = extra.enterText || I18n['dialog.submit'];
        me['@{string.cancel}'] = extra.cancelText || I18n['dialog.cancel'];
        me['@{string.spm}'] = extra.spm || me.id; // 埋点
        me['@{fn.enter.callback}'] = extra.enterCallback;
        me['@{fn.calcel.callback}'] = extra.cancelCallback;
    },
    render() {
        var me = this;
        me.updater.digest({
            content: me['@{string.content}'],
            title: me['@{string.title}'],
            enterText: me['@{string.enter}'],
            cancelText: me['@{string.cancel}'],
            spm: me['@{string.spm}']
        });
    },
    '@{enter}<click>'() {
        var me = this;
        me['@{dialog}'].close();
        if (me['@{fn.enter.callback}']) {
            Magix.toTry(me['@{fn.enter.callback}']);
        }
    },
    '@{cancel}<click>'() {
        var me = this;
        me['@{dialog}'].close();
        if (me['@{fn.calcel.callback}']) {
            Magix.toTry(me['@{fn.calcel.callback}']);
        }
    }
});