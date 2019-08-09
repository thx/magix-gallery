/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/examples/trigger",["magix","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
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
} ; var $g = '', $_temp, $p = '', open = $$.open, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryd+:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryd+:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryd+:_" class="mb20">组件内所有的展开项使用通用的样式，mx-trigger，mx-trigger-open，mx-output，mx-output-bottom（向下展开），mx-output-open，可借助这些class自定义一个类似于dropdown的组件</div><a mxa="_zs_galleryd+:b" href="javascript:;" mx-click="' + $viewId + 'toggle()" class="btn btn-brand mr20">';
    $line = 4;
    $art = '=(open ? \'点击收起\' : \'点击展开\')';
    ;
    $p += ($expr = '<%=(open ? \'点击收起\' : \'点击展开\')%>', $e((open ? '点击收起' : '点击展开'))) + '</a><div mxa="_zs_galleryd+:c" style="position: relative; display: inline-block; width: 200px;"><div class="mx-trigger ';
    $line = 6;
    $art = 'if open';
    ;
    $expr = '<%if (open) {%>';
    if (open) {
        ;
        $p += ' mx-trigger-open ';
        $line = 6;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">trigger<i mxs="_zs_galleryd+:a" class="mc-iconfont mx-trigger-arrow">&#xe692;</i></div><div class="mx-output mx-output-bottom ';
    $line = 9;
    $art = 'if open';
    ;
    $expr = '<%if (open) {%>';
    if (open) {
        ;
        $p += ' mx-output-open ';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><div mxs="_zs_galleryd+:b" style="padding: 20px;">自定义区域</div></div></div></div><div mxa="_zs_galleryd+:d" class="clearfix"><div mxa="_zs_galleryd+:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryd+:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd+:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd+:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a class="btn btn-brand mr20" href="javascript:;" \n    mx-click="toggle()"&gt;\n    &#123;&#123;=(open ? \'点击收起\' : \'点击展开\')&#125;&#125;\n&lt;/a&gt;\n\n&lt;div style="position: relative; display: inline-block; width: 200px;"&gt;\n    &lt;div class="mx-trigger &#123;&#123;if open&#125;&#125; mx-trigger-open &#123;&#123;/if&#125;&#125;"&gt;\n        trigger\n        &lt;i class="mc-iconfont mx-trigger-arrow"&gt;&#38;&#35;xe692;&lt;/i&gt;\n    &lt;/div&gt;\n    &lt;div class="mx-output mx-output-bottom &#123;&#123;if open&#125;&#125; mx-output-open &#123;&#123;/if&#125;&#125;"&gt;\n        &lt;div style="padding: 20px;"&gt;自定义区域&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryd+:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryd+:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryd+:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 42;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryd+:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@trigger.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            open: false\n        &#125;);\n    &#125;,\n    \'toggle&lt;click&gt;\'()&#123;\n        let open = this.updater.get(\'open\');\n        this.updater.digest(&#123;\n            open: !open\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-style/examples/trigger.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            open: false
        });
    },
    'toggle<click>': function () {
        var open = this.updater.get('open');
        this.updater.digest({
            open: !open
        });
    }
});

});