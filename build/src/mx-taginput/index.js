/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/index",["magix","$","../mx-medusa/util","../mx-util/monitor"],(require,exports,module)=>{
/*Magix,$,I18n,Monitor*/

var Magix = require("magix");
var $ = require("$");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-util/monitor");
Magix.applyStyle("_zs_gallery_mx-taginput_index_","[mx-view*=\"mx-taginput/index\"] {\n  --tag-left-padding: 10px;\n  --tag-gap: 2px;\n  --tag-height: calc(var(--input-height) - (var(--tag-gap) * 4) - 2px);\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt {\n  position: relative;\n  height: auto;\n  border-style: solid;\n  border-width: 1px;\n  border-color: var(--border-highlight);\n  border-radius: var(--border-radius);\n  padding-top: var(--tag-gap);\n  padding-bottom: var(--tag-gap);\n  padding-left: calc(var(--tag-left-padding) - 4px);\n  padding-right: calc(var(--tag-left-padding) - 4px);\n  cursor: text;\n  transition: border-color var(--duration);\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt:hover {\n  border-color: var(--border-highlight-hover);\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-placeholder,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item {\n  height: var(--tag-height);\n  line-height: var(--tag-height);\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-placeholder {\n  position: absolute;\n  top: calc(var(--tag-gap) * 2);\n  left: var(--tag-left-padding);\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger {\n  float: left;\n  margin-top: var(--tag-gap);\n  margin-bottom: var(--tag-gap);\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item {\n  float: left;\n  position: relative;\n  max-width: 220px;\n  padding-right: 26px;\n  padding-left: 6px;\n  margin-right: calc(var(--tag-gap) * 2);\n  background-color: var(--color-bg-hover);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 20px;\n  line-height: var(--tag-height);\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  color: #ccc;\n  transition: color var(--duration);\n  border-left: 1px solid #fff;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover {\n  color: #999;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: transparent;\n}\n[mx-view*=\"mx-taginput/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-taginput_index_-ipt,\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-ipt {\n  cursor: not-allowed;\n  background-color: var(--color-bg);\n  border-color: var(--color-border);\n}\n[mx-view*=\"mx-taginput/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-taginput_index_-ipt:hover,\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-ipt:hover {\n  border-color: var(--color-border);\n}\n[mx-view*=\"mx-taginput/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-taginput_index_-item,\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-item {\n  cursor: not-allowed;\n  color: #999;\n}\n[mx-view*=\"mx-taginput/index\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover,\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover {\n  color: #ccc;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-tag-item {\n  margin: 2px 0;\n  padding: 0 10px;\n  cursor: pointer;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  white-space: nowrap;\n  word-break: break-all;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-tag-item:hover,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-tag-item._zs_gallery_mx-taginput_index_-item-hover {\n  background-color: var(--color-bg-hover);\n}\n");
var MinWidth = 10;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, items = $$.items, placeholder = $$.placeholder, inputWidth = $$.inputWidth, iv = $$.iv, disabled = $$.disabled, suggestLeft = $$.suggestLeft, show = $$.show, loading = $$.loading, suggest = $$.suggest, emptyText = $$.emptyText; var $expr, $art, $line; try {
    $p += '<div mxv class="_zs_gallery_mx-taginput_index_-ipt unselectable clearfix" mx-click="' + $viewId + '@{focus}()" id="ipt_';
    $line = 3;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '">';
    $line = 5;
    $art = 'if (!items.length)';
    ;
    $expr = '<%if (!items.length) {%>';
    if (!items.length) {
        ;
        $p += '<span mxa="_zs_galleryeV:_" class="_zs_gallery_mx-taginput_index_-placeholder">';
        $line = 6;
        $art = '=placeholder';
        ;
        $p += ($expr = '<%=placeholder%>', $e(placeholder)) + '</span>';
        $line = 7;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 9;
    $art = 'if (items.length)';
    ;
    $expr = '<%if (items.length) {%>';
    if (items.length) {
        ;
        $p += ' ';
        $line = 10;
        $art = 'each items as one idx';
        ;
        $expr = '<%for (var idx = 0, $art_cmmkvi$art_c = items.length; idx < $art_cmmkvi$art_c; idx++) {        var one = items[idx]%>';
        for (var idx = 0, $art_cmmkvi$art_c = items.length; idx < $art_cmmkvi$art_c; idx++) {
            var one = items[idx];
            $p += '<span mxa="_zs_galleryeV:a" class="_zs_gallery_mx-taginput_index_-item clearfix" mx-contextmenu="' + $viewId + 'prevent()">';
            $line = 12;
            $art = '=one.text';
            ;
            $p += ($expr = '<%=one.text%>', $e(one.text)) + '<i class="mc-iconfont _zs_gallery_mx-taginput_index_-item-delete" mx-click="' + $viewId + '@{delete}({idx:';
            $line = 13;
            $art = '=idx';
            ;
            $p += ($expr = '<%=idx%>', $e(idx)) + '})">&#xe603;</i></span>';
            $line = 15;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 16;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<input class="_zs_gallery_mx-taginput_index_-trigger" autocomplete="off" style="width: ';
    $line = 19;
    $art = '=inputWidth';
    ;
    $p += ($expr = '<%=inputWidth%>', $e(inputWidth)) + 'px;" value="';
    $line = 20;
    $art = '=iv';
    ;
    $p += ($expr = '<%=iv%>', $e(iv)) + '" mx-keydown="' + $viewId + '@{check}()" mx-keyup="' + $viewId + '@{check}()" mx-paste="' + $viewId + '@{check}()" mx-focusin="' + $viewId + '@{check}()" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{stop}()" ';
    $line = 27;
    $art = 'if disabled';
    ;
    $expr = '<%if (disabled) {%>';
    if (disabled) {
        ;
        $p += ' disabled="true" ';
        $line = 27;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '/>';
    $line = 29;
    $art = 'if (!disabled)';
    ;
    $expr = '<%if (!disabled) {%>';
    if (!disabled) {
        ;
        $p += '<div id="ul_';
        $line = 30;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '" style="left: ';
        $line = 31;
        $art = '=suggestLeft';
        ;
        $p += ($expr = '<%=suggestLeft%>', $e(suggestLeft)) + 'px;" class="mx-output mx-output-bottom ';
        $line = 32;
        $art = 'if show';
        ;
        $expr = '<%if (show) {%>';
        if (show) {
            ;
            $p += ' mx-output-open ';
            $line = 32;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-mouseout="' + $viewId + '@{out}()" mx-contextmenu="' + $viewId + '@{prevent}()"><ul mxa="_zs_galleryeV:b" class="mx-output-list">';
        $line = 36;
        $art = 'if loading';
        ;
        $expr = '<%if (loading) {%>';
        if (loading) {
            ;
            $p += '<li mxs="_zs_galleryeV:_"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';
            $line = 40;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' ';
            $line = 41;
            $art = 'if (suggest && suggest.length)';
            ;
            $expr = '<%if (suggest && suggest.length) {%>';
            if (suggest && suggest.length) {
                ;
                $p += ' ';
                $line = 42;
                $art = 'each suggest as item idx';
                ;
                $expr = '<%for (var idx = 0, $art_cysnmnltl$art_c = suggest.length; idx < $art_cysnmnltl$art_c; idx++) {                var item = suggest[idx]%>';
                for (var idx = 0, $art_cysnmnltl$art_c = suggest.length; idx < $art_cysnmnltl$art_c; idx++) {
                    var item = suggest[idx];
                    $p += '<li class="_zs_gallery_mx-taginput_index_-tag-item" mx-click="' + $viewId + '@{add}({item:\'';
                    $line = 44;
                    $art = '@item';
                    ;
                    $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" data-idx="';
                    $line = 45;
                    $art = '=idx';
                    ;
                    $p += ($expr = '<%=idx%>', $e(idx)) + '" id="sg_';
                    $line = 46;
                    $art = '=viewId';
                    ;
                    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                    $line = 46;
                    $art = '=idx';
                    ;
                    $p += ($expr = '<%=idx%>', $e(idx)) + '">';
                    $line = 47;
                    $art = '!item.text';
                    ;
                    $p += ($expr = '<%!item.text%>', $n(item.text)) + '</li>';
                    $line = 49;
                    $art = '/each';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 50;
                $art = 'else';
                ;
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += '<li mxa="_zs_galleryeV:c" class="text-center color-9 pt20 pb20">';
                $line = 51;
                $art = '=emptyText';
                ;
                $p += ($expr = '<%=emptyText%>', $e(emptyText)) + '</li>';
                $line = 52;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 53;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</ul></div>';
        $line = 56;
        $art = '/if';
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
    msg += $expr + '\r\n\tat file:mx-taginput/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        var textKey = extra.textKey || 'text', valueKey = extra.valueKey || 'value', max = extra.max | 0;
        me['@{dynamic.list}'] = (extra.dynamicList + '' === 'true');
        me.updater.set({
            textKey: textKey,
            valueKey: valueKey
        });
        var list = me.rebuildList(extra.list || []);
        var selected = extra.selected || '';
        selected = (selected + '').split(',');
        // 当前已选中的
        var items = [];
        var selectedItems = extra.items || [];
        if (selectedItems && selectedItems.length) {
            items = selectedItems;
        }
        else {
            var map_1 = Magix.toMap(list, 'value');
            selected.forEach(function (v) {
                if (map_1[v]) {
                    items.push(map_1[v]);
                }
            });
        }
        me['@{data.list}'] = me['@{dynamic.list}'] ? [] : list;
        me['@{owner.node}'] = $('#' + me.id);
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        var disabled = (extra.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        me.updater.set({
            viewId: me.id,
            disabled: disabled,
            placeholder: extra.placeholder || I18n['choose'],
            emptyText: I18n['empty.text'],
            inputWidth: MinWidth,
            items: items,
            max: max
        });
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    rebuildList: function (list) {
        var updater = this.updater;
        var textKey = updater.get('textKey'), valueKey = updater.get('valueKey');
        if (typeof list[0] === 'object') {
            // 本身是个对象
            list = list.map(function (item) {
                return {
                    text: item[textKey],
                    value: item[valueKey]
                };
            });
        }
        else {
            // 直接value列表
            list = list.map(function (value) {
                return {
                    text: value,
                    value: value
                };
            });
        }
        return list;
    },
    render: function () {
        this.updater.digest();
        this['@{ui.update}']();
        this['@{val}']();
    },
    '@{val}': function () {
        var me = this;
        var items = me.updater.get('items');
        var selected = items.map(function (item) {
            return item.value;
        });
        me['@{owner.node}'].val(selected.join(','));
    },
    /**
     * 更新input的宽度，提示框位置，提示框数据
     */
    '@{ui.update}': function () {
        var me = this;
        me['@{ui.index}'] = -1;
        var list = me['@{data.list}'];
        var items = me.updater.get('items');
        // 输入框内容
        var iv = me['@{last.value}'] || '';
        var suggest = [];
        if (me['@{dynamic.list}']) {
            suggest = list;
        }
        else {
            var selected = items.map(function (item) {
                return item.value + '';
            });
            for (var i = 0, one = void 0; i < list.length; i++) {
                one = list[i];
                if ((selected.indexOf(one.value + '') < 0) && ((one.value + '').indexOf(iv) > -1 || (one.text + '').indexOf(iv) > -1)) {
                    suggest.push(one);
                }
            }
        }
        var tNode = me['@{owner.node}'].find('input');
        tNode.width(MinWidth);
        var offset = tNode.position();
        var inputWidth = $('#ipt_' + me.id).width() - offset.left;
        me.updater.digest({
            iv: iv,
            suggest: suggest,
            inputWidth: inputWidth >= MinWidth ? inputWidth : MinWidth,
            suggestLeft: offset.left - 6
        });
    },
    /**
     * 输入框获取焦点
     */
    '@{focus}<click>': function () {
        var me = this;
        var disabled = me.updater.get('disabled');
        if (!disabled) {
            me['@{owner.node}'].find('input').focus();
        }
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{check}<focusin,paste,keyup,keydown>': function (e) {
        e.stopPropagation();
        var me = this;
        if (me['@{suggest.delay.timer}']) {
            clearTimeout(me['@{suggest.delay.timer}']);
        }
        var val = e.eventTarget.value;
        if (me['@{last.value}'] !== val) {
            me['@{last.value}'] = val;
            var holder = me['@{owner.node}'].find('._zs_gallery_mx-taginput_index_-placeholder');
            if (val) {
                holder.hide();
            }
            else {
                holder.show();
            }
        }
        if (e.type != 'keydown') {
            var suggest = me.updater.get('suggest');
            if (e.keyCode == 40) {
                me['@{normal}']();
                me['@{ui.index}']++;
                if (me['@{ui.index}'] >= suggest.length) {
                    me['@{ui.index}'] = 0;
                }
                me['@{highlight}']();
            }
            else if (e.keyCode == 38) {
                me['@{normal}']();
                me['@{ui.index}']--;
                if (me['@{ui.index}'] < 0) {
                    me['@{ui.index}'] = suggest.length - 1;
                }
                me['@{highlight}']();
            }
            else if (e.keyCode == 13) {
                // 回车
                if (me['@{ui.index}'] > -1 && me['@{ui.index}'] < suggest.length) {
                    var item = suggest[me['@{ui.index}']];
                    me['@{normal}']();
                    me['@{add}'](item);
                }
            }
            else {
                me['@{suggest.delay.timer}'] = setTimeout(me.wrapAsync(function () {
                    var items = me.updater.get('items');
                    var max = me.updater.get('max');
                    if (max <= 0 || items.length < max) {
                        me['@{ui.update}']();
                        me['@{show}']();
                    }
                }), 250);
            }
        }
        if (!val && e.type == 'keydown' && e.keyCode == 8) {
            // 删除
            var items = me.updater.get('items');
            var idx = items.length - 1;
            if (idx > -1) {
                me['@{delete}<click>']({
                    params: {
                        idx: idx
                    }
                });
                if (me['@{dynamic.list}']) {
                    me['@{hide}']();
                }
            }
        }
    },
    '@{fire.event}': function () {
        var me = this;
        var updater = me.updater;
        var selected = [];
        var items = updater.get('items');
        var valueKey = updater.get('valueKey');
        for (var i = 0, one = void 0; i < items.length; i++) {
            one = items[i];
            selected.push(valueKey ? one[valueKey] : one);
        }
        selected = selected.join(',');
        me['@{owner.node}'].val(selected).trigger({
            type: 'change',
            selected: selected,
            items: items
        });
    },
    '@{add}<click>': function (e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        this['@{add}'](e.params.item);
    },
    '@{add}': function (item) {
        var me = this;
        var updater = me.updater;
        var items = updater.get('items');
        items.push(item);
        updater.digest({
            items: items
        });
        me['@{last.value}'] = '';
        me['@{val}']();
        me['@{ui.update}']();
        me['@{fire.event}']();
        var max = me.updater.get('max'), items = me.updater.get('items');
        if (max > 0 && items.length >= max) {
            me['@{hide}']();
        }
        else {
            me['@{ui.focus}']();
            if (me['@{dynamic.list}']) {
                me['@{hide}']();
            }
        }
    },
    '@{delete}<click>': function (event) {
        var me = this;
        var data = me.updater.get();
        if (data.disabled) {
            return;
        }
        var items = data.items;
        var idx = event.params.idx;
        items.splice(idx, 1);
        me.updater.digest({
            items: items
        });
        me['@{last.value}'] = '';
        me['@{val}']();
        me['@{ui.update}']();
        me['@{fire.event}']();
        me['@{ui.focus}']();
    },
    '@{ui.focus}': function () {
        var me = this;
        if (me['@{dynamic.list}']) {
            me['@{owner.node}'].find('input').focus();
        }
        else {
            var suggest = me.updater.get('suggest');
            if (suggest && suggest.length) {
                me['@{owner.node}'].find('input').focus();
            }
            else {
                me['@{hide}']();
            }
        }
    },
    '@{normal}': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.removeClass('_zs_gallery_mx-taginput_index_-item-hover');
    },
    '@{highlight}': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.addClass('_zs_gallery_mx-taginput_index_-item-hover');
        if (node.length) {
            me['@{temp.ignore}'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            var height = node.outerHeight();
            var scrolled = (me['@{ui.index}'] + 1) * height;
            var rNode = $('#ul_' + me.id);
            var vHeight = rNode.height();
            var sTop = rNode.prop('scrollTop');
            var items = Math.ceil(vHeight / height);
            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            }
            else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['@{ui.index}'] + 2 - items) * height);
            }
        }
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            me.updater.digest({
                show: false
            });
            Monitor['@{remove}'](me);
            if (me['@{dynamic.list}']) {
                me['@{data.list}'] = [];
            }
        }
    },
    '@{show}': function () {
        var me = this;
        // 外部需要动态更新时
        me['@{owner.node}'].trigger({
            type: 'show',
            keyword: me['@{last.value}']
        });
        var suggest = me.updater.get('suggest');
        if (!me['@{ui.show}'] && suggest && suggest.length) {
            me['@{ui.show}'] = true;
            me.updater.digest({
                show: true
            });
            Monitor['@{add}'](me);
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{out}<mouseout>': function (e) {
        var flag = !Magix.inside(e.relateTarget, e.eventTarget);
        if (flag) {
            var me = this;
            me['@{normal}']();
            me['@{ui.index}'] = -1;
        }
    },
    showLoading: function () {
        var me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            me.updater.digest({
                show: true,
                loading: true,
                iv: me['@{last.value}']
            });
            Monitor['@{add}'](me);
        }
    },
    hideLoading: function () {
        this.updater.digest({
            loading: false
        });
    },
    /**
     * 外部更新可选项
     */
    update: function (suggest) {
        var me = this;
        suggest = this.rebuildList(suggest);
        this['@{data.list}'] = suggest;
        me.updater.digest({
            iv: me['@{last.value}'],
            suggest: suggest
        });
    }
});

});