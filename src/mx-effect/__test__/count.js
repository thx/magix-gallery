/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-effect/__test__/count',["magix","../../mx-form/index","../count"],(require,exports,module)=>{
/*Magix,Form*/
require("../count");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../../mx-form/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect count</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g0\u001f\" class=\"__mx-style_index_-input\" mx-view=\"mx-effect/count?to=<%!$eu($$.toNumber)%>\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-effect/count?to=<%@$$.toNumber%>&duration=2000&fixed=2\" style=\"font-size: 30px;line-height: 50px;letter-spacing: 2px\"></div><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml5\" type=\"button\" mx-click=\"\u001f\u001echangeNumber({i:true})\">increase number</button><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml5\" type=\"button\" mx-click=\"\u001f\u001echangeNumber()\">decrease number</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>\n&lt;input class=\"input\" mx-view=\"mx-effect/count\" view-to=\"&lt;%@toNumber%&gt;\"&gt;\n&lt;div mx-view=\"mx-effect/count\" view-to=\"&lt;%@toNumber%&gt;\" view-duration=\"2000\" view-fixed=\"2\" style=\"font-size: 30px;line-height: 50px;letter-spacing: 2px;\"&gt;&lt;/div&gt;\n&lt;button class=\"btn btn-brand ml5\" type=\"button\" mx-click=\"changeNumber({i:true})\"&gt;increase number&lt;/button&gt;\n&lt;button class=\"btn btn-brand ml5\" type=\"button\" mx-click=\"changeNumber()\"&gt;decrease number&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            toNumber: 20\n        });\n    },\n    'changeNumber&lt;click&gt;'(e) {\n        let me = this;\n        let to = me.updater.get('toNumber');\n        let diff = 300;\n        if (!e.params.i) {\n            diff = -diff;\n        }\n        me.updater.digest({\n            toNumber: to + diff\n        });\n    }\n});</pre></div>","subs":[{"keys":["toNumber"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-effect/count?to=<%!$eu($$.toNumber)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["toNumber"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-effect/count?to=<%@$$.toNumber%>&duration=2000&fixed=2\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-effect/__test__/count.html"},
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>'(e) {
        let me = this;
        let to = me.updater.get('toNumber');
        let diff = 300;
        if (!e.params.i) {
            diff = -diff;
        }
        me.updater.digest({
            toNumber: to + diff
        });
    }
});

});