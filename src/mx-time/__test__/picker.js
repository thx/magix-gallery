/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/__test__/picker",["magix","../picker","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../picker");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var c = 10;
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time.picker</h2><div class=\"_B _ai\"><input value=\"<%=$$.time%>\" class=\"_ap\"><div mx-view=\"mx-time/picker?types=hour%2Cminute\" class=\"_af _ah\"></div><button mx-click=\"\u001f\u001eupdate()\">update</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-time.picker\n    value=\"18:26:00\"\n    class=\"input\"\n    types=\"hour,minute\" /&gt;</pre></div>"},
    render: function () {
        var me = this;
        me.updater.digest({
            time: '18:00:30'
        });
    },
    'update<click>': function () {
        this.updater.digest({
            time: '19:00:' + c++
        });
    }
});

});