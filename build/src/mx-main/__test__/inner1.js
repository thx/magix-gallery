/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/inner1",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-main___test___inner_","/* @dependent: ./index.less */\n._zs_gallery_mx-main___test___inner_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-main___test___inner_-box-title {\n  height: 46px;\n  padding: 0 20px;\n  line-height: 44px;\n  background-color: #fafafa;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-icon {\n  float: left;\n  height: 44px;\n  line-height: 44px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-icon > * {\n  position: relative;\n  top: 2px;\n  margin-right: 4px;\n  color: #999;\n  font-size: 20px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-label {\n  float: left;\n  font-size: 16px;\n}\n._zs_gallery_mx-main___test___inner_-box-title._zs_gallery_mx-main___test___inner_-error-state {\n  background-color: #f6e6e6;\n  border: 1px solid #a40100;\n  color: #a40100;\n}\n._zs_gallery_mx-main___test___inner_-box-title._zs_gallery_mx-main___test___inner_-error-state ._zs_gallery_mx-main___test___inner_-title-icon > * {\n  color: #a40100;\n}\n._zs_gallery_mx-main___test___inner_-box-title._zs_gallery_mx-main___test___inner_-warn-state {\n  background-color: #fff8e6;\n  border: 1px solid #ffb400;\n  color: #ffb400;\n}\n._zs_gallery_mx-main___test___inner_-box-title._zs_gallery_mx-main___test___inner_-warn-state ._zs_gallery_mx-main___test___inner_-title-icon > * {\n  color: #ffb400;\n}\n._zs_gallery_mx-main___test___inner_-box-inner {\n  padding: 40px 20px 0 20px;\n}\n");
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
    $p += '<div mxa="_zs_galleryb(:_" class="_zs_gallery_mx-main___test___inner_-box-title clearfix">';
    $line = 2;
    $art = 'if info.icon';
    ;
    $expr = '<%if (info.icon) {%>';
    if (info.icon) {
        ;
        $p += '<span mxa="_zs_galleryb(:a" class="_zs_gallery_mx-main___test___inner_-title-icon">';
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
    $p += '<span mxa="_zs_galleryb(:b" class="_zs_gallery_mx-main___test___inner_-title-label">';
    $line = 5;
    $art = '=info.label';
    ;
    $p += ($expr = '<%=info.label%>', $e(info.label)) + '</span></div><div mxs="_zs_galleryb(:_" class="_zs_gallery_mx-main___test___inner_-box-inner" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>1. 当前步骤只要一个子步骤，侧边导航不显示子步骤</div><div>2. 右侧边是个自定义view，配置sideView</div><div>3. 自定义返回上一步按钮文案（prevTip），下一步按钮文案（nextTip）</div><div>4. 当前步骤提交的时候保留参数campaignId，初始化的时候判断是否有campaignId，有的话则表示第一步、第二步已完成，直接展开（nextFn）</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'设置计划\',\n    icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe612;&lt;/i&gt;\',\n    prevTip: \'返回单元设置\',\n    nextTip: \'下一步，添加创意\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            campaignId: 1\n        &#125;)\n    &#125;\n    sideView: \'@./tip\',\n    subs: [&#123;\n        label: \'基本信息\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe612;&lt;/i&gt;\',\n        view: \'@./inner1\'\n    &#125;]\n&#125;\n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/__test__/inner1.html';
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
    /**
     * 子view实现该方法
     */
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