/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/index",["magix","$","../mx-util/view","../mx-tree/util","../mx-medusa/util","../mx-util/monitor"],(require,exports,module)=>{
/*magix_1,$,View,Util,I18n,Monitor*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var $ = require("$");
var View = require("../mx-util/view");
var Util = require("../mx-tree/util");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-util/monitor");
var Vframe = magix_1["default"].Vframe;
magix_1["default"].applyStyle("_zs_gallery_mx-cascade_index_","._zs_gallery_mx-cascade_index_-cascade-list {\n  width: auto;\n  min-width: 0;\n  max-width: none;\n  white-space: nowrap;\n}\n._zs_gallery_mx-cascade_index_-group {\n  display: inline-block;\n  min-width: 100px;\n  height: calc(var(--input-small-height) * 6);\n  overflow-y: auto;\n  overflow-x: hidden;\n  vertical-align: top;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_mx-cascade_index_-group:first-child {\n  border-left: 0 none;\n}\n._zs_gallery_mx-cascade_index_-line {\n  position: relative;\n  height: var(--input-small-height);\n  padding-right: var(--input-small-height);\n  padding-left: 10px;\n  line-height: var(--input-small-height);\n  -webkit-transition: background-color var(--duration), color var(--duration);\n  transition: background-color var(--duration), color var(--duration);\n  cursor: pointer;\n}\n._zs_gallery_mx-cascade_index_-line ._zs_gallery_mx-cascade_index_-line-text {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-cascade_index_-line ._zs_gallery_mx-cascade_index_-line-arrow {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 24px;\n  line-height: var(--input-small-height);\n  color: #999;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-cur {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-cur._zs_gallery_mx-cascade_index_-hover {\n  background-color: var(--color-brand-opacity);\n}\n");
exports["default"] = View.extend({
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, disabled = $$.disabled, name = $$.name, selectedText = $$.selectedText, groups = $$.groups, viewId = $$.viewId, textKey = $$.textKey; var $expr, $art, $line; try {
    $p += '<div class="mx-trigger ';
    $line = 1;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' mx-trigger-open ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 2;
    $art = 'if !disabled';
    ;
    $expr = '<%if (!disabled) {%>';
    if (!disabled) {
        ;
        $p += ' mx-click="' + $viewId + '@{show}()" ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '><span mxa="_zs_galleryat:_" class="mx-trigger-label">';
    $line = 3;
    $art = 'if name';
    ;
    $expr = '<%if (name) {%>';
    if (name) {
        ;
        $line = 3;
        $art = '=name';
        ;
        $p += ($expr = '<%=name%>', $e(name)) + '：';
        $line = 3;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $line = 3;
    $art = '=selectedText';
    ;
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_galleryat:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div>';
    $line = 6;
    $art = 'if !disabled';
    ;
    $expr = '<%if (!disabled) {%>';
    if (!disabled) {
        ;
        $p += '<div class="mx-output mx-output-bottom ';
        $line = 7;
        $art = 'if expand';
        ;
        $expr = '<%if (expand) {%>';
        if (expand) {
            ;
            $p += ' mx-output-open ';
            $line = 7;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' clearfix _zs_gallery_mx-cascade_index_-cascade-list">';
        $line = 8;
        $art = 'each groups as list gIndex';
        ;
        $expr = '<%for (var gIndex = 0, $art_cxwpxit$art_c = groups.length; gIndex < $art_cxwpxit$art_c; gIndex++) {        var list = groups[gIndex]%>';
        for (var gIndex = 0, $art_cxwpxit$art_c = groups.length; gIndex < $art_cxwpxit$art_c; gIndex++) {
            var list = groups[gIndex];
            $p += '<div class="_zs_gallery_mx-cascade_index_-group" id="';
            $line = 9;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_g_';
            $line = 9;
            $art = '=gIndex';
            ;
            $p += ($expr = '<%=gIndex%>', $e(gIndex)) + '">';
            $line = 10;
            $art = 'each list as item iIndex';
            ;
            $expr = '<%for (var iIndex = 0, $art_cjnoulxt$art_c = list.length; iIndex < $art_cjnoulxt$art_c; iIndex++) {            var item = list[iIndex]%>';
            for (var iIndex = 0, $art_cjnoulxt$art_c = list.length; iIndex < $art_cjnoulxt$art_c; iIndex++) {
                var item = list[iIndex];
                $p += '<div class="_zs_gallery_mx-cascade_index_-line ';
                $line = 11;
                $art = 'if item.cur';
                ;
                $expr = '<%if (item.cur) {%>';
                if (item.cur) {
                    ;
                    $p += ' _zs_gallery_mx-cascade_index_-cur ';
                    $line = 11;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 11;
                $art = 'if item.hover';
                ;
                $expr = '<%if (item.hover) {%>';
                if (item.hover) {
                    ;
                    $p += ' _zs_gallery_mx-cascade_index_-hover ';
                    $line = 11;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" mx-click="' + $viewId + '@{select}({gIndex:';
                $line = 12;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 12;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})" mx-mouseover="' + $viewId + '@{select}({gIndex:';
                $line = 13;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 13;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})"><span mxa="_zs_galleryat:a" class="_zs_gallery_mx-cascade_index_-line-text">';
                $line = 14;
                $art = '=item[textKey]';
                ;
                $p += ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</span>';
                $line = 15;
                $art = 'if (item.children && item.children.length)';
                ;
                $expr = '<%if (item.children && item.children.length) {%>';
                if (item.children && item.children.length) {
                    ;
                    $p += '<span mxs="_zs_galleryat:a" class="mc-iconfont _zs_gallery_mx-cascade_index_-line-arrow">&#xe692;</span>';
                    $line = 17;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 19;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 21;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 23;
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
    msg += $expr + '\r\n\tat file:mx-cascade/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var _this = this;
        this.updater.snapshot();
        this.assign(extra);
        Monitor['@{setup}']();
        this.on('destroy', function () {
            Monitor['@{remove}'](_this);
            Monitor['@{teardown}']();
        });
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var valueKey = extra.valueKey || 'value';
        var textKey = extra.textKey || 'text';
        var parentKey = extra.parentKey || 'pValue';
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        var disabled = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');
        // 点击展现或者hover展示
        // click
        // hover
        var triggerType = extra.triggerType || 'click';
        var info = Util.listToTree(extra.list, valueKey, parentKey);
        var map = info.map, list = info.list;
        that.updater.set({
            disabled: disabled,
            placeholder: that.placeholder || I18n['choose'],
            valueKey: valueKey,
            textKey: textKey,
            parentKey: parentKey,
            map: map,
            list: list,
            expand: false,
            triggerType: triggerType
        });
        // 选择结果
        var selectedValue = extra.selected || '';
        var data = that['@{get}'](selectedValue);
        data.selectedValue = selectedValue;
        data.selectedText = data.selectedTexts.join('/'); // 拼接选择的文案
        that.updater.set(data);
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
        this.updater.digest();
        // 双向绑定
        var selectedValue = this.updater.get().selectedValue;
        this['@{owner.node}'] = $('#' + this.id);
        this['@{owner.node}'].val(selectedValue);
    },
    '@{get}': function (selectedValue) {
        var _a = this.updater.get(), valueKey = _a.valueKey, textKey = _a.textKey, parentKey = _a.parentKey, placeholder = _a.placeholder, map = _a.map, list = _a.list;
        var selectedTexts = [], selectedValues = [], groups = [];
        if (!selectedValue || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedTexts = [placeholder];
            // 恢复默认态
            var _loop_1 = function (item) {
                item.cur = false;
                item.hover = false;
                if (item.children && item.children.length) {
                    item.children.forEach(function (child) {
                        _loop_1(child);
                    });
                }
            };
            list.forEach(function (item) {
                _loop_1(item);
            });
            groups = [list];
        }
        else {
            // 已选中
            var _loop_2 = function (v) {
                var i = map[v];
                selectedTexts.unshift(i[textKey]);
                selectedValues.unshift(i[valueKey] + '');
                if (!i[parentKey]) {
                    // 根节点
                    list.forEach(function (s) {
                        s.cur = false;
                        s.hover = false;
                    });
                    i.cur = true;
                    groups.unshift(list);
                }
                else {
                    var siblings = map[i[parentKey]].children;
                    siblings.forEach(function (s) {
                        s.cur = false;
                        s.hover = false;
                    });
                    i.cur = true;
                    groups.unshift(siblings);
                    _loop_2(i[parentKey]);
                }
            };
            _loop_2(selectedValue);
        }
        return {
            groups: groups,
            selectedTexts: selectedTexts,
            selectedValues: selectedValues
        };
    },
    '@{inside}': function (node) {
        return magix_1["default"].inside(node, this.id);
    },
    '@{hide}': function (e) {
        var expand = this.updater.get().expand;
        if (expand) {
            this.updater.digest({
                expand: false
            });
            this['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](this);
        }
    },
    '@{show}<click>': function (e) {
        var that = this;
        var _a = that.updater.get(), expand = _a.expand, selectedValue = _a.selectedValue;
        if (!expand) {
            // 重新获取数据，可能是切换之后未选择直接失去焦点了
            var data = that['@{get}'](selectedValue);
            data.expand = true;
            that.updater.digest(data);
            that['@{owner.node}'].trigger('focusin');
            Monitor['@{add}'](that);
            // output动画结束
            that['@{output.animation.end}'] = false;
            var output = document.querySelector("#" + that.id + " .mx-output");
            output.addEventListener('animationend', function (e) {
                that['@{output.animation.end}'] = true;
            }, false);
        }
    },
    /**
     * trigger-type说明
     * 1. hover类型：hover展示
     *      叶子节点：需要点击事件，选中叶子节点
     *      非叶子：不需要点击事件
     * 2. click类型：点击展示
     *      叶子节点：选中叶子节点
     *      非叶子：展开子项
     */
    '@{select}<mouseover>': function (e) {
        if (magix_1["default"].inside(e.relatedTarget, e.eventTarget)) {
            return;
        }
        var that = this;
        if (!that['@{output.animation.end}']) {
            // 判断动画是否结束
            return;
        }
        clearTimeout(that['@{delay.hover.timer}']);
        that['@{delay.hover.timer}'] = setTimeout(that.wrapAsync(function () {
            var _a = that.updater.get(), selectedValues = _a.selectedValues, valueKey = _a.valueKey, groups = _a.groups, triggerType = _a.triggerType;
            var _b = e.params, gIndex = _b.gIndex, iIndex = _b.iIndex;
            var list = groups[gIndex];
            var item = list[iIndex];
            if (triggerType == 'hover') {
                // 置空当前列hover态
                list.forEach(function (i) {
                    i.hover = false;
                });
                item.hover = true;
                // hover展开子项时处理子项
                // 否则只更新hover态
                groups = groups.slice(0, gIndex + 1);
                if (item.children && item.children.length > 0) {
                    // hover有子节点
                    // 1. 恢复选中态
                    // 2. 置空hover态
                    item.children.forEach(function (c) {
                        c.hover = false;
                        c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
                    });
                    groups.push(item.children);
                }
            }
            else {
                // 置空当前列hover态
                groups.forEach(function (l) {
                    l.forEach(function (i) {
                        i.hover = false;
                    });
                });
                item.hover = true;
            }
            that.updater.digest({
                groups: groups
            });
        }), 150);
    },
    '@{select}<click>': function (e) {
        var that = this;
        var _a = that.updater.get(), selectedValues = _a.selectedValues, valueKey = _a.valueKey, groups = _a.groups, triggerType = _a.triggerType, map = _a.map;
        var _b = e.params, gIndex = _b.gIndex, iIndex = _b.iIndex;
        var list = groups[gIndex];
        var item = list[iIndex];
        if (!item.children || !item.children.length) {
            // 选中叶子节点
            var selectedValue = item[valueKey];
            var data = that['@{get}'](selectedValue);
            data.selectedValue = selectedValue;
            data.selectedText = data.selectedTexts.join('/');
            that.updater.digest(data);
            var items = data.selectedValues.map(function (v) {
                return map[v];
            });
            var event = $.Event('change', {
                item: item,
                items: items,
                selected: selectedValue
            });
            that['@{owner.node}'].val(selectedValue).trigger(event);
            that['@{hide}']();
        }
        else {
            // 还有子节点
            if (triggerType == 'click') {
                // 点击展开子项时响应
                list.forEach(function (g) {
                    g.hover = false;
                    g.cur = false;
                });
                item.cur = true;
                item.hover = true;
                groups = groups.slice(0, gIndex + 1);
                // 恢复选中态
                item.children.forEach(function (c) {
                    c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
                });
                groups.push(item.children);
                that.updater.digest({
                    groups: groups
                });
            }
        }
    }
});

});