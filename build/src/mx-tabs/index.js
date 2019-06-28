/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/index",["magix","mx-tabs/base","mx-popover/index"],(require,exports,module)=>{
/*Magix,Base*/
require("mx-popover/index");
/**
 * 底边线tab切换
 * 兼容老的写法，type还是可配置，建议直接使用mx-tabs.box
 */
var Magix = require("magix");
var Base = require("mx-tabs/base");
Magix.applyStyle("_zs_gallery_mx-tabs_index_","[mx-view*=\"mx-tabs/box\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-tabs_index_-border {\n  position: relative;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item {\n  position: relative;\n  float: left;\n  padding: 10px 24px;\n  font-size: 16px;\n  line-height: var(--input-height);\n  transition: color var(--duration) ease-out;\n  color: #666;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item._zs_gallery_mx-tabs_index_-selected {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag {\n  margin-left: -24px;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-underline {\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -1px;\n  border-bottom: 2px solid var(--color-brand);\n  transition: width var(--duration) cubic-bezier(0.645, 0.045, 0.355, 1), left var(--duration) cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._zs_gallery_mx-tabs_index_-box {\n  position: relative;\n  display: inline-block;\n  height: var(--input-height);\n  vertical-align: middle;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-tip {\n  position: relative;\n  top: 1px;\n  font-size: 14px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  padding: 0 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:first-child {\n  border-top-left-radius: var(--border-radius);\n  border-bottom-left-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:last-child {\n  border-top-right-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  margin-left: -14px;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item {\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #999;\n  background-color: var(--color-disabled);\n  border-color: var(--color-border);\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  z-index: 2;\n  display: inline-block;\n  height: var(--input-height);\n  line-height: calc(var(--input-height) - 2px);\n  border-radius: var(--border-radius);\n  color: #666;\n  border: 1px solid transparent;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #333;\n  background-color: var(--color-brand-opacity);\n  border: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-tabs_index_-hollow-box::after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--border-highlight);\n}\n._zs_gallery_mx-tabs_index_-solid-box {\n  border: 1px solid var(--border-highlight);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item {\n  display: inline-block;\n  height: calc(var(--input-height) - 2px);\n  line-height: calc(var(--input-height) - 2px);\n  color: #999;\n  background-color: #fff;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n");
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
} ; var $g = '', $_temp, $p = '', type = $$.type, list = $$.list, selected = $$.selected, viewId = $$.viewId, spm = $$.spm, left = $$.left, width = $$.width, disabled = $$.disabled; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if type == \'border\'';
    ;
    $expr = '<%if (type == \'border\') {%>';
    if (type == 'border') {
        ;
        $p += '<div mxa="_zs_gallerye5:_" class="_zs_gallery_mx-tabs_index_-border clearfix">';
        $line = 3;
        $art = 'each list as item index';
        ;
        $expr = '<%for (var index = 0, $art_ciniblwxdu$art_c = list.length; index < $art_ciniblwxdu$art_c; index++) {        var item = list[index]%>';
        for (var index = 0, $art_ciniblwxdu$art_c = list.length; index < $art_ciniblwxdu$art_c; index++) {
            var item = list[index];
            $p += '<a class="_zs_gallery_mx-tabs_index_-border-item ';
            $line = 4;
            $art = '= (item.value == selected) ? \'selected\' : \'\'';
            ;
            $p += ($expr = '<%=(item.value == selected) ? \'_zs_gallery_mx-tabs_index_-selected\' : \'\'%>', $e((item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : '')) + '" href="javascript:;" id="';
            $line = 4;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
            $line = 4;
            $art = '=item.value';
            ;
            $p += ($expr = '<%=item.value%>', $e(item.value)) + '" mx-mouseover="' + $viewId + '@{over}({value:\'';
            $line = 5;
            $art = '=item.value';
            ;
            $p += ($expr = '<%=$eq(item.value)%>', $e($eq(item.value))) + '\'})" mx-mouseout="' + $viewId + '@{out}()" mx-click="' + $viewId + '@{select}({item:\'';
            $line = 7;
            $art = '@item';
            ;
            $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" ';
            $line = 8;
            $art = 'if spm';
            ;
            $expr = '<%if (spm) {%>';
            if (spm) {
                ;
                $p += ' data-spm-click="';
                $line = 8;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + '';
                $line = 8;
                $art = '=index';
                ;
                $p += ($expr = '<%=index%>', $e(index)) + '" ';
                $line = 8;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>';
            $line = 9;
            $art = '=item.text';
            ;
            $p += ($expr = '<%=item.text%>', $e(item.text)) + ' ';
            $line = 10;
            $art = 'if item.tag';
            ;
            $expr = '<%if (item.tag) {%>';
            if (item.tag) {
                ;
                $p += '<span class="mx-tag _zs_gallery_mx-tabs_index_-tag" style="background-color: ';
                $line = 11;
                $art = '=item.color';
                ;
                $p += ($expr = '<%=item.color%>', $e(item.color)) + ';"><span class="mx-tag-arrow" style="border-color: ';
                $line = 12;
                $art = '=item.color';
                ;
                $p += ($expr = '<%=item.color%>', $e(item.color)) + ' transparent transparent ';
                $line = 12;
                $art = '=item.color';
                ;
                $p += ($expr = '<%=item.color%>', $e(item.color)) + ';"></span><span mxa="_zs_gallerye5:a" class="mx-tag-name">';
                $line = 13;
                $art = '!item.tag';
                ;
                $p += ($expr = '<%!item.tag%>', $n(item.tag)) + '</span></span>';
                $line = 15;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 16;
            $art = 'if item.tips';
            ;
            $expr = '<%if (item.tips) {%>';
            if (item.tips) {
                ;
                $p += '<i class="mc-iconfont color-c" mx-view="mx-popover/index?width=280&content=';
                $line = 20;
                $art = '=item.tips';
                ;
                $p += ($expr = '<%!$eu(item.tips)%>', $eu(item.tips)) + '">&#xe7aa;</i>';
                $line = 21;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</a>';
            $line = 23;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<span class="_zs_gallery_mx-tabs_index_-underline" style="left: ';
        $line = 24;
        $art = '=left';
        ;
        $p += ($expr = '<%=left%>', $e(left)) + 'px; width: ';
        $line = 24;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px;"></span></div>';
        $line = 26;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div class="_zs_gallery_mx-tabs_index_-box ';
        $line = 27;
        $art = '= disabled ? \'box-disabled\' : \'\'';
        ;
        $p += ($expr = '<%=disabled ? \'_zs_gallery_mx-tabs_index_-box-disabled\' : \'\'%>', $e(disabled ? '_zs_gallery_mx-tabs_index_-box-disabled' : '')) + '">';
        $line = 28;
        $art = 'each list as item';
        ;
        $expr = '<%for (var $art_ilnas$art_i = 0, $art_caazzja$art_c = list.length; $art_ilnas$art_i < $art_caazzja$art_c; $art_ilnas$art_i++) {        var item = list[$art_ilnas$art_i]%>';
        for (var $art_ilnas$art_i = 0, $art_caazzja$art_c = list.length; $art_ilnas$art_i < $art_caazzja$art_c; $art_ilnas$art_i++) {
            var item = list[$art_ilnas$art_i];
            $p += '<a href="javascript:;" ';
            $line = 29;
            $art = 'if !disabled';
            ;
            $expr = '<%if (!disabled) {%>';
            if (!disabled) {
                ;
                $p += ' mx-click="' + $viewId + '@{select}({item:\'';
                $line = 29;
                $art = '@item';
                ;
                $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" ';
                $line = 29;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' class="_zs_gallery_mx-tabs_index_-box-item ';
            $line = 29;
            $art = '= (item.value == selected) ? \'selected\' : \'\'';
            ;
            $p += ($expr = '<%=(item.value == selected) ? \'_zs_gallery_mx-tabs_index_-selected\' : \'\'%>', $e((item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : '')) + '" ';
            $line = 30;
            $art = 'if spm';
            ;
            $expr = '<%if (spm) {%>';
            if (spm) {
                ;
                $p += ' data-spm-click="';
                $line = 30;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + '';
                $line = 30;
                $art = '=index';
                ;
                $p += ($expr = '<%=index%>', $e(index)) + '" ';
                $line = 30;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>';
            $line = 31;
            $art = '=item.text';
            ;
            $p += ($expr = '<%=item.text%>', $e(item.text)) + ' ';
            $line = 32;
            $art = 'if item.tag';
            ;
            $expr = '<%if (item.tag) {%>';
            if (item.tag) {
                ;
                $p += '<span mxa="_zs_gallerye5:b" class="_zs_gallery_mx-tabs_index_-tag">';
                $line = 33;
                $art = '=item.tag';
                ;
                $p += ($expr = '<%=item.tag%>', $e(item.tag)) + '</span>';
                $line = 34;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</a>';
            $line = 36;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 38;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
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