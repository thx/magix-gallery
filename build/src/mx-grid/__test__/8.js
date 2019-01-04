/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/__test__/8",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryR","._zs_gallerygo{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygp{opacity:.1}._zs_gallerygp,._zs_gallerygq{background-color:#4d7fff}._zs_gallerygq{opacity:.2}._zs_gallerygr{opacity:.3}._zs_gallerygr,._zs_gallerygs{background-color:#4d7fff}._zs_gallerygs{opacity:.4}._zs_gallerygt{opacity:.5}._zs_gallerygt,._zs_gallerygu{background-color:#4d7fff}._zs_gallerygu{opacity:.6}._zs_gallerygv{opacity:.7}._zs_gallerygv,._zs_gallerygw{background-color:#4d7fff}._zs_gallerygw{opacity:.8}._zs_gallerygx{opacity:.9}._zs_gallerygx,._zs_gallerygy{background-color:#4d7fff}._zs_gallerygy{opacity:1}._zs_gallerygz{padding:16px;background-color:#fafafa}");
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
} ; var $g = '', $_temp, $p = '', icon = $$.icon, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerybS:_" class="_zs_galleryh"><div mxa="_zs_gallerybS:a" class="_zs_galleryk"><div mxs="_zs_gallerybS:_" class="mb10">只标题部分 + 筛选项（右浮动）：</div><div mxa="_zs_gallerybS:b" class="_zs_gallerygz"><div mxa="_zs_gallerybS:c" class="grid"><div mxa="_zs_gallerybS:d" content="标题" class="clearfix" style="padding: 8px 24px;;"><div mxa="_zs_gallerybS:e" style="float:left; line-height: 32px;"><span mxa="_zs_gallerybS:f" style="margin-right: 4px; color: #ccc;">' + $n(icon) + '</span><span mxs="_zs_gallerybS:a" style="font-size: 20px; margin-right: 16px;">标题</span><span mxs="_zs_gallerybS:b" style="margin-right: 16px; color: #999;">提示信息</span></div></div></div></div></div><div mxa="_zs_gallerybS:g" class="clearfix"><div mxa="_zs_gallerybS:h" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_gallerybS:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerybS:i" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerybS:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title \n        border="none" \n        content="标题" \n        tip="提示信息" \n        icon="&#123;&#123;!icon&#125;&#125;"/&gt;\n&lt;/mx-grid&gt;\n            </pre></div><div mxa="_zs_gallerybS:j" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_gallerybS:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerybS:k" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerybS:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: \'&lt;i class="mc-iconfont fontsize-20 bold"&gt;&#xe60e;&lt;/i&gt;\'\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            icon: '<i class="mc-iconfont fontsize-20 bold">&#xe60e;</i>'
        });
    }
});

});