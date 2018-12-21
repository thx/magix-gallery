/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/8",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', items = $$.items, max = $$.max, list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryd+:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryd+:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd+:g" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22">限制选择上限</div></div><div mxa="_zs_galleryd+:b" class="mb20"><span mxs="_zs_galleryd+:h" class="color-9">当前已选中：</span><span>';
    $line = 9;
    $art = '=items.length';
    ;
    $p += ($expr = '<%=items.length%>', $e(items.length)) + ' / ';
    $line = 9;
    $art = '=max';
    ;
    $p += ($expr = '<%=max%>', $e(max)) + '</span></div><div mxv mxa="_zs_galleryd+:c" class="mb20"><div mxv="list" class="w280" mx-change="' + $viewId + 'select()" mx-view="mx-taginput/index?list=';
    $line = 13;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&max=';
    $line = 14;
    $art = '=max';
    ;
    $p += ($expr = '<%!$eu(max)%>', $eu(max)) + '"></div></div></div><div mxa="_zs_galleryd+:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd+:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd+:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd+:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n    &lt;mx-taginput class="w280"\n        id="&#123;&#123;=viewId&#125;&#125;_taginput"\n        list="&#123;&#123;@list&#125;&#125;"\n        mx-change="select()"/&gt;</pre></div><div mxa="_zs_galleryd+:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd+:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryd+:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryd+:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n    let Magix = require(\'magix\');\n    let $ = require(\'$\');\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: \'@index.html\',\n        render() &#123;\n            let list = [];\n            for (let index = 0; index &lt; 5; index++) &#123;\n                list.push(&#123;\n                    text: \'test\' + index,\n                    value: index\n                &#125;)\n            &#125;\n            this.updater.digest(&#123;\n                viewId: this.id,\n                list\n            &#125;);\n        &#125;,\n        \'select&lt;change&gt;\'(e) &#123;\n            // e.selected：string，逗号分隔，选中value\n            // e.items：array，选中完成对象\n            this.updater.digest(&#123;\n                selected: e.selected\n            &#125;);\n        &#125;\n    &#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/__test__/8.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [];
        for (var index = 0; index < 5; index++) {
            list.push({
                text: 'test' + index,
                value: index
            });
        }
        this.updater.digest({
            viewId: this.id,
            list: list,
            max: 3,
            items: []
        });
    },
    'select<change>': function (e) {
        // e.selected：string，逗号分隔，选中value
        // e.items：array，选中完成对象
        this.updater.digest({
            selected: e.selected,
            items: e.items
        });
    }
});

});