/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@confirm.html:updateby[]',
    init(extra) {
        var me = this;
        me['@{dialog}'] = extra.dialog;
        me['@{string.body}'] = extra.body;
        me['@{string.title}'] = extra.title || '提示';
        me['@{fn.enter.callback}'] = extra.enterCallback;
        me['@{fn.calcel.callback}'] = extra.cancelCallback;
    },
    render() {
        var me = this;
        me.updater.digest({
            body: me['@{string.body}'],
            title: me['@{string.title}']
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