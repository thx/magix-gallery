/*
ver:1.3.9
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@alert.html:updateby[]',
    init(extra) {
        let me = this;
        me['@{dialog}'] = extra.dialog;
        me['@{string.body}'] = extra.body;
        me['@{string.title}'] = extra.title || '提示';
        me['@{fn.enter.callback}'] = extra.enterCallback;
    },
    render() {
        let me = this;
        me.updater.digest({
            body: me['@{string.body}'],
            title: me['@{string.title}']
        });
    },
    '@{enter}<click>'() {
        let me = this;
        me['@{dialog}'].close();
        if (me['@{fn.enter.callback}']) {
            Magix.toTry(me['@{fn.enter.callback}']);
        }
    }
});