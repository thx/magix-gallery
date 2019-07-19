/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/index",["magix","mx-tree/util","../mx-medusa/util","../mx-util/monitor"],(require,exports,module)=>{
/*Magix,Util,I18n,Monitor*/

var Magix = require("magix");
var Vframe = Magix.Vframe;
var Util = require("mx-tree/util");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-util/monitor");
Magix.applyStyle("_zs_gallery_mx-cascade_index_","._zs_gallery_mx-cascade_index_-cascade-list {\n  width: auto;\n  min-width: 0;\n  max-width: none;\n  white-space: nowrap;\n}\n._zs_gallery_mx-cascade_index_-group {\n  display: inline-block;\n  min-width: 100px;\n  height: calc(var(--input-small-height) * 6);\n  overflow-y: auto;\n  vertical-align: top;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_mx-cascade_index_-group:first-child {\n  border-left: 0 none;\n}\n._zs_gallery_mx-cascade_index_-line {\n  position: relative;\n  height: var(--input-small-height);\n  padding-right: var(--input-small-height);\n  padding-left: 10px;\n  line-height: var(--input-small-height);\n  transition: background-color var(--duration), color var(--duration);\n  cursor: pointer;\n}\n._zs_gallery_mx-cascade_index_-line ._zs_gallery_mx-cascade_index_-line-text {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-cascade_index_-line ._zs_gallery_mx-cascade_index_-line-arrow {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 24px;\n  line-height: var(--input-small-height);\n  color: #999;\n  transform: rotate(-90deg);\n}\n._zs_gallery_mx-cascade_index_-line:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-cur {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-cur:hover {\n  background-color: var(--color-brand-opacity);\n}\n");
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
    $p += '><span mxa="_zs_galleryai:_" class="mx-trigger-label">';
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
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_galleryai:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div>';
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
        $expr = '<%for (var gIndex = 0, $art_cnjvvmfbsl$art_c = groups.length; gIndex < $art_cnjvvmfbsl$art_c; gIndex++) {        var list = groups[gIndex]%>';
        for (var gIndex = 0, $art_cnjvvmfbsl$art_c = groups.length; gIndex < $art_cnjvvmfbsl$art_c; gIndex++) {
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
            $expr = '<%for (var iIndex = 0, $art_ctsdgkbmzhdl$art_c = list.length; iIndex < $art_ctsdgkbmzhdl$art_c; iIndex++) {            var item = list[iIndex]%>';
            for (var iIndex = 0, $art_ctsdgkbmzhdl$art_c = list.length; iIndex < $art_ctsdgkbmzhdl$art_c; iIndex++) {
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
                $p += '" mx-click="' + $viewId + '@{select}({gIndex:';
                $line = 11;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 11;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})"><span mxa="_zs_galleryai:a" class="_zs_gallery_mx-cascade_index_-line-text">';
                $line = 12;
                $art = '=item[textKey]';
                ;
                $p += ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</span>';
                $line = 13;
                $art = 'if (item.children && item.children.length)';
                ;
                $expr = '<%if (item.children && item.children.length) {%>';
                if (item.children && item.children.length) {
                    ;
                    $p += '<span mxs="_zs_galleryai:a" class="mc-iconfont _zs_gallery_mx-cascade_index_-line-arrow">&#xe692;</span>';
                    $line = 15;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 17;
                $art = '/each';
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
        var me = this;
        me['@{extra}'] = extra;
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    render: function () {
        var me = this;
        var ops = me['@{extra}'];
        var valueKey = ops.valueKey || 'value';
        var textKey = ops.textKey || 'text';
        var parentKey = ops.parentKey || 'pValue';
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        var disabled = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        var info = Util.listToTree(ops.list, valueKey, parentKey);
        var map = info.map, list = info.list;
        me.updater.set({
            viewId: me.id,
            disabled: disabled,
            placeholder: ops.placeholder || I18n['choose'],
            valueKey: valueKey,
            textKey: textKey,
            parentKey: parentKey,
            map: map,
            list: list,
            expand: false
        });
        var selectedValue = ops.selected || '';
        var data = me['@{get}'](selectedValue);
        // 确认选择的时候再改
        data.selectedText = data.selectedTexts.join('/');
        data.selectedValue = selectedValue;
        me.updater.digest(data);
        me['@{owner.node}'] = $('#' + me.id);
        me['@{owner.node}'].val(selectedValue);
    },
    '@{get}': function (selectedValue) {
        var updater = this.updater;
        var valueKey = updater.get('valueKey'), textKey = updater.get('textKey'), parentKey = updater.get('parentKey'), placeholder = updater.get('placeholder'), map = updater.get('map'), list = updater.get('list');
        var selectedTexts = [], selectedValues = [], groups = [];
        if (!selectedValue || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedTexts = [placeholder];
            groups = [list];
        }
        else {
            // 已选中
            var _loop_1 = function (v) {
                var i = map[v];
                selectedTexts.unshift(i[textKey]);
                selectedValues.unshift(i[valueKey] + '');
                if (!i[parentKey]) {
                    // 根节点
                    list.forEach(function (s) {
                        s.cur = false;
                    });
                    i.cur = true;
                    groups.unshift(list);
                }
                else {
                    var siblings = map[i[parentKey]].children;
                    siblings.forEach(function (s) {
                        s.cur = false;
                    });
                    i.cur = true;
                    groups.unshift(siblings);
                    _loop_1(i[parentKey]);
                }
            };
            _loop_1(selectedValue);
        }
        return {
            groups: groups,
            selectedTexts: selectedTexts,
            selectedValues: selectedValues
        };
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me.updater.digest({
                expand: false
            });
            Monitor['@{remove}'](me);
        }
    },
    '@{show}<click>': function (e) {
        var me = this;
        var updater = me.updater;
        var expand = updater.get('expand'), selectedValue = updater.get('selectedValue');
        if (!expand) {
            // 重新获取数据，可能是切换之后未选择直接失去焦点了
            var data = me['@{get}'](selectedValue);
            data.expand = true;
            updater.digest(data);
            Monitor['@{add}'](me);
        }
    },
    '@{select}<click>': function (e) {
        var me = this;
        var updater = me.updater;
        var selectedValues = updater.get('selectedValues'), valueKey = updater.get('valueKey');
        var gIndex = e.params.gIndex, iIndex = e.params.iIndex;
        var groups = updater.get('groups');
        var list = groups[gIndex];
        var item = list[iIndex];
        item.children = item.children || [];
        if (item.children.length > 0) {
            // 还有子节点
            list.forEach(function (g) {
                g.cur = false;
            });
            item.cur = true;
            groups = groups.slice(0, gIndex + 1);
            // 恢复选中态
            item.children.forEach(function (c) {
                c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
            });
            groups.push(item.children);
            updater.digest({
                groups: groups
            });
        }
        else {
            // 选中叶子节点
            var selectedValue = item[valueKey];
            var data = me['@{get}'](selectedValue);
            data.selectedValue = selectedValue;
            data.selectedText = data.selectedTexts.join('/');
            updater.digest(data);
            var event = $.Event('change', {
                item: item,
                selected: selectedValue
            });
            me['@{owner.node}'].val(selectedValue).trigger(event);
            me['@{hide}']();
        }
    }
});

});