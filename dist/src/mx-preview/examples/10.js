/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/examples/10",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview_examples_index_","._zs_gallery_mx-preview_examples_index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview_examples_index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryfS:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryfS:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryfS:d" class="mb10"><span class="color-9">以下示例：</span>配置自定义预览页面preview-view，传入数据preview-data</div><div class="_zs_gallery_mx-preview_examples_index_-demo" mx-view="mx-preview/index?type=image&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&width=400&height=125&maxWidth=100&maxHeight=100&previewView=mx-preview%2Fexamples%2Fcustom&previewData=';
    $line = 15;
    $art = '@{\n                url: \'https://img.alicdn.com/bao/uploaded/i3/2247603103/O1CN01N3RYid1YnDZ0DH9jk_!!2-item_pic.png\',\n                price: 20,\n                title: \'测试宝贝，请不要拍013001\',\n                amount: 1000,\n                width: 400,\n                height: 100\n            }';
    ;
    $p += ($expr = '<%@{        url: \'https://img.alicdn.com/bao/uploaded/i3/2247603103/O1CN01N3RYid1YnDZ0DH9jk_!!2-item_pic.png\',        price: 20,        title: \'测试宝贝，请不要拍013001\',        amount: 1000,        width: 400,        height: 100    }%>', $i($$ref, { url: 'https://img.alicdn.com/bao/uploaded/i3/2247603103/O1CN01N3RYid1YnDZ0DH9jk_!!2-item_pic.png', price: 20, title: '测试宝贝，请不要拍013001', amount: 1000, width: 400, height: 100 })) + '"></div></div><div mxa="_zs_galleryfS:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryfS:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">图片预览</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryfS:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 28;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryfS:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-preview class="demo"\n    type="image"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    width="400"\n    height="125"\n    max-width="100"\n    max-height="100"\n    preview-view="@./custom"\n    preview-data="&#123;&#123;@&#123;\n        url: \'https://img.alicdn.com/bao/uploaded/i3/2247603103/O1CN01N3RYid1YnDZ0DH9jk_!!2-item_pic.png\',\n        price: 20,\n        title: \'测试宝贝，请不要拍013001\',\n        amount: 1000,\n        width: 400,\n        height: 100\n    &#125;&#125;&#125;"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/examples/10.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});