/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', selectedValue = $$.selectedValue, selectedText = $$.selectedText, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycA:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerycA:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerycA:_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>支持上下键切换选择项</div><div>模糊检索不区分大小写</div></div></div><div mxa="_zs_gallerycA:b" class="mb20"><span mxs="_zs_gallerycA:a" class="color-9">当前选中：</span>';
    $line = 12;
    $art = 'if selectedValue';
    ;
    $expr = '<%if (selectedValue) {%>';
    if (selectedValue) {
        ;
        $p += ' ';
        $line = 13;
        $art = '=selectedValue';
        ;
        $p += ($expr = '<%=selectedValue%>', $e(selectedValue)) + '（';
        $line = 13;
        $art = '=selectedText';
        ;
        $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '） ';
        $line = 14;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div class="w250" mx-suggest="' + $viewId + 'suggest()" mx-view="mx-suggest/index?selected=';
    $line = 17;
    $art = '=selectedValue';
    ;
    $p += ($expr = '<%!$eu(selectedValue)%>', $eu(selectedValue)) + '&placeholder=%E8%BE%93%E5%85%A5%E5%85%B3%E9%94%AE%E8%AF%8D%E6%90%9C%E7%B4%A2&list=';
    $line = 19;
    $art = '@[{\n                text: \'test1\',\n                value: 1\n            }, {\n                text: \'test12\',\n                value: 2\n            }, {\n                text: \'abc1\',\n                value: 3\n            }, {\n                text: \'abc2\',\n                value: 4\n            }]';
    ;
    $p += ($expr = '<%@[{            text: \'test1\',            value: 1        }, {            text: \'test12\',            value: 2        }, {            text: \'abc1\',            value: 3        }, {            text: \'abc2\',            value: 4        }]%>', $i($$ref, [{ text: 'test1', value: 1 }, { text: 'test12', value: 2 }, { text: 'abc1', value: 3 }, { text: 'abc2', value: 4 }])) + '"></div></div><div mxa="_zs_gallerycA:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerycA:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycA:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 38;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycA:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-suggest class="w250"\n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    placeholder="输入关键词搜索"\n    list="&#123;&#123;@[&#123;\n        text: \'test1\',\n        value: 1\n    &#125;, &#123;\n        text: \'test12\',\n        value: 2\n    &#125;, &#123;\n        text: \'abc1\',\n        value: 3\n    &#125;, &#123;\n        text: \'abc2\',\n        value: 4\n    &#125;]&#125;&#125;"\n    mx-suggest="suggest()"/&gt;</pre></div><div mxa="_zs_gallerycA:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerycA:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycA:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 64;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycA:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            selectedValue: \'\'\n        &#125;);\n    &#125;,\n    \'suggest&lt;suggest&gt;\'(e) &#123;\n        // e.selected [object]\n        //      value\n        //      text\n        let selected = e.selected;\n        this.updater.digest(&#123;\n            selectedValue: selected.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-suggest/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            selectedValue: '',
            selectedText: ''
        });
    },
    'suggest<suggest>': function (e) {
        // e.selected [object]
        //      value
        //      text
        var selected = e.selected;
        this.updater.digest({
            selectedValue: selected.value,
            selectedText: selected.text
        });
    }
});

});