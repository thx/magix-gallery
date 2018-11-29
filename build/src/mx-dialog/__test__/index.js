/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/index",["magix","$","__test__/subs","mx-title/second","./3","./5","./2","./1","./4","./6","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./3");
require("./5");
require("./2");
require("./1");
require("./4");
require("./6");
require("__test__/api");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryaf:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'mxDialog\',\n            key: viewId + \'_mxDialog\'\n        },{\n            name: \'获取dialog实例\',\n            key: viewId + \'_self\'\n        },{\n            name: \'内容分组\',\n            key: viewId + \'_help\'\n        },{\n            name: \'alert警告\',\n            key: viewId + \'_alert\'\n        },{\n            name: \'confirm二次确认\',\n            key: viewId + \'_confirm\'\n        },{\n            name: \'dialog内配置属性\',\n            key: viewId + \'_inner\'\n        }]\n    }, {\n        name: \'dialogOptions\',\n        key: viewId + \'_options\'\n    }, {\n        name: \'View Methods\',\n        key: viewId + \'_method\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'mxDialog\',                    key: viewId + \'_mxDialog\'                }, {                    name: \'获取dialog实例\',                    key: viewId + \'_self\'                }, {                    name: \'内容分组\',                    key: viewId + \'_help\'                }, {                    name: \'alert警告\',                    key: viewId + \'_alert\'                }, {                    name: \'confirm二次确认\',                    key: viewId + \'_confirm\'                }, {                    name: \'dialog内配置属性\',                    key: viewId + \'_inner\'                }]        }, {            name: \'dialogOptions\',            key: viewId + \'_options\'        }, {            name: \'View Methods\',            key: viewId + \'_method\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: 'mxDialog', key: viewId + '_mxDialog' }, { name: '获取dialog实例', key: viewId + '_self' }, { name: '内容分组', key: viewId + '_help' }, { name: 'alert警告', key: viewId + '_alert' }, { name: 'confirm二次确认', key: viewId + '_confirm' }, { name: 'dialog内配置属性', key: viewId + '_inner' }] }, { name: 'dialogOptions', key: viewId + '_options' }, { name: 'View Methods', key: viewId + '_method' }])) + '"></div><div mxs="_zs_galleryaf:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaf:a" class="clearfix mb20"><div mx-view="mx-dialog/__test__/3" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_mxDialog"></div><div mxa="_zs_galleryaf:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-dialog/__test__/5" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_self"></div><div mx-view="mx-dialog/__test__/2" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_confirm"></div><div mx-view="mx-dialog/__test__/1" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_alert"></div></div><div mxa="_zs_galleryaf:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-dialog/__test__/4" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_help"></div><div mx-view="mx-dialog/__test__/6" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_inner"></div></div></div><div id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_options" mx-view="mx-title/second?content=dialogOptions%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"></div><div mxv="options" class="mb40" mx-view="__test__/api?options=';
    $line = 47;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div><div id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryaf:a" class="pr20"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="200">方法名</th><th width="200">说明</th><th width="300">预览</th></tr></thead><tbody><tr><td>mxDialog(viewPath, [viewOptions], [dialogOptions])</td><td>自定义浮层</td><td></td></tr><tr><td>alert(title, content, [enterCallback], [dialogOptions])</td><td>警告小浮层</td><td></td></tr><tr><td>confirm(viewOptions, [dialogOptions])</td><td>二次确认浮层</td><td></td></tr><tr><td>mxDialogGroup(viewOptions, [dialogOptions])</td><td>内容分组浮层</td><td><img class="w360" src="https://img.alicdn.com/tfs/TB1vxEOgAvoK1RjSZFwXXciCFXa-631-423.gif"/></td></tr><tr><td>mxCloseAllDialogs()</td><td>关闭当前所有展开的浮层</td><td></td></tr></tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'width',
                desc: '浮层宽度',
                type: 'number',
                def: '400'
            }, {
                key: 'height',
                desc: '浮层高度',
                type: 'number',
                def: '400'
            }, {
                key: 'modal',
                desc: '打开浮层时是否禁止滚动',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'mask',
                desc: "\u6253\u5F00\u6D6E\u5C42\u65F6\u662F\u5426\u6709\u6DF1\u8272\u900F\u660E\u5EA6\u906E\u7F69\uFF0C\u4E0D\u9700\u8981\u8BF7\u624B\u52A8false\u5173\u95ED\n<div class=\"color-brand\">\u6CE8\u610F mask=false \u60C5\u51B5\u4E0B\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u81EA\u52A8\u5173\u95ED\u6D6E\u5C42</div>",
                type: 'boolean',
                def: 'true'
            }, {
                key: 'closable',
                desc: '浮层是否有右上角默认的关闭按钮',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'left',
                desc: '最终定位相对于屏幕左侧',
                type: 'number',
                def: '默认居中'
            }, {
                key: 'top',
                desc: "\u6700\u7EC8\u5B9A\u4F4D\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u9AD8\u4FA7\n<div class=\"color-brand\">\u5982\u679C\u60F3\u76F8\u5BF9\u4E8Etrigger\u5B9A\u4F4D\uFF0C\u8BF7\u51CF\u53BB $(window).scrollTop()</div>",
                type: 'number',
                def: '默认居中，若高度超过屏幕高度则为0'
            }];
        that.updater.digest({
            options: options,
            viewId: that.id
        });
    }
});

});