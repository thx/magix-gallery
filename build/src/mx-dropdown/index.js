/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/index",["magix","$","../mx-util/monitor","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,$,Monitor,I18n*/

/**
 * 为了保证dropdown.item每次更新，不实现assign
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-util/monitor");
var I18n = require("../mx-medusa/util");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, expand = $$.expand, name = $$.name, selectedText = $$.selectedText, placementClass = $$.placementClass, rList = $$.rList, searchbox = $$.searchbox, text = $$.text, keyword = $$.keyword, list = $$.list, height = $$.height, textKey = $$.textKey, valueKey = $$.valueKey, selected = $$.selected, spm = $$.spm; var $expr, $art, $line; try {
    $p += '<div id="toggle_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" class="mx-trigger ';
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' mx-trigger-open ';
        $expr = '<%}%>';
    }
    ;
    $p += '"><span mxa="_zs_galleryb_:_" class="mx-trigger-label">';
    $expr = '<%if (name) {%>';
    if (name) {
        ;
        $p += '<span mxa="_zs_galleryb_:a" class="color-9">' + ($expr = '<%=name%>', $e(name)) + '：</span>';
        $expr = '<%}%>';
    }
    ;
    $p += ' ' + ($expr = '<%!selectedText%>', $n(selectedText)) + '</span><span mxs="_zs_galleryb_:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div><div mxv id="menu_';
    $line = 9;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" class="mx-output ' + ($expr = '<%=placementClass%>', $e(placementClass)) + ' ';
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' mx-output-open ';
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $expr = '<%if (rList) {%>';
    if (rList) {
        ;
        $p += ' ';
        $expr = '<%if (searchbox) {%>';
        if (searchbox) {
            ;
            $p += '<div mxv mxa="_zs_galleryb_:b" class="mx-output-search"><div mxv mxa="_zs_galleryb_:c" class="search-box" style="width: 100%;"><i mxs="_zs_galleryb_:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="' + ($expr = '<%=text.search%>', $e(text.search)) + '" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" value="' + ($expr = '<%=keyword%>', $e(keyword)) + '"/></div></div>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%if (list.length) {%>';
        if (list.length) {
            ;
            $p += '<ul class="mx-output-list" id="list_' + ($expr = '<%=viewId%>', $e(viewId)) + '" style="max-height:';
            $line = 27;
            $art = '=height';
            ;
            $p += ($expr = '<%=height%>', $e(height)) + 'px;">';
            $expr = '<%var text = void 0, value = void 0%>';
            var text = void 0, value = void 0;
            $p += ' ';
            $expr = '<%for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {            var item = list_1[_i];%>';
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                ;
                $p += ' ';
                $expr = '<%text = item[textKey];            value = item[valueKey]%>';
                text = item[textKey];
                value = item[valueKey];
                $p += ' ';
                $expr = '<%if (item && item.group) {%>';
                if (item && item.group) {
                    ;
                    $p += '<li class="mx-output-header" title="' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '">' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</li>';
                    $expr = '<%}            else {%>';
                }
                else {
                    ;
                    $p += '<li class="mx-output-item" title="' + ($expr = '<%=(item.tip ? item.tip : text)%>', $e((item.tip ? item.tip : text))) + '">';
                    $expr = '<%var equal = (value + \'\') === (selected + \'\')%>';
                    var equal = (value + '') === (selected + '');
                    $p += '<span class="mx-output-link ';
                    $expr = '<%if (equal) {%>';
                    if (equal) {
                        ;
                        $p += ' mx-output-link-active ';
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '" data-active="' + ($expr = '<%=equal%>', $e(equal)) + '" mx-click="' + $viewId + '@{select}({item:\'' + ($expr = '<%@item%>', $i($$ref, item)) + '\'})" ';
                    $expr = '<%if (spm) {%>';
                    if (spm) {
                        ;
                        $p += ' data-spm-click="' + ($expr = '<%=spm%>', $e(spm)) + '" ';
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '>' + ($expr = '<%!text%>', $n(text)) + '</span></li>';
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $expr = '<%}%>';
            }
            ;
            $p += '</ul>';
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<div mxa="_zs_galleryb_:d" class="text-center color-9 pt20 pb20">';
            $line = 48;
            $art = '!text.empty';
            ;
            $p += ($expr = '<%!text.empty%>', $n(text.empty)) + '</div>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
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
    msg += $expr + '\r\n\tat file:mx-dropdown/index.html';
    throw msg;
} return $p; },
    init: function (ops) {
        var me = this;
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me['@{owner.node}'] = $('#' + me.id);
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        // 列表是否展开
        me['@{ui.expand}'] = false;
        // 展开方向：向上向下
        var placement = ops.placement || 'bottom';
        var placementClass = "mx-output-" + placement;
        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';
        var selected = me['@{selected}'] = ops.selected;
        var textKey = me['@{textKey}'] = ops.textKey || 'text';
        var valueKey = me['@{valueKey}'] = ops.valueKey || 'value';
        var emptyText = me['@{emptyText}'] = ops.emptyText || '';
        var list = [];
        if (!ops.list) {
            var node = me['@{owner.node}'].children();
            var group_1;
            node.each(function (idx, item) {
                item = $(item);
                group_1 = item.attr('group') == 'true';
                list.push({
                    group: group_1,
                    text: item.text(),
                    value: group_1 ? Magix.guid() : item.attr('value')
                });
            });
            textKey = me['@{textKey}'] = 'text';
            valueKey = me['@{valueKey}'] = 'value';
        }
        else {
            // 直接配数据不支持分组
            try {
                list = JSON.parse(ops.list);
            }
            catch (e) {
                list = ops.list;
            }
            if (typeof list[0] === 'object') {
                // 本身是个对象
            }
            else {
                // 直接value列表
                list = list.map(function (value) {
                    var temp = {};
                    temp[textKey] = value;
                    temp[valueKey] = value;
                    return temp;
                });
            }
        }
        me['@{list}'] = list;
        var map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (!map['']) {
                var temp = {};
                temp[textKey] = emptyText;
                temp[valueKey] = '';
                list.unshift(temp);
                map[''] = temp;
            }
        }
        if (!selected || !map[selected]) {
            var firstItem = {};
            for (var i = 0; i < list.length; i++) {
                if (!list[i].group) {
                    firstItem = list[i];
                    break;
                }
            }
            selected = map[selected] || firstItem;
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        me.updater.set({
            viewId: me.id,
            textKey: me['@{textKey}'],
            valueKey: me['@{valueKey}'],
            selected: me['@{selected}'] = selected,
            searchbox: (ops.searchbox + '') === 'true',
            selectedText: me['@{selected.text}'] = map[selected][textKey],
            keyword: me['@{last.search.value}'] = (ops.keyword || ''),
            expand: me['@{ui.expand}'],
            height: (ops.height || 250),
            spm: me['@{owner.node}'].attr('data-spm-click') || '',
            name: ops.name || '',
            placementClass: placementClass,
            text: {
                search: I18n['dropdown.search'],
                empty: I18n['empty.text']
            }
        });
        me['@{owner.node}'].val(selected);
    },
    render: function () {
        var me = this;
        var searchbox = me.updater.get('searchbox');
        var initList;
        var next = function () {
            me.updater.digest({
                list: initList
            });
            var triggerType = me['@{trigger.type}'];
            var triggerNode = $('#toggle_' + me.id);
            switch (triggerType) {
                case 'click':
                    triggerNode.on('click', function () {
                        if (me['@{ui.expand}']) {
                            me['@{hide}']();
                        }
                        else if (!me['@{ui.disabled}']) {
                            me['@{show}']();
                        }
                    });
                    break;
                case 'hover':
                    triggerNode.hover(function () {
                        clearTimeout(me['@{dealy.hide.timer}']);
                        if (!me['@{ui.disabled}']) {
                            me['@{show}']();
                        }
                    }, function () {
                        me['@{delay.hide}']();
                    });
                    var wrapper = $('#menu_' + me.id);
                    wrapper.hover(function () {
                        clearTimeout(me['@{dealy.hide.timer}']);
                    }, function () {
                        me['@{delay.hide}']();
                    });
                    break;
            }
        };
        if (searchbox) {
            me['@{fn.search}'](me['@{last.search.value}'], function (list) {
                initList = list;
                next();
            });
        }
        else {
            initList = me['@{list}'];
            next();
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{delay.hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{hide}']();
        }), 250);
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.expand}']) {
            me.updater.digest({
                expand: me['@{ui.expand}'] = false
            });
            me['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.expand}']) {
            var d = {
                expand: me['@{ui.expand}'] = true
            };
            var r = me.updater.get('rList');
            if (!r) {
                d.rList = true;
            }
            me.updater.digest(d);
            me['@{owner.node}'].trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('[data-active="true"]');
            var pos = active.position();
            var height = listNode.height();
            var stop = listNode.prop('scrollTop');
            if (pos && (pos.top < 0 || pos.top > height)) {
                var top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['@{add}'](me);
        }
    },
    '@{fn.search}': function (val, callback) {
        var me = this;
        clearTimeout(me['@{search.timer}']);
        var srcList = me['@{list}'];
        var newList = [];
        var index = 0;
        var max = srcList.length;
        var textKey = me['@{textKey}'];
        var valueKey = me['@{valueKey}'];
        if (!val) {
            callback(srcList);
            return;
        }
        var go = function () {
            if (index < max) {
                var end = Math.min(index + 400, max);
                for (var i = index, li = void 0, text = void 0, value = void 0; i < end; i++) {
                    li = srcList[i];
                    text = li;
                    value = li;
                    if (textKey && valueKey) {
                        text = li[textKey];
                        value = li[valueKey];
                    }
                    // text不区分大小写匹配
                    var lowVal = (val + '').toLocaleLowerCase(), lowText = (text + '').toLocaleLowerCase();
                    if ((lowText).indexOf(lowVal) >= 0 || (value + '').indexOf(val) >= 0) {
                        newList.push(li);
                    }
                }
                index = end;
                me['@{search.timer}'] = setTimeout(me.wrapAsync(go), 20);
            }
            else {
                callback(newList);
            }
        };
        go();
    },
    '@{search}<keyup,paste>': function (e) {
        var me = this;
        e.stopPropagation();
        clearTimeout(me['@{search.delay.timer}']);
        var val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            if (val != me['@{last.search.value}']) {
                me['@{fn.search}'](me['@{last.search.value}'] = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 250);
    },
    '@{select}<click>': function (e) {
        var me = this;
        var item = e.params.item;
        var updater = me.updater;
        var valueKey = me['@{valueKey}'];
        var textKey = me['@{textKey}'];
        var lastSelected = me['@{selected}'];
        var keyword = me['@{last.search.value}'];
        var selected = item[valueKey];
        var selectedText = item[textKey];
        if (lastSelected !== selected) {
            updater.set({
                selected: me['@{selected}'] = selected
            });
            var event = $.Event('change', {
                item: item,
                keyword: keyword,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: item[valueKey],
                text: item[textKey],
                selected: item[valueKey]
            });
            if (!event.isDefaultPrevented()) {
                updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
            }
            else {
                updater.set({
                    selected: lastSelected
                });
            }
            me['@{owner.node}'].val(valueKey ? item[valueKey] : item).trigger(event);
        }
        me['@{hide}']();
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});