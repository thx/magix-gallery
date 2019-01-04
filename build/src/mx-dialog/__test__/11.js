/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/11",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryac:_" class="_zs_galleryh"><div mxs="_zs_galleryac:_" class="_zs_galleryk"><a href="javascript:;" mx-click="' + $viewId + 'open()" class="btn btn-brand mr20">全屏右出浮层(只底部)</a></div><div mxa="_zs_galleryac:a" class="_zs_galleryl"><div mxs="_zs_galleryac:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryac:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryac:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n\'open&lt;click&gt;\'(e) &#123;\n    this.mxModal(\'@./full\', &#123;\n        \n    &#125;, &#123;\n        width: 800,\n        mask: false\n    &#125;);\n&#125;\n        </pre></div></div>'; return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open<click>': function (e) {
        this.mxModal('mx-dialog/__test__/full', {}, {
            width: 800,
            mask: false
        });
    }
});

});