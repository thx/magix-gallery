/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/7",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryai:_" class="_zs_galleryh"><div mxs="_zs_galleryai:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">afterClose：</span>浮层关闭之后调用</div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'open()" class="btn btn-brand mr20">打开浮层</a></div></div><div mxa="_zs_galleryai:a" class="clearfix"><div mxa="_zs_galleryai:b" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_galleryai:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryai:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryai:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;a href="javascript:;" \n    mx-click="open()" \n    class="btn btn-brand"&gt;打开浮层&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryai:d" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryai:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryai:e" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryai:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        this.updater.digest();\n    },\n    \'open&lt;click&gt;\'(e) &#123;\n        let dlg = this.mxDialog(\'@./demo\');\n        dlg.afterClose(() =&gt; &#123;\n            // do something\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open<click>': function (e) {
        //  viewPath  //dialog view路径
        //  viewOptions //传入dialog的数据，挂载当前dialog实体
        //  dialogOptions //样式覆盖
        //      width： 宽度
        //      height： 高度
        //      modal：是否允许滚动
        //      mask：是否有遮罩
        //      ......
        var dlg = this.mxDialog('mx-dialog/__test__/demo');
        dlg.afterClose(function () {
            // do something
        });
    }
});

});