/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dialog/confirm',["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-style_index_-dialog-header\"><h4><%=$$.title%></h4></div><div class=\"__mx-style_index_-dialog-body\" style=\"word-break:break-all\"><%=$$.body%></div><div class=\"__mx-style_index_-dialog-footer\"><button type=\"button\" mx-click=\"\u001f\u001e@{enter}()\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr10\">确定</button><button type=\"button\" mx-click=\"\u001f\u001e@{cancel}()\" class=\"__mx-style_index_-btn\">取消</button></div>","subs":[],"file":"mx-dialog/confirm.html"},
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

});