/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/ver-demo",["magix","$","examples/example","../ver","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,$,Base*/
require("../ver");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', alreadyStep = $$.alreadyStep, stepInfos = $$.stepInfos, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text3 = $$.text3, text4 = $$.text4; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerydz:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerydz:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerydz:_" class="mb40 clearfix lh22"><div class="fl color-9 mr10">以下示例：</div><div class="fl">配置说明详情参见<a href="#!/main/index" class="color-brand">侧边导航分步流程</a></div></div><div mxv mxa="_zs_gallerydz:b" class="wrap"><div mxv="stepInfos" mx-view="mx-main/ver?alreadyStep=';
    $line = 9;
    $art = '=alreadyStep';
    ;
    $p += ($expr = '<%!$eu(alreadyStep)%>', $eu(alreadyStep)) + '&stepInfos=';
    $line = 10;
    $art = '@stepInfos';
    ;
    $p += ($expr = '<%@stepInfos%>', $i($$ref, stepInfos)) + '"></div></div></div><div mxa="_zs_gallerydz:c" class="clearfix"><div mxa="_zs_gallerydz:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_gallerydz:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydz:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydz:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-main.ver\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_gallerydz:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerydz:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydz:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 31;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydz:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init() &#123;\n        this.observeLocation([\'campaignId\', \'adgroupId\']);\n    &#125;,\n    render() &#123;\n        let stepInfos = [&#123;\n            label: \'设置计划\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe767;&lt;/i&gt;\',\n            view: \'@./ver-inner\',\n            nextTip: \'下一步，设置单元\',\n            nextFn: (remains) =&gt; &#123;\n                // remains：当前步骤保留的信息，提交处理\n                return new Promise(resolve =&gt; &#123;\n                    // 返回值为保留到地址栏的参数\n                    resolve(&#123;\n                        campaignId: 1\n                    &#125;)\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'设置单元\',\n            icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#38;&#35;xe664;&lt;/i&gt;\',\n            view: \'@./ver-inner\',\n            prevTip: \'返回计划设置\',\n            nextTip: \'下一步，添加创意\',\n            nextFn: (remains) =&gt; &#123;\n                // remains：当前步骤保留的信息，提交处理\n                return new Promise(resolve =&gt; &#123;\n                    // 返回值为保留到地址栏的参数\n                    resolve(&#123;\n                        adgroupId: 1\n                    &#125;)\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'完成\',\n            icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#38;&#35;xe64c;&lt;/i&gt;\',\n            view: \'@./ver-inner\',\n            btns: [&#123;\n                text: \'再次新建\',\n                callback: () =&gt; &#123;\n                    Router.to(\'/main/ver\');\n                &#125;\n            &#125;]\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if (locParams.campaignId) &#123;\n            alreadyStep = 2;\n            if (locParams.adgroupId) &#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa="_zs_gallerydz:h" class="clearfix"><div mxa="_zs_gallerydz:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_gallerydz:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">steps-inner： HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 107;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerydz:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 109;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerydz:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 112;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;div class="fontsize-16"&gt;\n    第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;\n&lt;/div&gt;\n            </pre></div><div mxa="_zs_gallerydz:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerydz:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">steps-inner： JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 120;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_gallerydz:l" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 122;
    $art = '!text4';
    ;
    $p += ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_gallerydz:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 125;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    init(extra) &#123;\n        // 当前步骤完成信息\n        let info = extra.info;\n        this.updater.set(&#123;\n            info\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get(\'info\');\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok: true, //当前view校验结果\n                msg: info.label,\n                remain: &#123;&#125; //提交data\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/ver-demo.html';
    throw msg;
} return $p; },
    init: function () {
        this.observeLocation(['campaignId', 'adgroupId']);
    },
    render: function () {
        var stepInfos = [{
                label: '设置计划',
                icon: '<i class="mc-iconfont">&#xe767;</i>',
                view: 'mx-main/examples/ver-inner',
                nextTip: '下一步，设置单元',
                nextFn: function (remains) {
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise(function (resolve) {
                        // 返回值为保留到地址栏的参数
                        resolve({
                            campaignId: 1
                        });
                    });
                }
            }, {
                label: '设置单元',
                icon: '<i class="mc-iconfont fontsize-20">&#xe664;</i>',
                view: 'mx-main/examples/ver-inner',
                prevTip: '返回计划设置',
                nextTip: '下一步，添加创意',
                nextFn: function (remains) {
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise(function (resolve) {
                        // 返回值为保留到地址栏的参数
                        resolve({
                            adgroupId: 1
                        });
                    });
                }
            }, {
                label: '完成',
                icon: '<i class="mc-iconfont fontsize-20">&#xe64c;</i>',
                view: 'mx-main/examples/ver-inner',
                btns: [{
                        text: '再次新建',
                        callback: function () {
                            Router.to('/main/ver');
                        }
                    }]
            }];
        var locParams = Router.parse().params;
        var alreadyStep = 1;
        if (locParams.campaignId) {
            alreadyStep = 2;
            if (locParams.adgroupId) {
                alreadyStep = 3;
            }
        }
        this.updater.digest({
            stepInfos: stepInfos,
            alreadyStep: alreadyStep
        });
    }
});

});