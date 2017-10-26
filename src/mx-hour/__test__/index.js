/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/__test__/index',["magix","../index","../day","../week"],function(require,exports,module){
/*Magix*/
require("../index");
require("../day");
require("../week");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour</h2><h3>小时选取基础组件</h3><div class=\"B ag\"><div mx-view=\"mx-hour/index?range=00001111011\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/index\" view-range=\"00001111011\"&lt;/div&gt;</pre></div><h3 class=\"f\">天小时选取组件</h3><div class=\"B ag\"><div mx-view=\"mx-hour/day?hours=00001111011\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/day\" view-hours=\"00001111011\"&lt;/div&gt;</pre></div><h3 class=\"f\">周小时选取组件</h3><div class=\"B ag\"><div mx-view=\"mx-hour/week?days=<%@['','001111','','','00000000111111001']%>\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/week\" view-days=\"&lt;%@['','001111','','','00000000111111001']%&gt;\"&gt;&lt;/div&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});