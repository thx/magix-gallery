/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-pagination/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-pagination</h2><h3>完整模式</h3><div class=\"B ag\"><div mx-guid=\"g0\u001f\" class=\"Z\" mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"></div><button class=\"al\" mx-click=\"\u001f\u001etest()\">test</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"3\"\n    page=\"2\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"f\">简单模式</h3><div class=\"B ag\"><div mx-view=\"mx-pagination/index?total=2000&step=5&simplify=true&page=15\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    simplify=\"true\"\n    page=\"15\"/&gt;</pre></div><h3 class=\"f\">迷你模式</h3><div class=\"B ag\"><div mx-view=\"mx-pagination/index?total=2000&step=5&mini=true&page=10\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    mini=\"true\"\n    page=\"10\"/&gt;</pre></div><h3 class=\"f\">监听change事件</h3><div class=\"B ag\"><div mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-pagination/index?total=2000&step=5&page=10\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    page=\"10\"\n    mx-change=\"show()\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        console.log(e.page, e.size);\n    }\n});</pre></div>","subs":[{"keys":["page"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    render: function () {
        var me = this;
        me.updater.digest({
            page: 1
        });
    },
    'show<change>': function (e) {
        console.log(e.page, e.size);
    },
    'test<click>': function (e) {
        var page = this.updater.get('page');
        this.updater.digest({
            page: page + 1
        });
    }
});

});