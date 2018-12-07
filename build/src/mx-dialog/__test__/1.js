/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/1",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_gallery+:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallery+:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20"><span class="color-9">提示浮层：</span>默认无mask，宽度320，居中显示</div><div><a href="javascript:;" mx-click="' + $viewId + 'alert1()" class="btn btn-brand">默认alert</a><a href="javascript:;" mx-click="' + $viewId + 'alert2()" class="btn btn-brand ml20">自定义alert样式</a><a href="javascript:;" mx-click="' + $viewId + 'alert3()" class="btn btn-brand ml20">无关闭按钮，自动关闭</a></div></div><div mxa="_zs_gallery+:a" class="clearfix"><div mxa="_zs_gallery+:b" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_gallery+:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery+:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery+:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" \n    mx-click="alert1()" \n    class="btn btn-brand"&gt;默认alert&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    mx-click="alert2()" \n    class="btn btn-brand"&gt;自定义alert样式&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    mx-click="alert3()" \n    class="btn btn-brand"&gt;无关闭按钮，自动关闭&lt;/a&gt;\n            </pre></div><div mxa="_zs_gallery+:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallery+:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery+:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 44;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery+:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'alert1&lt;click&gt;\'(e) &#123;\n        this.alert(\'系统异常\', \'测试内容\');\n    &#125;,\n    \'alert2&lt;click&gt;\'(e) &#123;\n        let that = this;\n        // alert(title, content, enterCallback, dialogOptions)\n        //     title： 标题\n        //     content： 内容\n        //     enterCallback：确认回调\n        //     dialogOptions： 浮层样式覆盖\n        //         width： 宽度\n        //         height： 高度\n        //         modal：是否允许滚动\n        //         mask：是否有遮罩\n        //         btns：是否有按钮，默认true\n        //         ......\n        that.alert(\n            \'系统异常\', \n            \'测试内容\', \n            () => &#123;\n                console.log(\'点击确认后响应\')\n            &#125;, \n            &#123;\n                width: 400,\n                mask: true\n            &#125;\n        );\n    &#125;,\n    \'alert3&lt;click&gt;\'(e) &#123;\n        let dialog = this.alert(\n            \'系统异常\', \n            \'无关闭按钮，自动关闭，2秒后自动关闭\', \n            null, \n            &#123;\n                width: 400,\n                mask: true,\n                btns: false\n            &#125;\n        );\n        \n        setTimeout(() =&gt; &#123;\n            dialog.close();\n        &#125;, 2000);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/1.html';
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
        // alert(title, content, enterCallback, dialogOptions)
        //     title： 标题
        //     content： 内容
        //     enterCallback：确认回调
        //     dialogOptions： 浮层样式覆盖
        //         width： 宽度
        //         height： 高度
        //         modal：是否允许滚动
        //         mask：是否有遮罩
        //         btns：是否有按钮
        //         ......
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