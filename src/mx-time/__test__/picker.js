/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/__test__/picker',["magix","../picker"],function(require,exports,module){
/*Magix*/
require("../picker");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time</h2><div class=\"B ag\"><input mx-view=\"mx-time/picker?types=hour%2Cminute\" value=\"18:26:00\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-time/picker\"\n    view-align=\"right\"\n    class=\"input\"\n    value=\"18:26:00\"\n    view-types=\"hour,minute\" /&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});