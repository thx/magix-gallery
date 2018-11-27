/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/mixins",["magix","__test__/subs","mx-title/second","./2","./11","./12","./13","./9","./14","./3","./5","./6","./4","./7","./16","./8","./15","./10"],(require,exports,module)=>{
/*Magix*/
require("__test__/subs");
require("mx-title/second");
require("./2");
require("./11");
require("./12");
require("./13");
require("./9");
require("./14");
require("./3");
require("./5");
require("./6");
require("./4");
require("./7");
require("./16");
require("./8");
require("./15");
require("./10");
var Magix = require("magix");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybo:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'必填\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'checkbox\',\n            key: viewId + \'_demo11\'\n        },{\n            name: \'radio\',\n            key: viewId + \'_demo12\'\n        },{\n            name: \'dropdown必选\',\n            key: viewId + \'_demo13\'\n        },{\n            name: \'refresh\',\n            key: viewId + \'_demo9\'\n        },{\n            name: \'动态添加\',\n            key: viewId + \'_demo14\'\n        },{\n            name: \'正则\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'字个数\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'字符个数\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'数字\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'数字范围\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'节点不重复\',\n            key: viewId + \'_demo16\'\n        },{\n            name: \'节点一致\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'taginput\',\n            key: viewId + \'_demo15\'\n        },{\n            name: \'其他常用\',\n            key: viewId + \'_demo10\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'必填\',                    key: viewId + \'_demo2\'                }, {                    name: \'checkbox\',                    key: viewId + \'_demo11\'                }, {                    name: \'radio\',                    key: viewId + \'_demo12\'                }, {                    name: \'dropdown必选\',                    key: viewId + \'_demo13\'                }, {                    name: \'refresh\',                    key: viewId + \'_demo9\'                }, {                    name: \'动态添加\',                    key: viewId + \'_demo14\'                }, {                    name: \'正则\',                    key: viewId + \'_demo3\'                }, {                    name: \'字个数\',                    key: viewId + \'_demo5\'                }, {                    name: \'字符个数\',                    key: viewId + \'_demo6\'                }, {                    name: \'数字\',                    key: viewId + \'_demo4\'                }, {                    name: \'数字范围\',                    key: viewId + \'_demo7\'                }, {                    name: \'节点不重复\',                    key: viewId + \'_demo16\'                }, {                    name: \'节点一致\',                    key: viewId + \'_demo8\'                }, {                    name: \'taginput\',                    key: viewId + \'_demo15\'                }, {                    name: \'其他常用\',                    key: viewId + \'_demo10\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '必填', key: viewId + '_demo2' }, { name: 'checkbox', key: viewId + '_demo11' }, { name: 'radio', key: viewId + '_demo12' }, { name: 'dropdown必选', key: viewId + '_demo13' }, { name: 'refresh', key: viewId + '_demo9' }, { name: '动态添加', key: viewId + '_demo14' }, { name: '正则', key: viewId + '_demo3' }, { name: '字个数', key: viewId + '_demo5' }, { name: '字符个数', key: viewId + '_demo6' }, { name: '数字', key: viewId + '_demo4' }, { name: '数字范围', key: viewId + '_demo7' }, { name: '节点不重复', key: viewId + '_demo16' }, { name: '节点一致', key: viewId + '_demo8' }, { name: 'taginput', key: viewId + '_demo15' }, { name: '其他常用', key: viewId + '_demo10' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybo:a" class="clearfix mb20"><div mx-view="mx-form/__test__/2" id="';
    $line = 58;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-form/__test__/11" id="';
    $line = 59;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div><div mx-view="mx-form/__test__/12" id="';
    $line = 60;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo12"></div><div mx-view="mx-form/__test__/13" id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo13"></div><div mx-view="mx-form/__test__/9" id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mx-view="mx-form/__test__/14" id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo14"></div><div mx-view="mx-form/__test__/3" id="';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-form/__test__/5" id="';
    $line = 65;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-form/__test__/6" id="';
    $line = 66;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-form/__test__/4" id="';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-form/__test__/7" id="';
    $line = 68;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-form/__test__/16" id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo16"></div><div mx-view="mx-form/__test__/8" id="';
    $line = 70;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-form/__test__/15" id="';
    $line = 71;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo15"></div><div mx-view="mx-form/__test__/10" id="';
    $line = 72;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div></div><div id="';
    $line = 75;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxs="_zs_gallerybo:_" class="pr20 mb40"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="100">可配参数</th><th width="200">说明</th><th width="100">类型</th><th width="120">默认值</th></tr></thead><tbody><tr><td>refresh</td><td>数据变化是否需要更新view，调用view.digest</td><td>boolean</td><td>false</td></tr><tr><td>placement</td><td>错误信息展示位置，可配置right，bottom</td><td>string</td><td>bottom</td></tr><tr><td>currency</td><td>金额<br/>currency: true<br/>currency: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>url</td><td>合法链接<br/>url: true<br/>url: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>english</td><td>英文<br/>english: true<br/>english: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>chinese</td><td>中文<br/>chinese: true<br/>chinese: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>mobile</td><td>手机号码<br/>mobile: true<br/>mobile: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>number</td><td>是否为数字<br/>number: true</td><td></td><td></td></tr><tr><td>pattern</td><td>正则<br/>pattern: ^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$<br/>pattern: [\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'自定义错误提示\']</td><td></td><td></td></tr><tr><td>required</td><td>必填<br/>required: true<br/>required: [true, \'必选\']</td><td></td><td></td></tr><tr><td>trim</td><td>不能有空格<br/>trim: true<br/>trim: [true, \'不能包含空格\']</td><td></td><td></td></tr><tr><td>int</td><td>整数<br/>int: true</td><td></td><td></td></tr><tr><td>posint</td><td>正整数<br/>posint: true<br/>posint: [true, \'自定义提示\']</td><td></td><td></td></tr><tr><td>negint</td><td>负整数<br/>negint: true<br/>negint: [true, \'自定义提示\']</td><td></td><td></td></tr><tr><td>length</td><td>字个数范围<br/>length: [2, 8]</td><td></td><td></td></tr><tr><td>minlength</td><td><div>最少多少个字</div><div>minlength: 2</div><div>minlength: [2, 自定义提示文案]</div></td><td></td><td></td></tr><tr><td>maxlength</td><td><div>最多多少个字</div><div>maxlength: 8</div><div>maxlength: [8, 自定义提示文案]</div></td><td></td><td></td></tr><tr><td>blength</td><td>字符个数范围，一个汉字两个字符<br/>blength: [2, 8]</td><td></td><td></td></tr><tr><td>bminlength</td><td>最少多少个字符，一个汉字两个字符<br/>bminlength: 2<br/>bminlength: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>bmaxlength</td><td>最多多少个字符，一个汉字两个字符<br/>bmaxlength: 8<br/>bmaxlength: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>unequalto</td><td><div>与某些节点内容不一致</div><div>unequalto: \'id1,id2\'</div><div>unequalto: [\'id1,id2\', 自定义提示]</div></td><td></td><td></td></tr><tr><td>equalto</td><td>与某个节点内容一致<br/>equalto: id<br/>equalto: [id, 自定义提示]</td><td></td><td></td></tr><tr><td>range</td><td>数字范围<br/>range: [2, 8, 自定义提示文案（可选）]</td><td></td><td></td></tr><tr><td>min</td><td>不能小于某个数字<br/>min: 2<br/>min: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>max</td><td>不能大于某个数字<br/>max: 8<br/>max: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>warn</td><td><div>警告类信息，对象</div><div>必然是在valid=true的前提下才会有</div><div><pre>warn: {\n    min: [2, 自定义提示文案]\n}</pre></div></td><td></td><td></td></tr></tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/mixins.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});