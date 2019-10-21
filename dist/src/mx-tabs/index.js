/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/index",["magix","mx-tabs/base","mx-effects/icon","mx-popover/index"],(require,exports,module)=>{
/*Magix,Base*/
require("mx-effects/icon");
require("mx-popover/index");
/**
 * 底边线tab切换
 * 兼容老的写法，type还是可配置，建议直接使用mx-tabs.box
 */
var Magix = require("magix");
var Base = require("mx-tabs/base");
Magix.applyStyle("_zs_gallery_mx-tabs_index_","[mx-view*=\"mx-tabs/box\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-tabs_index_-border {\n  position: relative;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item {\n  position: relative;\n  float: left;\n  padding: 10px 24px;\n  font-size: 16px;\n  line-height: var(--input-height);\n  transition: color var(--duration) ease-out;\n  color: #666;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item._zs_gallery_mx-tabs_index_-selected {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag-content {\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  z-index: 3;\n  display: inline-block;\n  margin-top: calc(4px - var(--input-height));\n  margin-left: -24px;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-underline {\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -1px;\n  border-bottom: 2px solid var(--color-brand);\n  transition: width var(--duration) cubic-bezier(0.645, 0.045, 0.355, 1), left var(--duration) cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._zs_gallery_mx-tabs_index_-box {\n  position: relative;\n  display: inline-block;\n  height: var(--input-height);\n  vertical-align: middle;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-tip {\n  position: relative;\n  top: 1px;\n  font-size: 14px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  padding: 0 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:first-child {\n  border-top-left-radius: var(--border-radius);\n  border-bottom-left-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:last-child {\n  border-top-right-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item {\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #999;\n  background-color: var(--color-disabled);\n  border-color: var(--color-border);\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  z-index: 2;\n  display: inline-block;\n  height: var(--input-height);\n  line-height: calc(var(--input-height) - 2px);\n  border-radius: var(--border-radius);\n  color: #666;\n  border: 1px solid transparent;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #333;\n  background-color: var(--color-brand-opacity);\n  border: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-tabs_index_-hollow-box::after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--border-highlight);\n}\n._zs_gallery_mx-tabs_index_-solid-box {\n  border: 1px solid var(--border-highlight);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item {\n  display: inline-block;\n  height: calc(var(--input-height) - 2px);\n  line-height: calc(var(--input-height) - 2px);\n  color: #999;\n  background-color: #fff;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, selected = $$.selected, viewId = $$.viewId, spm = $$.spm, left = $$.left, width = $$.width; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerye::_" class="_zs_gallery_mx-tabs_index_-border clearfix">';
    $line = 2;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cduppihbd$art_c = list.length; index < $art_cduppihbd$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cduppihbd$art_c = list.length; index < $art_cduppihbd$art_c; index++) {
        var item = list[index];
        $p += '<a class="_zs_gallery_mx-tabs_index_-border-item ';
        $line = 3;
        $art = '= (item.value == selected) ? \'selected\' : \'\'';
        ;
        $p += ($expr = '<%=(item.value == selected) ? \'_zs_gallery_mx-tabs_index_-selected\' : \'\'%>', $e((item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : '')) + '" href="javascript:;" id="';
        $line = 3;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
        $line = 3;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '" mx-mouseover="' + $viewId + '@{over}({value:\'';
        $line = 4;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=$eq(item.value)%>', $e($eq(item.value))) + '\'})" mx-mouseout="' + $viewId + '@{out}()" mx-click="' + $viewId + '@{select}({item:\'';
        $line = 6;
        $art = '@item';
        ;
        $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" ';
        $line = 7;
        $art = 'if spm';
        ;
        $expr = '<%if (spm) {%>';
        if (spm) {
            ;
            $p += ' data-spm-click="';
            $line = 7;
            $art = '=spm';
            ;
            $p += ($expr = '<%=spm%>', $e(spm)) + '';
            $line = 7;
            $art = '=index';
            ;
            $p += ($expr = '<%=index%>', $e(index)) + '" ';
            $line = 7;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 8;
        $art = '!item.text';
        ;
        $p += ($expr = '<%!item.text%>', $n(item.text)) + ' ';
        $line = 11;
        $art = 'if item.tagContent';
        ;
        $expr = '<%if (item.tagContent) {%>';
        if (item.tagContent) {
            ;
            $p += '<span mxa="_zs_gallerye::a" class="_zs_gallery_mx-tabs_index_-tag-content">';
            $line = 12;
            $art = '!item.tagContent';
            ;
            $p += ($expr = '<%!item.tagContent%>', $n(item.tagContent)) + '</span>';
            $line = 13;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' ';
            $line = 14;
            $art = 'if item.tag';
            ;
            $expr = '<%if (item.tag) {%>';
            if (item.tag) {
                ;
                $p += '<span mx-view="mx-effects/icon?type=error&color=';
                $line = 15;
                $art = '=item.color';
                ;
                $p += ($expr = '<%!$eu(item.color)%>', $eu(item.color)) + '&content=';
                $line = 15;
                $art = '=item.tag';
                ;
                $p += ($expr = '<%!$eu(item.tag)%>', $eu(item.tag)) + '"></span>';
                $line = 16;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 17;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 18;
        $art = 'if item.tips';
        ;
        $expr = '<%if (item.tips) {%>';
        if (item.tips) {
            ;
            $p += '<i class="mc-iconfont color-c" mx-view="mx-popover/index?width=280&content=';
            $line = 22;
            $art = '=item.tips';
            ;
            $p += ($expr = '<%!$eu(item.tips)%>', $eu(item.tips)) + '">&#xe7aa;</i>';
            $line = 23;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</a>';
        $line = 25;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<span class="_zs_gallery_mx-tabs_index_-underline" style="left: ';
    $line = 26;
    $art = '=left';
    ;
    $p += ($expr = '<%=left%>', $e(left)) + 'px; width: ';
    $line = 26;
    $art = '=width';
    ;
    $p += ($expr = '<%=width%>', $e(width)) + 'px;"></span></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tabs/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        that.updater.digest();
        that['@{sync.line}'](that['@{data.selected}']);
    },
    '@{sync.line}': function (hover) {
        var that = this;
        var type = that['@{display.type}'];
        if (type == 'border') {
            that['@{data.hover}'] = hover;
            var node = $('#' + that.id + '_' + hover);
            var nodeOffsetLeft = node.offset().left;
            var owner = that['@{owner.node}'];
            var ownerOffsetLeft = owner.offset().left;
            var left = nodeOffsetLeft - ownerOffsetLeft;
            var width = node.outerWidth();
            that.updater.digest({
                left: left,
                width: width
            });
        }
    },
    '@{over}<mouseover>': function (e) {
        var that = this;
        var value = e.params.value;
        that['@{sync.line}'](value);
    },
    '@{out}<mouseout>': function (e) {
        this['@{sync.line}'](this['@{data.selected}']);
    }
});

});