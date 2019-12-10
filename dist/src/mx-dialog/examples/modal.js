/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/examples/modal",["magix","$","examples/subs","mx-title/second","./9","./10","./11","./options"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./9");
require("./10");
require("./11");
require("./options");
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
    $p += '<div mxa="_zs_gallerya$:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'头部 + 底部\',\n            key: viewId + \'_demo9\'\n        },{\n            name: \'只头部\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'只底部\',\n            key: viewId + \'_demo11\'\n        }]\n    }, {\n        name: \'View Methods\',\n        key: viewId + \'_method\'\n    }, {\n        name: \'dialogOptions\',\n        key: viewId + \'_options\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'头部 + 底部\',                    key: viewId + \'_demo9\'                }, {                    name: \'只头部\',                    key: viewId + \'_demo10\'                }, {                    name: \'只底部\',                    key: viewId + \'_demo11\'                }]        }, {            name: \'View Methods\',            key: viewId + \'_method\'        }, {            name: \'dialogOptions\',            key: viewId + \'_options\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '头部 + 底部', key: viewId + '_demo9' }, { name: '只头部', key: viewId + '_demo10' }, { name: '只底部', key: viewId + '_demo11' }] }, { name: 'View Methods', key: viewId + '_method' }, { name: 'dialogOptions', key: viewId + '_options' }])) + '"></div><div id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-dialog/examples/9" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mxa="_zs_gallerya$:a" class="clearfix mb20"><div mxa="_zs_gallerya$:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-dialog/examples/10" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div></div><div mxa="_zs_gallerya$:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-dialog/examples/11" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div></div></div><div id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerya$:_" class="pr20 mb40"><table class="table _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table"><thead><tr><th width="200">方法名</th><th width="200">说明</th><th width="300">预览</th></tr></thead><tbody><tr><td>mxModal(viewPath, [viewOptions], [dialogOptions])</td><td>自定义浮层</td><td></td></tr><tr><td>mxCloseAllDialogs()</td><td>关闭当前所有展开的浮层</td><td></td></tr></tbody></table></div><div id="';
    $line = 59;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_options" mx-view="mx-title/second?content=dialogOptions%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"></div><div mxs="_zs_gallerya$:a" class="mb40" mx-view="mx-dialog/examples/options"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/examples/modal.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});