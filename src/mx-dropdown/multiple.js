/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/multiple",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
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
Magix.applyStyle("__mx-dropdown_multiple_","/* @dependent: ./index.less */\n.__mx-dropdown_multiple_-dropdown {\n  outline: 0;\n  position: relative;\n  width: 340px;\n  background-color: #fff;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: middle;\n  height: 32px;\n}\n.__mx-dropdown_multiple_-dropdown:hover {\n  border-color: #ccc;\n}\n.__mx-dropdown_multiple_-dropdown-toggle {\n  color: #333;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0 30px 0 12px;\n  border-radius: 3px;\n}\n.__mx-dropdown_multiple_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.__mx-dropdown_multiple_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-dropdown_multiple_-notallowed .__mx-dropdown_multiple_-dropdown-toggle {\n  cursor: not-allowed;\n}\n.__mx-dropdown_multiple_-arrow {\n  position: absolute;\n  right: 0;\n  top: 2px;\n  font-size: 28px;\n  color: #ccc;\n  transition: top 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, top 0.3s;\n  transition: transform 0.3s, top 0.3s, -webkit-transform 0.3s;\n}\n.__mx-dropdown_multiple_-open .__mx-dropdown_multiple_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  top: 0;\n}\n.__mx-dropdown_multiple_-open,\n.__mx-dropdown_multiple_-open:hover,\n.__mx-dropdown_multiple_-dropdown[tabindex=\"0\"]:focus {\n  border-color: #f96447;\n}\n.__mx-dropdown_multiple_-dropdown-toggle-label {\n  height: 30px;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.__mx-dropdown_multiple_-dropdown-toggle-label-ph {\n  color: #999;\n}\n.__mx-dropdown_multiple_-dropdown-menu-wrapper {\n  position: absolute;\n  top: 100%;\n  left: -1px;\n  width: 350px;\n  margin-top: 5px;\n  border-radius: 4px;\n  z-index: 300;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-dropdown_multiple_-open .__mx-dropdown_multiple_-dropdown-menu-wrapper {\n  display: block;\n}\n.__mx-dropdown_multiple_-dropdown-menu {\n  overflow: auto;\n  max-height: 192px;\n  padding: 4px 0;\n}\n.__mx-dropdown_multiple_-searchbox {\n  display: block;\n  width: 100%;\n  padding: 9px 9px 4px 9px;\n}\n.__mx-dropdown_multiple_-searchbox-wrapper {\n  padding: 0;\n  width: 100%;\n}\n.__mx-dropdown_multiple_-search-icon {\n  color: #ccc;\n  position: absolute;\n  left: 15px;\n  top: 18px;\n}\n.__mx-dropdown_multiple_-search-input {\n  padding-left: 28px;\n  width: 100%;\n  height: 28px;\n  line-height: 28px;\n}\n.__mx-dropdown_multiple_-dropdown-header {\n  padding: 5px;\n  color: #999;\n  display: block;\n  cursor: default;\n}\n.__mx-dropdown_multiple_-dropdown-item {\n  padding: 3px 4px;\n}\n.__mx-dropdown_multiple_-item-link {\n  cursor: pointer;\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 6px;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n}\n.__mx-dropdown_multiple_-s-item {\n  width: 32%;\n  float: left;\n  margin-left: 2px;\n  margin-bottom: 2px;\n}\n.__mx-dropdown_multiple_-s-item-link {\n  cursor: pointer;\n  color: #666;\n  display: block;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-dropdown_multiple_-item-link:hover,\n.__mx-dropdown_multiple_-s-item-link:hover {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-dropdown_multiple_-active,\n.__mx-dropdown_multiple_-active:hover,\n.__mx-dropdown_multiple_-active:active,\n.__mx-dropdown_multiple_-active:focus {\n  color: #fff;\n  background-color: #f96447;\n}\n.__mx-dropdown_multiple_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 0 10px;\n  padding: 10px 0;\n}\n.__mx-dropdown_multiple_-splitter {\n  border-left: 1px solid #e6e6e6;\n}\n");
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
} ; var $g = '', $_temp, $p = '', selectedText = $$.selectedText, phLabel = $$.phLabel, rList = $$.rList, searchbox = $$.searchbox, keyword = $$.keyword, viewId = $$.viewId, selected = $$.selected, list = $$.list, textKey = $$.textKey, valueKey = $$.valueKey, emptyText = $$.emptyText, inArray = $$.inArray; var $expr, $art, $line; try {
    $p += '<div class="__mx-dropdown_multiple_-dropdown-toggle" mx-click="' + $viewId + '@{toggle}()" title="' + ($expr = '<%=selectedText%>', $e(selectedText)) + '"><span class="__mx-dropdown_multiple_-dropdown-toggle-label';
    $expr = '<%if (phLabel) {%>';
    if (phLabel) {
        ;
        $p += ' __mx-dropdown_multiple_-dropdown-toggle-label-ph';
        $expr = '<%}%>';
    }
    ;
    $p += '">' + ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_#:_" class="__mx-style_index_-mc-iconfont __mx-dropdown_multiple_-arrow">&#xe692;</span></div><div mxv mxa="_#:_" class="__mx-dropdown_multiple_-dropdown-menu-wrapper">';
    $expr = '<%if (rList) {%>';
    if (rList) {
        ;
        $p += ' ';
        $expr = '<%if (searchbox) {%>';
        if (searchbox) {
            ;
            $p += '<div mxv mxa="_#:a" class="__mx-dropdown_multiple_-searchbox"><label mxv mxa="_#:b" class="__mx-dropdown_multiple_-searchbox-wrapper"><span mxs="_#:a" class="__mx-style_index_-mc-iconfont __mx-dropdown_multiple_-search-icon">&#xe608;</span><input mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" placeholder="搜索关键词" class="__mx-style_index_-input __mx-dropdown_multiple_-search-input" value="' + ($expr = '<%=keyword%>', $e(keyword)) + '"/></label></div>';
            $expr = '<%}%>';
        }
        ;
        $p += '<ul class="__mx-dropdown_multiple_-dropdown-menu" id="list_' + ($expr = '<%=viewId%>', $e(viewId)) + '">';
        $expr = '<%var keys = selected.split(\',\'), text = void 0, value = void 0;%>';
        var keys = selected.split(','), text = void 0, value = void 0;
        ;
        $p += ' ';
        $expr = '<%for (var i = 0; i < list.length; i++) {%>';
        for (var i = 0; i < list.length; i++) {
            ;
            $p += ' ';
            $expr = '<%var item = list[i];%>';
            var item = list[i];
            ;
            $p += ' ';
            $expr = '<%if (item && item.group) {%>';
            if (item && item.group) {
                ;
                $p += '<li class="__mx-dropdown_multiple_-dropdown-header __mx-style_index_-ellipsis" title="' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '">' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</li>';
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += ' ';
                $expr = '<%if (textKey && valueKey) {%>';
                if (textKey && valueKey) {
                    ;
                    $p += ' ';
                    $expr = '<%text = item[textKey];                value = item[valueKey]%>';
                    text = item[textKey];
                    value = item[valueKey];
                    $p += ' ';
                    $expr = '<%}            else {%>';
                }
                else {
                    ;
                    $p += ' ';
                    $expr = '<%text = item;                value = item;%>';
                    text = item;
                    value = item;
                    ;
                    $p += ' ';
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $expr = '<%if (emptyText === value && i === 0) {%>';
                if (emptyText === value && i === 0) {
                    ;
                    $p += ' ';
                    $expr = '<%value = \'\';                item = \'\';%>';
                    value = '';
                    item = '';
                    ;
                    $p += ' ';
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $expr = '<%var equal = inArray(value + \'\', keys) > -1%>';
                var equal = inArray(value + '', keys) > -1;
                $p += ' ';
                $expr = '<%if (value === \'\') {%>';
                if (value === '') {
                    ;
                    $p += '<li title="' + ($expr = '<%=text%>', $e(text)) + '" class="__mx-dropdown_multiple_-dropdown-item"><span class="__mx-dropdown_multiple_-item-link __mx-style_index_-ellipsis ';
                    $expr = '<%if (equal) {%>';
                    if (equal) {
                        ;
                        $p += ' __mx-dropdown_multiple_-active';
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '" mx-click="' + $viewId + '@{select}({item:\'' + ($expr = '<%@item%>', $i($$ref, item)) + '\'})">' + ($expr = '<%=text%>', $e(text)) + '</span></li>';
                    $expr = '<%}            else {%>';
                }
                else {
                    ;
                    $p += '<li mxa="_#:c" class="__mx-dropdown_multiple_-dropdown-item __mx-style_index_-clearfix"><ul>';
                    $expr = '<%for (; i < list.length; i++) {%>';
                    for (; i < list.length; i++) {
                        ;
                        $p += ' ';
                        $expr = '<%item = list[i]%>';
                        item = list[i];
                        $p += ' ';
                        $expr = '<%if (item && item.group) {%>';
                        if (item && item.group) {
                            ;
                            $p += ' ';
                            $expr = '<%i--;%>';
                            i--;
                            ;
                            $p += ' ';
                            $expr = '<%break;%>';
                            break;
                            ;
                            $p += ' ';
                            $expr = '<%}%>';
                        }
                        ;
                        $p += ' ';
                        $expr = '<%if (textKey && valueKey) {%>';
                        if (textKey && valueKey) {
                            ;
                            $p += ' ';
                            $expr = '<%text = item[textKey];                        value = item[valueKey]%>';
                            text = item[textKey];
                            value = item[valueKey];
                            $p += ' ';
                            $expr = '<%}                    else {%>';
                        }
                        else {
                            ;
                            $p += ' ';
                            $expr = '<%text = item;                        value = item;%>';
                            text = item;
                            value = item;
                            ;
                            $p += ' ';
                            $expr = '<%}%>';
                        }
                        ;
                        $p += ' ';
                        $expr = '<%var equal_1 = inArray(value + \'\', keys) > -1%>';
                        var equal_1 = inArray(value + '', keys) > -1;
                        $p += '<li mxa="_#:d" class="__mx-dropdown_multiple_-s-item"><span class="__mx-dropdown_multiple_-s-item-link __mx-style_index_-ellipsis';
                        $expr = '<%if (equal_1) {%>';
                        if (equal_1) {
                            ;
                            $p += ' __mx-dropdown_multiple_-active';
                            $expr = '<%}%>';
                        }
                        ;
                        $p += '" mx-click="' + $viewId + '@{select}({item:\'' + ($expr = '<%@item%>', $i($$ref, item)) + '\'})">' + ($expr = '<%=text%>', $e(text)) + '</span></li>';
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '</ul></li>';
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $expr = '<%}%>';
        }
        ;
        $p += '</ul><div mxs="_#:b" class="__mx-dropdown_multiple_-footer __mx-style_index_-clearfix"><div class="__mx-style_index_-fl"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + '@{hide}({enter:true})">确定</button><button type="button" class="__mx-style_index_-btn __mx-style_index_-ml5" mx-click="' + $viewId + '@{hide}()">取消</button></div><div class="__mx-style_index_-fl __mx-style_index_-ml10 __mx-dropdown_multiple_-splitter __mx-style_index_-pl10"><button type="button" class="__mx-style_index_-btn" mx-click="' + $viewId + '@{checkAll}()">全选/不选</button><button type="button" class="__mx-style_index_-btn __mx-style_index_-ml5" mx-click="' + $viewId + '@{invertCheck}()">反选</button></div></div>';
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
    msg += $expr + '\r\n\tat file:mx-dropdown/multiple.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        Monitor['@{setup}']();
        var node = $('#' + me.id);
        me['@{owner.node}'] = node;
        node.on('keydown', function (e) {
            if (e.keyCode == 13) { //enter
                me['@{toggle}<click>']();
            }
        });
        me.on('destroy', function () {
            node.off('keydown');
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id,
            inArray: $.inArray
        });
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
        me['@{disabled}'] = (ops.disabled + '') === 'true';
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
                    map[''] = emptyText;
                }
            }
        }
        me['@{selected}'] = selected;
        me['@{list.map}'] = map;
        me.updater.set({ list: list });
        return true;
    },
    '@{inside}': function (node) {
        var me = this;
        return Magix.inside(node, me.id);
    },
    render: function () {
        var me = this;
        var node = me['@{owner.node}'];
        node.addClass('__mx-dropdown_multiple_-dropdown');
        node[me['@{disabled}'] ? 'addClass' : 'removeClass']('__mx-dropdown_multiple_-notallowed').prop('tabindex', me['@{ui.disabled}'] ? -1 : 0);
        me['@{updateSelected}'](me['@{selected}']);
    },
    '@{hide}': function (ignoreBak) {
        var me = this;
        if (me['@{owner.node}'].hasClass('__mx-dropdown_multiple_-open')) {
            var data = me.updater.get();
            me['@{owner.node}'].removeClass('__mx-dropdown_multiple_-open').trigger('focusout');
            Monitor['@{remove}'](me);
            if (Magix.has(me, '@{bakSelected}')) {
                var fired = ignoreBak && data.selected !== me['@{bakSelected}'];
                if (ignoreBak) {
                    me['@{updateSelected}'](data.selected);
                }
                else {
                    me['@{updateSelected}'](me['@{bakSelected}']);
                }
                delete me['@{bakSelected}'];
                if (fired) {
                    me['@{owner.node}'].val(data.selected).trigger({
                        type: 'change',
                        keys: {
                            text: data.textKey,
                            value: data.valueKey
                        },
                        values: (data.selected + '').split(',')
                    });
                }
            }
        }
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{owner.node}'].hasClass('__mx-dropdown_multiple_-open')) {
            var r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['@{owner.node}'].addClass('__mx-dropdown_multiple_-open').trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('.__mx-dropdown_multiple_-active');
            var pos = active.position();
            if (pos) {
                var height = listNode.height();
                var stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    var top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor['@{add}'](me);
        }
    },
    '@{getText}': function (keys, textKey) {
        var me = this;
        var map = me['@{list.map}'];
        var text = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var entity = map[key] || {};
            if (textKey) {
                text.push(entity[textKey]);
            }
            else {
                text.push(key || entity);
            }
        }
        return text;
    },
    '@{updateSelected}': function (selected) {
        var me = this;
        selected = selected || '';
        selected += '';
        var textKey = me['@{textKey}'] || '';
        var valueKey = me['@{valueKey}'] || '';
        var parts = selected.split(',');
        var selectedText = '';
        var list = me['@{list}'];
        if (parts.length) {
            selectedText = me['@{getText}'](parts, textKey);
        }
        else {
            selected = list[0];
            selectedText = list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
                selectedText = selected[textKey];
            }
        }
        me.updater.digest({
            textKey: textKey,
            valueKey: valueKey,
            emptyText: me['@{emptyText}'],
            searchbox: me['@{ui.searchbox}'],
            phLabel: selected === '',
            selected: me['@{selected}'] = selected,
            selectedText: selectedText
        });
        me['@{owner.node}'].val(selected);
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
    '@{toggle}<click>': function () {
        var me = this;
        var node = me['@{owner.node}'];
        if (node.hasClass('__mx-dropdown_multiple_-open')) {
            me['@{hide}']();
        }
        else if (!node.hasClass('__mx-dropdown_multiple_-notallowed')) {
            me['@{show}']();
        }
    },
    '@{search}<keyup,paste>': function (e) {
        var me = this;
        clearTimeout(me['@{search.delay.timer}']);
        var val = $.trim(e.eventTarget.value);
        me.updater.set({ keyword: val });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    '@{select}<click>': function (e) {
        var me = this;
        var item = e.params.item;
        var updater = me.updater;
        var data = updater.get();
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = data.selected;
        }
        var valueKey = me['@{valueKey}'];
        var textKey = me['@{textKey}'];
        var selected = item;
        var selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        var keys = [''];
        if (selected) {
            keys = data.selected.split(',');
        }
        var idx = $.inArray('', keys);
        if (idx > -1) {
            keys.splice(idx, 1);
        }
        idx = $.inArray(selected + '', keys);
        if (idx == -1) {
            keys.push(selected);
        }
        else {
            keys.splice(idx, 1);
        }
        if (!keys.length) {
            if (data.emptyText) {
                keys = [''];
            }
        }
        selected = keys.join(',');
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{hide}<click>': function (e) {
        this['@{hide}'](e.params.enter);
    },
    '@{checkAll}<click>': function () {
        var me = this;
        var selected = me['@{selected}'];
        var list = me['@{list}'];
        var valueKey = me['@{valueKey}'];
        var updater = me.updater;
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = selected;
        }
        if (selected) {
            selected = '';
        }
        else {
            selected = '';
            for (var i = me['@{emptyText}'] ? 1 : 0, e = void 0; i < list.length; i++) {
                e = list[i];
                if (valueKey) {
                    if (!e.group) {
                        selected += e[valueKey] + ',';
                    }
                }
                else {
                    selected += e + ',';
                }
            }
            selected = selected.slice(0, -1);
        }
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    },
    '@{invertCheck}<click>': function () {
        var me = this;
        var selected = me['@{selected}'];
        var list = me['@{list}'];
        var valueKey = me['@{valueKey}'];
        var updater = me.updater;
        if (!Magix.has(me, '@{bakSelected}')) {
            me['@{bakSelected}'] = selected;
        }
        var oldSelected = selected.split(',');
        selected = '';
        for (var i = me['@{emptyText}'] ? 1 : 0, e = void 0; i < list.length; i++) {
            e = list[i];
            if (valueKey) {
                if (!e.group && $.inArray(e[valueKey] + '', oldSelected) == -1) {
                    selected += e[valueKey] + ',';
                }
            }
            else if ($.inArray(e + '', oldSelected) == -1) {
                selected += e + ',';
            }
        }
        selected = selected.slice(0, -1);
        updater.digest({
            selected: me['@{selected}'] = selected
        });
    }
});

});