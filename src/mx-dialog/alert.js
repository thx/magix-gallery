/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/alert",["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_aE\"><h4><%=$$.title%></h4></div><div class=\"_aF\" style=\"word-break:break-all;\"><%=$$.body%></div><div class=\"_aG\"><button mx-click=\"\u001f\u001e__aI();\" class=\"_an _ao\" type=\"button\">确定</button></div>"},
    init: function (extra) {
        var me = this;
        me['__bf'] = extra.dialog;
        me['__bg'] = extra.body;
        me['__bh'] = extra.title || '提示';
        me['__bi'] = extra.enterCallback;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            body: me['__bg'],
            title: me['__bh']
        });
    },
    '__aI<click>': function () {
        var me = this;
        me['__bf'].close();
        if (me['__bi']) {
            Magix.toTry(me['__bi']);
        }
    }
});

});