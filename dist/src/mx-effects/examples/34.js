/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/34",["magix","examples/example","mx-form/index","mx-form/validator","$","../star","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("../star");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', num = $$.num, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb6:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryb6:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryb6:_" class="mb10"><span class="color-9">以下示例：</span>支持操作，双向绑定，显示的数值可为0~count任意数值，操作时只能整数</div><div mxa="_zs_galleryb6:b" class="mb10"><span mxs="_zs_galleryb6:a" class="color-9">当前评分：</span>';
    $line = 9;
    $art = '=num';
    ;
    $p += ($expr = '<%=num%>', $e(num)) + '</div><div mxv mxa="_zs_galleryb6:c" class="mb10"><div mxv="num" mxe="' + $viewId + '_0" mxc="[';
    $line = 14;
    $art = ':num{refresh:true}';
    ;
    $p += '{p:\'num\',f:{refresh:true},a:\'num\'}]" mx-view="mx-effects/star?operational=true&num=';
    $line = 14;
    $art = ':num{refresh:true}';
    ;
    $p += ($expr = '<%@num%>', $i($$ref, num)) + '"></div></div><div mxv mxa="_zs_galleryb6:d" class="mb10"><div mxv="num" mxe="' + $viewId + '_1" mxc="[';
    $line = 19;
    $art = ':num{refresh:true}';
    ;
    $p += '{p:\'num\',f:{refresh:true},a:\'num\'}]" mx-view="mx-effects/star?operational=true&num=';
    $line = 19;
    $art = ':num{refresh:true}';
    ;
    $p += ($expr = '<%@num%>', $i($$ref, num)) + '&icon=';
    $line = 20;
    $art = '=\'<i class=\\"mc-iconfont\\">&#xe635;</i>\'';
    ;
    $p += ($expr = '<%!$eu(\'<i class=\\"mc-iconfont\\">&#xe635;</i>\')%>', $eu('<i class=\"mc-iconfont\">&#xe635;</i>')) + '&color=%23ff0000"></div></div><div mxv mxa="_zs_galleryb6:e" class="mb10"><div mxv="num" mxe="' + $viewId + '_2" mxc="[';
    $line = 26;
    $art = ':num{refresh:true}';
    ;
    $p += '{p:\'num\',f:{refresh:true},a:\'num\'}]" mx-view="mx-effects/star?operational=true&num=';
    $line = 26;
    $art = ':num{refresh:true}';
    ;
    $p += ($expr = '<%@num%>', $i($$ref, num)) + '&icon=';
    $line = 27;
    $art = '=\'<i class=\\"mc-iconfont\\">&#xe60c;</i>\'';
    ;
    $p += ($expr = '<%!$eu(\'<i class=\\"mc-iconfont\\">&#xe60c;</i>\')%>', $eu('<i class=\"mc-iconfont\">&#xe60c;</i>')) + '&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_galleryb6:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryb6:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb6:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb6:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.star \n    operational="true"\n    num="&#123;&#123;:num&#123;refresh:true&#125;&#125;&#125;" /&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/34.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            num: 1.4
        });
    }
});

});