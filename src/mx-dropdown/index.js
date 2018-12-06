/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("__mx-dropdown_index_","/* @dependent: ./index.less */\n.__mx-dropdown_index_-dropdown {\n  outline: 0;\n  position: relative;\n  width: 340px;\n  background-color: #fff;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: middle;\n  height: 32px;\n}\n.__mx-dropdown_index_-dropdown:hover {\n  border-color: #ccc;\n}\n.__mx-dropdown_index_-dropdown-toggle {\n  color: #333;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0 30px 0 12px;\n}\n.__mx-dropdown_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.__mx-dropdown_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-dropdown_index_-notallowed .__mx-dropdown_index_-dropdown-toggle {\n  cursor: not-allowed;\n}\n.__mx-dropdown_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 2px;\n  font-size: 28px;\n  color: #ccc;\n  transition: top 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, top 0.3s;\n  transition: transform 0.3s, top 0.3s, -webkit-transform 0.3s;\n}\n.__mx-dropdown_index_-open .__mx-dropdown_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  top: 0;\n}\n.__mx-dropdown_index_-open,\n.__mx-dropdown_index_-open:hover,\n.__mx-dropdown_index_-dropdown[tabindex=\"0\"]:focus {\n  border-color: #f96447;\n}\n.__mx-dropdown_index_-dropdown-toggle-label {\n  height: 30px;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.__mx-dropdown_index_-dropdown-toggle-label-ph {\n  color: #999;\n}\n.__mx-dropdown_index_-dropdown-menu-wrapper {\n  position: absolute;\n  top: 100%;\n  left: -1px;\n  right: -1px;\n  margin-top: 5px;\n  border-radius: 4px;\n  z-index: 300;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-dropdown_index_-open .__mx-dropdown_index_-dropdown-menu-wrapper {\n  display: block;\n}\n.__mx-dropdown_index_-dropdown-menu {\n  overflow: auto;\n  max-height: 196px;\n  padding: 4px 0;\n}\n.__mx-dropdown_index_-searchbox {\n  display: block;\n  width: 100%;\n  padding: 9px 9px 4px 9px;\n}\n.__mx-dropdown_index_-searchbox-wrapper {\n  padding: 0;\n  width: 100%;\n}\n.__mx-dropdown_index_-search-icon {\n  color: #ccc;\n  position: absolute;\n  left: 15px;\n  top: 16px;\n}\n.__mx-dropdown_index_-search-input {\n  padding-left: 28px;\n  height: 28px;\n  line-height: 28px;\n  width: 100%;\n}\n.__mx-dropdown_index_-dropdown-header {\n  padding: 5px;\n  color: #999;\n  display: block;\n  cursor: default;\n}\n.__mx-dropdown_index_-dropdown-item {\n  padding: 0 4px;\n  margin: 2px 0;\n}\n.__mx-dropdown_index_-item-link {\n  cursor: pointer;\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-dropdown_index_-item-link:hover {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-dropdown_index_-active,\n.__mx-dropdown_index_-active:hover,\n.__mx-dropdown_index_-active:active,\n.__mx-dropdown_index_-active:focus {\n  color: #fff;\n  background-color: #f96447;\n}\n");
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
} ; var $g = '', $_temp, $p = '', selectedText = $$.selectedText, selected = $$.selected, rList = $$.rList, searchbox = $$.searchbox, keyword = $$.keyword, viewId = $$.viewId, list = $$.list, textKey = $$.textKey, valueKey = $$.valueKey; var $expr, $art, $line; try {
    $p += '<div class="__mx-dropdown_index_-dropdown-toggle" mx-click="' + $viewId + '@{toggle}()" title="' + ($expr = '<%=selectedText%>', $e(selectedText)) + '"><span class="__mx-dropdown_index_-dropdown-toggle-label';
    $expr = '<%if (selected === \'\') {%>';
    if (selected === '') {
        ;
        $p += ' __mx-dropdown_index_-dropdown-toggle-label-ph';
        $expr = '<%}%>';
    }
    ;
    $p += '">' + ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_9:_" class="__mx-style_index_-mc-iconfont __mx-dropdown_index_-arrow">&#xe692;</span></div><div mxv mxa="_9:_" class="__mx-dropdown_index_-dropdown-menu-wrapper">';
    $expr = '<%if (rList) {%>';
    if (rList) {
        ;
        $p += ' ';
        $expr = '<%if (searchbox) {%>';
        if (searchbox) {
            ;
            $p += '<div mxv mxa="_9:a" class="__mx-dropdown_index_-searchbox"><label mxv mxa="_9:b" class="__mx-dropdown_index_-searchbox-wrapper"><span mxs="_9:a" class="__mx-style_index_-mc-iconfont __mx-dropdown_index_-search-icon">&#xe608;</span><input placeholder="搜索关键词" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" class="__mx-style_index_-input __mx-dropdown_index_-search-input" value="' + ($expr = '<%=keyword%>', $e(keyword)) + '"/></label></div>';
            $expr = '<%}%>';
        }
        ;
        $p += '<ul class="__mx-dropdown_index_-dropdown-menu" id="list_' + ($expr = '<%=viewId%>', $e(viewId)) + '">';
        $expr = '<%var text = void 0, value = void 0%>';
        var text = void 0, value = void 0;
        $p += ' ';
        $expr = '<%for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {        var item = list_1[_i];%>';
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            ;
            $p += ' ';
            $expr = '<%if (textKey && valueKey) {%>';
            if (textKey && valueKey) {
                ;
                $p += ' ';
                $expr = '<%text = item[textKey];            value = item[valueKey]%>';
                text = item[textKey];
                value = item[valueKey];
                $p += ' ';
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += ' ';
                $expr = '<%text = item;            value = item;%>';
                text = item;
                value = item;
                ;
                $p += ' ';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $expr = '<%if (item && item.group) {%>';
            if (item && item.group) {
                ;
                $p += '<li class="__mx-dropdown_index_-dropdown-header __mx-style_index_-ellipsis" title="' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '">' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</li>';
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += '<li title="' + ($expr = '<%=text%>', $e(text)) + '" class="__mx-dropdown_index_-dropdown-item">';
                $expr = '<%var equal = (value + \'\') === (selected + \'\')%>';
                var equal = (value + '') === (selected + '');
                $p += '<span class="__mx-dropdown_index_-item-link __mx-style_index_-ellipsis';
                $expr = '<%if (equal) {%>';
                if (equal) {
                    ;
                    $p += ' __mx-dropdown_index_-active';
                    $expr = '<%}%>';
                }
                ;
                $p += '" mx-click="' + $viewId + '@{select}({item:\'' + ($expr = '<%@item%>', $i($$ref, item)) + '\'})">' + ($expr = '<%=text%>', $e(text)) + '</span></li>';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
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
    init: function (extra) {
        var me = this;
        Monitor['@{setup}']();
        var node = $('#' + me.id);
        node.on('keydown', function (e) {
            if (e.keyCode == 13) { //enter
                me['@{toggle}<click>']();
            } /*else if (e.keyCode == 40) {//down arrow
                e.preventDefault();
            } else if (e.keyCode == 38) {//up arrow
                e.preventDefault();
            }*/
        });
        me.on('destroy', function () {
            node.off('keydown');
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id
        });
        me['@{owner.node}'] = node;
        me['@{data.from.node}'] = !extra.list;
        me.assign(extra, { node: node });
    },
    assign: function (ops, _a) {
        var node = _a.node, inner = _a.inner;
        var me = this;
        me['@{list}'] = ops.list;
        var selected = me['@{selected}'] = ops.selected;
        var textKey = me['@{textKey}'] = ops.textKey || '';
        var valueKey = me['@{valueKey}'] = ops.valueKey || '';
        var emptyText = me['@{emptyText}'] = ops.emptyText || '';
        me['@{ui.searchbox}'] = (ops.searchbox + '') === 'true';
        me['@{ui.disabled}'] = (ops.disabled + '') === 'true';
        if (me['@{data.from.node}']) {
            node = inner ? $(inner) : $(node).children();
            var list_1 = [];
            var group_1;
            node.each(function (idx, item) {
                item = $(item);
                group_1 = item.attr('group') == 'true';
                list_1.push({
                    group: group_1,
                    text: item.text(),
                    value: group_1 ? Magix.guid() : item.attr('value')
                });
            });
            textKey = me['@{textKey}'] = 'text';
            valueKey = me['@{valueKey}'] = 'value';
            me['@{list}'] = list_1;
        }
        var list = me['@{list}'];
        var map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (textKey && valueKey) {
                if (!map['']) {
                    var temp = {};
                    temp[textKey] = emptyText;
                    temp[valueKey] = '';
                    list.unshift(temp);
                    map[''] = temp;
                }
            }
            else {
                if (!map[emptyText]) {
                    list.unshift(emptyText);
                    map[emptyText] = emptyText;
                }
            }
        }
        if (!selected && emptyText && !(textKey || valueKey)) {
            selected = emptyText;
        }
        if (!selected || !map[selected]) { //未提供选项，或提供的选项不在列表里，则默认第一个
            selected = map[selected] || list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        me['@{selected}'] = selected;
        me['@{selected.text}'] = textKey && valueKey ? map[selected][textKey] : selected;
        return true;
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    render: function () {
        var me = this;
        var node = me['@{owner.node}'];
        node.addClass('__mx-dropdown_index_-dropdown');
        node[me['@{ui.disabled}'] ? 'addClass' : 'removeClass']('__mx-dropdown_index_-notallowed').prop('tabindex', me['@{ui.disabled}'] ? -1 : 0);
        me['@{ui.update}'](true);
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{owner.node}'].hasClass('__mx-dropdown_index_-open')) {
            me['@{owner.node}'].removeClass('__mx-dropdown_index_-open').trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{owner.node}'].hasClass('__mx-dropdown_index_-open')) {
            var r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['@{owner.node}'].addClass('__mx-dropdown_index_-open').trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('.__mx-dropdown_index_-active');
            var pos = active.position();
            var height = listNode.height();
            var stop = listNode.prop('scrollTop');
            if (pos.top < 0 || pos.top > height) {
                var top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['@{add}'](me);
        }
    },
    '@{ui.update}': function (ignoreFireEvent) {
        var me = this;
        var selected = me['@{selected}'];
        me.updater.digest({
            textKey: me['@{textKey}'],
            valueKey: me['@{valueKey}'],
            selected: selected,
            searchbox: me['@{ui.searchbox}'],
            selectedText: me['@{selected.text}'],
            list: me['@{list}'].slice()
        });
        me['@{owner.node}'].val(selected);
        if (!ignoreFireEvent) {
            me['@{fire.event}'](selected);
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
                    if ((text + '').indexOf(val) >= 0 || (value + '').indexOf(val) >= 0) {
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
    '@{fire.event}': function (item, compare) {
        var me = this;
        var updater = me.updater;
        var valueKey = me['@{valueKey}'];
        var textKey = me['@{textKey}'];
        var lastSelected = me['@{selected}'];
        var selected = item;
        var selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        if (!compare || lastSelected !== selected) {
            updater.set({
                selected: me['@{selected}'] = selected
            });
            var event = $.Event('change', {
                item: item,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: valueKey ? item[valueKey] : item,
                text: textKey ? item[textKey] : item
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
    },
    '@{toggle}<click>': function () {
        var me = this;
        var node = me['@{owner.node}'];
        if (node.hasClass('__mx-dropdown_index_-open')) {
            me['@{hide}']();
        }
        else if (!node.hasClass('__mx-dropdown_index_-notallowed')) {
            me['@{show}']();
        }
    },
    '@{search}<keyup,paste>': function (e) {
        var me = this;
        e.stopPropagation();
        clearTimeout(me['@{search.delay.timer}']);
        var val = $.trim(e.eventTarget.value);
        me.updater.set({ keyword: val });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            if (val != me['@{last.search.value}']) {
                me['@{fn.search}'](me['@{last.search.value}'] = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    '@{select}<click>': function (e) {
        var me = this;
        me['@{fire.event}'](e.params.item, true);
        me['@{hide}']();
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});