/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-slider/__test__/index',["magix","mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">垂直</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&vertical=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    class=\"fl\"\n    vertical=\"true\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">响应change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshowValue()\" class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/index?max=200&min=0&value=130&step=5\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"5\"\n    mx-change=\"showValue()\"\n    class=\"fl\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[],"file":"mx-slider/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showValue<change>'(e) {
        this.gtipRT('value:' + e.value);
    }
});

});