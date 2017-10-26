/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-slider/__test__/range',["magix","mx-gtip/index","../range"],function(require,exports,module){
/*Magix,GTip*/
require("../range");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider</h2><h3>默认情形</h3><div class=\"B ag\"><div mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/range\"\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">垂直</h3><div class=\"B ag\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/range\"\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    vertical=\"true\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&disabled=true\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/range\"\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre></div><h3 class=\"f\">响应change事件</h3><div class=\"B ag\"><div mx-view=\"mx-slider/range?max=500&min=200&value=210%2C350&step=10\" mx-change=\"\u001f\u001eshowValue()\" class=\"Z\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view path=\"mx-slider/range\"\n    max=\"500\"\n    min=\"200\"\n    value=\"210,350\"\n    step=\"10\"\n    mx-change=\"showValue()\"\n    class=\"fl\"\n&gt;&lt;/mx-view&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[{"keys":["vertical"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            vertical: true
        });
    },
    'showValue<change>': function (e) {
        this.gtipRT('value:' + e.value);
    }
});

});