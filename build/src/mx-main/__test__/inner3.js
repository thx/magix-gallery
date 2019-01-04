/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/inner3",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryaa","._zs_galleryiz{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiA{height:46px;padding:0 20px;line-height:44px;background-color:#fafafa;border:1px solid #e6e6e6;border-radius:4px}._zs_galleryiA ._zs_galleryiB{float:left;height:44px;line-height:44px}._zs_galleryiA ._zs_galleryiB>*{position:relative;top:2px;margin-right:4px;color:#999;font-size:20px}._zs_galleryiA ._zs_galleryiC{float:left;font-size:16px}._zs_galleryiA._zs_galleryiD{background-color:#f6e6e6;border:1px solid #a40100;color:#a40100}._zs_galleryiA._zs_galleryiD ._zs_galleryiB>*{color:#a40100}._zs_galleryiA._zs_galleryiE{background-color:#fff8e6;border:1px solid #ffb400;color:#ffb400}._zs_galleryiA._zs_galleryiE ._zs_galleryiB>*{color:#ffb400}._zs_galleryiF{padding:40px 20px 0}");
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
} ; var $g = '', $_temp, $p = '', info = $$.info; $p += '<div mxa="_zs_galleryce:_" class="_zs_galleryiA clearfix">'; if (info.icon) {
    ;
    $p += '<span mxa="_zs_galleryce:a" class="_zs_galleryiB">' + $n(info.icon) + '</span>';
} ; $p += '<span mxa="_zs_galleryce:b" class="_zs_galleryiC">' + $e(info.label) + '</span></div><div mxs="_zs_galleryce:_" class="_zs_galleryiF" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>当前步骤三个子步骤，每个子步骤都有自己对应的右侧提示区域，配置subs里的sideView</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'添加创意\',\n    nextTip: \'下一步，完成\',\n    icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n    subs: [&#123;\n        label: \'创意内容1\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe705;&lt;/i&gt;\',\n        view: \'@./inner3\',\n        sideView: \'@./tip\'\n    &#125;, &#123;\n        label: \'创意内容2\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe664;&lt;/i&gt;\',\n        view: \'@./inner\',\n        sideView: \'@./tip\'\n    &#125;, &#123;\n        label: \'创意内容3\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe767;&lt;/i&gt;\',\n        view: \'@./inner\',\n        sideView: \'@./tip\'\n    &#125;]\n&#125;\n    </pre></div>'; return $p; },
    init: function (extra) {
        this.updater.set({
            info: extra.info || {},
            data: $.extend(true, {}, extra.data || {})
        });
    },
    render: function () {
        this.updater.digest();
    },
    check: function () {
        var info = this.updater.get('info');
        var ok = true, remain = {};
        remain['test_' + info.index] = info.label;
        return new Promise(function (resolve) {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: ok,
                msg: info.label,
                remain: remain
            });
        });
    }
});

});