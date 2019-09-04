/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-collapse/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryav:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryav:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryav:_" class="mb20"><span class="color-9">以下示例：</span><span>可同时展开多个 + 默认展示两个 + 第一个和最后一个禁用</span></div><div mxv="list" mx-view="mx-collapse/index?onlyOne=false&list=';
    $line = 9;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxa="_zs_galleryav:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryav:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryav:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryav:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-collapse \n    only-one="false"\n    list="&#123;&#123;@[&#123;\n        disabled: true,\n        title: \'标题1\',\n        content: \'内容1\'\n    &#125;, &#123;\n        expand: true,\n        title: \'标题2\',\n        content: \'内容2\'\n    &#125;, &#123;\n        expand: true,\n        title: \'标题3\',\n        content: \'内容3\'\n    &#125;, &#123;\n        title: \'标题4\',\n        content: \'内容4\'\n    &#125;, &#123;\n        disabled: true,\n        title: \'标题5\',\n        content: \'内容5\'\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-collapse/examples/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            list: [{
                    disabled: true,
                    title: '笑掉头'
                }, {
                    expand: true,
                    title: '笑一笑，十年少',
                    content: '1、岁月磨平了你的棱角，其实就是你被生活盘了。<br/>2、你不是真的胖，只是女娲捏土造你的时候土用多了。<br/>3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。'
                }, {
                    expand: true,
                    title: '是幽默的深刻，还是深刻的幽默',
                    content: '1、人生，总有不得不走的回头路：比如出门上班走到楼下才发现没带手机。<br/>2、为什么经常看见妻子吊打小三，却很少看见丈夫痛殴奸夫？因为小三一般比妻子瘦弱，而奸夫一般比较丈夫健硕。<br/>3、怕开宝马的同学认出没戴头盔骑摩托车的你，真的想多了。人家工作、购物、居注娱乐去的地方，走的是和你一条线吗？'
                }, {
                    title: '冷段一组，凉意浓',
                    content: '1、过夜的叫酒店，喝酒的却叫夜店。<br/>2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。<br/>3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。'
                }, {
                    disabled: true,
                    title: '巨搞笑，以冷翻人为目标'
                }]
        });
    }
});

});