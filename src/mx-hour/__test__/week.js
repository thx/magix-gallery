/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-hour/__test__/week',["magix","../week"],(require,exports,module)=>{
/*Magix*/
require("../week");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour.week</h2><h3 class=\"__mx-style_index_-mt30\">周小时选取组件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshow()\" style=\"width:800px\" mx-view=\"mx-hour/week?days=%2C001111%2C%2C%2C00000000111111001\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-hour.week\n    days=\",001111,,,00000000111111001\"\n    mx-change=\"show()\"\n    style=\"width:800px\"/&gt;</pre></div>","subs":[],"file":"mx-hour/__test__/week.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>'(e) {
        console.log(e);
    }
});

});