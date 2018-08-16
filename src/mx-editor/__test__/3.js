/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryam:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryam:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryam:_" class="mb10 color-9">在表格中使用：</div><div mxs="_zs_galleryam:a" class="mb20">表格的规范是选中行的操作按钮才会显示</div><div mxa="_zs_galleryam:b" mx-view="mx-table/index" class="mb20"><div><table mxa="_zs_galleryam:c" class="table"><thead mxs="_zs_galleryam:b"><tr><th width="200">序号</th><th width="200">组件</th></tr></thead><tbody><tr mxs="_zs_galleryam:c"><td>1、无校验规则</td><td><div mx-view="mx-editor/index?width=80&content=300&small=true"></div></td></tr><tr><td mxs="_zs_galleryam:d">2、不能小于200</td><td><div mx-view="mx-editor/index?width=80&content=300&rules=';
    $line = 29;
    $art = '@{min:[200,\'不能小于200\']}';
    ;
    $p += '' + ($expr = '<%@{min:[200,\'不能小于200\']}%>', $i({ min: [200, '不能小于200'] })) + '&small=true"></div></td></tr></tbody></table></div></div></div><div mxa="_zs_galleryam:d" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryam:e" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 39;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryam:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 41;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryam:f" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table class="mb20"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="200"&gt;序号&lt;/th&gt;\n                &lt;th width="200"&gt;组件&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1、无校验规则&lt;/td&gt;\n                &lt;td&gt;\n                    &lt;mx-editor \n                        width="80"\n                        content="300"\n                        small="true"/&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;2、不能小于200&lt;/td&gt;\n                &lt;td&gt;\n                    &lt;mx-editor \n                        width="80"\n                        content="300"\n                        rules="&#123;&#123;@&#123;min:[200,\'不能小于200\']&#125;&#125;&#125;"\n                        small="true"/&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>';
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