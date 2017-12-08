/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dialog/alert',["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-style_index_-dialog-header\"><h4><%=$$.title%></h4></div><div class=\"__mx-style_index_-dialog-body\" style=\"word-break:break-all\"><%=$$.body%></div><div class=\"__mx-style_index_-dialog-footer\"><button mx-click=\"\u001f\u001e@{enter}();\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" type=\"button\">确定</button></div>","subs":[],"file":"mx-dialog/alert.html"},
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

});