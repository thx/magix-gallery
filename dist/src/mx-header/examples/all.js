/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/examples/all",["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-header_examples_index_","._zs_gallery_mx-header_examples_index_-content {\n  height: 1200px;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-header_examples_index_-content ._zs_gallery_mx-header_examples_index_-inner {\n  width: 1000px;\n  padding-top: 100px;\n  margin: auto;\n}\n._zs_gallery_mx-header_examples_index_-wrapper {\n  height: 400px;\n  overflow-y: auto;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_mx-header_examples_index_-wrapper ._zs_gallery_mx-header_examples_index_-inner {\n  height: 800px;\n}\n._zs_gallery_mx-header_examples_index_-cut {\n  margin-left: 15px;\n  border: 1px solid var(--color-border);\n}\n");
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
} ; var $g = '', $_temp, $p = '', navs = $$.navs, cur = $$.cur, curText = $$.curText; var $expr, $art, $line; try {
    $p += '<div mxv="navs" mx-navchange="' + $viewId + 'change()" mx-view="mx-header/index?navs=';
    $line = 2;
    $art = '@navs';
    ;
    $p += ($expr = '<%@navs%>', $i($$ref, navs)) + '&cur=';
    $line = 3;
    $art = '=cur';
    ;
    $p += ($expr = '<%!$eu(cur)%>', $eu(cur)) + '&logo=%2F%2Fimg.alicdn.com%2Ftfs%2FTB1Z0ggLPTpK1RjSZKPXXa3UpXa-534-98.png"></div><div mxa="_zs_gallerycP:_" class="_zs_gallery_mx-header_examples_index_-content"><div mxa="_zs_gallerycP:a" class="_zs_gallery_mx-header_examples_index_-inner">';
    $line = 8;
    $art = 'if !cur';
    ;
    $expr = '<%if (!cur) {%>';
    if (!cur) {
        ;
        $p += ' 点击导航切换区块内容 ';
        $line = 10;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' 当前导航：';
        $line = 11;
        $art = '=curText';
        ;
        $p += ($expr = '<%=curText%>', $e(curText)) + '（';
        $line = 11;
        $art = '=cur';
        ;
        $p += ($expr = '<%=cur%>', $e(cur)) + '） ';
        $line = 12;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/examples/all.html';
    throw msg;
} return $p; },
    render: function () {
        var navs = [{
                value: 1,
                text: '营销中台',
                subs: [{
                        value: 21,
                        text: '标准推广'
                    }, {
                        value: 22,
                        text: '智能推广'
                    }]
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