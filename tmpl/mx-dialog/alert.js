let Magix = require('magix');
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@alert.less');

module.exports = Magix.View.extend({
    tmpl: '@alert.html:updateby[]',
    init(extra) {
        let me = this;
        me['@{dialog}'] = extra.dialog;
        me['@{string.content}'] = extra.content;
        me['@{string.title}'] = extra.title || I18n['dialog.tip'];
        me['@{string.enter}'] = I18n['dialog.submit'];
        me['@{fn.enter.callback}'] = extra.enterCallback;
    },
    render() {
        let me = this;
        me.updater.digest({
            content: me['@{string.content}'],
            title: me['@{string.title}'],
            enterText: me['@{string.enter}'],
        });
    },
    '@{enter}<click>' () {
        let me = this;
        me['@{dialog}'].close();
        if (me['@{fn.enter.callback}']) {
            Magix.toTry(me['@{fn.enter.callback}']);
        }
    }
});