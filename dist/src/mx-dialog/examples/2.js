/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/examples/2",["magix","mx-dialog/index","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_galleryaR:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryaR:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20 clearfix"><div class="color-9 fl">二次确认浮层：</div><div class="fl"><div>mixins到view上，this.confirm()</div><div>默认无mask，宽度320，居中显示</div></div></div><div><a href="javascript:;" mx-click="' + $viewId + 'confirm1()" class="btn btn-brand">默认confirm</a><a href="javascript:;" mx-click="' + $viewId + 'confirm2()" class="btn btn-brand ml20">自定义confirm样式</a></div></div><div mxa="_zs_galleryaR:a" class="clearfix"><div mxa="_zs_galleryaR:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_galleryaR:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaR:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaR:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" \n    mx-click="confirm1()" \n    class="btn btn-brand"&gt;默认confirm&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    mx-click="confirm2()" \n    class="btn btn-brand ml20"&gt;自定义confirm样式&lt;/a&gt;</pre></div><div mxa="_zs_galleryaR:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryaR:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaR:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 39;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaR:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'confirm1&lt;click&gt;\'(e) &#123;\n        this.confirm(&#123;\n            title: \'标题\',\n            content: \'测试内容\'\n        &#125;)\n    &#125;,\n    \'confirm2&lt;click&gt;\'(e) &#123;\n            // this.confirm(viewOptions, dialogOptions);\n            //    viewOptions: {\n            //          title: \'标题\',\n            //          content: \'内容\',\n            //          enterText: \'自定义确定按钮文案，默认确定\',\n            //          cancelText: \'自定义取消按钮文案，默认取消\',\n            //          enterCallback: \'确定按钮响应事件\',\n            //          cancelCallback: \'取消按钮响应事件\'\n            //    }\n            //    dialogOptions: { //浮层样式覆盖\n            //          width:\'宽度，默认320\',\n            //          height:\'高度\',\n            //          modal: \'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false\',\n            //          mask: \'true or false，是否有遮罩，默认false\',\n            //          closable: \'true or false，是否有右上角关闭按钮，默认false\',\n            //          left: \'最终定位相对于屏幕左侧，默认居中\',\n            //          top: \'最终定位相对于屏幕高侧，默认居中\'\n            //    }\n            title: \'标题\',\n            content: \'测试内容\',\n            enterText: \'确认按钮文案\',\n            cancelText: \'取消按钮文案\',\n            enterCallback: () => &#123;\n                console.log(\'确定按钮响应事件\');\n            &#125;\n        &#125;, &#123;\n            width: 400,\n            mask: true\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/examples/2.html';
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
        //   viewOptions: {
        //      title: '标题',
        //      content: '内容',
        //      enterText: '自定义确定按钮文案，默认确定',
        //      cancelText: '自定义取消按钮文案，默认取消',
        //      enterCallback: '确定按钮响应事件',
        //      cancelCallback: '取消按钮响应事件'
        //   }
        //   dialogOptions: { //浮层样式覆盖
        //      width:'宽度',
        //      height:'高度',
        //      modal: 'true or false，是否允许滚动',
        //      mask: 'true or false，是否有遮罩',
        //      closable: 'true or false，是否有右上角关闭按钮',
        //      left: '最终定位相对于屏幕左侧',
        //      top: '最终定位相对于屏幕高侧'
        //   }
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