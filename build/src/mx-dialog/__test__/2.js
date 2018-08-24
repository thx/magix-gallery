/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/2",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_gallery^:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallery^:_" class="_zs_gallery___test___base_-eg-content"><div class="color-9 mb20"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i>二次确认浮层，默认无mask，宽度320，居中显示</div><div><a href="javascript:;" mx-click="' + $viewId + 'confirm1()" class="btn btn-brand">默认confirm</a><a href="javascript:;" mx-click="' + $viewId + 'confirm2()" class="btn btn-brand ml20">自定义confirm样式</a></div></div><div mxa="_zs_gallery^:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallery^:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery^:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery^:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" mx-click="confirm1()" \n    class="btn btn-brand"&gt;默认confirm&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="confirm2()" \n    class="btn btn-brand ml20"&gt;自定义confirm样式&lt;/a&gt;</pre></div><div mxa="_zs_gallery^:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallery^:c" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery^:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 33;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery^:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'confirm1&lt;click&gt;\'(e) &#123;\n        this.confirm(&#123;\n            title: \'标题\',\n            content: \'测试内容\'\n        &#125;)\n    &#125;,\n    \'confirm2&lt;click&gt;\'(e) &#123;\n        // this.confirm(viewOptions, dialogOptions);\n        //      viewOptions 展示内容\n        //          title：标题\n        //          content：内容\n        //          enterText：自定义确定按钮文案，默认确定\n        //          cancelText：自定义取消按钮文案，默认取消\n        //          enterCallback：确定按钮响应事件\n        //          cancelCallback：取消按钮响应事件\n        //      dialogOptions 扩展浮层样式\n        //          width： 宽度\n        //          height： 高度\n        //          modal：是否允许滚动\n        //          mask：是否有遮罩\n        //          ......\n        this.confirm(&#123;\n            title: \'标题\',\n            content: \'测试内容\',\n            enterText: \'确认按钮文案\',\n            cancelText: \'取消按钮文案\',\n            enterCallback: () => &#123;\n                console.log(\'确定按钮响应事件\');\n            &#125;\n        &#125;, &#123;\n            width: 400,\n            mask: true\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/2.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'confirm1<click>': function (e) {
        this.confirm({
            title: '标题',
            content: '测试内容'
        });
    },
    'confirm2<click>': function (e) {
        // this.confirm(viewOptions, dialogOptions);
        //      viewOptions 展示内容
        //          title：标题
        //          content：内容
        //          enterText：自定义确定按钮文案，默认确定
        //          cancelText：自定义取消按钮文案，默认取消
        //          enterCallback：确定按钮响应事件
        //          cancelCallback：取消按钮响应事件
        //      dialogOptions 扩展浮层样式
        //          width： 宽度
        //          height： 高度
        //          modal：是否允许滚动
        //          mask：是否有遮罩
        //          ......
        this.confirm({
            title: '标题',
            content: '测试内容',
            enterText: '确认按钮文案',
            cancelText: '取消按钮文案',
            enterCallback: function () {
                console.log('确定按钮响应事件');
            }
        }, {
            width: 400,
            mask: true
        });
    }
});

});