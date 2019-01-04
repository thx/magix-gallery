/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
    $p += '<div mxa="_zs_galleryaf:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryaf:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20 clearfix"><div class="color-9 fl">内容分组：</div><div class="fl"><div>mixins到view上，this.mxDialogGroup()</div><div>默认mask，宽度800，高度500，居中显示</div></div></div><div><a href="javascript:;" mx-click="' + $viewId + 'showGroup()" class="btn btn-brand">内容分组显示的浮层</a></div></div><div mxa="_zs_galleryaf:a" class="clearfix"><div mxa="_zs_galleryaf:b" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_galleryaf:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaf:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaf:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" \n    class="btn btn-brand"\n    mx-click="showGroup()"&gt;内容分组显示的浮层&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryaf:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryaf:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaf:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 33;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaf:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'showGroup&lt;click&gt;\'(e) &#123;\n        let list = [];\n        for (let index = 0; index &lt; 10; index++) &#123;\n            list.push(&#123;\n                text: \'测试\' + index,\n                content: \'内容\' + index\n            &#125;)\n        &#125;\n        // this.mxDialogGroup(viewOptions, dialogOptions)：\n        //    viewOptions: {\n        //        list:\'传入的对象数组，如[{text:"测试",content:"内容"}]\',\n        //        contentView:\'中间区域自定义view，会把当前选中对象完整传入\',\n        //        textKey: \'右侧文案字段，默认text\'\n        //    },\n        //    dialogOptions: { //浮层样式覆盖\n        //        width:\'宽度，默认800\',\n        //        height:\'高度，默认500\',\n        //        modal: \'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false\',\n        //        mask: \'true or false，是否有遮罩，默认true\',\n        //        closable: \'true or false，是否有右上角关闭按钮，默认true\',\n        //        left: \'最终定位相对于屏幕左侧，默认居中\',\n        //        top: \'最终定位相对于屏幕高侧，默认居中\'\n        //    }\n        this.mxDialogGroup(&#123;\n            list,\n            contentView: \'@./content\'\n        &#125;, &#123;\n            width: 600,\n            height: 400,\n            modal: true\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
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
        //    viewOptions: {
        //        list:'传入的对象数组，如[{text:"测试",content:"内容"}]',
        //        contentView:'中间区域自定义view，会把当前选中对象完整传入',
        //        textKey: '右侧文案字段，默认text'
        //    },
        //    dialogOptions: { //浮层样式覆盖
        //        width:'宽度',
        //        height:'高度',
        //        modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',
        //        mask: 'true or false，是否有遮罩，默认true',
        //        closable: 'true or false，是否有右上角关闭按钮，默认true',
        //        left: '最终定位相对于屏幕左侧，默认居中',
        //        top: '最终定位相对于屏幕高侧，默认居中'
        //    }
        this.mxDialogGroup({
            list: list,
            contentView: 'mx-dialog/__test__/content'
        }, {
            width: 600,
            height: 400
        });
    }
});

});