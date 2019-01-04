/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryak","._zs_galleryki{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykj,._zs_gallerykk{margin-right:20px;padding-top:32px}._zs_gallerykl{position:relative;margin-right:20px}._zs_gallerykl ._zs_gallerykm{margin-bottom:136px}._zs_gallerykl ._zs_gallerykn{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}");
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
} ; var $g = '', $_temp, $p = '', menus = $$.menus, text = $$.text, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_gallerycC:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerycC:a" class="_zs_galleryk"><div mxs="_zs_gallerycC:_" class="mb20"><span class="color-9">以下示例：</span>hover显示菜单</div><div mxv mxa="_zs_gallerycC:b" class="clearfix mb20"><div mxv mxa="_zs_gallerycC:c" class="fl _zs_gallerykj"><div mxv mxa="_zs_gallerycC:d" class="mb20"><span mxv="menus" class="btn w100" mx-change="' + $viewId + 'select({text:\'左上对齐（lt）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=lt">左上对齐（lt）</span></div><div mxv mxa="_zs_gallerycC:e" class="mb20"><span mxv="menus" class="btn w100" mx-change="' + $viewId + 'select({text:\'左中对齐（lc）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=lc">左中对齐（lc）</span></div><span mxv="menus" class="btn w100" mx-change="' + $viewId + 'select({text:\'左下对齐（lb）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=lb">左下对齐（lb）</span></div><div mxv mxa="_zs_gallerycC:f" class="fl _zs_gallerykl"><div mxv mxa="_zs_gallerycC:g" class="_zs_gallerykm"><span mxv="menus" class="btn w100 mr20" mx-change="' + $viewId + 'select({text:\'上左对齐（tl）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=tl">上左对齐（tl）</span><span mxv="menus" class="btn w100 mr20" mx-change="' + $viewId + 'select({text:\'上中对齐（tc）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=tc">上中对齐（tc）</span><span mxv="menus" class="btn w100" mx-change="' + $viewId + 'select({text:\'上右对齐（tr）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=tr">上右对齐（tr）</span></div>'; if (text && selected) {
    ;
    $p += '<div mxa="_zs_gallerycC:h" class="_zs_gallerykn">' + $e(text) + '：选择操作' + $e(selected) + '</div>';
} ; $p += '<div mxv><span mxv="menus" class="btn w100 mr20" mx-change="' + $viewId + 'select({text:\'下左对齐（bl）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=bl">下左对齐（bl）</span><span mxv="menus" class="btn w100 mr20" mx-change="' + $viewId + 'select({text:\'下中对齐（bc）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=bc">下中对齐（bc）</span><span mxv="menus" class="btn w100" mx-change="' + $viewId + 'select({text:\'下右对齐（br）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=br">下右对齐（br）</span></div></div><div mxv mxa="_zs_gallerycC:i" class="fl _zs_gallerykk"><div mxv mxa="_zs_gallerycC:j" class="mb20"><span mxv="menus" class="btn w100" mx-change="' + $viewId + 'select({text:\'右上对齐（rt）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=rt">右上对齐（rt）</span></div><div mxv mxa="_zs_gallerycC:k" class="mb20"><span mxv="menus" class="btn w100" mx-change="' + $viewId + 'select({text:\'右中对齐（rc）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=rc">右中对齐（rc）</span></div><span mxv="menus" class="btn w100" mx-change="' + $viewId + 'select({text:\'右下对齐（rb）\'})" mx-view="mx-popmenu/index?menus=' + $i($$ref, menus) + '&width=100&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_gallerycC:l" class="clearfix"><div mxa="_zs_gallerycC:m" class="_zs_galleryl _zs_gallerye _zs_galleryg"><div mxs="_zs_gallerycC:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerycC:n" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerycC:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-popmenu class="btn w100"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    mx-change="select()"&gt;下中对齐&lt;/mx-popmenu&gt;\n\n&lt;mx-popmenu class="btn w100"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    place="lt"\n    mx-change="select()"&gt;左上对齐（lt）&lt;/mx-popmenu&gt;\n            </pre></div><div mxa="_zs_gallerycC:o" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerycC:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerycC:p" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerycC:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@2.html\',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    \'select&lt;change&gt;\'(e)&#123;\n        // e.selected 当前选中操作value值\n    &#125;\n&#125;);\n                \n            </pre></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            menus: [{
                    value: 1,
                    text: '操作1'
                }, {
                    value: 2,
                    text: '操作2'
                }, {
                    value: 3,
                    text: '操作3'
                }]
        });
    },
    'select<change>': function (e) {
        var text = e.params.text;
        var selected = e.selected;
        this.updater.digest({
            text: text,
            selected: selected
        });
    }
});

});