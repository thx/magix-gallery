/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/9",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../multiple");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaL:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryaL:a" class="_zs_gallery___test___layout_-eg-content"><div class="w200" mx-view="mx-dropdown/multiple?list=';
    $line = 4;
    $art = '@[{id:1,name:\'选项1\'},{id:2,name:\'选项2\'}]';
    ;
    $p += ($expr = '<%@[{ id: 1, name: \'选项1\' }, { id: 2, name: \'选项2\' }]%>', $i($$ref, [{ id: 1, name: '选项1' }, { id: 2, name: '选项2' }])) + '&textKey=name&valueKey=id"></div></div><div mxa="_zs_galleryaL:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaL:_" class="_zs_gallery___test___layout_-eg-title">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaL:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 12;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaL:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@[&#123;id:1,name:\'选项1\'&#125;,&#123;id:2,name:\'选项2\'&#125;]&#125;&#125;"\n    text-key="name"\n    value-key="id"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/9.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [];
        for (var index = 0; index < 6; index++) {
            list.push({
                text: '多选' + (index + 1),
                value: index + 1
            });
        }
        this.updater.digest({
            list: list,
            selected: '1,2,3'
        });
    },
    'select<change>': function (e) {
        // e.values [array] 当前选中值
        // e.texts [array] 当前选中文案
        debugger;
        this.updater.digest({
            selected: e.values
        });
    }
});

});