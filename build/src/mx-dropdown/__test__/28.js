/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/28",["magix","__test__/example","$","../bd","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../bd");
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
    $p += '<div mxa="_zs_gallerya!:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerya!:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya!:_" class="mb20"><span class="color-9">以下示例：</span>分组 + 多选</div><div class="w200" mx-view="mx-dropdown/bd?multiple=true&parents=';
    $line = 9;
    $art = '@[{\n                value:1,\n                text:\'第一组\'\n            },{\n                value:2,\n                text:\'第二组\'\n            }]';
    ;
    $p += ($expr = '<%@[{            value: 1,            text: \'第一组\'        }, {            value: 2,            text: \'第二组\'        }]%>', $i($$ref, [{ value: 1, text: '第一组' }, { value: 2, text: '第二组' }])) + '&list=';
    $line = 16;
    $art = '@[{\n                value:1,\n                text:\'test\',\n                pValue: 1\n            },{\n                value:2,\n                text:\'TestABC\',\n                pValue: 1\n            },{\n                value:3,\n                text:\'Another\',\n                pValue: 2\n            },{\n                value:4,\n                text:\'选项1\',\n                pValue: 1\n            },{\n                value:5,\n                text:\'选项2\',\n                pValue: 2\n            }]';
    ;
    $p += ($expr = '<%@[{            value: 1,            text: \'test\',            pValue: 1        }, {            value: 2,            text: \'TestABC\',            pValue: 1        }, {            value: 3,            text: \'Another\',            pValue: 2        }, {            value: 4,            text: \'选项1\',            pValue: 1        }, {            value: 5,            text: \'选项2\',            pValue: 2        }]%>', $i($$ref, [{ value: 1, text: 'test', pValue: 1 }, { value: 2, text: 'TestABC', pValue: 1 }, { value: 3, text: 'Another', pValue: 2 }, { value: 4, text: '选项1', pValue: 1 }, { value: 5, text: '选项2', pValue: 2 }])) + '"></div></div><div mxa="_zs_gallerya!:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya!:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya!:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 43;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya!:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown.bd class="w200" \n    multiple="true"\n    parents="&#123;&#123;@[&#123;\n        value:1,\n        text:\'第一组\'\n    &#125;,&#123;\n        value:2,\n        text:\'第二组\'\n    &#125;]&#125;&#125;"\n    list="&#123;&#123;@[&#123;\n        value:1,\n        text:\'test\',\n        pValue: 1\n    &#125;,&#123;\n        value:2,\n        text:\'TestABC\',\n        pValue: 1\n    &#125;,&#123;\n        value:3,\n        text:\'Another\',\n        pValue: 2\n    &#125;,&#123;\n        value:4,\n        text:\'选项1\',\n        pValue: 1\n    &#125;,&#123;\n        value:5,\n        text:\'选项2\',\n        pValue: 2\n    &#125;]&#125;&#125;"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/28.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});