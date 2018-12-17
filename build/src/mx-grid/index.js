/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/index",["magix","mx-mustache/index","$","mx-header/data"],(require,exports,module)=>{
/*Magix,Mustache,$,Data*/

var Magix = require("magix");
var Mustache = require("mx-mustache/index");
var $ = require("$");
var Data = require("mx-header/data");
Magix.applyStyle("_zs_gallery_mx-grid_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-grid_index_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-grid_index_-container {\n  padding: 20px;\n  background-color: #f5f5f5;\n}\n._zs_gallery_mx-grid_index_-grid {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n}\n._zs_gallery_mx-grid_index_-row {\n  display: flex;\n  height: 100px;\n}\n");
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryd{:/" class="_zs_gallery_mx-grid_index_-container"><div class="_zs_gallery_mx-grid_index_-row mb20"><div class="mr20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div></div><div class="_zs_gallery_mx-grid_index_-row mb20"><div class="mr20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div class="mr20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div class="mr20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div></div><div class="_zs_gallery_mx-grid_index_-row mb20"><div class="mr20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div class="mr20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div></div><div class="_zs_gallery_mx-grid_index_-row mb20"><div class="mr20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div style="-webkit-flex:  0 0 200px; flex:  0 0 200px;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div></div><div class="_zs_gallery_mx-grid_index_-row mb20"><div class="mr20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div style="-webkit-flex:  0 0 200px; flex:  0 0 200px;"><div class="_zs_gallery_mx-grid_index_-row" style="flex-direction: column;"><div class="mb20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div></div></div></div><div class="_zs_gallery_mx-grid_index_-row" style="flex-direction: column; width: 600px; height: 200px;"><div class="mb20" style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div><div style="-webkit-flex: 1; flex: 1;"><div class="_zs_gallery_mx-grid_index_-grid"></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.assign(extra);
    },
    assign: function (ops) {
        this['@{mode.simple}'] = (ops.mode === 'simple');
        this['@{need.products}'] = (ops.products + '' === 'true');
        this['@{products.width}'] = ops.width || 1184;
        this['@{ui.dark}'] = (ops.dark + '' === 'true');
    },
    render: function () {
        var me = this;
        var needProducts = me['@{need.products}'];
        var products = [];
        if (needProducts) {
            Data.products.forEach(function (item) {
                item.seconds.forEach(function (sec) {
                    if (!sec.title) {
                        sec.title = item.title;
                    }
                });
                products = products.concat(item.seconds);
            });
        }
        var simple = me['@{mode.simple}'];
        var alimamaReg = /alimama\.(com|net)/i;
        var tanxReg = /tanx\.(com|net)/i;
        var taobaoReg = /taobao\.(com|net)/i;
        var alimama, taobao, tanx;
        if (alimamaReg.test(window.location.href)) {
            alimama = true;
        }
        else if (taobaoReg.test(window.location.href)) {
            taobao = true;
        }
        else if (tanxReg.test(window.location.href)) {
            tanx = true;
        }
        else {
            alimama = true;
        }
        var year = (new Date()).getFullYear();
        var info = {
            simple: simple,
            alimama: alimama,
            taobao: taobao,
            tanx: tanx,
            products: products,
            len: products.length,
            width: me['@{products.width}'],
            dark: me['@{ui.dark}'],
            year: year
        };
        me.updater.digest(info);
    }
});

});