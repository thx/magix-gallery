/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./3"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
var Magix = require("magix");
var $ = require("$");
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
    $p += '<div mxa="_zs_gallerycP:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'单实例\',\n            key: viewId + \'_demo1\'\n        }, {\n            name: \'多实例\',\n            key: viewId + \'_demo2\'\n        }, {\n            name: \'快捷使用\',\n            key: viewId + \'_demo3\'\n        }]\n    }, {\n        name: \'Methods\',\n        key: viewId + \'_method\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'单实例\',                    key: viewId + \'_demo1\'                }, {                    name: \'多实例\',                    key: viewId + \'_demo2\'                }, {                    name: \'快捷使用\',                    key: viewId + \'_demo3\'                }]        }, {            name: \'Methods\',            key: viewId + \'_method\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '单实例', key: viewId + '_demo1' }, { name: '多实例', key: viewId + '_demo2' }, { name: '快捷使用', key: viewId + '_demo3' }] }, { name: 'Methods', key: viewId + '_method' }])) + '"></div><div id="';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycP:a" class="clearfix mb20"><div mx-view="mx-gtip/examples/1" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-gtip/examples/2" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-gtip/examples/3" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerycP:_" class="pr20 mb40"><table class="table _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>gtip(msg [, options])</td><td class="lh22"><div>1. msg（String）：提示信息内容</div><div>2. options（PlainObject），可配参数如下：</div><div class="pl10"><div>a. timeout（Number or String）：延时自动关闭，设置的时候timeout后自动关闭，不设置的时候显示关闭按钮手动关闭</div><div>b. type（String）：error：红色错误类型提示；warn：黄色警告类型提示；highlight：品牌色图标强调提示；common：默认黑底透明度提示</div><div>c. singleton（Boolean）：是否为单实例，默认true，singleton=false的可与其他gtip共存，否则当前view只有一个gtip</div><div>d. styles（PlainObject）：驼峰，直接覆盖样式，默认内容如下：</div><pre>\n    styles: { \n        position: \'fixed\',\n        top: \'0px\',\n        left: \'0px\',\n        width: \'100%\'  \n    }\n                            </pre></div></td></tr><tr><td>gtip(msg [, timeout])</td><td class="lh22"><div>1. msg（String）：提示信息内容</div><div>2. timeout（Number or String）：延时自动关闭，设置的时候timeout后自动关闭，不设置的时候显示关闭按钮手动关闭</div></td></tr></tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-gtip/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});