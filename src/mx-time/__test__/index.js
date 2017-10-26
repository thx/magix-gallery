/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/__test__/index',["magix","../index"],function(require,exports,module){
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
    tmpl: {"html":"<h2>mx-time</h2><div class=\"B ag\"><div mx-view=\"mx-time/index?time=00%3A12%3A13&types=minute%2Csecond\" mx-change=\"\u001f\u001etest()\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-time/index\"\n    view-time=\"00:12:13\"\n    view-types=\"minute,second\" mx-change=\"test()\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'test&lt;change&gt;' (e) {\n        console.log(e, e.time);\n    }\n});</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'test<change>': function (e) {
        console.log(e, e.time);
    }
});

});