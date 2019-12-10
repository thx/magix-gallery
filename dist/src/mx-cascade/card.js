/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/card",["magix","$","./index","../mx-tree/util","../mx-medusa/util"],(require,exports,module)=>{
/*magix_1,$,index_1,Util,I18n*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var $ = require("$");
var index_1 = require("./index");
var Util = require("../mx-tree/util");
var I18n = require("../mx-medusa/util");
var Vframe = magix_1["default"].Vframe;
magix_1["default"].applyStyle("_zs_gallery_mx-cascade_card_","[mx-view*=\"mx-cascade/card\"] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n._zs_gallery_mx-cascade_card_-line {\n  position: relative;\n  padding-right: var(--input-height);\n  -webkit-transition: background-color var(--duration), color var(--duration);\n  transition: background-color var(--duration), color var(--duration);\n  cursor: pointer;\n}\n._zs_gallery_mx-cascade_card_-line ._zs_gallery_mx-cascade_card_-text {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-cascade_card_-line ._zs_gallery_mx-cascade_card_-arrow {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: var(--input-height);\n  height: var(--input-height);\n  margin-top: calc(0px - var(--input-height) / 2);\n  font-size: 30px;\n  color: #999;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n._zs_gallery_mx-cascade_card_-line._zs_gallery_mx-cascade_card_-hover {\n  background-color: #f5f5f6;\n}\n._zs_gallery_mx-cascade_card_-line._zs_gallery_mx-cascade_card_-cur {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-cascade_card_-line._zs_gallery_mx-cascade_card_-cur._zs_gallery_mx-cascade_card_-hover {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-cascade_card_-group {\n  float: left;\n  display: inline-block;\n  min-width: 100px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  vertical-align: top;\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-cascade_card_-others {\n  padding: 8px;\n}\n._zs_gallery_mx-cascade_card_-others ._zs_gallery_mx-cascade_card_-line {\n  height: var(--input-height);\n  padding-left: 16px;\n  line-height: var(--input-height);\n  border-radius: var(--border-radius);\n  margin-bottom: 4px;\n}\n._zs_gallery_mx-cascade_card_-others ._zs_gallery_mx-cascade_card_-line:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-header {\n  padding: 0 24px;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-header ._zs_gallery_mx-cascade_card_-title {\n  font-size: 16px;\n  margin-right: 16px;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-header ._zs_gallery_mx-cascade_card_-tip {\n  color: #999;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-body {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-body ._zs_gallery_mx-cascade_card_-line {\n  display: table;\n  width: 100%;\n  height: 76px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 76px;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-body ._zs_gallery_mx-cascade_card_-line ._zs_gallery_mx-cascade_card_-img {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: #fff;\n  overflow: hidden;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-body ._zs_gallery_mx-cascade_card_-line ._zs_gallery_mx-cascade_card_-img img {\n  width: 100%;\n  height: 100%;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-body ._zs_gallery_mx-cascade_card_-line ._zs_gallery_mx-cascade_card_-cont {\n  display: table-cell;\n  vertical-align: middle;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-body ._zs_gallery_mx-cascade_card_-line ._zs_gallery_mx-cascade_card_-cont ._zs_gallery_mx-cascade_card_-tip {\n  margin-top: 5px;\n  color: #999;\n}\n._zs_gallery_mx-cascade_card_-first ._zs_gallery_mx-cascade_card_-body ._zs_gallery_mx-cascade_card_-line._zs_gallery_mx-cascade_card_-cur ._zs_gallery_mx-cascade_card_-tip {\n  color: #333;\n}\n");
exports["default"] = index_1["default"].extend({
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
} ; var $g = '', $_temp, $p = '', groups = $$.groups, viewId = $$.viewId, width = $$.width, title = $$.title, tip = $$.tip, height = $$.height, imgKey = $$.imgKey, textKey = $$.textKey, tipKey = $$.tipKey; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryak:_" class="clearfix" mx-mouseout="' + $viewId + 'out()">';
    $line = 3;
    $art = 'each groups as list gIndex';
    ;
    $expr = '<%for (var gIndex = 0, $art_csnhpkrt$art_c = groups.length; gIndex < $art_csnhpkrt$art_c; gIndex++) {    var list = groups[gIndex]%>';
    for (var gIndex = 0, $art_csnhpkrt$art_c = groups.length; gIndex < $art_csnhpkrt$art_c; gIndex++) {
        var list = groups[gIndex];
        $p += ' ';
        $line = 4;
        $art = 'if (gIndex == 0)';
        ;
        $expr = '<%if (gIndex == 0) {%>';
        if (gIndex == 0) {
            ;
            $p += '<div class="mx-shadow _zs_gallery_mx-cascade_card_-group _zs_gallery_mx-cascade_card_-first" id="';
            $line = 5;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_g_';
            $line = 5;
            $art = '=gIndex';
            ;
            $p += ($expr = '<%=gIndex%>', $e(gIndex)) + '" style="width: ';
            $line = 6;
            $art = '=width';
            ;
            $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div mxa="_zs_galleryak:a" class="clearfix" style="padding: 10px 24px;border-bottom: 1px solid var(--color-border)"><div mxa="_zs_galleryak:b" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryak:c" class="grid-title" style="margin-right: 16px;">';
            $line = 7;
            $art = '=title';
            ;
            $p += ($expr = '<%=title%>', $e(title)) + '</span><span mxa="_zs_galleryak:d" style="margin-right: 16px; color: #999;">';
            $line = 7;
            $art = '=tip';
            ;
            $p += ($expr = '<%=tip%>', $e(tip)) + '</span></div></div><div class="_zs_gallery_mx-cascade_card_-body" style="height: ';
            $line = 8;
            $art = '=(height - 55)';
            ;
            $p += ($expr = '<%=(height - 55)%>', $e((height - 55))) + 'px;">';
            $line = 9;
            $art = 'each list as item iIndex';
            ;
            $expr = '<%for (var iIndex = 0, $art_cfrrobp$art_c = list.length; iIndex < $art_cfrrobp$art_c; iIndex++) {            var item = list[iIndex]%>';
            for (var iIndex = 0, $art_cfrrobp$art_c = list.length; iIndex < $art_cfrrobp$art_c; iIndex++) {
                var item = list[iIndex];
                $p += '<div class="_zs_gallery_mx-cascade_card_-line ';
                $line = 10;
                $art = 'if item.cur';
                ;
                $expr = '<%if (item.cur) {%>';
                if (item.cur) {
                    ;
                    $p += ' _zs_gallery_mx-cascade_card_-cur ';
                    $line = 10;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 10;
                $art = 'if item.hover';
                ;
                $expr = '<%if (item.hover) {%>';
                if (item.hover) {
                    ;
                    $p += ' _zs_gallery_mx-cascade_card_-hover ';
                    $line = 10;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" mx-click="' + $viewId + '@{select}({gIndex:';
                $line = 11;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 11;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})" mx-mouseover="' + $viewId + '@{select}({gIndex:';
                $line = 12;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 12;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})"><div mxa="_zs_galleryak:e" class="_zs_gallery_mx-cascade_card_-img"><img src="';
                $line = 13;
                $art = '=item[imgKey]';
                ;
                $p += ($expr = '<%=item[imgKey]%>', $e(item[imgKey])) + '"/></div><div mxa="_zs_galleryak:f" class="_zs_gallery_mx-cascade_card_-cont"><div mxa="_zs_galleryak:g" class="_zs_gallery_mx-cascade_card_-text">';
                $line = 15;
                $art = '=item[textKey]';
                ;
                $p += ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</div><div mxa="_zs_galleryak:h" class="_zs_gallery_mx-cascade_card_-tip">';
                $line = 16;
                $art = '=item[tipKey]';
                ;
                $p += ($expr = '<%=item[tipKey]%>', $e(item[tipKey])) + '</div></div>';
                $line = 18;
                $art = 'if (item.children && item.children.length)';
                ;
                $expr = '<%if (item.children && item.children.length) {%>';
                if (item.children && item.children.length) {
                    ;
                    $p += '<span mxs="_zs_galleryak:_" class="mc-iconfont _zs_gallery_mx-cascade_card_-arrow">&#xe692;</span>';
                    $line = 20;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 22;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div></div>';
            $line = 25;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<div class="mx-shadow _zs_gallery_mx-cascade_card_-group _zs_gallery_mx-cascade_card_-others" id="';
            $line = 26;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_g_';
            $line = 26;
            $art = '=gIndex';
            ;
            $p += ($expr = '<%=gIndex%>', $e(gIndex)) + '" style="width: ';
            $line = 27;
            $art = '=width';
            ;
            $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
            $line = 27;
            $art = '=height';
            ;
            $p += ($expr = '<%=height%>', $e(height)) + 'px;">';
            $line = 28;
            $art = 'each list as item iIndex';
            ;
            $expr = '<%for (var iIndex = 0, $art_cwfqzoy$art_c = list.length; iIndex < $art_cwfqzoy$art_c; iIndex++) {            var item = list[iIndex]%>';
            for (var iIndex = 0, $art_cwfqzoy$art_c = list.length; iIndex < $art_cwfqzoy$art_c; iIndex++) {
                var item = list[iIndex];
                $p += '<div class="_zs_gallery_mx-cascade_card_-line ';
                $line = 29;
                $art = 'if item.cur';
                ;
                $expr = '<%if (item.cur) {%>';
                if (item.cur) {
                    ;
                    $p += ' _zs_gallery_mx-cascade_card_-cur ';
                    $line = 29;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 29;
                $art = 'if item.hover';
                ;
                $expr = '<%if (item.hover) {%>';
                if (item.hover) {
                    ;
                    $p += ' _zs_gallery_mx-cascade_card_-hover ';
                    $line = 29;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" mx-click="' + $viewId + '@{select}({gIndex:';
                $line = 30;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 30;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})" mx-mouseover="' + $viewId + '@{select}({gIndex:';
                $line = 31;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 31;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})"><span mxa="_zs_galleryak:i" class="_zs_gallery_mx-cascade_card_-text">';
                $line = 32;
                $art = '=item[textKey]';
                ;
                $p += ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</span>';
                $line = 33;
                $art = 'if (item.children && item.children.length)';
                ;
                $expr = '<%if (item.children && item.children.length) {%>';
                if (item.children && item.children.length) {
                    ;
                    $p += '<span mxs="_zs_galleryak:_" class="mc-iconfont _zs_gallery_mx-cascade_card_-arrow">&#xe692;</span>';
                    $line = 35;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 37;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 39;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 40;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-cascade/card.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var valueKey = extra.valueKey || 'value';
        var textKey = extra.textKey || 'text';
        var parentKey = extra.parentKey || 'pValue';
        var imgKey = extra.imgKey || 'img';
        var tipKey = extra.tipKey || 'tip';
        var info = Util.listToTree(extra.list, valueKey, parentKey);
        var map = info.map, list = info.list;
        that.updater.set({
            placeholder: that.placeholder || I18n['choose'],
            valueKey: valueKey,
            textKey: textKey,
            parentKey: parentKey,
            imgKey: imgKey,
            tipKey: tipKey,
            map: map,
            list: list,
            title: extra.headerTitle || '标题',
            tip: extra.headerTip || '',
            width: extra.width || 280,
            height: extra.height || 360,
            triggerType: 'hover' //复用index的逻辑
        });
        //复用index的逻辑
        that['@{output.animation.end}'] = true;
        // 完整的选择结果
        var selectedValue = extra.selected || '';
        var data = that['@{get}'](selectedValue);
        that.updater.set({
            groups: [data.groups[0]],
            selectedTexts: data.selectedTexts,
            selectedValues: data.selectedValues,
            selectedValue: selectedValue
        });
        that['@{owner.node}'] = $('#' + that.id);
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        var that = this;
        that.updater.digest();
        // 双向绑定
        var selectedValue = that.updater.get().selectedValue;
        that['@{owner.node}'].val(selectedValue);
        // 恢复到初始态
        that['@{owner.node}'].hover(function () {
            clearTimeout(that['@{hide.timer}']);
        }, function () {
            clearTimeout(that['@{hide.timer}']);
            that['@{hide.timer}'] = setTimeout(function () {
                that['@{hide}']();
            }, 300);
        });
    },
    '@{hide}': function (e) {
        var groups = this.updater.get().groups;
        // 卡片只保留第一组
        groups[0].forEach(function (i) {
            i.hover = false;
        });
        this.updater.digest({
            groups: [groups[0]]
        });
    }
});

});