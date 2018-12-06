/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/index",["magix","$","./suggest"],(require,exports,module)=>{
/*Magix,$*/
require("./suggest");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("__mx-taginput_index_","/* @dependent: ./index.less */\n.__mx-taginput_index_-owner {\n  height: auto;\n  min-height: 32px;\n  padding: 1px 7px;\n  position: relative;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  width: 340px;\n  line-height: 1;\n}\n.__mx-taginput_index_-owner:hover {\n  border-color: #ccc;\n}\n.__mx-taginput_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.__mx-taginput_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-taginput_index_-ipt {\n  height: auto;\n  cursor: text;\n}\n.__mx-taginput_index_-placeholder {\n  position: absolute;\n  left: 9px;\n  top: 8px;\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-taginput_index_-item {\n  position: relative;\n  display: inline-block;\n  margin: 1px;\n  cursor: pointer;\n  background-color: #eee;\n  border-radius: 4px;\n}\n.__mx-taginput_index_-ghost {\n  width: 1px;\n  visibility: hidden;\n}\n.__mx-taginput_index_-item-name {\n  float: left;\n  border-right: 1px solid #fff;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 4px;\n  max-width: 200px;\n  overflow: hidden;\n}\n.__mx-taginput_index_-item-delete {\n  width: 20px;\n  font-weight: bolder;\n  text-align: center;\n  color: #999;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 4px;\n}\n.__mx-taginput_index_-trigger {\n  border: none;\n  outline: none;\n  height: 24px;\n  line-height: 24px;\n  padding: 0;\n  width: 20px;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.__mx-taginput_index_-notallowed .__mx-taginput_index_-ipt,\n.__mx-taginput_index_-notallowed .__mx-taginput_index_-trigger,\n.__mx-taginput_index_-notallowed .__mx-taginput_index_-item-name,\n.__mx-taginput_index_-notallowed .__mx-taginput_index_-item-delete {\n  cursor: not-allowed;\n}\n");
var $ = require("$");
var INPUT_MIN_WIDTH = 20;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, items = $$.items, placeholder = $$.placeholder, textKey = $$.textKey, disabled = $$.disabled, list = $$.list, valueKey = $$.valueKey, width = $$.width, scrollTop = $$.scrollTop; var $expr, $art, $line; try {
    $p += '<div mxv class="__mx-taginput_index_-ipt __mx-style_index_-unselectable" mx-click="' + $viewId + '@{focus}()" id="ipt_' + ($expr = '<%=viewId%>', $e(viewId)) + '">';
    $expr = '<%if (!items.length && placeholder) {%>';
    if (!items.length && placeholder) {
        ;
        $p += '<div mxa="_~:_" class="__mx-taginput_index_-placeholder">' + ($expr = '<%=placeholder%>', $e(placeholder)) + '</div>';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $expr = '<%if (items.length) {%>';
    if (items.length) {
        ;
        $p += ' ';
        $expr = '<%for (var i = 0; i < items.length; i++) {%>';
        for (var i = 0; i < items.length; i++) {
            ;
            $p += ' ';
            $expr = '<%var one = items[i];%>';
            var one = items[i];
            ;
            $p += '<div mxa="_~:a" class="__mx-taginput_index_-item" mx-contextmenu="' + $viewId + '@{prevent}()"><div mxa="_~:b" class="__mx-taginput_index_-item-name __mx-style_index_-ellipsis">' + ($expr = '<%=textKey ? one[textKey] : one%>', $e(textKey ? one[textKey] : one)) + '</div><div class="__mx-taginput_index_-item-delete" mx-click="' + $viewId + '@{delete}({idx:' + ($expr = '<%!i%>', $n(i)) + '})">x</div></div>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxa="_~:c" class="__mx-taginput_index_-item __mx-taginput_index_-ghost" mx-click="' + $viewId + 'stop()"><div class="__mx-taginput_index_-item-delete" mx-click="' + $viewId + '@{delete}({idx:' + ($expr = '<%!i%>', $n(i)) + '})">x</div></div>';
        $expr = '<%}%>';
    }
    ;
    $p += '<input mx-keydown="' + $viewId + '@{check}()" mx-keyup="' + $viewId + '@{check}()" mx-input="' + $viewId + '@{check}()" mx-paste="' + $viewId + '@{check}()" mx-pick="' + $viewId + '@{add}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" mx-showlist="' + $viewId + '@{toggleList}()" mx-hidelist="' + $viewId + '@{toggleList}()" ';
    $expr = '<%if (disabled) {%>';
    if (disabled) {
        ;
        $p += ' disabled="disabled" ';
        $expr = '<%}%>';
    }
    ;
    $p += ' class="__mx-taginput_index_-trigger" autocomplete="off"/>';
    $expr = '<%if (!disabled) {%>';
    if (!disabled) {
        ;
        $p += '<div mxv="list,textKey,valueKey,scrollTop" mx-view="mx-taginput/suggest?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&textKey=' + ($expr = '<%@textKey%>', $i($$ref, textKey)) + '&valueKey=' + ($expr = '<%@valueKey%>', $i($$ref, valueKey)) + '&relateIds=ipt_' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '&offsetLeft=-11&width=' + ($expr = '<%!$eu(width)%>', $eu(width)) + '&scrollTop=' + ($expr = '<%@scrollTop%>', $i($$ref, scrollTop)) + '" class="__mx-style_index_-pa __mx-style_index_-none"></div>';
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
        me['@{data.list}'] = extra.list || [];
        me['@{owner.node}'] = $('#' + me.id);
        me.updater.set({
            disabled: extra.disabled,
            placeholder: extra.placeholder || '',
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['@{selected.update}'](extra.selected);
    },
    '@{get.suggest.list}': function () {
        var me = this;
        var updater = me.updater;
        var sMap = updater.get('sMap');
        var valueKey = updater.get('valueKey');
        var list = me['@{data.list}'];
        var s = [];
        for (var i = 0, one = void 0, key = void 0; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (!sMap[key]) {
                s.push(one);
            }
        }
        return s;
    },
    render: function () {
        var me = this;
        var rNode = $('#' + me.id);
        var w = rNode.outerWidth();
        if (w === 0)
            w = 340;
        me.updater.digest({
            width: w,
            list: me['@{get.suggest.list}'](),
            viewId: me.id
        });
        rNode.addClass('__mx-taginput_index_-owner');
        me['@{relate.node}'] = rNode;
        me['@{trigger.update}']();
        var data = me.updater.get();
        if (data.disabled) {
            rNode.addClass('__mx-taginput_index_-notallowed');
        }
    },
    '@{trigger.update}': function () {
        var me = this;
        var rNode = me['@{relate.node}'];
        me['@{trigger.node}'] = rNode.find('input');
        me['@{trigger.node}'].width(INPUT_MIN_WIDTH);
        var width = $('#ipt_' + me.id).width() - me['@{trigger.node}'].position().left;
        me['@{trigger.node}'].width(width >= INPUT_MIN_WIDTH ? width : INPUT_MIN_WIDTH);
    },
    '@{selected.update}': function (selected) {
        var me = this;
        selected = selected || '';
        selected = (selected + '').split(',');
        var items = [];
        var sMap = {};
        var updater = me.updater;
        var valueKey = updater.get('valueKey');
        var list = me['@{data.list}'];
        var ssMap = Magix.toMap(selected);
        for (var i = 0, one = void 0, key = void 0; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (Magix.has(ssMap, key)) {
                sMap[key] = 1;
                items.push(one);
            }
        }
        me.updater.set({
            sMap: sMap,
            items: items
        });
        me['@{owner.node}'].val(selected.join(','));
    },
    val: function (selected) {
        var me = this;
        if (selected) {
            me['@{selected.update}'](selected);
            me.updater.digest({
                list: me['@{get.suggest.list}']()
            });
            me['@{trigger.update}']();
            me['@{relate.node}'].removeClass('__mx-style_index_-input-focus');
            me['@{fire.event}']();
        }
        return me.updater.get('items');
    },
    '@{fire.event}': function () {
        var me = this;
        var updater = me.updater;
        var ids = [];
        var items = updater.get('items');
        var valueKey = updater.get('valueKey');
        for (var i = 0, one = void 0; i < items.length; i++) {
            one = items[i];
            ids.push(valueKey ? one[valueKey] : one);
        }
        $('#' + me.id).val(ids.join(',')).trigger({
            type: 'change',
            ids: ids,
            items: items
        });
    },
    '@{ui.focus}': function () {
        var me = this;
        clearTimeout(me['@{focus.timer}']);
        me['@{temp.hold.event}'] = true;
        me['@{trigger.node}'].focus();
        me['@{focus.timer}'] = setTimeout(me.wrapAsync(function () {
            delete me['@{temp.hold.event}'];
        }), 20);
    },
    '@{check}<keydown,input,paste,keyup>': function (e) {
        e.stopPropagation();
        var me = this;
        var val = e.eventTarget.value;
        if (me['@{last.value}'] !== val) {
            me['@{last.value}'] = val;
            var holder = me['@{relate.node}'].find('.__mx-taginput_index_-placeholder');
            if (val) {
                holder.hide();
            }
            else {
                holder.show();
            }
        }
        if (!val && e.type == 'keydown' && e.keyCode == 8) {
            var idx = me.updater.get('items').length - 1;
            if (idx > -1) {
                me['@{delete}<click>']({
                    params: {
                        idx: idx
                    }
                });
                me['@{ui.focus}']();
            }
        }
    },
    '@{add}<pick>': function (e) {
        e.stopPropagation();
        var me = this;
        var updater = me.updater;
        var items = updater.get('items');
        var sMap = updater.get('sMap');
        var item = e.item;
        var valueKey = updater.get('valueKey');
        var id = valueKey ? item[valueKey] : item;
        if (sMap[id])
            return;
        sMap[id] = 1;
        items.push(item);
        updater.digest({
            items: items,
            scrollTop: e.scrollTop,
            list: me['@{get.suggest.list}']()
        });
        me['@{trigger.update}']();
        me['@{ui.focus}']();
        me['@{fire.event}']();
    },
    '@{focus}<click>': function () {
        var me = this;
        if (!me['@{owner.node}'].hasClass('__mx-taginput_index_-notallowed')) {
            me['@{trigger.node}'].focus();
        }
    },
    '@{delete}<click>': function (e) {
        var me = this;
        if (me['@{owner.node}'].hasClass('__mx-taginput_index_-notallowed'))
            return;
        var updater = me.updater;
        var items = updater.get('items');
        var sMap = updater.get('sMap');
        var valueKey = updater.get('valueKey');
        var idx = e.params.idx;
        var item = items[idx];
        delete sMap[valueKey ? item[valueKey] : item];
        items.splice(e.params.idx, 1);
        updater.digest({
            items: items,
            list: me['@{get.suggest.list}']()
        });
        me['@{trigger.update}']();
        me['@{fire.event}']();
        me['@{ui.focus}']();
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
        var rNode = this['@{relate.node}'];
        if (e.type == 'focusin') {
            rNode.addClass('__mx-style_index_-input-focus');
        }
    },
    '@{toggleList}<showlist,hidelist>': function (e) {
        var me = this;
        if (!me['@{temp.hold.event}']) {
            $('#' + this.id).trigger({
                type: e.type == 'showlist' ? 'focusin' : 'focusout'
            });
            if (e.type == 'hidelist') {
                var rNode = this['@{relate.node}'];
                rNode.removeClass('__mx-style_index_-input-focus');
            }
        }
    }
});

});