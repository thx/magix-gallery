/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-rating/__test__/index',["magix","$","mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,$,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let GTip = require('mx-gtip/index');
let Tips = ['非常不好', '很不好', '一般般', '很好', '非常好'];
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-rating</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-rating/index\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-rating /&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">设置星星个数</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-rating/index?number=10&value=6\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-rating number=\"10\" value=\"6\" /&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">只读</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-rating/index?number=10&readonly=true&value=6\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-rating number=\"10\" readonly=\"true\" value=\"6\" /&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">响应事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr10 __mx-style_index_-fl\" mx-click=\"\u001f\u001eclear()\">清除评分</button><div mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001eshowValue()\" mx-itemover=\"\u001f\u001eover()\" mx-itemout=\"\u001f\u001eout()\" class=\"__mx-style_index_-fl __mx-style_index_-mr10\" mx-view=\"mx-rating/index?value=<%!$eu($$.ratingValue)%>\"></div><span mx-guid=\"g1\u001f\">2\u001d</span></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button\n    type=\"button\"\n    class=\"btn btn-brand mr10 fl\"\n    mx-click=\"clear()\"&gt;清除评分&lt;/button&gt;\n&lt;mx-rating\n    value=\"&lt;%=ratingValue%&gt;\"\n    mx-change=\"showValue()\"\n    mx-itemover=\"over()\"\n    mx-itemout=\"out()\"\n    class=\"fl mr10\" /&gt;\n&lt;span&gt;&lt;%=ratingMsg%&gt;&lt;/span&gt;</pre><div>Javascipt Code:</div><pre>\nlet Magix = require('magix');\nlet $ = require('$');\nlet GTip = require('mx-gtip/index');\nlet Tips = ['非常不好', '很不好', '一般般', '很好', '非常好'];\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            ratingMsg: '',\n            ratingValue: 0\n        });\n    },\n    'over&lt;itemover&gt;'(e) {\n        let tip = Tips[e.value - 1];\n        this.updater.digest({\n            ratingMsg: tip\n        });\n    },\n    'out&lt;itemout&gt;'(e) {\n        let tip = Tips[e.value - 1] || '';\n        this.updater.digest({\n            ratingMsg: tip\n        });\n    },\n    'showValue&lt;change&gt;'(e) {\n        this.gtipRT('当前值：' + e.value);\n        this.updater.set({\n            ratingValue: e.value\n        });\n    },\n    'clear&lt;click&gt;'() {\n        this.updater.digest({\n            ratingMsg: '',\n            ratingValue: 0\n        });\n    }\n});\n</pre></div>","subs":[{"keys":["ratingValue"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-rating/index?value=<%!$eu($$.ratingValue)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["ratingMsg"],"path":"span[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.ratingMsg%>","s":"2\u001d"}],"file":"mx-rating/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            ratingMsg: '',
            ratingValue: 0
        });
    },
    'over<itemover>'(e) {
        let tip = Tips[e.value - 1];
        this.updater.digest({
            ratingMsg: tip
        });
    },
    'out<itemout>'(e) {
        let tip = Tips[e.value - 1] || '';
        this.updater.digest({
            ratingMsg: tip
        });
    },
    'showValue<change>'(e) {
        this.gtipRT('当前值：' + e.value);
        this.updater.set({
            ratingValue: e.value
        });
    },
    'clear<click>'() {
        this.updater.digest({
            ratingMsg: '',
            ratingValue: 0
        });
    }
});

});