/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, selectedValue = $$.selectedValue, list = $$.list, selectedText = $$.selectedText, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallery`:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallery`:a" class="_zs_gallery___test___base_-eg-content"><div mxv mxa="_zs_gallery`:b" class="mb20"><div mxv="list" class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%B1%BB%E5%9E%8B&selected=';
    $line = 7;
    $art = '=selectedValue';
    ;
    $p += '' + ($expr = '<%!$eu(selectedValue)%>', $eu(selectedValue)) + '&list=';
    $line = 8;
    $art = '@list';
    ;
    $p += '' + ($expr = '<%@list%>', $i(list)) + '"></div></div><div><span mxs="_zs_gallery`:_" class="color-9">当前选中名：</span><span mxa="_zs_gallery`:c" class="mr20">';
    $line = 13;
    $art = '=selectedText';
    ;
    $p += '' + ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_gallery`:a" class="color-9">当前选中值：</span><span>';
    $line = 15;
    $art = '=selectedValue';
    ;
    $p += '' + ($expr = '<%=selectedValue%>', $e(selectedValue)) + '</span></div></div><div mxa="_zs_gallery`:d" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallery`:b" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery`:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery`:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown class="w200" \n    searchbox="true" \n    empty-text="请选择类型" \n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="select()"&gt;\n&lt;/mx-dropdown&gt;</pre></div><div mxa="_zs_gallery`:f" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallery`:d" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 36;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery`:g" class="_zs_gallery___test___base_-desc-tip">';
    $line = 38;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery`:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: \'1\',\n            text: \'单选带搜索框1\'\n        &#125;, &#123;\n            value: \'2\',\n            text: \'单选带搜索框2\'\n        &#125;];\n        this.updater.digest(&#123;\n            list: list,\n            selectedValue: list[1].value\n        &#125;);\n    &#125;,\n    \'select&lt;change&gt;\' (e) &#123;\n        // e.value 当前选中值\n        // e.text 当前选中文案\n        this.updater.digest(&#123;\n            selectedValue: e.value\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>';
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
                value: '1',
                text: '单选带搜索框1'
            }, {
                value: '2',
                text: '单选带搜索框2'
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