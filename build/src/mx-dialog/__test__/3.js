/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/3",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_galleryav:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryav:_" class="_zs_gallery___test___layout_-eg-content"><div class="lh22">将dialog的方法mixins到view上</div><div class="lh22">1. this.mxDialog()</div><div class="lh22">2. 打开多个浮层时，新开浮层总是在最上方</div><div class="lh22">3. 提供一键关闭所有浮层的方法</div><div class="lh22 mb20">4. false的浮层，点击空白处自动关闭浮层</div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'open()" class="btn btn-brand mr20">打开浮层</a><a href="javascript:;" class="btn btn-brand mr20">一键关闭所有浮层</a><a href="javascript:;" mx-click="' + $viewId + 'noMask()" class="btn btn-brand">mask=false</a></div></div><div mxa="_zs_galleryav:a" class="clearfix"><div mxa="_zs_galleryav:b" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_galleryav:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryav:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryav:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" \n    class="btn btn-brand"\n    mx-click="open()"&gt;打开浮层&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    class="btn btn-brand"\n    mx-click="closeAll()"&gt;一键关闭所有浮层&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryav:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryav:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryav:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 41;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryav:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        this.updater.digest();\n    },\n    \'open&lt;click&gt;\'(e) &#123;\n        // this.mxDialog(viewPath[string], viewOptions[object], dialogOptions[object])\n        //    viewPath: \'dialog view路径\'\n        //    viewOptions: {\n        //        传入dialog的数据，挂载当前dialog实体\n        //    }, \n        //    dialogOptions: { //浮层样式覆盖\n        //        width:\'宽度\',\n        //        height:\'高度\',\n        //        modal: \'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false\',\n        //        mask: \'true or false，是否有遮罩，默认true\',\n        //        closable: \'true or false，是否有右上角关闭按钮，默认true\',\n        //        left: \'最终定位相对于屏幕左侧，默认居中\',\n        //        top: \'最终定位相对于屏幕高侧，默认居中\'\n        //    }\n        this.mxDialog(\'@./multi\', &#123;\n            number: 1\n        &#125;, &#123;\n            width: 800,\n            height: 270,\n            modal: true\n        &#125;);\n    &#125;,\n\n    \'closeAll&lt;click&gt;\'(e)&#123;\n        this.mxCloseAllDialogs();\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/3.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open<click>': function (e) {
        // this.mxDialog(viewPath[string], viewOptions[object], dialogOptions[object])
        //      viewPath: 'dialog view路径'
        //      viewOptions: {
        //          传入dialog的数据，挂载当前dialog实体
        //      }
        //      dialogOptions: { //浮层样式覆盖
        //          width:'宽度',
        //          height:'高度',
        //          modal: 'true or false，是否允许滚动',
        //          mask: 'true or false，是否有遮罩',
        //          closable: 'true or false，是否有右上角关闭按钮'
        //          left: '最终定位相对于屏幕左侧',
        //          top: '最终定位相对于屏幕高侧'
        //      }
        this.mxDialog('mx-dialog/__test__/multi', {
            number: 1
        }, {
            width: 800,
            height: 320,
            modal: true
        });
    },
    'noMask<click>': function (e) {
        var node = $(e.eventTarget);
        var offset = node.offset();
        var top = offset.top + node.outerHeight() - $(window).scrollTop() + 10;
        var left = offset.left;
        this.alert('mask=false的浮层', '点击空白处自动关闭浮层', null, {
            top: top,
            left: left
        });
    }
});

});