/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-time/__test__/picker',["magix","../picker"],(require,exports,module)=>{
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
    tmpl: {"html":"<h2>mx-time.picker</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input value=\"18:26:00\" class=\"__mx-style_index_-input\" mx-view=\"mx-time/picker?types=hour%2Cminute\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-time.picker\n    value=\"18:26:00\"\n    class=\"input\"\n    types=\"hour,minute\" /&gt;</pre></div>","subs":[],"file":"mx-time/__test__/picker.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});

});