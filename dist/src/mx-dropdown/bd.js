/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/bd",["magix","$","../mx-util/view","../mx-util/monitor","../mx-medusa/util"],(require,exports,module)=>{
/*magix_1,$,View,Monitor,I18n*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var $ = require("$");
var View = require("../mx-util/view");
var Monitor = require("../mx-util/monitor");
var I18n = require("../mx-medusa/util");
var ShowDelay = 100;
var HideDelay = 200;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, expand = $$.expand, selectedText = $$.selectedText; var $expr, $art, $line; try {
    $p += '<div id="toggle_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" class="mx-trigger ';
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
    $p += '"><span mxa="_zs_gallerya]:_" class="mx-trigger-label}">';
    $line = 3;
    $art = '=selectedText';
    ;
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_gallerya]:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/bd.html';
    throw msg;
} return $p; },
    init: function (ops) {
        var me = this;
        Monitor['@{setup}']();
        var oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;
        // 已选中数据
        var selected = ops.selected;
        if ($.isArray(selected)) {
            // 数组，保留初始数据状态，双向绑定原样返回
            me['@{bak.type}'] = 'array';
        }
        else {
            // 字符串
            selected = selected ? (selected + '').split(',') : [];
        }
        var textKey = ops.textKey || 'text';
        var valueKey = ops.valueKey || 'value';
        var list = ops.list || [];
        var hasGroups, parents = ops.parents || [], parentKey = ops.parentKey || 'pValue';
        if (typeof list[0] === 'object') {
            // 本身是个对象
            // 存在分组的情况
            list = list.map(function (item) {
                magix_1["default"].mix(item, {
                    text: item[textKey],
                    value: item[valueKey],
                    pValue: item[parentKey]
                });
                return item;
            });
            if (parents.length == 0) {
                hasGroups = false;
                parents = [{
                        text: '组',
                        value: 'all',
                        list: list
                    }];
            }
            else {
                hasGroups = true;
                var groupMap_1 = {};
                list.forEach(function (item) {
                    var pValue = item.pValue;
                    groupMap_1[pValue] = groupMap_1[pValue] || [];
                    groupMap_1[pValue].push(item);
                });
                for (var i = 0; i < parents.length; i++) {
                    var parent = parents[i];
                    var pValue = parent.value;
                    parent.list = groupMap_1[pValue] || [];
                    if (parent.list.length == 0) {
                        parent.splice(i--, 1);
                    }
                }
            }
        }
        else {
            // 直接value列表
            // 无分组
            hasGroups = false;
            list = list.map(function (value) {
                return {
                    text: value,
                    value: value
                };
            });
            parents = [{
                    text: '组',
                    value: 'all',
                    list: list
                }];
        }
        // 多选还是单选
        var multiple = (ops.multiple + '' === 'true');
        var map = magix_1["default"].toMap(list, valueKey);
        var selectedItems = [];
        selected.forEach(function (value) {
            var selectedItem = map[selected];
            //未提供选项，或提供的选项不在列表里
            if (!$.isEmptyObject(selectedItem)) {
                selectedItems.push(selectedItem);
            }
        });
        if (!multiple && (selectedItems.length == 0)) {
            // 单选默认选中第一个
            selectedItems = [list[0]];
            for (var i = 0; i < list.length; i++) {
                if (!list[i].disabled) {
                    selectedItems = [list[i]];
                    break;
                }
            }
        }
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        // 初始化
        me['@{pos.init}'] = false;
        me.updater.set({
            searchbox: (ops.searchbox + '') === 'true',
            multiple: multiple,
            emptyText: ops.emptyText || I18n['choose'],
            hasGroups: hasGroups,
            parents: parents,
            selectedItems: selectedItems,
            expand: false,
            height: (ops.height || 250)
        });
        me.on('destroy', function () {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#dd_bd_' + me.id).remove();
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';
        switch (me['@{trigger.type}']) {
            case 'click':
                oNode.on('click', function () {
                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
                        var expand = me.updater.get('expand');
                        if (expand) {
                            me['@{hide}']();
                        }
                        else if (!me['@{ui.disabled}']) {
                            me['@{show}']();
                        }
                    }), ShowDelay);
                });
                break;
            case 'hover':
                oNode.hover(function () {
                    clearTimeout(me['@{dealy.hide.timer}']);
                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
                        if (!me['@{ui.disabled}']) {
                            me['@{show}'](); //等待内容显示
                        }
                    }), ShowDelay);
                }, function () {
                    me['@{delay.hide}']();
                });
                break;
        }
    },
    render: function () {
        this.updater.digest({});
        this['@{val}']();
    },
    '@{val}': function (fire) {
        var me = this;
        var _a = me.updater.get(), selectedItems = _a.selectedItems, emptyText = _a.emptyText;
        var texts = [], values = [];
        selectedItems.forEach(function (item) {
            texts.push(item.text);
            values.push(item.value);
        });
        me.updater.digest({
            selectedText: texts.join(',') || emptyText
        });
        var val;
        if (me['@{bak.type}'] == 'array') {
            // 初始化为数组
            val = values;
        }
        else {
            // 初始化为字符串
            val = values.join(',');
        }
        me['@{owner.node}'].val(val);
        if (fire) {
            me['@{owner.node}'].trigger({
                type: 'change',
                selected: val,
                values: values,
                texts: texts,
                value: values.join(','),
                text: texts.join(',')
            });
        }
    },
    '@{init}': function () {
        var me = this;
        var toggleNode = $('#toggle_' + me.id);
        var posWidth = toggleNode.outerWidth(), vId = me.id;
        var minWidth = posWidth, maxWidth = posWidth * 2;
        var ddNode = "<div class=\"mx-output mx-output-bottom\" id=\"dd_bd_" + vId + "\"\n                style=\"min-width: " + minWidth + "px; max-width: " + maxWidth + "px;\"></div>";
        $(document.body).append(ddNode);
        // 先实例化，绑定事件，再加载对应的view
        var vf = me.owner.mountVframe('dd_bd_' + vId, '');
        vf.on('created', function () {
            var ddNode = me['@{setPos}']();
            var triggerType = me['@{trigger.type}'];
            if (triggerType == 'hover') {
                ddNode.hover(function () {
                    clearTimeout(me['@{dealy.hide.timer}']);
                }, function () {
                    me['@{delay.hide}']();
                });
            }
        });
        me['@{content.vf}'] = vf;
    },
    '@{inside}': function (node) {
        return magix_1["default"].inside(node, this.id) || magix_1["default"].inside(node, 'dd_bd_' + this.id);
    },
    '@{show}': function () {
        var me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        if (!me['@{pos.init}']) {
            me['@{pos.init}'] = true;
            me['@{init}']();
        }
        var data = me.updater.get();
        if (data.expand) {
            return;
        }
        me['@{content.vf}'].mountView('mx-dropdown/content', {
            data: data,
            submit: function (result) {
                me['@{hide}']();
                me.updater.set(result);
                me['@{val}'](true);
            },
            cancel: function () {
                me['@{hide}']();
            }
        });
        me.updater.digest({
            expand: true
        });
        // 每次show时都重新定位
        var ddNode = me['@{setPos}']();
        ddNode.addClass('mx-output-open');
        Monitor['@{add}'](me);
    },
    '@{delay.hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{hide}']();
        }), HideDelay);
        Monitor['@{remove}'](me);
    },
    '@{hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        var expand = me.updater.get('expand');
        if (!expand) {
            return;
        }
        me.updater.digest({
            expand: false
        });
        var ddNode = $('#dd_bd_' + me.id);
        ddNode.removeClass('mx-output-open');
        Monitor['@{remove}'](me);
    },
    '@{setPos}': function () {
        var me = this;
        var oNode = me['@{owner.node}'];
        var ddNode = $('#dd_bd_' + me.id);
        var width = oNode.outerWidth(), height = oNode.outerHeight(), offset = oNode.offset(), rWidth = ddNode.outerWidth(), rHeight = ddNode.outerHeight();
        var top = offset.top + height, left = offset.left - (rWidth - width) / 2;
        ddNode.css({
            left: left,
            top: top
        });
        return ddNode;
    },
    /**
     * 页面滚动的时候，重新定位
     */
    '$win<scroll>': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me['@{setPos}']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me['@{setPos}']();
        }
    }
});

});