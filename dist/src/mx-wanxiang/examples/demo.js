/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-wanxiang/examples/demo",["magix","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var $ = require("$");
var Router = Magix.Router;
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', list = $$.list, cur = $$.cur, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryfX:_" class="pa20"><div mxa="_zs_galleryfX:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example" style="width: 600px;"><div mxa="_zs_galleryfX:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryfX:_" class="clearfix mb40"><div class="fl">页面展示：</div><div class="fl"><div class="color-brand">注意只在taobao域名下可用</div><div>点击小象logo展开收起问答框</div></div></div><div mxa="_zs_galleryfX:c" class="clearfix mb40"><div mxs="_zs_galleryfX:a" class="fl">当前：</div>';
    $line = 14;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cozrumlbuoxn$art_c = list.length; index < $art_cozrumlbuoxn$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cozrumlbuoxn$art_c = list.length; index < $art_cozrumlbuoxn$art_c; index++) {
        var item = list[index];
        $p += ' ';
        $line = 15;
        $art = 'if (cur == item.path)';
        ;
        $expr = '<%if (cur == item.path) {%>';
        if (cur == item.path) {
            ;
            $p += '<div mxa="_zs_galleryfX:d" class="fl"><div>路径：';
            $line = 17;
            $art = '=item.path';
            ;
            $p += ($expr = '<%=item.path%>', $e(item.path)) + '</div><div>匹配到id：';
            $line = 18;
            $art = '=item.id';
            ;
            $p += ($expr = '<%=item.id%>', $e(item.id)) + '</div><div>';
            $line = 19;
            $art = '=item.tip';
            ;
            $p += ($expr = '<%=item.tip%>', $e(item.tip)) + '</div></div>';
            $line = 21;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 22;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 25;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cpolrxf$art_c = list.length; index < $art_cpolrxf$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cpolrxf$art_c = list.length; index < $art_cpolrxf$art_c; index++) {
        var item = list[index];
        $p += '<div mxa="_zs_galleryfX:e" class="mb20">';
        $line = 26;
        $art = '=(index + 1)';
        ;
        $p += ($expr = '<%=(index + 1)%>', $e((index + 1))) + '. 跳转<a class="color-brand" href="#!';
        $line = 26;
        $art = '=item.path';
        ;
        $p += ($expr = '<%=item.path%>', $e(item.path)) + '">';
        $line = 26;
        $art = '=item.path';
        ;
        $p += ($expr = '<%=item.path%>', $e(item.path)) + '</a>，';
        $line = 26;
        $art = '=item.extra';
        ;
        $p += ($expr = '<%=item.extra%>', $e(item.extra)) + '</div>';
        $line = 27;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_galleryfX:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryfX:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryfX:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 33;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryfX:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-wanxiang \n    biz-code="PCMaMaAnyWhereWindow"\n    default-source-id="432"\n    source-map="&#123;&#123;@&#123;\n        \'/wanxiang/demo1\': 496,\n        \'/wanxiang/demo2?version=1\': 502\n    &#125;&#125;&#125;"\n    bottom="50"/&gt;\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-wanxiang/examples/demo.html';
    throw msg;
} return $p; },
    render: function () {
        var loc = Router.parse();
        this.updater.digest({
            cur: loc.srcHash,
            list: [{
                    path: '/wanxiang/demo1',
                    id: 496,
                    tip: '第一个问题：我要咨询钻展流量的问题',
                    extra: '匹配中source-map中配置的496'
                }, {
                    path: '/wanxiang/demo2?version=1&mode=2',
                    id: 502,
                    tip: '第一个问题：如何查看资源位的类目要求？',
                    extra: '匹配中source-map中配置的502'
                }, {
                    path: '/wanxiang/demo3',
                    id: 432,
                    tip: '第一个问题：我要咨询内容推广的问题',
                    extra: 'source-map中没有额外配置，使用默认的432'
                }]
        });
    }
});

});