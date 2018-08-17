/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/index",["magix","$","mx-title/second","./1","./2","./4","./3","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
require("./2");
require("./4");
require("./3");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerycy:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycy:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-tree/__test__/1"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-tree/__test__/2"></div><div mx-view="mx-tree/__test__/4"></div><div mx-view="mx-tree/__test__/3"></div></div></div><div mxs="_zs_gallerycy:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 14;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'text-key',
                desc: '渲染text时读取的key',
                type: 'string',
                def: 'text'
            }, {
                key: 'value-key',
                desc: '渲染value时读取的key',
                type: 'string',
                def: 'value'
            }, {
                key: 'parent-key',
                desc: '表示父节点id的字段',
                type: 'string',
                def: 'pValue'
            }, {
                key: 'list',
                desc: '页面展示数据列表，例如：<br>[{value: 1, pValue: \'\', text: \'计划1\'},{value: 11, pValue: 1, text: \'单元1-1\'}]',
                type: 'array',
                def: ''
            }, {
                key: 'bottom-values',
                desc: '已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据',
                type: 'array',
                def: ''
            }, {
                key: 'need-all',
                desc: '是否需要全选功能',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'read-only',
                desc: '是否只是展示',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'has-line',
                desc: '是否有连接线',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'need-expand',
                desc: '是否需要展开收起功能',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'close',
                desc: '默认状态下是否收起',
                type: 'boolean',
                def: 'false'
            }];
        that.updater.digest({
            options: options
        });
    }
});

});