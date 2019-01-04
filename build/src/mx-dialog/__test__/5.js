/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/5",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryag:_" class="_zs_galleryh"><div mxs="_zs_galleryag:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">以下示例：</span>说明浮层本身如何获取dialog示例关闭，即this.mxDialog(viewPath, viewOptions, dialogOptions)中viewPath页面如何写</div><div class="pr" style="width: 400px; height: 200px;"><div class="_zs_gallerydv" style="top: 0; left: 0; width: 400px;"><div class="_zs_gallerydw"><div class="dialog-header"><div class="fontsize-16">标题</div></div><div class="dialog-body">浮层内容</div><div class="dialog-footer"><a href="javascript:;" class="btn" mx-click="' + $viewId + 'cancel()">取消</a></div></div></div></div></div><div mxa="_zs_galleryag:a" class="clearfix"><div mxa="_zs_galleryag:b" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_galleryag:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryag:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryag:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div class="dialog-header"&gt;\n    &lt;div class="fontsize-16"&gt;标题&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="dialog-body"&gt;\n    浮层内容\n&lt;/div&gt;\n&lt;div class="dialog-footer"&gt;\n    &lt;a href="javascript:;" \n        class="btn" \n        mx-click="cancel()"&gt;&lt;/a&gt; \n&lt;/div&gt;\n            </pre></div><div mxa="_zs_galleryag:d" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryag:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryag:e" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryag:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init(e) &#123;\n        this.viewOptions = e;\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'cancel&lt;click&gt;\'(event) &#123;\n        event.preventDefault();\n        let viewOptions = this.viewOptions;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;\n&#125;);\n    </pre></div></div></div>'; return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open<click>': function (e) {
        //  viewPath  //dialog view路径
        //  viewOptions //传入dialog的数据，挂载当前dialog实体
        //  dialogOptions //样式覆盖
        //      width： 宽度
        //      height： 高度
        //      modal：是否允许滚动
        //      mask：是否有遮罩
        //      ......
        this.mxDialog('mx-dialog/__test__/multi', {
            number: 1
        }, {
            width: 800,
            height: 320,
            modal: true
        });
    }
});

});