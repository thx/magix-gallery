/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/__test__/3",["magix","__test__/example","$","mx-table/index","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-table/index");
require("../index");
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
    $p += '<div mxa="_zs_gallerybm:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybm:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybm:_" class="mb10 color-9">在表格中使用：</div><div mxs="_zs_gallerybm:a" class="mb20">表格的规范是选中行的操作按钮才会显示</div><div mxa="_zs_gallerybm:b" mx-view="mx-table/index" class="mb20"><div><table mxa="_zs_gallerybm:c" class="table"><thead mxs="_zs_gallerybm:b"><tr><th width="200">序号</th><th width="200">组件</th></tr></thead><tbody><tr mxs="_zs_gallerybm:c"><td>1、无校验规则</td><td><div mx-view="mx-editor/index?width=80&content=300&small=true"></div></td></tr><tr><td mxs="_zs_gallerybm:d">2、不能小于200</td><td><div mx-view="mx-editor/index?width=80&content=300&rules=';
    $line = 29;
    $art = '@{min:[200,\'不能小于200\']}';
    ;
    $p += ($expr = '<%@{ min: [200, \'不能小于200\'] }%>', $i($$ref, { min: [200, '不能小于200'] })) + '&small=true"></div></td></tr></tbody></table></div></div></div><div mxa="_zs_gallerybm:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybm:e" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybm:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 41;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybm:f" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table class="mb20"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="200"&gt;序号&lt;/th&gt;\n                &lt;th width="200"&gt;组件&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1、无校验规则&lt;/td&gt;\n                &lt;td&gt;\n                    &lt;mx-editor \n                        width="80"\n                        content="300"\n                        small="true"/&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;2、不能小于200&lt;/td&gt;\n                &lt;td&gt;\n                    &lt;mx-editor \n                        width="80"\n                        content="300"\n                        rules="&#123;&#123;@&#123;min:[200,\'不能小于200\']&#125;&#125;&#125;"\n                        small="true"/&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-editor/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            content: 2000
        });
    },
    'change<edit>': function (e) {
        // editText编辑后的文案
        this.updater.digest({
            content: e.editText
        });
    }
});

});