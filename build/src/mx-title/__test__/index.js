/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/__test__/index",["magix","__test__/example","$","__test__/subs","../second","../index","mx-copy/index","__test__/hl","./1","__test__/api"],(require,exports,module)=>{
/*Magix,Base,$*/
require("__test__/subs");
require("../second");
require("../index");
require("mx-copy/index");
require("__test__/hl");
require("./1");
require("__test__/api");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text5 = $$.text5, text3 = $$.text3, text4 = $$.text4, text6 = $$.text6, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryee:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'一级\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'二级\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'一级+标签\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'二级+标签\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'实际应用场景\',\n            key: viewId + \'_demo5\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'一级\',                    key: viewId + \'_demo1\'                }, {                    name: \'二级\',                    key: viewId + \'_demo3\'                }, {                    name: \'一级+标签\',                    key: viewId + \'_demo2\'                }, {                    name: \'二级+标签\',                    key: viewId + \'_demo4\'                }, {                    name: \'实际应用场景\',                    key: viewId + \'_demo5\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '一级', key: viewId + '_demo1' }, { name: '二级', key: viewId + '_demo3' }, { name: '一级+标签', key: viewId + '_demo2' }, { name: '二级+标签', key: viewId + '_demo4' }, { name: '实际应用场景', key: viewId + '_demo5' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryee:a" class="clearfix"><div mxa="_zs_galleryee:b" class="_zs_gallery___test___layout_-half"><div class="_zs_gallery___test___layout_-example" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"><div mxs="_zs_galleryee:_" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-title/index?content=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div></div><div mxa="_zs_galleryee:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryee:a" class="_zs_gallery___test___layout_-eg-title">使用组件</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryee:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 39;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryee:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-title \n    content="一级标题"\n    tip="标题提示文案"/&gt;\n                    </pre></div><div mxa="_zs_galleryee:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryee:c" class="_zs_gallery___test___layout_-eg-title">可直接使用class</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryee:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 52;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryee:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;div class="page-header"&gt;\n    &lt;span class="first-header"&gt;一级标题&lt;/span&gt;\n    &lt;span class="page-tip"&gt;标题提示文案&lt;/span&gt;\n&lt;/div&gt;\n                    </pre></div></div><div class="_zs_gallery___test___layout_-example" id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"><div mxs="_zs_galleryee:d" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-title/index?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%B8%80%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_galleryee:g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryee:e" class="_zs_gallery___test___layout_-eg-title">可包含html标签，需要转义</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:5})" mx-view="mx-copy/index?copyNode=';
    $line = 71;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_5"><span mxa="_zs_galleryee:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 73;
    $art = '!text5';
    ;
    $p += ($expr = '<%!text5%>', $n(text5)) + '</span><i mxs="_zs_galleryee:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 76;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_5">\n&lt;mx-title \n    content="&amp;lt;span style=\'color: red;\'&amp;gt;一级&amp;lt;/span&amp;gt;标题"\n    tip="&amp;lt;span style=\'color: red;\'&amp;gt;高亮&amp;lt;/span&amp;gt;显示"/&gt;\n                    </pre></div></div></div><div mxa="_zs_galleryee:i" class="_zs_gallery___test___layout_-half"><div class="_zs_gallery___test___layout_-example" id="';
    $line = 85;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"><div mxs="_zs_galleryee:f" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-title/second?content=%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div></div><div mxa="_zs_galleryee:j" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryee:a" class="_zs_gallery___test___layout_-eg-title">使用组件</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 93;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_galleryee:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 95;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_galleryee:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 98;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;mx-title.second\n    content="二级标题"\n    tip="二级标题提示文案"/&gt;\n                    </pre></div><div mxa="_zs_galleryee:l" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryee:c" class="_zs_gallery___test___layout_-eg-title">可直接使用class</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 106;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_galleryee:m" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 108;
    $art = '!text4';
    ;
    $p += ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_galleryee:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 111;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\n&lt;div class="page-header"&gt;\n    &lt;span class="second-header"&gt;二级标题&lt;/span&gt;\n    &lt;span class="page-tip"&gt;二级标题提示文案&lt;/span&gt;\n&lt;/div&gt;\n                    </pre></div></div><div class="_zs_gallery___test___layout_-example" id="';
    $line = 119;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"><div mxs="_zs_galleryee:g" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-title/second?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%BA%8C%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_galleryee:n" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryee:e" class="_zs_gallery___test___layout_-eg-title">可包含html标签，需要转义</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:6})" mx-view="mx-copy/index?copyNode=';
    $line = 127;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_6"><span mxa="_zs_galleryee:o" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 129;
    $art = '!text6';
    ;
    $p += ($expr = '<%!text6%>', $n(text6)) + '</span><i mxs="_zs_galleryee:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 132;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_6">\n&lt;mx-title.second \n    content="&amp;lt;span style=\'color: red;\'&amp;gt;二级&amp;lt;/span&amp;gt;标题"\n    tip="&amp;lt;span style=\'color: red;\'&amp;gt;高亮&amp;lt;/span&amp;gt;显示"/&gt;\n                    </pre></div></div></div></div><div mxa="_zs_galleryee:p" class="mb20"><div mx-view="mx-title/__test__/1" id="';
    $line = 142;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div><div id="';
    $line = 145;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 146;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-title/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'content',
                desc: '标题内容',
                type: 'string'
            }, {
                key: 'tip',
                desc: '提示内容',
                type: 'string'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});