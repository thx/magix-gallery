/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/examples/1",["magix","mx-dialog/index","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Dialog,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
var Base = require("examples/example");
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
    $p += '<div mxa="_zs_galleryaK:_" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryaK:_" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20 clearfix"><div class="color-9 fl">提示浮层：</div><div class="fl"><div>mixins到view上，this.alert()</div><div>默认无mask，宽度320，居中显示</div></div></div><div><a href="javascript:;" mx-click="' + $viewId + 'alert1()" class="btn btn-brand">默认alert</a><a href="javascript:;" mx-click="' + $viewId + 'alert2()" class="btn btn-brand ml20">自定义alert样式</a><a href="javascript:;" mx-click="' + $viewId + 'alert3()" class="btn btn-brand ml20">无关闭按钮，自动关闭</a></div></div><div mxa="_zs_galleryaK:a" class="clearfix"><div mxa="_zs_galleryaK:b" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_galleryaK:a" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaK:c" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 26;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaK:b" class="mc-iconfont _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" \n    mx-click="alert1()" \n    class="btn btn-brand"&gt;默认alert&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    mx-click="alert2()" \n    class="btn btn-brand"&gt;自定义alert样式&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    mx-click="alert3()" \n    class="btn btn-brand"&gt;无关闭按钮，自动关闭&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryaK:d" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryaK:c" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaK:e" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 47;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaK:b" class="mc-iconfont _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'alert1&lt;click&gt;\'(e) &#123;\n        this.alert(\'系统异常\', \'测试内容\');\n    &#125;,\n    \'alert2&lt;click&gt;\'(e) &#123;\n        let that = this;\n        // this.alert(title, content, enterCallback, dialogOptions)\n        //   title: \'标题\',\n        //   content: \'内容\',\n        //   enterCallback: \'点击确认按钮的回调\',\n        //   dialogOptions: { //浮层样式覆盖\n        //      width:\'宽度，默认320\',\n        //      height:\'高度\',\n        //      btns: \'true or false，是否有按钮，默认true\',\n        //      modal: \'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false\',\n        //      mask: \'true or false，是否有遮罩，默认false\',\n        //      closable: \'true or false，是否有右上角关闭按钮，默认false\',\n        //      left: \'最终定位相对于屏幕左侧，默认居中\',\n        //      top: \'最终定位相对于屏幕高侧，默认居中\'\n        //   }\n        that.alert(\n            \'系统异常\', \n            \'测试内容\', \n            () => &#123;\n                console.log(\'点击确认后响应\')\n            &#125;, \n            &#123;\n                width: 400,\n                mask: true\n            &#125;\n        );\n    &#125;,\n    \'alert3&lt;click&gt;\'(e) &#123;\n        let dialog = this.alert(\n            \'系统异常\', \n            \'无关闭按钮，自动关闭，2秒后自动关闭\', \n            null, \n            &#123;\n                width: 400,\n                mask: true,\n                btns: false\n            &#125;\n        );\n        \n        setTimeout(() =&gt; &#123;\n            dialog.close();\n        &#125;, 2000);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/examples/1.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'alert1<click>': function (e) {
        this.alert('系统异常', '测试内容');
    },
    'alert2<click>': function (e) {
        var that = this;
        // this.alert(title, content, enterCallback, dialogOptions)
        //   title: '标题',
        //   content: '内容',
        //   enterCallback: '点击确认按钮的回调',
        //   dialogOptions: { //浮层样式覆盖
        //      width:'宽度',
        //      height:'高度',
        //      btns: 'true or false，是否有按钮',
        //      modal: 'true or false，是否允许滚动',
        //      mask: 'true or false，是否有遮罩',
        //      closable: 'true or false，是否有右上角关闭按钮',
        //      left: '最终定位相对于屏幕左侧',
        //      top: '最终定位相对于屏幕高侧'
        //   }
        that.alert('系统异常', '测试内容', function () {
            console.log('点击确认后响应');
        }, {
            width: 400,
            mask: true
        });
    },
    'alert3<click>': function (e) {
        var dialog = this.alert('系统异常', '无关闭按钮，2秒后自动关闭', null, {
            width: 400,
            mask: true,
            btns: false
        });
        setTimeout(function () {
            dialog.close();
        }, 2000);
    }
});

});