/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/__test__/3",["magix","__test__/example","$","../box","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../box");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, list = $$.list, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycj:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerycj:a" class="_zs_gallery___test___base_-eg-content"><div mxv="list" mx-change="' + $viewId + 'changeTab()" mx-view="mx-tabs/box?list=';
    $line = 4;
    $art = '@list';
    ;
    $p += '' + ($expr = '<%@list%>', $i(list)) + '&selected=';
    $line = 5;
    $art = '=selected';
    ;
    $p += '' + ($expr = '<%!$eu(selected)%>', $eu(selected)) + '"></div><span mxs="_zs_gallerycj:_" class="color-9 ml20">当前选中：</span><span>';
    $line = 8;
    $art = '=selected';
    ;
    $p += '' + ($expr = '<%=selected%>', $e(selected)) + '</span></div><div mxa="_zs_gallerycj:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycj:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 12;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycj:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 14;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycj:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-tabs.box\n    list="&#123;&#123;@list&#125;&#125;" \n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="changeTab()" /&gt;</pre></div><div mxa="_zs_gallerycj:d" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycj:c" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycj:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 27;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycj:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: \'模块1\',\n            tag: \'New\'\n        &#125;, &#123;\n            value: 2,\n            text: \'模块2\'\n        &#125;];\n\n        this.updater.digest(&#123;\n            list,\n            selected: list[0].value\n        &#125;);\n    &#125;,\n\n    \'changeTab&lt;change&gt;\' (e) &#123;\n        // e.value 当前选中的key值\n        // e.text 当前选中的文案\n        this.updater.digest(&#123;\n            selected: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tabs/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 1,
                text: '模块1',
                tag: 'New'
            }, {
                value: 2,
                text: '模块2'
            }];
        this.updater.digest({
            list: list,
            selected: list[0].value
        });
    },
    'changeTab<change>': function (e) {
        // e.value 当前选中的key值
        // e.text 当前选中的文案
        this.updater.digest({
            selected: e.value
        });
    }
});

});