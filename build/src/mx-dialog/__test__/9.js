/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/9",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
var Base = require("__test__/example");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', text = $$.text, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text4 = $$.text4, text5 = $$.text5; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryak:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryak:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_galleryak:b" class="mb20"><a mxs="_zs_galleryak:_" href="javascript:;" mx-click="' + $viewId + 'open()" class="btn btn-brand mr20">全屏右出浮层，头部+底部</a><span mxs="_zs_galleryak:a" class="color-9 ml20">浮层中输入内容：</span><span>';
    $line = 8;
    $art = '=text';
    ;
    $p += ($expr = '<%=text%>', $e(text)) + '</span></div><div mxs="_zs_galleryak:b" class="mb20"><div class="lh22 clearfix mb10"><div class="color-9 fl">全屏右出浮层：</div><div class="fl"><div>this.mxModal(viewPath, [viewOptions], [dialogOptions])</div><div>由于确定按钮在组件内不在浮层区域内，如有确定操作完成之后需要拿到浮层数据，请在<span class="color-brand">viewOptions</span>里写<span class="color-brand">callback</span>回调</div><div>dialog-header和dialog-footer都在组件内，配置即可，集中关心中间区域即可；</div><div>默认mask，宽度600</div><pre class="tip-content">\nthis.mxModal(\'@./full\', {\n    callback: (data) => {\n        // 回调的浮层数据   \n    }\n}, {\n    width: 800,\n    header: {\n        title: \'全屏右出浮层\',\n        tip: \'提示信息\',\n        iconTip: \'提示信息展示类型，=icon时小icon提示，否则直接展示\'\n    },\n    footer: {\n        enter: \'是否需要确认按钮\',\n        enterText: \'自定义确认\',\n        cancel: \'是否需要取消按钮\',\n        cancelText: \'自定义取消\'\n    }\n});\n                    </pre></div></div><div class="lh22 clearfix"><div class="color-9 fl">浮层内：</div><div class="fl"><div>由于确定按钮在组件内不在浮层区域内，<span class="color-brand">如有确定按钮，请在浮层内实现check方法</span>；</div><div>点击确定之前会先调用check，提交按钮加loading效果，避免多次提交；</div><div class="mb10">ok=false的情况下不关闭按钮，如有错误信息显示错误信息，格式如下：</div><pre class="tip-content">\ncheck() {\n    // do something\n\n    return new Promise((resolve) => {\n        // 此处返回promise，防止有接口提交校验等\n        resolve({\n            ok: true,  // true or false，是否校验通过，false的时候不关闭按钮\n            data: {}, // callback回调数据，可选\n            msg: \'错误信息提示\'\n        })\n    })\n}\n                    </pre></div></div></div></div><div mxa="_zs_galleryak:c" class="clearfix"><div mxa="_zs_galleryak:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryak:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryak:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 69;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryak:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 72;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" mx-click="open()" \n    class="btn btn-brand"&gt;全屏右出浮层(头部+底部)&lt;/a&gt;  \n            </pre></div><div mxa="_zs_galleryak:f" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryak:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 79;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryak:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 81;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryak:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 84;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        this.updater.digest();\n    },\n    \'open&lt;click&gt;\'(e) &#123;\n        // this.mxModal(viewPath[string], viewOptions[object], dialogOptions[object])\n        //      viewPath: \'dialog view路径\'\n        //      viewOptions: &#123;\n        //          传入dialog的数据，挂载当前dialog实体\n        //      &#125;\n        //      dialogOptions: &#123; //浮层样式覆盖\n        //          width:\'宽度，默认600\',\n        //          mask: \'true or false，是否有遮罩\',\n        //          closable: \'true or false，是否有右上角关闭按钮\'\n        //          header: &#123;\n        //              title: \'标题\',\n        //              tip: \'提示信息\',\n        //              iconTip: \'提示信息展示类型，=icon时小icon提示，否则直接展示\'\n        //          &#125;,\n        //          footer: &#123;\n        //              enter: \'true or false，是否需要确定按钮\',\n        //              enterText: \'确定按钮文案\',\n        //              cancel: \'true or false，是否需要取消按钮\',\n        //              cancelText: \'取消按钮文案\'\n        //          &#125;\n        // \n        //          ==========================================\n        //          无效参数：\n        //          height:\'高度固定全屏\',\n        //          left: \'固定为doc.width - width\',\n        //          top: \'固定为0\',\n        //          modal: \'固定为false，禁止滚动\',\n        //      &#125;\n        this.mxModal(\'@./full\', &#123;\n            callback: (data) =&gt; &#123;\n                that.updater.digest(&#123;\n                    text: data.name\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            width: 800,\n            header: &#123;\n                title: \'全屏右出浮层\',\n                tip: \'提示信息\',\n                iconTip: \'icon提示\'\n            &#125;,\n            footer: &#123;\n                enterText: \'自定义确认\',\n                cancelText: \'自定义取消\'\n            &#125;\n        &#125;);\n    &#125;\n&#125;);</pre></div></div><div mxa="_zs_galleryak:h" class="clearfix"><div mxa="_zs_galleryak:i" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryak:f" class="_zs_gallery___test___layout_-eg-title">浮层内HTML</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 149;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_galleryak:j" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 151;
    $art = '!text4';
    ;
    $p += ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_galleryak:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 154;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\n&lt;form class="grid"&gt;\n    &lt;mx-grid.content&gt;\n        &lt;span class="color-9 mr10"&gt;必填项：&lt;/span&gt;\n        &lt;input class="input" placeholder="必填项" \n            value="&#123;&#123;:name&#123;required:true&#125;&#125;&#125;"/&gt;\n    &lt;/mx-grid.content&gt;\n&lt;/form&gt;\n            </pre></div><div mxa="_zs_galleryak:k" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryak:g" class="_zs_gallery___test___layout_-eg-title">浮层内JS</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:5})" mx-view="mx-copy/index?copyNode=';
    $line = 166;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_5"><span mxa="_zs_galleryak:l" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 168;
    $art = '!text5';
    ;
    $p += ($expr = '<%!text5%>', $n(text5)) + '</span><i mxs="_zs_galleryak:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 171;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_5">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let that = this;\n        let ok = that.isValid();\n        let name = \'\';\n        if(ok)&#123;\n            name = that.updater.get(\'name\');\n        &#125;\n        return new Promise((resolve) =&gt; &#123;\n            setTimeout(() =&gt; &#123;\n                resolve(&#123;\n                    ok,\n                    data: &#123;\n                        name\n                    &#125;,\n                    msg: \'请按照要求填写完信息再提交\'\n                &#125;)\n            &#125;, 1000)\n        &#125;)\n    &#125;\n&#125;, &#123;\n    // 浮层的默认宽度\n    dialogOptions: &#123;\n        width: 1000\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/9.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open<click>': function (e) {
        var that = this;
        // this.mxModal(viewPath[string], viewOptions[object], dialogOptions[object])
        //      viewPath: 'dialog view路径'
        //      viewOptions: {
        //          传入dialog的数据，挂载当前dialog实体
        //      }
        //      dialogOptions: { //浮层样式覆盖
        //          width:'宽度，默认600',
        //          mask: 'true or false，是否有遮罩',
        //          closable: 'true or false，是否有右上角关闭按钮'
        //          header: {
        //              title: '标题',
        //              tip: '提示信息'
        //          },
        //          footer: {
        //              enter: 'true or false，是否需要确定按钮',
        //              enterText: '确定按钮文案',
        //              cancel: 'true or false，是否需要取消按钮',
        //              cancelText: '取消按钮文案'
        //          }
        // 
        //          ==========================================
        //          无效参数：
        //          height:'高度固定全屏',
        //          left: '固定为doc.width - width',
        //          top: '固定为0',
        //          modal: '固定为false，禁止滚动',
        //      }
        that.mxModal('mx-dialog/__test__/full', {
            callback: function (data) {
                that.updater.digest({
                    text: data.name
                });
            }
        }, {
            width: 800,
            header: {
                title: '全屏右出浮层',
                tip: '提示信息',
                iconTip: 'icon提示'
            },
            footer: {
                enterText: '自定义确认',
                cancelText: '自定义取消'
            }
        });
    }
});

});