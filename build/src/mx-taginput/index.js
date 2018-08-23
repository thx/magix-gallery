/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/index",["magix","$","./suggest"],(require,exports,module)=>{
/*Magix,$*/
require("./suggest");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-taginput_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-taginput_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-taginput_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-taginput/index\"] {\n  position: relative;\n  width: 320px;\n  height: auto;\n  min-height: 32px;\n  padding: 2px 6px;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  transition: border-color 0.25s;\n}\n[mx-view*=\"mx-taginput/index\"]:hover {\n  border-color: #ccc;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt {\n  height: auto;\n  cursor: text;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-placeholder,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item {\n  height: 24px;\n  line-height: 24px;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-placeholder {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  margin-top: -12px;\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger {\n  float: left;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item {\n  float: left;\n  position: relative;\n  max-width: 220px;\n  padding-right: 26px;\n  padding-left: 6px;\n  margin-right: 4px;\n  background-color: #eee;\n  border-radius: 4px;\n  cursor: pointer;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 20px;\n  line-height: 24px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  color: #ccc;\n  transition: color 0.25s;\n  border-left: 1px solid #fff;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover {\n  color: #999;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger {\n  width: 20px;\n  padding: 0;\n  border: none;\n  outline: none;\n  background: transparent;\n}\n[mx-view*=\"mx-taginput/index\"][mx-disabled] {\n  cursor: not-allowed;\n  background-color: #fafafa;\n}\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-ipt,\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-trigger,\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-item-name,\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-item-delete {\n  cursor: not-allowed;\n}\n[mx-view*=\"mx-taginput/index\"][mx-disabled]:hover {\n  border-color: #e6e6e6;\n}\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover {\n  color: #ccc;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-suggest-wrapper {\n  display: none;\n  position: absolute;\n}\n");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, items = $$.items, placeholder = $$.placeholder, disabled = $$.disabled, suggest = $$.suggest, width = $$.width, scrollTop = $$.scrollTop; var $expr, $art, $line; try {
    $p += '<div mxv class="_zs_gallery_mx-taginput_index_-ipt unselectable clearfix" mx-click="' + $viewId + '@{focus}()" id="ipt_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '">';
    $line = 2;
    $art = 'if (!items.length&&placeholder)';
    ;
    $p += '';
    $expr = '<%if (!items.length && placeholder) {%>';
    if (!items.length && placeholder) {
        ;
        $p += '<span mxa="_zs_gallerycC:_" class="_zs_gallery_mx-taginput_index_-placeholder">';
        $line = 3;
        $art = '=placeholder';
        ;
        $p += '' + ($expr = '<%=placeholder%>', $e(placeholder)) + '</span>';
        $line = 4;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 6;
    $art = 'if (items.length)';
    ;
    $p += '';
    $expr = '<%if (items.length) {%>';
    if (items.length) {
        ;
        $p += ' ';
        $line = 7;
        $art = 'each items as one idx';
        ;
        $p += '';
        $expr = '<%for (var idx = 0, $art_cxsmha$art_c = items.length; idx < $art_cxsmha$art_c; idx++) {        var one = items[idx]%>';
        for (var idx = 0, $art_cxsmha$art_c = items.length; idx < $art_cxsmha$art_c; idx++) {
            var one = items[idx];
            $p += '<span mxa="_zs_gallerycC:a" class="_zs_gallery_mx-taginput_index_-item clearfix" mx-contextmenu="' + $viewId + 'prevent()">';
            $line = 9;
            $art = '=one.text';
            ;
            $p += '' + ($expr = '<%=one.text%>', $e(one.text)) + '<i class="mc-iconfont _zs_gallery_mx-taginput_index_-item-delete" mx-click="' + $viewId + '@{delete}({idx:';
            $line = 10;
            $art = '=idx';
            ;
            $p += '' + ($expr = '<%=idx%>', $e(idx)) + '})">&#xe603;</i></span>';
            $line = 12;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 13;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<input class="_zs_gallery_mx-taginput_index_-trigger" autocomplete="off" mx-keydown="' + $viewId + '@{check}()" mx-keyup="' + $viewId + '@{check}()" mx-input="' + $viewId + '@{check}()" mx-paste="' + $viewId + '@{check}()" mx-pick="' + $viewId + '@{add}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" mx-showlist="' + $viewId + '@{toggleList}()" mx-hidelist="' + $viewId + '@{toggleList}()" ';
    $line = 26;
    $art = 'if disabled';
    ;
    $p += '';
    $expr = '<%if (disabled) {%>';
    if (disabled) {
        ;
        $p += ' disabled="true" ';
        $line = 26;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '/>';
    $line = 28;
    $art = 'if (!disabled && suggest && suggest.length)';
    ;
    $p += '';
    $expr = '<%if (!disabled && suggest && suggest.length) {%>';
    if (!disabled && suggest && suggest.length) {
        ;
        $p += '<div mxv="suggest,scrollTop" mx-view="mx-taginput/suggest?list=';
        $line = 31;
        $art = '@suggest';
        ;
        $p += '' + ($expr = '<%@suggest%>', $i($$ref, suggest)) + '&relateIds=ipt_';
        $line = 32;
        $art = '=viewId';
        ;
        $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '&offsetLeft=-7&width=';
        $line = 34;
        $art = '=width';
        ;
        $p += '' + ($expr = '<%!$eu(width)%>', $eu(width)) + '&scrollTop=';
        $line = 35;
        $art = '@scrollTop';
        ;
        $p += '' + ($expr = '<%@scrollTop%>', $i($$ref, scrollTop)) + '" class="_zs_gallery_mx-taginput_index_-suggest-wrapper"></div>';
        $line = 36;
        $art = '/if';
        ;
        $p += '';
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
        var textKey = extra.textKey || 'text', valueKey = extra.valueKey || 'value';
        var list = extra.list || [];
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
        var selected = extra.selected || '';
        selected = (selected + '').split(',');
        var map = Magix.toMap(list, 'value');
        var items = [];
        selected.forEach(function (v) {
            if (map[v]) {
                items.push(map[v]);
            }
        });
        me['@{data.list}'] = list;
        me['@{owner.node}'] = $('#' + me.id);
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me.updater.set({
            disabled: disabledNode && (disabledNode.length > 0),
            placeholder: extra.placeholder || '请选择',
            textKey: textKey,
            valueKey: valueKey,
            map: map,
            items: items
        });
    },
    render: function () {
        var me = this;
        var node = me['@{owner.node}'];
        var w = node.outerWidth();
        if (w === 0) {
            w = 320;
        }
        var items = me.updater.get('items');
        me.updater.digest({
            suggest: me['@{get.suggest.list}'](items),
            width: w,
            viewId: me.id
        });
        me['@{val}']();
        me['@{trigger.update}']();
    },
    '@{val}': function () {
        var me = this;
        var items = me.updater.get('items');
        var selected = items.map(function (item) {
            return item.value;
        });
        me['@{owner.node}'].val(selected.join(','));
    },
    '@{trigger.update}': function () {
        var me = this;
        var minWidth = 20;
        var node = me['@{owner.node}'];
        me['@{trigger.node}'] = node.find('input');
        me['@{trigger.node}'].width(minWidth);
        var width = $('#ipt_' + me.id).width() - me['@{trigger.node}'].position().left;
        me['@{trigger.node}'].width(width >= minWidth ? width : minWidth);
    },
    '@{get.suggest.list}': function (items) {
        var me = this;
        var list = me['@{data.list}'];
        var data = me.updater.get();
        var map = data.map;
        var selected = items.map(function (item) {
            return item.value + '';
        });
        var s = [];
        for (var i = 0, one = void 0, key = void 0; i < list.length; i++) {
            one = list[i];
            if (selected.indexOf(one.value + '') < 0) {
                s.push(one);
            }
        }
        return s;
    },
    /**
     * 输入框获取焦点
     */
    '@{focus}<click>': function () {
        var me = this;
        var disabled = me.updater.get('disabled');
        if (!disabled) {
            me['@{trigger.node}'].focus();
        }
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
            var holder = me['@{owner.node}'].find('._zs_gallery_mx-taginput_index_-placeholder');
            if (val) {
                holder.hide();
            }
            else {
                holder.show();
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
                me['@{ui.focus}']();
            }
        }
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
    '@{add}<pick>': function (e) {
        e.stopPropagation();
        var me = this;
        var updater = me.updater;
        var items = updater.get('items');
        var item = e.item;
        items.push(item);
        updater.digest({
            items: items,
            scrollTop: e.scrollTop,
            suggest: me['@{get.suggest.list}'](items)
        });
        me['@{val}']();
        me['@{trigger.update}']();
        me['@{ui.focus}']();
        me['@{fire.event}']();
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
            items: items,
            suggest: me['@{get.suggest.list}'](items)
        });
        me['@{val}']();
        me['@{trigger.update}']();
        me['@{fire.event}']();
        me['@{ui.focus}']();
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
        var rNode = this['@{owner.node}'];
        if (e.type == 'focusin') {
            rNode.addClass('input-focus');
        }
    },
    '@{toggleList}<showlist,hidelist>': function (e) {
        var me = this;
        var node = me['@{owner.node}'];
        if (!me['@{temp.hold.event}']) {
            node.trigger({
                type: e.type == 'showlist' ? 'focusin' : 'focusout'
            });
            if (e.type == 'hidelist') {
                node.removeClass('input-focus');
            }
        }
    }
});

});