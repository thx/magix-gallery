/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/__test__/all",["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryT","._zs_gallerygD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygE{height:1200px;background-color:#fafafa}._zs_gallerygE ._zs_gallerygF{width:1000px;padding-top:220px;margin:auto;font-size:20px;text-align:center}._zs_gallerygG{height:400px;overflow-y:auto;background-color:#fafafa;border:1px solid #e6e6e6}._zs_gallerygG ._zs_gallerygF{height:800px}");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', navs = $$.navs, cur = $$.cur, curText = $$.curText; $p += '<div mxv="navs" mx-navchange="' + $viewId + 'change()" mx-view="mx-header/index?navs=' + $i($$ref, navs) + '&cur=' + $eu(cur) + '&logo=%2F%2Fgw.alicdn.com%2Ftfs%2FTB1Uhbvh_vI8KJjSspjXXcgjXXa-534-98.png"></div><div mxa="_zs_galleryb1:_" class="_zs_gallerygE"><div mxa="_zs_galleryb1:a" class="_zs_gallerygF">'; if (!cur) {
    ;
    $p += ' 点击导航切换区块内容 ';
}
else {
    ;
    $p += ' 当前导航：' + $e(curText) + '（' + $e(cur) + '） ';
} ; $p += '</div></div>'; return $p; },
    render: function () {
        var navs = [{
                value: 1,
                text: '营销中台'
            }, {
                value: 2,
                text: '创意中台'
            }];
        // 默认不选中任何一个
        var cur = '';
        this.updater.digest({
            navs: navs,
            cur: cur,
            curText: ''
        });
    },
    'change<navchange>': function (event) {
        // event.nav {value: , text: } 当前导航
        var nav = event.nav;
        this.updater.digest({
            cur: nav.value,
            curText: nav.text
        });
    }
});

});