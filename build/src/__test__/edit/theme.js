/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/edit/theme",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___edit_theme_","._zs_gallery___test___edit_theme_-cont {\n  padding: 16px;\n}\n._zs_gallery___test___edit_theme_-tag {\n  display: inline-block;\n  width: 100px;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n  margin-bottom: 16px;\n  margin-right: 16px;\n  color: #fff;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n}\n._zs_gallery___test___edit_theme_-tag:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery___test___edit_theme_-tag1 {\n  background-color: #4d7fff;\n}\n._zs_gallery___test___edit_theme_-tag2 {\n  background-color: #385ACC;\n  background-image: linear-gradient(to right, #385ACC, #5C55DD);\n}\n._zs_gallery___test___edit_theme_-tag3 {\n  background-color: #ff831b;\n}\n");
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerye@:e" class="_zs_gallery___test___edit_theme_-cont"><div class="_zs_gallery___test___edit_theme_-tag _zs_gallery___test___edit_theme_-tag1">智钻</div><div class="_zs_gallery___test___edit_theme_-tag _zs_gallery___test___edit_theme_-tag2">超级推荐</div><div class="_zs_gallery___test___edit_theme_-tag _zs_gallery___test___edit_theme_-tag3">直通车</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/edit/theme.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    },
    theme: function () {
        var feeds = {
            '--color-brand': '#385ACC',
            '--color-brand-hover': '#2e4aa7',
            '--color-brand-vs': '#f7664d',
            '--color-brand-light': 'd7def6',
            '--color-brand-opacity': '#eff2fb',
            '--border-highlight': '#9095A1',
            '--border-highlight-hover': '#677088',
            '--btn-brand': '#385ACC',
            '--btn-brand-gradient': '#5C55DD',
            '--btn-brand-hover': '#28449F',
            '--btn-brand-gradient-hover': '#4741AD',
            '--btn-text': '#333',
            '--btn-text-hover': '#333',
            '--btn-border': '#637ba5',
            '--btn-border-hover': '#637ba5',
            '--btn-bg': '#f3f5fc',
            '--btn-bg-hover': '#e7eaf4',
            '--color-red': '#d52112',
            '--color-green': '#30ab66',
            '--color-bg': '#f5f5f5',
            '--app-brand': '#385ACC',
            '--app-brand-gradient': '#5C55DD'
        };
        var subway = {
            '--color-brand': '#ff831b',
            '--color-brand-hover': '#df7315',
            '--color-brand-vs': '#91b514',
            '--color-brand-light': '#ffe6d5',
            '--color-brand-opacity': '#fff3e9',
            '--btn-brand': '#ff831b',
            '--btn-brand-gradient': '#ff831b',
            '--btn-brand-hover': '#df7315',
            '--btn-brand-gradient-hover': '#df7315',
            '--app-brand': '#ff831b',
            '--app-brand-gradient': '#ff831b'
        };
    }
});

});