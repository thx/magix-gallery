/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryal","._zs_galleryko{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykp{width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px;cursor:pointer;color:#ccc;border:1px solid #e6e6e6}");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerycD:_" class="_zs_galleryh"><div mxa="_zs_gallerycD:a" class="_zs_galleryk"><div mxa="_zs_gallerycD:b" class="mb20"><span mxs="_zs_gallerycD:_" class="color-9">trigger：</span><span class="_zs_gallerykp mc-iconfont" mx-change="' + $viewId + 'select()" mx-view="mx-popmenu/index?menus=' + $i($$ref, [{ value: 1, text: '操作1' }, { value: 2, text: '操作2' }, { value: 3, text: '操作3' }]) + '">&#xe7be;</span><span mxs="_zs_gallerycD:a" class="color-9 ml40">当前选中：</span><span>'; if (selected) {
    ;
    $p += '操作' + $e(selected);
} ; $p += '</span></div></div><div mxa="_zs_gallerycD:c" class="_zs_galleryl"><div mxs="_zs_gallerycD:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerycD:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerycD:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-popmenu \n    class="icon mc-iconfont"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"&gt;&#38;&#35;xe7be;&lt;/mx-popmenu&gt;\n        </pre></div><div mxa="_zs_gallerycD:e" class="_zs_galleryl"><div mxs="_zs_gallerycD:d" class="_zs_galleryj">CSS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerycD:f" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerycD:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n.icon&#123;\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    text-align: center;\n    line-height: 22px;\n    cursor: pointer;\n    color: #ccc;\n    border: 1px solid #e6e6e6;\n&#125;\n        </pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    },
    'select<change>': function (e) {
        var selected = e.selected;
        this.updater.digest({
            selected: selected
        });
    }
});

});