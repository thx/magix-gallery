/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/__test__/index",["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-pagination</h2><h3>完整模式</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"></div><button class=\"_an\" mx-click=\"\u001f\u001etest()\">test</button></div>"},
    render: function () {
        var me = this;
        me.updater.digest({
            page: 1
        });
    },
    'show<change>': function (e) {
        console.log(e.page, e.size);
    },
    'test<click>': function (e) {
        var page = this.updater.get('page');
        this.updater.digest({
            page: page + 1
        });
    }
});

});