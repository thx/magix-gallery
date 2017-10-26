/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dialog/confirm',["magix"],function(require,exports,module){
/*Magix*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"aC\"><h4><%=$$.title%></h4></div><div class=\"aD\" style=\"word-break:break-all\"><%=$$.body%></div><div class=\"aE\"><a mx-click=\"\u001f\u001e_ac()\" class=\"al am h\">确定</a><a mx-click=\"\u001f\u001e_Q()\" class=\"al\">取消</a></div>","subs":[]},
    init: function (extra) {
        var me = this;
        me['_ag'] = extra.dialog;
        me['_ah'] = extra.body;
        me['_ai'] = extra.title || '提示';
        me['_aj'] = extra.enterCallback;
        me['_ak'] = extra.cancelCallback;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            body: me['_ah'],
            title: me['_ai']
        });
    },
    '_ac<click>': function () {
        var me = this;
        me['_ag'].close();
        if (me['_aj']) {
            Magix.toTry(me['_aj']);
        }
    },
    '_Q<click>': function () {
        var me = this;
        me['_ag'].close();
        if (me['_ak']) {
            Magix.toTry(me['_ak']);
        }
    }
});

});