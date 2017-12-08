/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-progress/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-progress</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-progress/index?value=0.36\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-progress\n    value=\"0.36\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-progress/index?value=0.05&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-progress\n    value=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div>","subs":[],"file":"mx-progress/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});

});