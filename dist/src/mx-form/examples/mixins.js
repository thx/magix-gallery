/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/examples/mixins",["magix","mx-effects/notice","examples/subs","mx-title/second","./2","./11","./12","./13","./9","./14","./3","./5","./6","./4","./7","./16","./8","./15","./10"],(require,exports,module)=>{
/*Magix*/
require("mx-effects/notice");
require("examples/subs");
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
    $p += '<div mxs="_zs_gallerycC:_" class="mb20 mr20" mx-view="mx-effects/notice?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E9%BB%98%E8%AE%A4%E8%AE%BE%E7%BD%AE%20pointer-events%3A%20none%3B%20%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E4%B8%AD%E5%8C%85%E5%90%AB%E5%8F%AF%E7%82%B9%E5%87%BB%E5%86%85%E5%AE%B9%E6%97%B6%EF%BC%8C%E8%AF%B7%E8%87%AA%E8%A1%8C%E6%8C%87%E5%AE%9A%20pointer-events%3A%20auto%3B"></div><div mxa="_zs_gallerycC:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 4;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'必填\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'checkbox\',\n            key: viewId + \'_demo11\'\n        },{\n            name: \'radio\',\n            key: viewId + \'_demo12\'\n        },{\n            name: \'dropdown必选\',\n            key: viewId + \'_demo13\'\n        },{\n            name: \'refresh\',\n            key: viewId + \'_demo9\'\n        },{\n            name: \'动态添加\',\n            key: viewId + \'_demo14\'\n        },{\n            name: \'正则\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'字个数\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'字符个数\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'数字\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'数字范围\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'节点不重复\',\n            key: viewId + \'_demo16\'\n        },{\n            name: \'节点一致\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'taginput\',\n            key: viewId + \'_demo15\'\n        },{\n            name: \'url\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'中英文\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'电话号码\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'email\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'金额\',\n            key: viewId + \'_demo10\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'必填\',                    key: viewId + \'_demo2\'                }, {                    name: \'checkbox\',                    key: viewId + \'_demo11\'                }, {                    name: \'radio\',                    key: viewId + \'_demo12\'                }, {                    name: \'dropdown必选\',                    key: viewId + \'_demo13\'                }, {                    name: \'refresh\',                    key: viewId + \'_demo9\'                }, {                    name: \'动态添加\',                    key: viewId + \'_demo14\'                }, {                    name: \'正则\',                    key: viewId + \'_demo3\'                }, {                    name: \'字个数\',                    key: viewId + \'_demo5\'                }, {                    name: \'字符个数\',                    key: viewId + \'_demo6\'                }, {                    name: \'数字\',                    key: viewId + \'_demo4\'                }, {                    name: \'数字范围\',                    key: viewId + \'_demo7\'                }, {                    name: \'节点不重复\',                    key: viewId + \'_demo16\'                }, {                    name: \'节点一致\',                    key: viewId + \'_demo8\'                }, {                    name: \'taginput\',                    key: viewId + \'_demo15\'                }, {                    name: \'url\',                    key: viewId + \'_demo10\'                }, {                    name: \'中英文\',                    key: viewId + \'_demo10\'                }, {                    name: \'电话号码\',                    key: viewId + \'_demo10\'                }, {                    name: \'email\',                    key: viewId + \'_demo10\'                }, {                    name: \'金额\',                    key: viewId + \'_demo10\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '必填', key: viewId + '_demo2' }, { name: 'checkbox', key: viewId + '_demo11' }, { name: 'radio', key: viewId + '_demo12' }, { name: 'dropdown必选', key: viewId + '_demo13' }, { name: 'refresh', key: viewId + '_demo9' }, { name: '动态添加', key: viewId + '_demo14' }, { name: '正则', key: viewId + '_demo3' }, { name: '字个数', key: viewId + '_demo5' }, { name: '字符个数', key: viewId + '_demo6' }, { name: '数字', key: viewId + '_demo4' }, { name: '数字范围', key: viewId + '_demo7' }, { name: '节点不重复', key: viewId + '_demo16' }, { name: '节点一致', key: viewId + '_demo8' }, { name: 'taginput', key: viewId + '_demo15' }, { name: 'url', key: viewId + '_demo10' }, { name: '中英文', key: viewId + '_demo10' }, { name: '电话号码', key: viewId + '_demo10' }, { name: 'email', key: viewId + '_demo10' }, { name: '金额', key: viewId + '_demo10' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 70;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycC:a" class="clearfix mb20"><div mx-view="mx-form/examples/2" id="';
    $line = 72;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-form/examples/11" id="';
    $line = 73;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div><div mx-view="mx-form/examples/12" id="';
    $line = 74;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo12"></div><div mx-view="mx-form/examples/13" id="';
    $line = 75;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo13"></div><div mx-view="mx-form/examples/9" id="';
    $line = 76;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mx-view="mx-form/examples/14" id="';
    $line = 77;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo14"></div><div mx-view="mx-form/examples/3" id="';
    $line = 78;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-form/examples/5" id="';
    $line = 79;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-form/examples/6" id="';
    $line = 80;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-form/examples/4" id="';
    $line = 81;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-form/examples/7" id="';
    $line = 82;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-form/examples/16" id="';
    $line = 83;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo16"></div><div mx-view="mx-form/examples/8" id="';
    $line = 84;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-form/examples/15" id="';
    $line = 85;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo15"></div><div mx-view="mx-form/examples/10" id="';
    $line = 86;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div></div><div id="';
    $line = 89;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxs="_zs_gallerycC:a" class="pr20 mb40"><table class="table _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table"><thead><tr><th width="100">可配参数</th><th width="200">说明</th><th width="100">类型</th><th width="120">默认值</th></tr></thead><tbody><tr><td>refresh</td><td>数据变化是否需要更新view，调用view.digest</td><td>boolean</td><td>false</td></tr><tr><td>placement</td><td>错误信息展示位置，可配置right，bottom</td><td>string</td><td>bottom</td></tr><tr><td>currency</td><td>金额<br/>currency: true<br/>currency: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>url</td><td>合法链接<br/>url: true<br/>url: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>english</td><td>英文<br/>english: true<br/>english: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>email</td><td>邮箱校验<br/>email: true<br/>email: [true, \'自定义提示（可选）\', \'domains[array]（指定邮箱，可选）\']</td><td></td><td></td></tr><tr><td>chinese</td><td>中文<br/>chinese: true<br/>chinese: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>mobile</td><td>手机号码<br/>mobile: true<br/>mobile: [true, 自定义提示]</td><td></td><td></td></tr><tr><td>number</td><td>是否为数字<br/>number: true</td><td></td><td></td></tr><tr><td>pattern</td><td>正则<br/>pattern: ^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$<br/>pattern: [\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'自定义错误提示\']</td><td></td><td></td></tr><tr><td>required</td><td>必填<br/>required: true<br/>required: [true, \'必选\']</td><td></td><td></td></tr><tr><td>trim</td><td>不能有空格<br/>trim: true<br/>trim: [true, \'不能包含空格\']</td><td></td><td></td></tr><tr><td>int</td><td>整数<br/>int: true</td><td></td><td></td></tr><tr><td>posint</td><td>正整数<br/>posint: true<br/>posint: [true, \'自定义提示\']</td><td></td><td></td></tr><tr><td>negint</td><td>负整数<br/>negint: true<br/>negint: [true, \'自定义提示\']</td><td></td><td></td></tr><tr><td>length</td><td>字个数范围<br/>length: [2, 8]</td><td></td><td></td></tr><tr><td>minlength</td><td><div>最少多少个字</div><div>minlength: 2</div><div>minlength: [2, 自定义提示文案]</div></td><td></td><td></td></tr><tr><td>maxlength</td><td><div>最多多少个字</div><div>maxlength: 8</div><div>maxlength: [8, 自定义提示文案]</div></td><td></td><td></td></tr><tr><td>blength</td><td>字符个数范围，一个汉字两个字符<br/>blength: [2, 8]</td><td></td><td></td></tr><tr><td>bminlength</td><td>最少多少个字符，一个汉字两个字符<br/>bminlength: 2<br/>bminlength: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>bmaxlength</td><td>最多多少个字符，一个汉字两个字符<br/>bmaxlength: 8<br/>bmaxlength: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>unequalto</td><td><div>与某些节点内容不一致</div><div>unequalto: \'id1,id2\'</div><div>unequalto: [\'id1,id2\', 自定义提示]</div></td><td></td><td></td></tr><tr><td>equalto</td><td>与某个节点内容一致<br/>equalto: id<br/>equalto: [id, 自定义提示]</td><td></td><td></td></tr><tr><td>range</td><td>数字范围，包含边界，range: [a,b]， a &lt;= x &lt;= b<br/>range: [2, 8, 自定义提示文案（可选）]</td><td></td><td></td></tr><tr><td>rangeborder</td><td>数字范围，不包含边界，rangeborder: [a,b]， a &lt; x &lt; b<br/>rangeborder: [2, 8, 自定义提示文案（可选）]</td><td></td><td></td></tr><tr><td>min</td><td>大于等于某个数字，min: a，a &lt;= x<br/>min: 2<br/>min: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>minborder</td><td>大于某个数字，minborder: a，a &lt; x<br/>minborder: 2<br/>minborder: [2, 自定义提示文案]</td><td></td><td></td></tr><tr><td>max</td><td>小于等于某个数字，max: b，x &lt;= b<br/>max: 8<br/>max: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>maxborder</td><td>小于某个数字，maxborder: b，x &lt; b<br/>maxborder: 8<br/>maxborder: [8, 自定义提示文案]</td><td></td><td></td></tr><tr><td>warn</td><td><div>警告类信息，对象</div><div>必然是在valid=true的前提下才会有</div><div><pre>warn: {\n    min: [2, 自定义提示文案]\n}</pre></div></td><td></td><td></td></tr></tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/examples/mixins.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});