/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/week",["magix","../week","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../week");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour.week</h2><h3 class=\"_f\">周小时选取组件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshow()\" style=\"width:800px\" mx-view=\"mx-hour/week?days=%2C001111%2C%2C%2C00000000111111001\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-hour.week\n    days=\",001111,,,00000000111111001\"\n    mx-change=\"show()\"\n    style=\"width:800px\"/&gt;</pre></div>"},
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'show<change>': function (e) {
        console.log(e);
    }
});

});