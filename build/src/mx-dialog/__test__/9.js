/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryah:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryah:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20"><div class="lh22 clearfix mb10"><div class="color-9 fl">全屏右出浮层：</div><div class="fl"><div>this.mxModal()</div><div>dialog-header和dialog-footer都在组件内，配置即可，集中关心中间区域即可；</div><div>默认mask，宽度600</div></div></div><div class="lh22 clearfix"><div class="color-9 fl">浮层内：</div><div class="fl"><div>由于确定按钮在组件内不在浮层区域内，如有确定按钮，请在浮层内实现check方法；</div><div>点击确定之前会先调用check，提交按钮加loading效果，避免多次提交；</div><div class="mb10">ok=false的情况下不关闭按钮，如有错误信息显示错误信息，格式如下：</div><pre class="tip-content">\ncheck() {\n    // do something\n\n    return new Promise((resolve) => {\n        // 此处返回promise，防止有接口提交校验等\n        resolve({\n            ok: true,  // true or false，是否校验通过，false的时候不关闭按钮\n            msg: \'错误信息提示\'\n        })\n    })\n}\n                    </pre></div></div></div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'open1()" class="btn btn-brand mr20">全屏右出浮层(头部+底部)</a><a href="javascript:;" mx-click="' + $viewId + 'open2()" class="btn btn-brand mr20">全屏右出浮层(只头部)</a><a href="javascript:;" mx-click="' + $viewId + 'open3()" class="btn btn-brand mr20">全屏右出浮层(只底部)</a></div></div><div mxa="_zs_galleryah:a" class="clearfix"><div mxa="_zs_galleryah:b" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_galleryah:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryah:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 50;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryah:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" mx-click="open1()" \n    class="btn btn-brand"&gt;全屏右出浮层(头部+底部)&lt;/a&gt;  \n\n&lt;a href="javascript:;" mx-click="open2()" \n    class="btn btn-brand"&gt;全屏右出浮层(只头部)&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="open3()" \n    class="btn btn-brand"&gt;全屏右出浮层(只底部)&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryah:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryah:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 66;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryah:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 68;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryah:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 71;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        this.updater.digest();\n    },\n    \'open1&lt;click&gt;\'(e) &#123;\n        // this.mxModal(viewPath[string], viewOptions[object], dialogOptions[object])\n        //      viewPath: \'dialog view路径\'\n        //      viewOptions: &#123;\n        //          传入dialog的数据，挂载当前dialog实体\n        //      &#125;\n        //      dialogOptions: &#123; //浮层样式覆盖\n        //          width:\'宽度，默认600\',\n        //          mask: \'true or false，是否有遮罩\',\n        //          closable: \'true or false，是否有右上角关闭按钮\'\n        //          header: &#123;\n        //              title: \'标题\',\n        //              tip: \'提示信息\'\n        //          &#125;,\n        //          footer: &#123;\n        //              enter: \'true or false，是否需要确定按钮\',\n        //              enterText: \'确定按钮文案\',\n        //              cancel: \'true or false，是否需要取消按钮\',\n        //              cancelText: \'取消按钮文案\'\n        //          &#125;\n        // \n        //          ==========================================\n        //          无效参数：\n        //          height:\'高度固定全屏\',\n        //          left: \'固定为doc.width - width\',\n        //          top: \'固定为0\',\n        //          modal: \'固定为false，禁止滚动\',\n        //      &#125;\n        this.mxModal(\'@./full\', &#123;&#125;, &#123;\n            width: 800,\n            header: &#123;\n                title: \'全屏右出浮层\',\n                tip: \'提示信息\'\n            &#125;,\n            footer: &#123;\n                enterText: \'自定义确认\',\n                cancelText: \'自定义取消\'\n            &#125;\n        &#125;);\n    &#125;,\n    \'open2&lt;click&gt;\'(e) &#123;\n        this.mxModal(\'@./full\', &#123;&#125;, &#123;\n            header: &#123;\n                title: \'全屏右出浮层\'\n            &#125;,\n            footer: &#123;\n                enter: false,\n                cancel: false\n            &#125;\n        &#125;);\n    &#125;,\n    \'open3&lt;click&gt;\'(e) &#123;\n        this.mxModal(\'@./full\', &#123;&#125;, &#123;\n            width: 800,\n            mask: false\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
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
    'open1<click>': function (e) {
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
        this.mxModal('mx-dialog/__test__/full', {}, {
            width: 800,
            header: {
                title: '全屏右出浮层',
                tip: '提示信息'
            },
            footer: {
                enterText: '自定义确认',
                cancelText: '自定义取消'
            }
        });
    },
    'open2<click>': function (e) {
        this.mxModal('mx-dialog/__test__/full', {
            readonly: true
        }, {
            header: {
                title: '全屏右出浮层'
            },
            footer: {
                enter: false,
                cancel: false
            }
        });
    },
    'open3<click>': function (e) {
        this.mxModal('mx-dialog/__test__/full', {}, {
            width: 800,
            mask: false
        });
    }
});

});