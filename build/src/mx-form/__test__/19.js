/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/19",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_gallerybv:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerybv:a" class="_zs_galleryk clearfix"><div mxs="_zs_gallerybv:_" class="mb10 lh22"><div>class：small-form（margin-bottom:20px）；align-right（文字右对齐）</div></div><form mxv mxa="_zs_gallerybv:b" class="form small-form align-right"><div mxv mxa="_zs_gallerybv:c" class="form-item"><div mxs="_zs_gallerybv:a" class="form-label">请输入</div><div mxv mxa="_zs_gallerybv:d" class="form-content"><input mxs="_zs_gallerybv:b" class="input w200"/></div></div><div mxv mxa="_zs_gallerybv:e" class="form-item"><div mxs="_zs_gallerybv:c" class="form-label">右对齐输入框</div><div mxv mxa="_zs_gallerybv:f" class="form-content"><input mxs="_zs_gallerybv:b" class="input w200"/></div></div><div mxs="_zs_gallerybv:d" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="' + $viewId + 'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_gallerybv:g" class="_zs_galleryl"><div mxs="_zs_gallerybv:e" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerybv:h" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerybv:f" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;form class="form small-form align-right"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;请输入&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;右对齐输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'; return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});