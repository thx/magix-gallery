/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/inner3",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-main___test___inner_","._zs_gallery_mx-main___test___inner_-box-title {\n  position: relative;\n  height: 46px;\n  padding: 0 20px;\n  line-height: 44px;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-icon {\n  float: left;\n  height: 44px;\n  line-height: 44px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-icon > * {\n  position: relative;\n  top: 2px;\n  margin-right: 4px;\n  color: #999;\n  font-size: 20px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-label {\n  float: left;\n  font-size: 16px;\n}\n._zs_gallery_mx-main___test___inner_-box-inner {\n  padding: 20px 20px 0 20px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', info = $$.info; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryc&:_" class="_zs_gallery_mx-main___test___inner_-box-title clearfix">';
    $line = 2;
    $art = 'if info.icon';
    ;
    $expr = '<%if (info.icon) {%>';
    if (info.icon) {
        ;
        $p += '<span mxa="_zs_galleryc&:a" class="_zs_gallery_mx-main___test___inner_-title-icon">';
        $line = 3;
        $art = '!info.icon';
        ;
        $p += ($expr = '<%!info.icon%>', $n(info.icon)) + '</span>';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<span mxa="_zs_galleryc&:b" class="_zs_gallery_mx-main___test___inner_-title-label">';
    $line = 5;
    $art = '=info.label';
    ;
    $p += ($expr = '<%=info.label%>', $e(info.label)) + '</span></div><div mxs="_zs_galleryc&:_" class="_zs_gallery_mx-main___test___inner_-box-inner" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>当前步骤三个子步骤，每个子步骤都有自己对应的右侧提示区域，配置subs里的sideView</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'添加创意\',\n    nextTip: \'下一步，完成\',\n    icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n    subs: [&#123;\n        label: \'创意内容1\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe705;&lt;/i&gt;\',\n        view: \'@./inner3\',\n        sideView: \'@./tip\'\n    &#125;, &#123;\n        label: \'创意内容2\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe664;&lt;/i&gt;\',\n        view: \'@./inner\',\n        sideView: \'@./tip\'\n    &#125;, &#123;\n        label: \'创意内容3\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe767;&lt;/i&gt;\',\n        view: \'@./inner\',\n        sideView: \'@./tip\'\n    &#125;]\n&#125;\n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/__test__/inner3.html';
    throw msg;
} return $p; },
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