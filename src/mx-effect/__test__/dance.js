/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/dance",["magix","../../mx-form/index","../dance","mx-dropdown/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Form*/
require("../dance");
require("mx-dropdown/index");
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
} ; var $g = '', $_temp, $p = '', content = $$.content, duration = $$.duration, dance = $$.dance; var $expr, $art, $line; try {
    $p += '<h2 mxs="_q:_">mx-effect dance</h2><div mxv mxa="_q:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-effect/dance?value=' + ($expr = '<%!$eu(content)%>', $eu(content)) + '&duration=' + ($expr = '<%!$eu(duration)%>', $eu(duration)) + '&dance=' + ($expr = '<%!$eu(dance)%>', $eu(dance)) + '"></div><div mxv="duration" mxe="' + $viewId + '_0" mxc="[{p:\'duration\',f:{refresh:true},a:\'selected\'}]" style="width:180px" mx-view="mx-dropdown/index?emptyText=%E5%8D%95%E5%AD%97%E6%95%88%E6%9E%9C%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4&selected=' + ($expr = '<%@duration%>', $i($$ref, duration)) + '"><i mxs="_q:a" value="10" class="__mx-style_index_-none">10ms</i><i mxs="_q:b" value="30" class="__mx-style_index_-none">30ms</i><i mxs="_q:c" value="60" class="__mx-style_index_-none">60ms</i><i mxs="_q:d" value="90" class="__mx-style_index_-none">90ms</i><i mxs="_q:e" value="120" class="__mx-style_index_-none">120ms</i></div><div mxv="dance" mxe="' + $viewId + '_1" mxc="[{p:\'dance\',f:{refresh:true},a:\'selected\'}]" style="width:180px" class="__mx-style_index_-ml10" mx-view="mx-dropdown/index?emptyText=%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C&selected=' + ($expr = '<%@dance%>', $i($$ref, dance)) + '"><i mxs="_q:f" value="d1" class="__mx-style_index_-none">效果一</i><i mxs="_q:g" value="d2" class="__mx-style_index_-none">效果二</i><i mxs="_q:h" value="d3" class="__mx-style_index_-none">效果三</i><i mxs="_q:i" value="d4" class="__mx-style_index_-none">效果四</i><i mxs="_q:j" value="d5" class="__mx-style_index_-none">效果五</i><i mxs="_q:k" value="d6" class="__mx-style_index_-none">效果六</i><i mxs="_q:l" value="d7" class="__mx-style_index_-none">效果七</i><i mxs="_q:m" value="d8" class="__mx-style_index_-none">效果八</i><i mxs="_q:n" value="d9" class="__mx-style_index_-none">效果九</i><i mxs="_q:o" value="d10" class="__mx-style_index_-none">效果十</i><i mxs="_q:p" value="d11" class="__mx-style_index_-none">效果十一</i></div></div><div mxs="_q:q" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;mx-effect.dance value="&lt;%=content%&gt;" duration="&lt;%=duration%&gt;" dance="&lt;%=dance%&gt;"  /&gt;\n&lt;mx-dropdown empty-text="单字效果间隔时间" style="width:180px" selected="&lt;%:duration({refresh:true})%&gt;"&gt;\n    &lt;mx-dropdown.item value="10"&gt;10ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="30"&gt;30ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="60"&gt;60ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="90"&gt;90ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="120"&gt;120ms&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;\n&lt;mx-dropdown empty-text="动画效果" style="width:180px" class="ml10" selected="&lt;%:dance({refresh:true})%&gt;"&gt;\n    &lt;mx-dropdown.item value="d1"&gt;效果一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d2"&gt;效果二&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d3"&gt;效果三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d4"&gt;效果四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d5"&gt;效果五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d6"&gt;效果六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d7"&gt;效果七&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d8"&gt;效果八&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d9"&gt;效果九&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d10"&gt;效果十&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d11"&gt;效果十一&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;\n    </pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet Form = require(\'app/gallery/mx-form/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            content: \'你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。\',\n            dance: \'d1\',\n            duration: \'60\'\n        });\n    }\n});\n    \n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effect/__test__/dance.html';
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