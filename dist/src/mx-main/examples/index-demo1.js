/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/index-demo1",["magix","$","examples/example","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,$,Base*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var $ = require("$");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydn:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallerydn:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>每步跳转完成会在路由上<span class="color-brand">保留参数stepIndex（一级步骤） 和 subStepIndex（二级子步骤）</span></div><div>当前已到达步骤取路由地址上stepIndex，1 和 用户配置的already-step的最大值</div><div>使用默认的按钮，包含上一步，下一步，可配置参数prevTip，nextTip，nextFn</div><div>点击左侧导航可以快速跳转；未到步骤不可点击；</div><div>点击二级子步骤当前模块滚动到最顶部</div><div>右侧提醒信息可有可无</div></div></div><div class="color-9 lh22">点击以下链接新页面查看示例：</div><div class="lh22"><span class="color-9">从第一步开始：</span><a href="#!/main/index-def" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/index-def</a></div><div class="lh22"><span class="color-9">已到达第二步，停留在第二步上：</span><a href="#!/main/index-def?campaignId=1&stepIndex=2" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/index-def?campaignId=1&stepIndex=2</a></div><div class="lh22"><span class="color-9">已到达第二步，停留在第一步上：</span><a href="#!/main/index-def?campaignId=1&stepIndex=1" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/index-def?campaignId=1&stepIndex=1</a></div></div><div mxa="_zs_gallerydn:a" class="clearfix"><div mxa="_zs_gallerydn:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_gallerydn:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydn:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 33;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydn:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-main \n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_gallerydn:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerydn:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydn:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydn:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init() &#123;\n        this.observeLocation([\'campaignId\', \'adgroupId\']);\n    &#125;,\n    render() &#123;\n        let stepInfos = [&#123;\n            label: \'设置计划\',\n            sideView: \'@./tip\',  // 自定义侧边提示view\n            subs: [&#123;\n                label: \'基本信息\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe612;&lt;/i&gt;\',\n                view: \'@./index-inner1\'\n            &#125;],\n            nextTip: \'下一步，设置计划\',\n            nextFn: (remains) =&gt; &#123;\n                // remains：当前步骤保留的信息，提交处理\n                return new Promise(resolve =&gt; &#123;\n                    // 返回值为保留到地址栏的参数\n                    resolve(&#123;\n                        campaignId: 1\n                    &#125;)\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'设置单元\',\n            sideTitle: \'单元说明\', // 使用默认侧边样式\n            sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n                    &lt;div&gt;1、条件1&lt;/div&gt;\n                    &lt;div&gt;2、条件2&lt;/div&gt;\n                    &lt;div&gt;3、条件3&lt;/div&gt;`,\n            subs: [&#123;\n                label: \'推广宝贝\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n                view: \'@./index-inner2\'\n            &#125;, &#123;\n                label: \'出价方式\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n                view: \'@./index-inner\'\n            &#125;],\n            prevTip: \'返回计划设置\',\n            nextTip: \'下一步，完成\',\n            nextFn: (remains) =&gt; &#123;\n                // remains：当前步骤保留的信息，提交处理\n                return new Promise(resolve =&gt; &#123;\n                    // 返回值为保留到地址栏的参数\n                    resolve(&#123;\n                        adgroupId: 1\n                    &#125;)\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'完成创建\',\n            subs: [&#123;\n                label: \'完成标题\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7be;&lt;/i&gt;\',\n                view: \'@./index-inner3\'\n            &#125;]\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if (locParams.campaignId) &#123;\n            alreadyStep = 2;\n            if (locParams.adgroupId) &#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        // 当到达完成步骤时，前面的步骤都不可再次操作\n        if (alreadyStep == 3) &#123;\n            for (let i = 0; i &lt; 2; i++) &#123;\n                stepInfos[i].locked = true;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/index-demo1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});