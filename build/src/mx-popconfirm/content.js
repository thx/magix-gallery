/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/content",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_galleryaj","._zs_galleryjR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjS,._zs_galleryjT,._zs_galleryjU,._zs_galleryjV,._zs_galleryjW,._zs_galleryjX,._zs_galleryjY,._zs_galleryjZ,._zs_galleryk_,._zs_galleryka,._zs_gallerykb,._zs_gallerykc{opacity:0;transition:opacity .15s,-webkit-transform .15s;transition:transform .15s,opacity .15s;transition:transform .15s,opacity .15s,-webkit-transform .15s;-webkit-transform:scale(0);transform:scale(0)}._zs_galleryjT,._zs_galleryk_{-webkit-transform-origin:0 0;transform-origin:0 0}._zs_galleryjU,._zs_galleryjX{-webkit-transform-origin:100% 0;transform-origin:100% 0}._zs_galleryjS{-webkit-transform-origin:50% 0;transform-origin:50% 0}._zs_galleryjY,._zs_gallerykb{-webkit-transform-origin:0 100%;transform-origin:0 100%}._zs_galleryjV,._zs_gallerykc{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}._zs_galleryka{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._zs_galleryjW{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}._zs_galleryjZ{-webkit-transform-origin:0 50%;transform-origin:0 50%}._zs_gallerykd{opacity:1;-webkit-transform:scale(1);transform:scale(1)}._zs_galleryke{display:none}._zs_gallerykf,._zs_gallerykg{position:absolute;z-index:9999;height:auto;border-radius:4px;font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_gallerykf{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6;background-color:#fff;color:#333}._zs_gallerykf ._zs_gallerykh{padding:10px;word-break:break-all}._zs_gallerykg{background-color:rgba(33,33,33,.72);color:#fff}._zs_gallerykg ._zs_gallerykh{padding:4px 10px}");
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
} ; var $g = '', $_temp, $p = '', content = $$.content; $p += '<div mxa="_zs_gallerycz:_" class="_zs_gallerykh">' + $n(content) + '</div><div mxs="_zs_gallerycz:_" class="pl10 pt10 pb10"><a href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="' + $viewId + 'submit()">确定</a><a href="javascript:;" class="btn btn-small" mx-click="' + $viewId + 'cancel()">取消</a></div>'; return $p; },
    init: function (e) {
        this.viewOptions = e;
        var that = this;
        var data = e.data || {};
        this.updater.set({
            content: data.content || ''
        });
    },
    render: function () {
        this.updater.digest({});
    },
    'submit<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit();
        }
    },
    'cancel<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.cancel) {
            viewOptions.cancel();
        }
    }
});

});