/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', custom = $$.custom, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_gallerycN:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerycN:a" class="_zs_galleryk"><span mxv="custom" class="btn" mx-view="mx-popover/index?width=420&view=mx-popover%2F__test__%2Fcustom&data=' + $i($$ref, custom) + '&placement=bottom">提示内容为自定义view</span></div><div mxa="_zs_gallerycN:b" class="_zs_galleryl"><div mxs="_zs_gallerycN:_" class="_zs_galleryj">view自定义页面地址，data为传入view的数据</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerycN:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerycN:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-popover class="btn"\n    width="420"\n    view="@./custom"\n    data="&#123;&#123;@custom&#125;&#125;"&gt;提示内容为自定义view&lt;/mx-popover&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            custom: {
                list: [{
                        name: '消耗',
                        key: 'charge',
                        type: 'double'
                    }, {
                        name: '展现量',
                        key: 'adPv',
                        type: 'integer'
                    }, {
                        name: '点击量',
                        key: 'click',
                        type: 'integer'
                    }, {
                        name: '点击率',
                        key: 'ctr',
                        type: 'percent'
                    }]
            }
        });
    }
});

});