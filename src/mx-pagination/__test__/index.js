/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-pagination/__test__/index',["magix","../index"],(require,exports,module)=>{
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
    tmpl: {"html":"<h2>mx-pagination</h2><h3>完整模式</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-fl\" mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"></div><button class=\"__mx-style_index_-btn\" mx-click=\"\u001f\u001etest()\">test</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"3\"\n    page=\"2\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">简单模式</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&simplify=true&page=15\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    simplify=\"true\"\n    page=\"15\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">迷你模式</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&mini=true&page=10\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    mini=\"true\"\n    page=\"10\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">监听change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-pagination/index?total=2000&step=5&page=10\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    page=\"10\"\n    mx-change=\"show()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        console.log(e.page, e.size);\n    }\n});</pre></div>","subs":[{"keys":["page"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-pagination/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            page: 1
        });
    },
    'show<change>'(e) {
        console.log(e.page, e.size);
    },
    'test<click>'(e) {
        let page = this.updater.get('page');
        this.updater.digest({
            page: page + 1
        });
    }
});

});