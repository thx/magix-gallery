/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-number/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-number</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-view=\"mx-number/index\"></div><input type=\"number\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-number /&gt;</pre></div><h3 class=\"f\">最大值、最小值及step</h3><div class=\"B ag\"><div mx-view=\"mx-number/index?max=10&min=-10&step=0.5&ratio=4&value=8.5\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-number\n    max=\"10\"\n    min=\"-10\"\n    step=\"0.5\"\n    value=\"8.5\" /&gt;</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div mx-view=\"mx-number/index?disabled=true&value=20\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-number disabled=\"true\" value=\"20\" /&gt;</pre></div><h3 class=\"f\">响应事件</h3><div class=\"B ag\"><div mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-number/index?max=10&min=-10&step=0.5&value=8.5\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-number\n    max=\"10\"\n    min=\"-10\"\n    step=\"0.5\"\n    value=\"8.5\"\n    mx-change=\"show()\" /&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        this.gtipRT('当前值：' + e.eventTarget.value);\n    }\n});</pre></div>","subs":[]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'show<change>': function (e) {
        this.gtipRT('当前值：' + e.eventTarget.value);
    }
});

});