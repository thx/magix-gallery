/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-color/__test__/index',["magix","../index"],(require,exports,module)=>{
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
    tmpl: {"html":"<h2>mx-color</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-color/index\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-color/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">透明度</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-color/index?showAlpha=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-color show-alpha=\"true\"/&gt;</pre></div>","subs":[],"file":"mx-color/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'test<change>'(e) {
        console.log(e.color);
    }
});

});