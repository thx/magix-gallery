/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/__test__/picker",["magix","../picker","__test__/hl"],(require,exports,module)=>{
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
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color.picker</h2><h3>颜色选择</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-color/picker\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-color.picker class=\"input\" /&gt;</pre></div><div style=\"height: 300px;\"></div><h3 class=\"_f\">透明度</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-color/picker?showAlpha=true\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-color.picker show-alpha=\"true\" class=\"input\" /&gt;</pre></div><div style=\"height: 300px;\"></div>"},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});