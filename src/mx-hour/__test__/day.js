/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-hour/__test__/day',["magix","../day"],(require,exports,module)=>{
/*Magix*/
require("../day");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour</h2><h3>天小时选取组件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div style=\"width:600px\" mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-hour/day?hours=00001111011\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-hour.day\n    hours=\"00001111011\"\n    style=\"width:600px\" mx-change=\"show()\"/&gt;</pre></div>","subs":[],"file":"mx-hour/__test__/day.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>'(e) {
        console.log(e);
    }
});

});