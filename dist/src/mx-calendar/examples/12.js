/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/examples/12",["magix","examples/example","mx-dialog/index","moment","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Dialog,Moment,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var Dialog = require("mx-dialog/index");
var Moment = require("moment");
var $ = require("$");
var Formater = 'YYYY-MM-DD';
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
} ; var $g = '', $_temp, $p = '', inlay = $$.inlay, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text3 = $$.text3, text4 = $$.text4; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery9:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallery9:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_gallery9:b" class="mb20"><span mxs="_zs_gallery9:_" class="color-9">当前结果：</span>';
    $line = 5;
    $art = 'if inlay.vs';
    ;
    $expr = '<%if (inlay.vs) {%>';
    if (inlay.vs) {
        ;
        $p += '<span mxa="_zs_gallery9:c" class="color-brand mr5">';
        $line = 6;
        $art = '=inlay.dates.startStr';
        ;
        $p += ($expr = '<%=inlay.dates.startStr%>', $e(inlay.dates.startStr)) + '</span><span mxs="_zs_gallery9:a" class="mr5">对比</span><span mxa="_zs_gallery9:d" class="color-brand-vs">';
        $line = 8;
        $art = '=inlay.dates.endStr';
        ;
        $p += ($expr = '<%=inlay.dates.endStr%>', $e(inlay.dates.endStr)) + '</span>';
        $line = 9;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span mxa="_zs_gallery9:e" class="mr5">';
        $line = 10;
        $art = '=inlay.dates.startStr';
        ;
        $p += ($expr = '<%=inlay.dates.startStr%>', $e(inlay.dates.startStr)) + '</span><span mxs="_zs_gallery9:b" class="mr5">至</span><span>';
        $line = 12;
        $art = '=inlay.dates.endStr';
        ;
        $p += ($expr = '<%=inlay.dates.endStr%>', $e(inlay.dates.endStr)) + '</span>';
        $line = 13;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxs="_zs_gallery9:c"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'show()">自定义trigger显示日历面板</a></div></div><div mxa="_zs_gallery9:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallery9:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">Trigger HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery9:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery9:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="show()"&gt;自定义trigger显示日历面板&lt;/a&gt;</pre></div><div mxa="_zs_gallery9:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallery9:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">Trigger JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery9:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery9:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../../mx-dialog/index\');\nlet Moment = require(\'moment\');\nlet $ = require(\'$\');\nlet Formater = \'YYYY-MM-DD\';\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        this.updater.digest(&#123;\n            inlay:&#123;\n                title: \'自定义标题\',\n                dates: &#123;\n                    startStr: Moment().format(Formater),\n                    endStr: Moment().add(2, \'days\').format(Formater)\n                &#125;,\n                vsEnable: true,\n                vs: true,\n                inlay: true,\n                quickDates: [\'passed5\', \'passed10\']\n            &#125;\n        &#125;);\n    &#125;,\n    \'show&lt;click&gt;\'(event)&#123;\n        let that = this;\n        let node = $(event.target);\n\n        let offset = node.offset();\n        let winScroll = $(window).scrollTop();\n        let top = offset.top + node.outerHeight() - winScroll + 10,\n            left = offset.left;\n\n        let inlay = that.updater.get(\'inlay\');\n        that.mxDialog(\'@./pannel\', &#123;\n            inlay: inlay,\n            submit: (newInlay) =>&#123;\n                that.updater.digest(&#123;\n                    inlay: newInlay\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            width: 280,\n            top,\n            left,\n            mask: false,\n            closable: false\n        &#125;);\n    &#125;\n&#125;);</pre></div><div mxa="_zs_gallery9:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallery9:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">Pannel HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 92;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallery9:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 94;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallery9:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 97;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;mx-calendar.range \n    configs="&#123;&#123;@inlayConfig&#125;&#125;"\n    mx-change="submit()" \n    mx-cancel="hide()"/&gt;</pre></div><div mxa="_zs_gallery9:l" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallery9:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">Pannel JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 105;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_gallery9:m" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 107;
    $art = '!text4';
    ;
    $p += ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_gallery9:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 110;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@pannel.html\',\n    init(e) &#123;\n        this.viewOptions = e;\n        this.updater.set(&#123;\n            inlayConfig: $.extend(true, &#123;&#125;, e.inlay)\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'submit&lt;change&gt;\'(e) &#123;\n        // e.dates\n        // e.vs\n        let inlayConfig = this.updater.get(\'inlayConfig\');\n        inlayConfig.dates = e.dates;\n        inlayConfig.vs = e.vs;\n        let viewOptions = this.viewOptions;\n        if(viewOptions.submit)&#123;\n            viewOptions.submit(inlayConfig);\n        &#125;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;,\n    \'hide&lt;cancel&gt;\'(e) &#123;\n        e.stopPropagation();\n        let viewOptions = this.viewOptions;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/examples/12.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest({
            inlay: {
                title: '自定义标题',
                dates: {
                    startStr: Moment().format(Formater),
                    endStr: Moment().add(2, 'days').format(Formater)
                },
                vsEnable: true,
                vs: true,
                quickDates: ['passed5', 'passed10']
            }
        });
    },
    'show<click>': function (event) {
        var that = this;
        var node = $(event.target);
        var offset = node.offset();
        var top = offset.top + node.outerHeight() - $(window).scrollTop() + 10, left = offset.left;
        var inlay = that.updater.get('inlay');
        that.mxDialog('mx-calendar/examples/pannel', {
            inlay: inlay,
            submit: function (newInlay) {
                that.updater.digest({
                    inlay: newInlay
                });
            }
        }, {
            width: 320,
            top: top,
            left: left,
            mask: false,
            closable: false
        });
    }
});

});