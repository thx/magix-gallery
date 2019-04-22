/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/edit/index",["magix","./theme","$","mx-color/picker","mx-popover/index"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-color/picker");
require("mx-popover/index");
var Magix = require("magix");
var Base = require("./theme");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___edit_theme_","._zs_gallery___test___edit_theme_-dot {\n  display: inline-block;\n  width: var(--input-height);\n  height: var(--input-height);\n  border-radius: 50%;\n  vertical-align: middle;\n}\n:root {\n  --edit-theme-width: 100px;\n  --edit-nav-size: 20px;\n  --edit-color-width: calc(var(--edit-theme-width) * 4);\n}\n._zs_gallery___test___edit_theme_-theme {\n  float: left;\n  width: var(--edit-theme-width);\n  text-align: center;\n}\n._zs_gallery___test___edit_theme_-edit {\n  position: relative;\n  padding-left: var(--edit-color-width);\n}\n._zs_gallery___test___edit_theme_-nav {\n  position: absolute;\n  z-index: 3;\n  top: calc(0px - var(--edit-nav-size));\n  left: 0;\n  width: var(--edit-theme-width);\n  height: var(--edit-nav-size);\n  text-align: center;\n  transition: left var(--duration);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow,\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-width: 0 var(--edit-nav-size) var(--edit-nav-size);\n  border-style: solid;\n  border-color: transparent transparent var(--color-border);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow {\n  position: absolute;\n  top: 1px;\n  left: 50%;\n  margin-left: calc(0px - var(--edit-nav-size));\n  border-color: transparent transparent #fff;\n}\n._zs_gallery___test___edit_theme_-colors {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: var(--edit-color-width);\n  height: 100%;\n  padding-top: 20px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-item {\n  float: left;\n  width: calc((var(--edit-color-width) - 20px) / 2 - 20px);\n  margin-bottom: 20px;\n  margin-left: 20px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-icon {\n  position: relative;\n  top: 1px;\n  margin-left: 3px;\n  color: #999;\n  font-size: 14px;\n}\n._zs_gallery___test___edit_theme_-preview {\n  padding: 0 20px;\n}\n._zs_gallery___test___edit_theme_-preview ._zs_gallery___test___edit_theme_-iframe {\n  width: 100%;\n  border: 1px solid var(--color-border);\n}\n");
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
} ; var $g = '', $_temp, $p = '', themes = $$.themes, custom = $$.custom, itemWidth = $$.itemWidth, cur = $$.cur, list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerye:_" class="clearfix mb30">';
    $line = 2;
    $art = 'each themes as t i';
    ;
    $expr = '<%for (var i = 0, $art_cduheucgh$art_c = themes.length; i < $art_cduheucgh$art_c; i++) {    var t = themes[i]%>';
    for (var i = 0, $art_cduheucgh$art_c = themes.length; i < $art_cduheucgh$art_c; i++) {
        var t = themes[i];
        $p += '<div mxa="_zs_gallerye:a" class="_zs_gallery___test___edit_theme_-theme"><div><a href="javascript:;" class="_zs_gallery___test___edit_theme_-dot" style="';
        $line = 4;
        $art = '=t.styles';
        ;
        $p += ($expr = '<%=t.styles%>', $e(t.styles)) + '" mx-click="' + $viewId + 'selectTheme({cur:';
        $line = 5;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '})"></a></div><div mxa="_zs_gallerye:b" class="mt10">';
        $line = 6;
        $art = '=t.text';
        ;
        $p += ($expr = '<%=t.text%>', $e(t.text)) + '</div></div>';
        $line = 8;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxa="_zs_gallerye:c" class="_zs_gallery___test___edit_theme_-theme"><div mx-change="' + $viewId + 'changeColor()" mx-view="mx-color/picker?dot=true&color=';
    $line = 13;
    $art = '=custom';
    ;
    $p += ($expr = '<%!$eu(custom)%>', $eu(custom)) + '"></div><div mxs="_zs_gallerye:_" class="text-center mt10">自定义</div></div></div><div mxv mxa="_zs_gallerye:d" class="_zs_gallery___test___edit_theme_-edit"><div class="_zs_gallery___test___edit_theme_-nav" style="left:';
    $line = 19;
    $art = '=(itemWidth*cur)';
    ;
    $p += ($expr = '<%=(itemWidth * cur)%>', $e((itemWidth * cur))) + 'px;"><span mxs="_zs_gallerye:a" class="_zs_gallery___test___edit_theme_-arrow"></span><span mxs="_zs_gallerye:b" class="_zs_gallery___test___edit_theme_-white-arrow"></span></div><div mxv mxa="_zs_gallerye:e" class="_zs_gallery___test___edit_theme_-colors clearfix">';
    $line = 24;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_iuatdyy$art_i = 0, $art_covxflxzo$art_c = list.length; $art_iuatdyy$art_i < $art_covxflxzo$art_c; $art_iuatdyy$art_i++) {    var item = list[$art_iuatdyy$art_i]%>';
    for (var $art_iuatdyy$art_i = 0, $art_covxflxzo$art_c = list.length; $art_iuatdyy$art_i < $art_covxflxzo$art_c; $art_iuatdyy$art_i++) {
        var item = list[$art_iuatdyy$art_i];
        $p += '<div mxv mxa="_zs_gallerye:f" class="_zs_gallery___test___edit_theme_-item"><div mxa="_zs_gallerye:g" class="mb10">';
        $line = 26;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '<i class="mc-iconfont _zs_gallery___test___edit_theme_-icon" mx-view="mx-popover/index?content=';
        $line = 28;
        $art = '=item.tip';
        ;
        $p += ($expr = '<%!$eu(item.tip)%>', $eu(item.tip)) + '&width=320">&#xe629;</i></div><div mxv><input mxs="_zs_gallerye:c"/></div></div>';
        $line = 32;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxs="_zs_gallerye:d" class="_zs_gallery___test___edit_theme_-preview"><iframe src="https://mo.m.taobao.com/page_201902152003028" class="_zs_gallery___test___edit_theme_-iframe" width="100%" height="770" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/edit/index.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.initTheme();
        var list = [{
                key: '--line-height',
                text: '12',
                tip: '123'
            },
            {
                key: '--font-size',
                text: '12',
                tip: '123'
            },
            {
                key: '--input-height',
                text: '12',
                tip: '123'
            },
            {
                key: '--input-small-height',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-brand',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-brand-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-brand-vs',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-brand-light',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-brand-opacity',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-brand-text',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-brand-text-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-border',
                text: '12',
                tip: '123'
            },
            {
                key: '--border-radius',
                text: '12',
                tip: '123'
            },
            {
                key: '--border-highlight',
                text: '12',
                tip: '123'
            },
            {
                key: '--border-highlight-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-border-radius',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-brand',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-brand-gradient',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-brand-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-brand-gradient-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-brand-text',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-brand-text-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-text',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-text-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-border',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-border-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-bg',
                text: '12',
                tip: '123'
            },
            {
                key: '--btn-bg-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-warn',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-red',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-orange',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-green',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-blue',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-disabled',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-bg',
                text: '12',
                tip: '123'
            },
            {
                key: '--color-bg-hover',
                text: '12',
                tip: '123'
            },
            {
                key: '--duration',
                text: '12',
                tip: '123'
            },
            {
                key: '--app-brand',
                text: '12',
                tip: '123'
            },
            {
                key: '--app-brand-gradient',
                text: '12',
                tip: '123'
            },
            {
                key: '--app-nav-bg',
                text: '12',
                tip: '123'
            },
            {
                key: '--app-bg',
                text: '12',
                tip: '123'
            }];
        var root = getComputedStyle(document.documentElement);
        var itemWidth = root.getPropertyValue('--edit-theme-width').trim();
        this.updater.set({
            custom: '#51a300',
            cur: 2,
            itemWidth: +itemWidth.replace('px', ''),
            list: list
        });
    },
    render: function () {
        this.updater.digest();
    },
    'selectTheme<click>': function (event) {
        var cur = event.params.cur;
        this.updater.digest({
            cur: cur
        });
    },
    'changeColor<change>': function (event) {
        this.updater.digest({
            cur: 3
        });
    }
});

});