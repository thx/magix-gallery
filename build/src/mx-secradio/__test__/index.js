/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-secradio/__test__/index",["magix","__test__/subs","mx-title/second","./1","./3","./2","./4","__test__/api"],(require,exports,module)=>{
/*Magix*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./3");
require("./2");
require("./4");
require("__test__/api");
var Magix = require("magix");
Magix.applyStyle("_zs_galleryas","");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; $p += '<div mxv mxa="_zs_galleryc(:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '带前缀', key: viewId + '_demo1' }, { name: 'val()', key: viewId + '_demo2' }, { name: '默认收起', key: viewId + '_demo3' }, { name: '最大高度', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }]) + '"></div><div mxs="_zs_galleryc(:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc(:a" class="clearfix mb20"><div mxa="_zs_galleryc(:b" class="_zs_gallerye"><div mx-view="mx-secradio/__test__/1" id="' + $e(viewId) + '_demo1"></div><div mx-view="mx-secradio/__test__/3" id="' + $e(viewId) + '_demo3"></div></div><div mxa="_zs_galleryc(:c" class="_zs_gallerye"><div mx-view="mx-secradio/__test__/2" id="' + $e(viewId) + '_demo2"></div><div mx-view="mx-secradio/__test__/4" id="' + $e(viewId) + '_demo4"></div></div></div><div id="' + $e(viewId) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=' + $i($$ref, options) + '"></div></div>'; return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: "<pre>\n\u9875\u9762\u5C55\u793A\u6570\u636E\u5217\u8868\uFF0C\u4F8B\u5982\uFF1A\n[{\n    text: '\u8BA1\u52121',\n    subs: [{\n        value: 11,\n        text: '\u5355\u51431-1'\n    }, {\n        value: 12,\n        text: '\u5355\u51431-2'\n    }]\n}, {\n    text: '\u8BA1\u52122',\n    subs: [{\n        value: 21,\n        text: '\u5355\u51432-1'\n    }]\n}]\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'selected',
                desc: '选中的sub的value',
                type: 'string',
                def: ''
            }, {
                key: 'text-key',
                desc: '渲染子节点text时读取的key',
                type: 'string',
                def: 'text'
            }, {
                key: 'value-key',
                desc: '渲染子节点value时读取的key',
                type: 'string',
                def: 'value'
            }, {
                key: 'parent-text-key',
                desc: '渲染父节点text时读取的key',
                type: 'string',
                def: 'text'
            }, {
                key: 'sub-key',
                desc: '子节点list的key值',
                type: 'string',
                def: 'subs'
            }, {
                key: 'prefix',
                desc: '子节点文案前缀',
                type: 'string',
                def: ''
            }, {
                key: 'parent-prefix',
                desc: '父节点文案前缀',
                type: 'string',
                def: ''
            }, {
                key: 'need-expand',
                desc: '是否需要展开收起功能',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'close',
                desc: '默认状态下是否收起',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'max-height',
                desc: '操作区域最大高度，当有一键收起功能时，一键收起吸顶',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});