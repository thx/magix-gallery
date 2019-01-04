/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/8",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryA","._zs_gallerydr{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryds,._zs_gallerydt{position:fixed;left:0;width:100%;height:100%;transition:all .25s}._zs_galleryds{opacity:0;top:0;background-color:rgba(0,0,0,.4)}._zs_galleryds._zs_gallerydu{opacity:1}._zs_gallerydv{position:absolute;border-radius:4px;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydv ._zs_gallerydw{position:relative;word-break:break-all}._zs_gallerydv ._zs_gallerydx{position:absolute;top:16px;right:24px;width:26px;height:26px;z-index:20;border-radius:50%;background:transparent;color:#ccc;text-align:center}._zs_gallerydv ._zs_gallerydx ._zs_gallerydy{font-size:18px;font-weight:700;line-height:26px}._zs_gallerydv ._zs_gallerydx:focus,._zs_gallerydv ._zs_gallerydx:hover{background-color:#999;color:#fff}._zs_gallerydz{position:relative}._zs_gallerydz ._zs_gallerydA{opacity:1;position:relative;z-index:1}._zs_gallerydz ._zs_gallerydB{display:none;position:absolute;top:50%;left:50%;z-index:2;margin-top:-2px;margin-left:-2px}._zs_gallerydz._zs_gallerydC ._zs_gallerydA{opacity:0}._zs_gallerydz._zs_gallerydC ._zs_gallerydB{display:inline}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryaj:_" class="_zs_galleryh"><div mxs="_zs_galleryaj:_" class="_zs_galleryk"><div class="clearfix mb10 lh22"><div class="color-9 fl">beforeClose：</div><div class="fl"><div>关闭浮层之前调用（包括右上角关闭按钮，取消按钮）</div><div>return true; 继续调用dialog.close()</div><div>return false; 中断关闭</div></div></div><div class="clearfix mb10 lh22"><div class="color-9 fl">适用场景：</div><div class="fl">只有右上角关闭按钮，在关闭浮层之前需要额外的校验操作的</div></div><div class="clearfix mb20 lh22"><div class="color-9 fl">以下示例：</div><div class="fl">浮层内没有自定义关闭按钮，点击右上角默认关闭按钮时触发beforeClose，根据beforeClose的返回值判断要不要关闭</div></div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'open()" class="btn btn-brand mr20">打开浮层</a></div></div><div mxa="_zs_galleryaj:a" class="clearfix"><div mxa="_zs_galleryaj:b" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryaj:a" class="_zs_galleryj">浮层 HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryaj:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryaj:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div class="dialog-content" style="height: 200px;"&gt;\n    &lt;div class="dialog-header"&gt;\n        &lt;div class="fontsize-16"&gt;标题&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="dialog-body"&gt;\n        浮层内容\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryaj:d" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryaj:c" class="_zs_galleryj">浮层 JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryaj:e" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryaj:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init(e) &#123;\n        this.viewOptions = e;\n\n        let dlg = this.viewOptions.dialog;\n        dlg.beforeClose(() =&gt; &#123;\n            // do something\n            // return true 可执行dlg.close()\n            // return false 不关闭浮层\n            return true;\n        &#125;)\n    &#125;,\n    \n    render() &#123;\n        this.updater.digest();\n    &#125;\n&#125;);\n            </pre></div></div></div>'; return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open<click>': function (e) {
        this.mxDialog('mx-dialog/__test__/demo2', null, {
            height: 200
        });
    }
});

});