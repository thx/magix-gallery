/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-color/__test__/index',["magix","../index","../picker"],function(require,exports,module){
/*Magix*/
require("../index");
require("../picker");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-view=\"mx-color/index\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-color/index\"/&gt;</pre></div><h3 class=\"f\">颜色选择</h3><div class=\"B ag\"><input mx-view=\"mx-color/picker\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view tag=\"input\" path=\"mx-color/picker\" class=\"input\" /&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});