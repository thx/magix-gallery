/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-slider/__test__/range',["magix","mx-gtip/index","../range"],(require,exports,module)=>{
/*Magix,GTip*/
require("../range");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider.range</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">垂直</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    vertical=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">响应change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshowValue()\" class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/range?max=500&min=200&value=210%2C350&step=10\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider.range\n    max=\"500\"\n    min=\"200\"\n    value=\"210,350\"\n    step=\"10\"\n    mx-change=\"showValue()\"\n    class=\"fl\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[{"keys":["vertical"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-slider/__test__/range.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            vertical: true
        });
    },
    'showValue<change>'(e) {
        this.gtipRT('value:' + e.value);
    }
});

});