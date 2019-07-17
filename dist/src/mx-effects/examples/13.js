/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/13",["magix","examples/example","$","../star","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../star");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryby:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryby:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_galleryby:b" class="mb10"><div mx-view="mx-effects/star?num=2.5&icon=';
    $line = 5;
    $art = '=\'<i class=\\"mc-iconfont\\">&#xe635;</i>\'';
    ;
    $p += ($expr = '<%!$eu(\'<i class=\\"mc-iconfont\\">&#xe635;</i>\')%>', $eu('<i class=\"mc-iconfont\">&#xe635;</i>')) + '&color=%23fc2a2a"></div></div><div mxa="_zs_galleryby:c" class="mb10"><div mx-view="mx-effects/star?num=4&icon=';
    $line = 10;
    $art = '=\'<i class=\\"mc-iconfont\\">&#xe60c;</i>\'';
    ;
    $p += ($expr = '<%!$eu(\'<i class=\\"mc-iconfont\\">&#xe60c;</i>\')%>', $eu('<i class=\"mc-iconfont\">&#xe60c;</i>')) + '&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_galleryby:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryby:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">自定义icon + 颜色</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryby:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryby:a" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.star num="2.5"\n    icon="&#123;&#123;=\'&lt;i class=\\"mc-iconfont\\"&gt;&#38;&#35;xe635;&lt;/i&gt;\'&#125;&#125;"\n    color="#fc2a2a"&gt;&lt;/mx-effects.star&gt;\n\n&lt;mx-effects.star num="4"\n    icon="&#123;&#123;=\'&lt;i class=\\"mc-iconfont\\"&gt;&#38;&#35;xe60c;&lt;/i&gt;\'&#125;&#125;"\n    color="rgb(81, 163, 0)"&gt;&lt;/mx-effects.star&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/13.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            icon1: '<i class="mc-iconfont">&#xe635;</i>',
            icon2: '<i class="mc-iconfont">&#xe60c;</i>'
        });
    }
});

});