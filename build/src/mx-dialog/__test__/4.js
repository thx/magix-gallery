/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/4",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_gallery/:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallery/:_" class="_zs_gallery___test___layout_-eg-content"><a href="javascript:;" mx-click="' + $viewId + 'showGroup()" class="btn btn-brand">内容分组显示的浮层</a></div><div mxa="_zs_gallery/:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery/:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 8;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery/:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 10;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery/:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" mx-click="showGroup()" \n    class="btn btn-brand"&gt;内容分组显示的浮层&lt;/a&gt;</pre></div><div mxa="_zs_gallery/:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery/:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 19;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery/:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 21;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery/:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'showGroup&lt;click&gt;\'(e) &#123;\n        let list = [];\n        for (let index = 0; index &lt; 10; index++) &#123;\n            list.push(&#123;\n                text: \'测试\' + index,\n                content: \'内容\' + index\n            &#125;)\n        &#125;\n        // this.mxDialogGroup(viewOptions, dialogOptions)：\n        // viewOptions\n        //     list：传入的对象数组，如[&#123;text:\'测试\',content:\'内容\'&#125;]\n        //     contentView：中间区域自定义view，会把当前选中对象完整传入\n        //     textKey：右侧文案字段，默认text\n        // dialogOptions 扩展浮层样式\n        //     width： 宽度，默认800\n        //     height： 高度，默认500\n        //     mask：是否有遮罩，默认true\n        //     modal：是否允许滚动\n        //     ......\n        this.mxDialogGroup(&#123;\n            list,\n            contentView: \'@./content\'\n        &#125;, &#123;\n            width: 600,\n            height: 400,\n            modal: true\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/4.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'showGroup<click>': function (e) {
        var list = [];
        for (var index = 0; index < 10; index++) {
            list.push({
                text: '测试' + index,
                content: '内容' + index
            });
        }
        // this.mxDialogGroup(viewOptions, dialogOptions)：
        // viewOptions
        //     list：传入的对象数组，如[{text:'测试',content:'内容'}]
        //     contentView：中间区域自定义view，会把当前选中对象完整传入
        //     textKey：右侧文案字段，默认text
        // dialogOptions 扩展浮层样式
        //     width： 宽度，默认800
        //     height： 高度，默认500
        //     mask：是否有遮罩，默认true
        //     modal：是否允许滚动
        //     ......
        this.mxDialogGroup({
            list: list,
            contentView: 'mx-dialog/__test__/content'
        }, {
            width: 600,
            height: 400,
            modal: true
        });
    }
});

});