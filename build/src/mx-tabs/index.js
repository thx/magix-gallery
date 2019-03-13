/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_gallery_mx-tabs_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-tabs_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-tabs/box\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-tabs_index_-tag {\n  display: inline-block;\n  height: 18px;\n  padding-left: 4px;\n  padding-right: 4px;\n  line-height: 18px;\n  border-radius: 4px;\n  background-color: #4d7fff;\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n._zs_gallery_mx-tabs_index_-border {\n  position: relative;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item {\n  position: relative;\n  float: left;\n  height: 52px;\n  padding: 10px 24px;\n  font-size: 16px;\n  line-height: 32px;\n  transition: color 0.25s ease-out;\n  color: #666;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item._zs_gallery_mx-tabs_index_-selected {\n  color: #4d7fff;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag {\n  position: absolute;\n  top: -4px;\n  left: 100%;\n  margin-left: -26px;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag ._zs_gallery_mx-tabs_index_-tag-name {\n  display: inline-block;\n  -webkit-transform: scale(0.92);\n          transform: scale(0.92);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag ._zs_gallery_mx-tabs_index_-tag-arrow {\n  position: absolute;\n  left: 4px;\n  top: 18px;\n  width: 0;\n  height: 0;\n  border-width: 3px;\n  border-style: solid;\n  border-color: #4d7fff #ffffff #ffffff #4d7fff;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-underline {\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -1px;\n  border-bottom: 2px solid #4d7fff;\n  transition: width 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-tip {\n  position: relative;\n  top: 1px;\n  font-size: 14px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item {\n  cursor: pointer;\n  text-align: center;\n  padding: 0 12px;\n  transition: all 0.25s ease-out;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:first-child {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item {\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #999;\n  background-color: #eee;\n  border-color: #e6e6e6;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  background-color: #ccc;\n}\n._zs_gallery_mx-tabs_index_-hollow-box {\n  position: relative;\n  display: inline-block;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  z-index: 2;\n  display: inline-block;\n  height: 32px;\n  line-height: 30px;\n  border-radius: 4px;\n  color: #666;\n  border: 1px solid transparent;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #333;\n  background-color: #f6f9ff;\n  border: 1px solid #4d7fff;\n}\n._zs_gallery_mx-tabs_index_-hollow-box::after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-tabs_index_-solid-box {\n  display: inline-block;\n  height: 32px;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  background-color: #fff;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n");
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
        $p += '<div mxa="_zs_galleryeq:_" class="_zs_gallery_mx-tabs_index_-border clearfix">';
        $line = 3;
        $art = 'each list as item index';
        ;
        $expr = '<%for (var index = 0, $art_chpnuopv$art_c = list.length; index < $art_chpnuopv$art_c; index++) {        var item = list[index]%>';
        for (var index = 0, $art_chpnuopv$art_c = list.length; index < $art_chpnuopv$art_c; index++) {
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
                $p += '<span mxa="_zs_galleryeq:a" class="_zs_gallery_mx-tabs_index_-tag"><span mxs="_zs_galleryeq:_" class="_zs_gallery_mx-tabs_index_-tag-arrow"></span><span mxa="_zs_galleryeq:b" class="_zs_gallery_mx-tabs_index_-tag-name">';
                $line = 13;
                $art = '=item.tag';
                ;
                $p += ($expr = '<%=item.tag%>', $e(item.tag)) + '</span></span>';
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
                $p += '<i class="mc-iconfont color-c" mx-view="mx-popover/index?content=';
                $line = 19;
                $art = '=item.tips';
                ;
                $p += ($expr = '<%!$eu(item.tips)%>', $eu(item.tips)) + '">&#xe7aa;</i>';
                $line = 20;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</a>';
            $line = 22;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<span class="_zs_gallery_mx-tabs_index_-underline" style="left: ';
        $line = 23;
        $art = '=left';
        ;
        $p += ($expr = '<%=left%>', $e(left)) + 'px; width: ';
        $line = 23;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px;"></span></div>';
        $line = 25;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div class="_zs_gallery_mx-tabs_index_-box ';
        $line = 26;
        $art = '= _zs_gallery_mx-tabs_index_-disabled ? \'disabled\' : \'\'';
        ;
        $p += ($expr = '<%=disabled ? \'_zs_gallery_mx-tabs_index_-disabled\' : \'\'%>', $e(disabled ? '_zs_gallery_mx-tabs_index_-disabled' : '')) + '">';
        $line = 27;
        $art = 'each list as item';
        ;
        $expr = '<%for (var $art_ibrgpeyfku$art_i = 0, $art_cycojfpsk$art_c = list.length; $art_ibrgpeyfku$art_i < $art_cycojfpsk$art_c; $art_ibrgpeyfku$art_i++) {        var item = list[$art_ibrgpeyfku$art_i]%>';
        for (var $art_ibrgpeyfku$art_i = 0, $art_cycojfpsk$art_c = list.length; $art_ibrgpeyfku$art_i < $art_cycojfpsk$art_c; $art_ibrgpeyfku$art_i++) {
            var item = list[$art_ibrgpeyfku$art_i];
            $p += '<a href="javascript:;" ';
            $line = 28;
            $art = 'if !disabled';
            ;
            $expr = '<%if (!disabled) {%>';
            if (!disabled) {
                ;
                $p += ' mx-click="' + $viewId + '@{select}({item:\'';
                $line = 28;
                $art = '@item';
                ;
                $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" ';
                $line = 28;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' class="_zs_gallery_mx-tabs_index_-box-item ';
            $line = 28;
            $art = '= (item.value == selected) ? \'selected\' : \'\'';
            ;
            $p += ($expr = '<%=(item.value == selected) ? \'_zs_gallery_mx-tabs_index_-selected\' : \'\'%>', $e((item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : '')) + '" ';
            $line = 29;
            $art = 'if spm';
            ;
            $expr = '<%if (spm) {%>';
            if (spm) {
                ;
                $p += ' data-spm-click="';
                $line = 29;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + '';
                $line = 29;
                $art = '=index';
                ;
                $p += ($expr = '<%=index%>', $e(index)) + '" ';
                $line = 29;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>';
            $line = 30;
            $art = '=item.text';
            ;
            $p += ($expr = '<%=item.text%>', $e(item.text)) + ' ';
            $line = 31;
            $art = 'if item.tag';
            ;
            $expr = '<%if (item.tag) {%>';
            if (item.tag) {
                ;
                $p += '<span mxa="_zs_galleryeq:c" class="_zs_gallery_mx-tabs_index_-tag">';
                $line = 32;
                $art = '=item.tag';
                ;
                $p += ($expr = '<%=item.tag%>', $e(item.tag)) + '</span>';
                $line = 33;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</a>';
            $line = 35;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 37;
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