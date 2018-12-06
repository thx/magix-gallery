/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/count",["magix","../../mx-form/index","../count","__test__/hl"],(require,exports,module)=>{
/*Magix,Form*/
require("../count");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../../mx-form/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', toNumber = $$.toNumber; var $expr, $art, $line; try {
    $p += '<h2 mxs="_p:_">mx-effect count</h2><div mxv mxa="_p:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><input class="__mx-style_index_-input" mx-view="mx-effect/count?value=' + ($expr = '<%!$eu(toNumber)%>', $eu(toNumber)) + '"/><div mxv="toNumber" mx-view="mx-effect/count?value=' + ($expr = '<%@toNumber%>', $i($$ref, toNumber)) + '&duration=2000&fixed=2" style="font-size: 30px;line-height: 50px;letter-spacing: 2px;"></div><button mxs="_p:a" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml5" type="button" mx-click="' + $viewId + 'changeNumber({i:true})">increase number</button><button mxs="_p:b" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml5" type="button" mx-click="' + $viewId + 'changeNumber()">decrease number</button></div><div mxs="_p:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;input class="input" mx-view="mx-effect/count" view-value="&lt;%@toNumber%&gt;"&gt;\n&lt;div mx-view="mx-effect/count" view-value="&lt;%@toNumber%&gt;" view-duration="2000" view-fixed="2" style="font-size: 30px;line-height: 50px;letter-spacing: 2px;"&gt;&lt;/div&gt;\n&lt;button class="btn btn-brand ml5" type="button" mx-click="changeNumber({i:true})"&gt;increase number&lt;/button&gt;\n&lt;button class="btn btn-brand ml5" type="button" mx-click="changeNumber()"&gt;decrease number&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            toNumber: 20\n        });\n    },\n    \'changeNumber&lt;click&gt;\'(e) {\n        let me = this;\n        let to = me.updater.get(\'toNumber\');\n        let diff = 300;\n        if (!e.params.i) {\n            diff = -diff;\n        }\n        me.updater.digest({\n            toNumber: to + diff\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effect/__test__/count.html';
    throw msg;
} return $p; },
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>': function (e) {
        var me = this;
        var to = me.updater.get('toNumber');
        var diff = 300;
        if (!e.params.i) {
            diff = -diff;
        }
        me.updater.digest({
            toNumber: to + diff
        });
    }
});

});