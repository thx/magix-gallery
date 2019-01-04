/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_galleryai","._zs_galleryjL{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjM,._zs_galleryjN{margin-right:20px;padding-top:32px}._zs_galleryjO{position:relative;margin-right:20px}._zs_galleryjO ._zs_galleryjP{margin-bottom:136px}._zs_galleryjO ._zs_galleryjQ{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}");
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
} ; var $g = '', $_temp, $p = '', cur = $$.cur, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerycv:_" class="_zs_galleryh"><div mxa="_zs_gallerycv:a" class="_zs_galleryk"><div mxa="_zs_gallerycv:b" class="clearfix mb20"><div mxs="_zs_gallerycv:_" class="fl _zs_galleryjM"><div class="mb20"><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'左上对齐（lt）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lt">左上对齐（lt）</span></div><div class="mb20"><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'左中对齐（lc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lc">左中对齐（lc）</span></div><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'左下对齐（lb）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lb">左下对齐（lb）</span></div><div mxa="_zs_gallerycv:c" class="fl _zs_galleryjO"><div mxs="_zs_gallerycv:a" class="_zs_galleryjP"><span class="btn mr20" mx-popconfirm="' + $viewId + 'test({text:\'上左对齐（tl）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tl">上左对齐（tl）</span><span class="btn mr20" mx-popconfirm="' + $viewId + 'test({text:\'上中对齐（tc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tc">上中对齐（tc）</span><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'上右对齐（tr）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tr">上右对齐（tr）</span></div>'; if (cur) {
    ;
    $p += '<div mxa="_zs_gallerycv:d" class="_zs_galleryjQ">确认操作：' + $e(cur) + '</div>';
} ; $p += '<div mxs="_zs_gallerycv:b"><span class="btn mr20" mx-popconfirm="' + $viewId + 'test({text:\'下左对齐（bl）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=bl">下左对齐（bl）</span><span class="btn mr20" mx-popconfirm="' + $viewId + 'test({text:\'下中对齐（bc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=bc">下中对齐（bc）</span><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'下右对齐（br）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=br">下右对齐（br）</span></div></div><div mxs="_zs_gallerycv:c" class="fl _zs_galleryjN"><div class="mb20"><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'右上对齐（rt）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rt">右上对齐（rt）</span></div><div class="mb20"><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'右中对齐（rc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rc">右中对齐（rc）</span></div><span class="btn" mx-popconfirm="' + $viewId + 'test({text:\'右下对齐（rb）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_gallerycv:e" class="clearfix"><div mxa="_zs_gallerycv:f" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerycv:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerycv:g" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerycv:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-popconfirm class="btn"\n    content="确认操作吗？"\n    place="rc"\n    mx-popconfirm="submit()"&gt;右中对齐（rc）&lt;/mx-popconfirm&gt;</pre></div><div mxa="_zs_gallerycv:h" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallerycv:f" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerycv:i" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerycv:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'submit&lt;popconfirm&gt;\'(e)&#123;\n        // 确认操作之后的回调 \n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
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