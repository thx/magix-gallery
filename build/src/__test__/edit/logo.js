/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/edit/logo",["magix","./theme","$","mx-color/index"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-color/index");
var Magix = require("magix");
var Base = require("./theme");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___edit_theme_","._zs_gallery___test___edit_theme_-dot {\n  display: inline-block;\n  width: var(--input-height);\n  height: var(--input-height);\n  border-radius: 50%;\n  vertical-align: middle;\n}\n:root {\n  --edit-theme-width: 126px;\n  --edit-nav-size: 20px;\n  --edit-color-width: calc(var(--edit-theme-width) * 4);\n}\n._zs_gallery___test___edit_theme_-theme {\n  float: left;\n  width: var(--edit-theme-width);\n  text-align: center;\n}\n._zs_gallery___test___edit_theme_-edit {\n  position: relative;\n  height: 820px;\n  padding-left: var(--edit-color-width);\n}\n._zs_gallery___test___edit_theme_-nav {\n  position: absolute;\n  z-index: 3;\n  top: calc(0px - var(--edit-nav-size));\n  left: 0;\n  width: var(--edit-theme-width);\n  height: var(--edit-nav-size);\n  text-align: center;\n  transition: left var(--duration);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow,\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-width: 0 var(--edit-nav-size) var(--edit-nav-size);\n  border-style: solid;\n  border-color: transparent transparent var(--color-border);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow {\n  position: absolute;\n  top: 1px;\n  left: 50%;\n  margin-left: calc(0px - var(--edit-nav-size));\n  border-color: transparent transparent #fff;\n}\n._zs_gallery___test___edit_theme_-colors {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: var(--edit-color-width);\n  height: 100%;\n  padding-top: 15px;\n  padding-left: 15px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-item {\n  float: left;\n  width: 120px;\n  height: 90px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-icon {\n  position: relative;\n  top: 1px;\n  margin-left: 3px;\n  color: #999;\n  font-size: 14px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper {\n  width: 100px;\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper [mx-view*=\"mx-color/picker\"] {\n  background-color: transparent;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper [mx-view*=\"mx-color/picker\"] .mx-trigger {\n  background-color: transparent;\n}\n._zs_gallery___test___edit_theme_-preview {\n  padding: 0 20px;\n}\n._zs_gallery___test___edit_theme_-preview ._zs_gallery___test___edit_theme_-iframe {\n  width: 100%;\n  height: 820px;\n  border: 1px solid var(--color-border);\n}\n");
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
} ; var $g = '', $_temp, $p = '', themes = $$.themes, info = $$.info; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryg:_" class="pt10 pl10 pr10"><div mxs="_zs_galleryg:_" class="mb20">预置主题：</div><div mxa="_zs_galleryg:a" class="clearfix mb20">';
    $line = 4;
    $art = 'each themes as t';
    ;
    $expr = '<%for (var $art_icbjnmkx$art_i = 0, $art_cxvuudf$art_c = themes.length; $art_icbjnmkx$art_i < $art_cxvuudf$art_c; $art_icbjnmkx$art_i++) {    var t = themes[$art_icbjnmkx$art_i]%>';
    for (var $art_icbjnmkx$art_i = 0, $art_cxvuudf$art_c = themes.length; $art_icbjnmkx$art_i < $art_cxvuudf$art_c; $art_icbjnmkx$art_i++) {
        var t = themes[$art_icbjnmkx$art_i];
        $p += '<div class="fl" style="width: ';
        $line = 5;
        $art = '=(100/themes.length)';
        ;
        $p += ($expr = '<%=(100 / themes.length)%>', $e((100 / themes.length))) + '%;"><div mxa="_zs_galleryg:b" class="text-center"><a href="javascript:;" class="_zs_gallery___test___edit_theme_-dot" style="';
        $line = 7;
        $art = '=t.styles';
        ;
        $p += ($expr = '<%=t.styles%>', $e(t.styles)) + '" mx-click="' + $viewId + 'selectTheme({key:\'';
        $line = 7;
        $art = '=t.key';
        ;
        $p += ($expr = '<%=$eq(t.key)%>', $e($eq(t.key))) + '\'})"></a></div><div mxa="_zs_galleryg:c" class="text-center mt10">';
        $line = 9;
        $art = '=t.text';
        ;
        $p += ($expr = '<%=t.text%>', $e(t.text)) + '</div></div>';
        $line = 11;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxs="_zs_galleryg:a">自定义主题：</div></div><div mxv="info" mx-view="mx-color/index?data=';
    $line = 15;
    $art = '@info';
    ;
    $p += ($expr = '<%@info%>', $i($$ref, info)) + '" mx-change="' + $viewId + 'selectColor()"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/edit/logo.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.updater.set({
            info: {
                showBtns: true,
                color: e.color
            }
        });
        this.initTheme();
    },
    render: function () {
        this.updater.digest();
    },
    'selectTheme<click>': function (event) {
        var key = event.params.key;
        var themes = this.updater.get('themes');
        var cur = {};
        for (var i = 0; i < themes.length; i++) {
            if (themes[i].key == key) {
                cur = themes[i];
                break;
            }
        }
        this['@{owner.node}'].trigger($.Event('change', {
            colors: cur.colors
        }));
    },
    'selectColor<change>': function (event) {
        event.stopPropagation();
        var brand = event.color;
        var colors = this['@{get.base}']({
            '--color-brand': brand
        });
        this['@{owner.node}'].trigger($.Event('change', {
            brand: brand,
            colors: colors
        }));
    }
});

});