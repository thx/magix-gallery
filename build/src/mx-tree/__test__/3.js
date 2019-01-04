/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, list = $$.list, text1 = $$.text1; $p += '<div mxv mxa="_zs_galleryd+:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd+:a" class="_zs_galleryk"><div mxv="list" id="' + $e(viewId) + '_tree" mx-view="mx-tree/index?needExpand=true&readOnly=true&hasLine=true&list=' + $i($$ref, list) + '"></div></div><div mxa="_zs_galleryd+:b" class="_zs_galleryl"><div mxs="_zs_galleryd+:_" class="_zs_galleryj">只读 + 可展开收起 + 默认展开 + 有连接线</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryd+:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryd+:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    read-only="true"\n    has-line="true"\n    list="&#123;&#123;@list&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>'; return $p; },
    render: function () {
        var list = [{
                value: 1,
                pValue: '',
                text: '1'
            }, {
                value: 2,
                pValue: '',
                text: '2'
            }, {
                value: 3,
                pValue: '',
                text: '3'
            }, {
                value: 11,
                pValue: 1,
                text: '1-1'
            }, {
                value: 111,
                pValue: 11,
                text: '1-1-1'
            }, {
                value: 1111,
                pValue: 111,
                text: '1-1-1-1'
            }, {
                value: 1112,
                pValue: 111,
                text: '1-1-1-2'
            }, {
                value: 112,
                pValue: 11,
                text: '1-1-2'
            }, {
                value: 1121,
                pValue: 112,
                text: '1-1-2-1'
            }, {
                value: 1122,
                pValue: 112,
                text: '1-1-2-2'
            }, {
                value: 12,
                pValue: 1,
                text: '1-2'
            }, {
                value: 21,
                pValue: 2,
                text: '2-1'
            }, {
                value: 211,
                pValue: 21,
                text: '2-1-1'
            }, {
                value: 212,
                pValue: 21,
                text: '2-1-2'
            }, {
                value: 22,
                pValue: 2,
                text: '2-2'
            }, {
                value: 23,
                pValue: 2,
                text: '2-3'
            }, {
                value: 231,
                pValue: 23,
                text: '2-3-1'
            }, {
                value: 232,
                pValue: 23,
                text: '2-3-2'
            }];
        this.updater.digest({
            list: list
        });
    }
});

});