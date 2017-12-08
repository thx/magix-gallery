/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-time/__test__/index',["magix","../index"],(require,exports,module)=>{
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
    tmpl: {"html":"<h2>mx-time</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001etest()\" mx-view=\"mx-time/index?time=00%3A12%3A13&type=minute%2Csecond\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-time\n    time=\"00:12:13\"\n    type=\"minute,second\"\n    mx-change=\"test()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'test&lt;change&gt;' (e) {\n        console.log(e, e.time);\n    }\n});</pre></div>","subs":[],"file":"mx-time/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'test<change>'(e) {
        console.log(e, e.time);
    }
});

});