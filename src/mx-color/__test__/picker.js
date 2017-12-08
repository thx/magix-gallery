/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-color/__test__/picker',["magix","../picker"],(require,exports,module)=>{
/*Magix*/
require("../picker");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color.picker</h2><h3>颜色选择</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-color/picker\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-color.picker class=\"input\" /&gt;</pre></div><div style=\"height: 300px\"></div><h3 class=\"__mx-style_index_-mt30\">透明度</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-color/picker?showAlpha=true\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-color.picker show-alpha=\"true\" class=\"input\" /&gt;</pre></div><div style=\"height: 300px\"></div>","subs":[],"file":"mx-color/__test__/picker.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});

});