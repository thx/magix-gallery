/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
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
} ; var $g = '', $_temp, $p = '', selectedValue = $$.selectedValue, list = $$.list, selectedText = $$.selectedText, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryat:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryat:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_galleryat:b" class="mb20"><div mxv="list" class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-dropdown/index?searchbox=true&selected=';
    $line = 6;
    $art = '=selectedValue';
    ;
    $p += ($expr = '<%!$eu(selectedValue)%>', $eu(selectedValue)) + '&list=';
    $line = 7;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div><span mxs="_zs_galleryat:_" class="color-9">当前选中名：</span><span mxa="_zs_galleryat:c" class="mr20">';
    $line = 12;
    $art = '=selectedText';
    ;
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_galleryat:a" class="color-9">当前选中值：</span><span>';
    $line = 14;
    $art = '=selectedValue';
    ;
    $p += ($expr = '<%=selectedValue%>', $e(selectedValue)) + '</span></div></div><div mxa="_zs_galleryat:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryat:b" class="_zs_gallery___test___layout_-eg-title">搜索不区分大小写</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryat:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 21;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryat:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown class="w200" \n    searchbox="true" \n    empty-text="请选择类型" \n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="select()"&gt;\n&lt;/mx-dropdown&gt;</pre></div><div mxa="_zs_galleryat:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryat:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryat:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 37;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryat:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: \'测试Logo\'\n        &#125;, &#123;\n            value: 2,\n            text: \'logo\'\n        &#125;, &#123;\n            value: 3,\n            text: \'123456\'\n        &#125;];\n        this.updater.digest(&#123;\n            list: list,\n            selectedValue: list[1].value\n        &#125;);\n    &#125;,\n    \'select&lt;change&gt;\' (e) &#123;\n        // e.value 当前选中值\n        // e.text 当前选中文案\n        this.updater.digest(&#123;\n            selectedValue: e.value\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 1,
                text: '测试Logo'
            }, {
                value: 2,
                text: 'logo'
            }, {
                value: 3,
                text: '123456'
            }];
        var item = list[1];
        this.updater.digest({
            list: list,
            selectedValue: item.value,
            selectedText: item.text
        });
    },
    'select<change>': function (event) {
        // event.value 当前选中值
        // event.text 当前选中文案
        this.updater.digest({
            selectedValue: event.value,
            selectedText: event.text
        });
    }
});

});