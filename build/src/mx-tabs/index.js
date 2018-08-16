/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/index",["magix","mx-tabs/base"],(require,exports,module)=>{
/*Magix,Base*/

/**
 * 底边线tab切换
 * 兼容老的写法，type还是可配置，建议直接使用mx-tabs.box
 */
var Magix = require("magix");
var Base = require("mx-tabs/base");
Magix.applyStyle("_zs_gallery_mx-tabs_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-tabs_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-tabs_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-tabs/box\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-tabs_index_-tag {\n  display: inline-block;\n  height: 18px;\n  padding-left: 4px;\n  padding-right: 4px;\n  line-height: 16px;\n  border-radius: 4px;\n  background-color: #4d7fff;\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n._zs_gallery_mx-tabs_index_-border {\n  position: relative;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item {\n  position: relative;\n  float: left;\n  font-size: 16px;\n  padding: 10px 25px 20px 25px;\n  transition: color 0.25s ease-out;\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item._zs_gallery_mx-tabs_index_-selected {\n  color: #4d7fff;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag {\n  position: absolute;\n  top: -4px;\n  left: 100%;\n  margin-left: -26px;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag ._zs_gallery_mx-tabs_index_-tag-name {\n  display: inline-block;\n  -webkit-transform: scale(0.92);\n          transform: scale(0.92);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag ._zs_gallery_mx-tabs_index_-tag-arrow {\n  position: absolute;\n  left: 4px;\n  top: 18px;\n  width: 0;\n  height: 0;\n  border-width: 3px;\n  border-style: solid;\n  border-color: #4d7fff #ffffff #ffffff #4d7fff;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-underline {\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  border-bottom: 1px solid #4d7fff;\n  transition: width 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._zs_gallery_mx-tabs_index_-box {\n  display: inline-block;\n  height: 32px;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  background-color: #fff;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  cursor: pointer;\n  text-align: center;\n  padding: 0 12px;\n  transition: color 0.25s ease-out, background-color 0.25s ease-out;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:first-child {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item {\n  cursor: not-allowed;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #999;\n  background-color: #eee;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  background-color: #ccc;\n}\n");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, type = $$.type, list = $$.list, selected = $$.selected, viewId = $$.viewId, left = $$.left, width = $$.width, disabled = $$.disabled; var $expr, $art, $line; try {
    $p += '';
    $line = 1;
    $art = 'if type == \'border\'';
    ;
    $p += '';
    $expr = '<%if(type==\'border\'){%>';
    if (type == 'border') {
        ;
        $p += '<div mxa="_zs_gallerycl:_" class="_zs_gallery_mx-tabs_index_-border clearfix">';
        $line = 3;
        $art = 'each list as item';
        ;
        $p += '';
        $expr = '<%for(var $art_ixlqgdkbbjq$art_i=0;$art_ixlqgdkbbjq$art_i<list.length;$art_ixlqgdkbbjq$art_i++){var item=list[$art_ixlqgdkbbjq$art_i]%>';
        for (var $art_ixlqgdkbbjq$art_i = 0; $art_ixlqgdkbbjq$art_i < list.length; $art_ixlqgdkbbjq$art_i++) {
            var item = list[$art_ixlqgdkbbjq$art_i];
            $p += '<a mx-mouseover="' + $viewId + '@{over}({value:\'';
            $line = 4;
            $art = '=item.value';
            ;
            $p += '' + ($expr = '<%=$eq(item.value)%>', $e($eq(item.value))) + '\'})" mx-mouseout="' + $viewId + '@{out}()" class="_zs_gallery_mx-tabs_index_-border-item ';
            $line = 4;
            $art = '= (item.value == selected) ? \'selected\' : \'\'';
            ;
            $p += '' + ($expr = '<%=(item.value==selected)?\'_zs_gallery_mx-tabs_index_-selected\':\'\'%>', $e((item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : '')) + '" mx-click="' + $viewId + '@{select}({item:\'';
            $line = 4;
            $art = '@item';
            ;
            $p += '' + ($expr = '<%@item%>', $i(item)) + '\'})" href="javascript:;" id="';
            $line = 4;
            $art = '=viewId';
            ;
            $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_';
            $line = 4;
            $art = '=item.value';
            ;
            $p += '' + ($expr = '<%=item.value%>', $e(item.value)) + '">';
            $line = 5;
            $art = '=item.text';
            ;
            $p += '' + ($expr = '<%=item.text%>', $e(item.text)) + ' ';
            $line = 6;
            $art = 'if item.tag';
            ;
            $p += '';
            $expr = '<%if(item.tag){%>';
            if (item.tag) {
                ;
                $p += '<span mxa="_zs_gallerycl:a" class="_zs_gallery_mx-tabs_index_-tag"><span mxs="_zs_gallerycl:_" class="_zs_gallery_mx-tabs_index_-tag-arrow"></span><span mxa="_zs_gallerycl:b" class="_zs_gallery_mx-tabs_index_-tag-name">';
                $line = 9;
                $art = '=item.tag';
                ;
                $p += '' + ($expr = '<%=item.tag%>', $e(item.tag)) + '</span></span>';
                $line = 11;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += '</a>';
            $line = 13;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '<span class="_zs_gallery_mx-tabs_index_-underline" style="left: ';
        $line = 14;
        $art = '=left';
        ;
        $p += '' + ($expr = '<%=left%>', $e(left)) + 'px; width: ';
        $line = 14;
        $art = '=width';
        ;
        $p += '' + ($expr = '<%=width%>', $e(width)) + 'px;"></span></div>';
        $line = 16;
        $art = 'else';
        ;
        $p += '';
        $expr = '<%}else{%>';
    }
    else {
        ;
        $p += '<div class="_zs_gallery_mx-tabs_index_-box ';
        $line = 17;
        $art = '= _zs_gallery_mx-tabs_index_-disabled ? \'disabled\' : \'\'';
        ;
        $p += '' + ($expr = '<%=disabled?\'_zs_gallery_mx-tabs_index_-disabled\':\'\'%>', $e(disabled ? '_zs_gallery_mx-tabs_index_-disabled' : '')) + '">';
        $line = 18;
        $art = 'each list as item';
        ;
        $p += '';
        $expr = '<%for(var $art_imtezhmxe$art_i=0;$art_imtezhmxe$art_i<list.length;$art_imtezhmxe$art_i++){var item=list[$art_imtezhmxe$art_i]%>';
        for (var $art_imtezhmxe$art_i = 0; $art_imtezhmxe$art_i < list.length; $art_imtezhmxe$art_i++) {
            var item = list[$art_imtezhmxe$art_i];
            $p += '<a href="javascript:;" ';
            $line = 19;
            $art = 'if !disabled';
            ;
            $p += '';
            $expr = '<%if(!disabled){%>';
            if (!disabled) {
                ;
                $p += ' mx-click="' + $viewId + '@{select}({item:\'';
                $line = 19;
                $art = '@item';
                ;
                $p += '' + ($expr = '<%@item%>', $i(item)) + '\'})" ';
                $line = 19;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += ' class="_zs_gallery_mx-tabs_index_-box-item ';
            $line = 19;
            $art = '= (item.value == selected) ? \'selected\' : \'\'';
            ;
            $p += '' + ($expr = '<%=(item.value==selected)?\'_zs_gallery_mx-tabs_index_-selected\':\'\'%>', $e((item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : '')) + '">';
            $line = 20;
            $art = '=item.text';
            ;
            $p += '' + ($expr = '<%=item.text%>', $e(item.text)) + ' ';
            $line = 21;
            $art = 'if item.tag';
            ;
            $p += '';
            $expr = '<%if(item.tag){%>';
            if (item.tag) {
                ;
                $p += '<span mxa="_zs_gallerycl:c" class="_zs_gallery_mx-tabs_index_-tag">';
                $line = 22;
                $art = '=item.tag';
                ;
                $p += '' + ($expr = '<%=item.tag%>', $e(item.tag)) + '</span>';
                $line = 23;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += '</a>';
            $line = 25;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 27;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '';
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