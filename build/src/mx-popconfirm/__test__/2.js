/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popconfirm___test___2_","/* @dependent: ./index.less */\n._zs_gallery_mx-popconfirm___test___2_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-popconfirm___test___2_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-popconfirm___test___2_-left,\n._zs_gallery_mx-popconfirm___test___2_-right {\n  margin-right: 20px;\n  padding-top: 32px;\n}\n._zs_gallery_mx-popconfirm___test___2_-center {\n  position: relative;\n  margin-right: 20px;\n}\n._zs_gallery_mx-popconfirm___test___2_-center ._zs_gallery_mx-popconfirm___test___2_-center-top {\n  margin-bottom: 136px;\n}\n._zs_gallery_mx-popconfirm___test___2_-center ._zs_gallery_mx-popconfirm___test___2_-center-tip {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 30px;\n  margin-top: -15px;\n  line-height: 30px;\n  text-align: center;\n}\n");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, cur = $$.cur, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybm:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallerybm:a" class="_zs_gallery___test___base_-eg-content"><div mxa="_zs_gallerybm:b" class="clearfix mb20"><div mxs="_zs_gallerybm:_" class="fl _zs_gallery_mx-popconfirm___test___2_-left"><div class="mb20"><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'左上对齐（lt）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lt">左上对齐（lt）</span></div><div class="mb20"><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'左中对齐（lc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lc">左中对齐（lc）</span></div><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'左下对齐（lb）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lb">左下对齐（lb）</span></div><div mxa="_zs_gallerybm:c" class="fl _zs_gallery_mx-popconfirm___test___2_-center"><div mxs="_zs_gallerybm:a" class="_zs_gallery_mx-popconfirm___test___2_-center-top"><span class="btn mr20" mx-popconfirm="' + $viewId + 'test({text:\'上左对齐（tl）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tl">上左对齐（tl）</span><span class="btn mr20" mx-popconfirm="' + $viewId + 'test({text:\'上中对齐（tc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tc">上中对齐（tc）</span><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'上右对齐（tr）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tr">上右对齐（tr）</span></div>';
    $line = 37;
    $art = 'if cur';
    ;
    $p += '';
    $expr = '<%if(cur){%>';
    if (cur) {
        ;
        $p += '<div mxa="_zs_gallerybm:d" class="_zs_gallery_mx-popconfirm___test___2_-center-tip">确认操作：';
        $line = 38;
        $art = '=cur';
        ;
        $p += '' + ($expr = '<%=cur%>', $e(cur)) + '</div>';
        $line = 39;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxs="_zs_gallerybm:b"><span class="btn mr20" mx-popconfirm="' + $viewId + 'test({text:\'下左对齐（bl）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=bl">下左对齐（bl）</span><span class="btn mr20" mx-popconfirm="' + $viewId + 'test({text:\'下中对齐（bc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=bc">下中对齐（bc）</span><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'下右对齐（br）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=br">下右对齐（br）</span></div></div><div mxs="_zs_gallerybm:c" class="fl _zs_gallery_mx-popconfirm___test___2_-right"><div class="mb20"><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'右上对齐（rt）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rt">右上对齐（rt）</span></div><div class="mb20"><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'右中对齐（rc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rc">右中对齐（rc）</span></div><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'右下对齐（rb）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_gallerybm:e" class="clearfix"><div mxa="_zs_gallerybm:f" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half"><div mxs="_zs_gallerybm:d" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 78;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybm:g" class="_zs_gallery___test___base_-desc-tip">';
    $line = 80;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybm:e" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 83;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popconfirm class="btn"\n    content="确认操作吗？"\n    place="rc"\n    mx-popconfirm="submit()"&gt;右中对齐（rc）&lt;/mx-popconfirm&gt;</pre></div><div mxa="_zs_gallerybm:h" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half _zs_gallery___test___base_-half-right"><div mxs="_zs_gallerybm:f" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 91;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybm:i" class="_zs_gallery___test___base_-desc-tip">';
    $line = 93;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybm:e" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 96;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'submit&lt;popconfirm&gt;\'(e)&#123;\n        // 确认操作之后的回调 \n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popconfirm/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    },
    'test<popconfirm>': function (e) {
        var cur = e.params.text;
        this.updater.digest({
            cur: cur
        });
    }
});

});