/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/day",["magix","../day","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../day");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour</h2><h3>天小时选取组件</h3><div class=\"_B _ai\"><div style=\"width:600px\" mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-hour/day?hours=00001111011\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-hour.day\n    hours=\"00001111011\"\n    style=\"width:600px\" mx-change=\"show()\"/&gt;</pre></div>"},
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'show<change>': function (e) {
        console.log(e);
    }
});

});