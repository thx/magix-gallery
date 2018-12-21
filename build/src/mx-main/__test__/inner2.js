/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/inner2",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-main___test___inner_","/* @dependent: ./index.less */\n._zs_gallery_mx-main___test___inner_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-main___test___inner_-box-title {\n  height: 46px;\n  padding: 0 20px;\n  line-height: 44px;\n  background-color: #fafafa;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-icon {\n  float: left;\n  height: 44px;\n  line-height: 44px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-icon > * {\n  position: relative;\n  top: 2px;\n  margin-right: 4px;\n  color: #999;\n  font-size: 20px;\n}\n._zs_gallery_mx-main___test___inner_-box-title ._zs_gallery_mx-main___test___inner_-title-label {\n  float: left;\n  font-size: 16px;\n}\n._zs_gallery_mx-main___test___inner_-box-title._zs_gallery_mx-main___test___inner_-error-state {\n  background-color: #f6e6e6;\n  border: 1px solid #a40100;\n  color: #a40100;\n}\n._zs_gallery_mx-main___test___inner_-box-title._zs_gallery_mx-main___test___inner_-error-state ._zs_gallery_mx-main___test___inner_-title-icon > * {\n  color: #a40100;\n}\n._zs_gallery_mx-main___test___inner_-box-title._zs_gallery_mx-main___test___inner_-warn-state {\n  background-color: #fff8e6;\n  border: 1px solid #ffb400;\n  color: #ffb400;\n}\n._zs_gallery_mx-main___test___inner_-box-title._zs_gallery_mx-main___test___inner_-warn-state ._zs_gallery_mx-main___test___inner_-title-icon > * {\n  color: #ffb400;\n}\n._zs_gallery_mx-main___test___inner_-box-inner {\n  padding: 40px 20px 0 20px;\n}\n");
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
    $p += '<div mxa="_zs_galleryb,:_" class="_zs_gallery_mx-main___test___inner_-box-title clearfix">';
    $line = 2;
    $art = 'if info.icon';
    ;
    $expr = '<%if (info.icon) {%>';
    if (info.icon) {
        ;
        $p += '<span mxa="_zs_galleryb,:a" class="_zs_gallery_mx-main___test___inner_-title-icon">';
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
    $p += '<span mxa="_zs_galleryb,:b" class="_zs_gallery_mx-main___test___inner_-title-label">';
    $line = 5;
    $art = '=info.label';
    ;
    $p += ($expr = '<%=info.label%>', $e(info.label)) + '</span></div><div mxs="_zs_galleryb,:_" class="_zs_gallery_mx-main___test___inner_-box-inner" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>1. 测导航子标题有几个对应当前页面有几个子view，以该页面为例，子标题有推广宝贝 + 出价方式，则对应有两个子view</div><div>2. 所有子模块共用一个侧标提示区域，配置sideTip使用组件默认样式</div><div>3. 子view实现check方法完成当前模块的校验</div><div>4. 自定义下一步按钮文案（nextTip）</div><div>5. 当前步骤提交的时候保留参数adgroupId，初始化的时候判断是否有dgroupId，有的话则表示第一步已完成，直接展开（nextFn）</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'设置单元\',\n    nextTip: \'下一步，设置计划\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            adgroupId: 1\n        &#125;)\n    &#125;\n    icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7b5;&lt;/i&gt;\',\n    sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n        &lt;div&gt;1、条件1&lt;/div&gt;\n        &lt;div&gt;2、条件2&lt;/div&gt;\n        &lt;div&gt;3、条件3&lt;/div&gt;`,\n    subs: [&#123;\n        label: \'推广宝贝\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n        view: \'@./inner2\'\n    &#125;, &#123;\n        label: \'出价方式\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n        view: \'@./inner\'\n    &#125;]\n&#125;\n    </pre><div class="lh22 mb10"><div>JS Code：</div></div><pre class="tip-content mb40">\ninit(extra)&#123;\n    // extra.info（stepInfos[index]）：当前步骤信息\n    this.updater.set(&#123;\n        info: extra.info || &#123;&#125;\n    &#125;)\n&#125;\n/**\n* 子view实现该方法\n*/\ncheck() &#123;\n    let info = this.updater.get(\'info\');\n    let ok = true,\n        remain = &#123;&#125;;\n\n    return new Promise((resolve) =&gt; &#123;\n        // 此处返回promise，防止有接口提交校验等\n        resolve(&#123;\n            ok,\n            msg: info.label,\n            remain\n        &#125;)\n    &#125;)\n&#125;\n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/__test__/inner2.html';
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