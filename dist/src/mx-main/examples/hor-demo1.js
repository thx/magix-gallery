/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/hor-demo1",["magix","$","examples/example","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,$,Base*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var $ = require("$");
var Router = Magix.Router;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text3 = $$.text3, text4 = $$.text4; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydi:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallerydi:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb40 clearfix lh22"><div class="fl color-9 mr10">以下示例：</div><div class="fl"><div>标题点击可以快速跳转；未到步骤不可点击；</div><div>当到达最后一步时前面的步骤都不可点击；</div><div>btns自定义按钮，包含预置按钮；prevTip，nextTip，nextFn预置按钮，详情说明参见<a href="#!/main/index" class="color-brand">侧边导航分步流程</a></div><div>优先级 btns > prevTip + nextTip + nextFn，则btns=[]没有按钮</div></div></div><div class="color-9 lh22">点击以下链接新页面查看示例：</div><div class="lh22"><span class="color-9">从第一步开始：</span><a href="#!/main/hor-demo" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/hor-demo</a></div><div class="lh22"><span class="color-9">已到达第二步，停留在第二步上：</span><a href="#!/main/hor-demo?campaignId=1&stepIndex=2" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/hor-demo?campaignId=1&stepIndex=2</a></div><div class="lh22"><span class="color-9">已到达第二步，停留在第一步上：</span><a href="#!/main/hor-demo?campaignId=1&stepIndex=1" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/hor-demo?campaignId=1&stepIndex=1</a></div></div><div mxa="_zs_gallerydi:a" class="clearfix"><div mxa="_zs_gallerydi:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_gallerydi:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydi:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 31;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-main.hor\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_gallerydi:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerydi:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydi:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 44;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: \'设置计划\',\n            view: \'@./hor-inner\',\n            nextTip: \'下一步，设置单元\',\n            nextFn: (remains) =&gt; &#123;\n                // remains：当前步骤保留的信息，提交处理\n                return new Promise(resolve =&gt; &#123;\n                    // 返回值为保留到地址栏的参数\n                    resolve(&#123;\n                        campaignId: 1\n                    &#125;)\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'设置单元\',\n            view: \'@./hor-inner\',\n            btns: [&#123;\n                type: \'prev\',\n                text: \'返回计划设置\'\n            &#125;, &#123;\n                type: \'next\',\n                text: \'下一步，添加创意\',\n                callback: (remains) =&gt; &#123;\n                    // remains：当前步骤保留的信息，提交处理\n                    return new Promise(resolve =&gt; &#123;\n                        // 返回值为保留到地址栏的参数\n                        resolve(&#123;\n                            adgroupId: 1\n                        &#125;)\n                    &#125;)\n                &#125;\n            &#125;]\n        &#125;, &#123;\n            label: \'添加创意\',\n            view: \'@./hor-inner\'\n        &#125;, &#123;\n            label: \'完成\',\n            view: \'@./hor-inner\',\n            btns: []\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if (locParams.campaignId) &#123;\n            alreadyStep = 2;\n            if (locParams.adgroupId) &#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa="_zs_gallerydi:f" class="clearfix"><div mxa="_zs_gallerydi:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_gallerydi:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">hor-inner： HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 117;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerydi:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 119;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 122;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;div class="fontsize-16"&gt;第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;&lt;/div&gt;\n            </pre></div><div mxa="_zs_gallerydi:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerydi:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">hor-inner： JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 128;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_gallerydi:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 130;
    $art = '!text4';
    ;
    $p += ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 133;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init(extra) &#123;\n        // 当前步骤完成信息\n        let info = extra.info;\n        this.updater.set(&#123;\n            info\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get(\'info\');\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok: true, //当前view校验结果\n                msg: info.label,\n                remain: &#123;&#125; //提交data\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/hor-demo1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});