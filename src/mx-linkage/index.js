/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-linkage/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
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
Magix.applyStyle("__mx-linkage_index_","/* @dependent: ./index.less */\n.__mx-linkage_index_-owner {\n  height: 32px;\n  padding: 0 9px;\n  position: relative;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  width: 340px;\n  line-height: 32px;\n  z-index: 10;\n}\n.__mx-linkage_index_-owner:hover {\n  border-color: #ccc;\n}\n.__mx-linkage_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.__mx-linkage_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-linkage_index_-placeholder {\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-linkage_index_-dashboard {\n  position: absolute;\n  border: 1px solid #e6e6e6;\n  font-size: 14px;\n  max-height: 260px;\n  overflow: auto;\n  list-style: none;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 10;\n  padding: 3px 0;\n  line-height: 1.8;\n  left: -1px;\n  right: -1px;\n}\n.__mx-linkage_index_-tabs {\n  border-bottom: 1px solid #e6e6e6;\n  margin: 0 10px;\n  padding-bottom: 3px;\n}\n.__mx-linkage_index_-tab {\n  cursor: pointer;\n  display: inline-block;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-linkage_index_-tab:hover,\n.__mx-linkage_index_-tab:focus,\n.__mx-linkage_index_-tab:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-linkage_index_-main-panel {\n  margin: 0 10px;\n  padding-top: 3px;\n}\n.__mx-linkage_index_-panel-item {\n  width: 32%;\n  float: left;\n  margin: 0 0 2px 2px;\n  color: #666;\n  display: block;\n  cursor: pointer;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-linkage_index_-panel-item:hover,\n.__mx-linkage_index_-panel-item:focus,\n.__mx-linkage_index_-panel-item:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-linkage_index_-texts {\n  margin-left: -1px;\n}\n.__mx-linkage_index_-text {\n  float: left;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 1px 0;\n  max-width: 31%;\n  overflow: hidden;\n  margin-top: 3px;\n}\n.__mx-linkage_index_-text-cnt {\n  cursor: pointer;\n  border-radius: 4px;\n}\n.__mx-linkage_index_-text-cnt:hover,\n.__mx-linkage_index_-text-cnt:focus,\n.__mx-linkage_index_-text-cnt:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-linkage_index_-notallowed .__mx-linkage_index_-texts {\n  cursor: not-allowed;\n}\n.__mx-linkage_index_-notallowed .__mx-linkage_index_-text-cnt:hover,\n.__mx-linkage_index_-notallowed .__mx-linkage_index_-text-cnt:focus,\n.__mx-linkage_index_-notallowed .__mx-linkage_index_-text-cnt:active {\n  background-color: transparent;\n  cursor: not-allowed;\n}\n.__mx-linkage_index_-active,\n.__mx-linkage_index_-active:hover,\n.__mx-linkage_index_-active:active,\n.__mx-linkage_index_-active:focus {\n  color: #fff;\n  background-color: #f96447;\n}\n");
var ListToTree = function (list, id, pId) {
    id = id || 'id';
    pId = pId || 'pId';
    var map = {}, listMap = {}, rootList = [];
    for (var i = 0, max = list.length; i < max; i++) {
        var one = Magix.mix({}, list[i]);
        map[one[id]] = one;
        if (listMap[one[id]]) {
            one.children = listMap[one[id]];
        }
        if (Magix.has(one, pId) && one[pId] !== '') {
            if (map[one[pId]]) {
                var c = map[one[pId]].children || (map[one[pId]].children = []);
                c.push(one);
            }
            else {
                if (!listMap[one[pId]])
                    listMap[one[pId]] = [one];
                else
                    listMap[one[pId]].push(one);
            }
        }
        else {
            rootList.push(one);
        }
    }
    return { list: rootList, map: map };
};
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
} ; var $g = '', $_temp, $p = '', texts = $$.texts, splitter = $$.splitter, placeholder = $$.placeholder, show = $$.show, left = $$.left, top = $$.top, headers = $$.headers, active = $$.active, list = $$.list, selected = $$.selected, valueKey = $$.valueKey, textKey = $$.textKey; var $expr, $art, $line; try {
    $p += '<div class="__mx-style_index_-unselectable ';
    $expr = '<%if (texts.length) {%>';
    if (texts.length) {
        ;
        $p += '__mx-linkage_index_-texts __mx-style_index_-clearfix';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '__mx-linkage_index_-placeholder';
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-click="' + $viewId + '@{show}()">';
    $expr = '<%if (texts.length) {%>';
    if (texts.length) {
        ;
        $p += ' ';
        $expr = '<%for (var i = 0; i < texts.length; i++) {%>';
        for (var i = 0; i < texts.length; i++) {
            ;
            $p += '<div class="__mx-linkage_index_-text __mx-style_index_-ellipsis __mx-linkage_index_-text-cnt" title="' + ($expr = '<%=texts[i]%>', $e(texts[i])) + '" mx-click="' + $viewId + '@{activeTab}({i:' + ($expr = '<%!i%>', $n(i)) + '})">' + ($expr = '<%=texts[i]%>', $e(texts[i])) + '</div>';
            $expr = '<%if (i < texts.length - 1) {%>';
            if (i < texts.length - 1) {
                ;
                $p += '<div mxa="_&:_" class="__mx-linkage_index_-text">' + ($expr = '<%=splitter%>', $e(splitter)) + '</div>';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ' + ($expr = '<%=placeholder%>', $e(placeholder)) + ' ';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div class="__mx-style_index_-unselectable __mx-linkage_index_-dashboard';
    $expr = '<%if (!show) {%>';
    if (!show) {
        ;
        $p += ' __mx-style_index_-none';
        $expr = '<%}%>';
    }
    ;
    $p += '" style="';
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += 'left:' + ($expr = '<%=left%>', $e(left)) + 'px;top:' + ($expr = '<%=top%>', $e(top)) + 'px;';
        $expr = '<%}%>';
    }
    ;
    $p += '"><div mxa="_&:a" class="__mx-linkage_index_-tabs">';
    $expr = '<%for (var i = 0; i < headers.length; i++) {%>';
    for (var i = 0; i < headers.length; i++) {
        ;
        $p += ' ';
        $expr = '<%var h = headers[i]%>';
        var h = headers[i];
        $p += '<span title="' + ($expr = '<%=h%>', $e(h)) + '" class="__mx-linkage_index_-tab';
        $expr = '<%if (i == active) {%>';
        if (i == active) {
            ;
            $p += ' __mx-linkage_index_-active';
            $expr = '<%}%>';
        }
        ;
        $p += '" ';
        $expr = '<%if (i !== active) {%>';
        if (i !== active) {
            ;
            $p += ' mx-click="' + $viewId + '@{activeTab}({i:' + ($expr = '<%!i%>', $n(i)) + '})" ';
            $expr = '<%}%>';
        }
        ;
        $p += '>' + ($expr = '<%=h%>', $e(h)) + '</span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_&:b" class="__mx-linkage_index_-main-panel">';
    $expr = '<%if (list && list.length) {%>';
    if (list && list.length) {
        ;
        $p += ' ';
        $expr = '<%var current = selected[active]%>';
        var current = selected[active];
        $p += '<ul>';
        $expr = '<%for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {        var one = list_1[_i];%>';
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var one = list_1[_i];
            ;
            $p += '<li class="__mx-linkage_index_-panel-item __mx-style_index_-ellipsis';
            $expr = '<%if ((one[valueKey] + \'\') == (current + \'\')) {%>';
            if ((one[valueKey] + '') == (current + '')) {
                ;
                $p += ' __mx-linkage_index_-active';
                $expr = '<%}%>';
            }
            ;
            $p += '" title="' + ($expr = '<%=one[textKey]%>', $e(one[textKey])) + '" mx-click="' + $viewId + '@{select}({o:\'' + ($expr = '<%@one%>', $i($$ref, one)) + '\'})">' + ($expr = '<%=one[textKey]%>', $e(one[textKey])) + '</li>';
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-linkage/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me.assign(extra);
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        var ownerNode = $('#' + me.id);
        ownerNode.addClass('__mx-linkage_index_-owner');
        me['@{owner.node}'] = ownerNode;
    },
    assign: function (ops) {
        var me = this;
        me['@{placeholder}'] = ops.placeholder;
        var valueKey = ops.valueKey || 'id';
        var parentKey = ops.parentKey || 'pId';
        var textKey = ops.parentKey || 'text';
        var info = ListToTree(ops.list, valueKey, parentKey);
        me['@{list.info}'] = info;
        me['@{headers}'] = ops.headers;
        me['@{active.tab}'] = 0;
        var selected = Magix.has(ops, 'selected') ? ops.selected : '';
        selected = selected ? (selected + '').split(',') : [];
        me['@{selected}'] = selected;
        me['@{ui.disabled}'] = (ops.disabled + '') === 'true';
        me.updater.set({
            splitter: ops.splitter || '/',
            textKey: textKey,
            valueKey: valueKey,
            selected: selected
        });
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            placeholder: me['@{placeholder}'],
            headers: me['@{headers}'],
            viewId: me.id,
            texts: me['@{get.text}'](),
            active: me['@{active.tab}'],
            list: me['@{get.active.list}']()
        });
        me['@{owner.node}'][me['@{ui.disabled}'] ? 'addClass' : 'removeClass']('__mx-linkage_index_-notallowed');
    },
    '@{get.text}': function () {
        var me = this;
        var texts = [];
        var info = me['@{list.info}'];
        var selected = me['@{selected}'];
        var textKey = me.updater.get('textKey');
        for (var _i = 0, selected_1 = selected; _i < selected_1.length; _i++) {
            var s = selected_1[_i];
            texts.push(info.map[s][textKey]);
        }
        return texts;
    },
    '@{get.active.list}': function () {
        var me = this;
        var info = me['@{list.info}'];
        var selected = me['@{selected}'];
        var currentTab = me['@{active.tab}'];
        if (currentTab === 0) {
            return info.list;
        }
        var id = selected[currentTab - 1];
        return id ? info.map[id].children : null;
    },
    '@{active.to.tab}': function (tab) {
        var me = this;
        me.updater.digest({
            active: me['@{active.tab}'] = tab,
            list: me['@{get.active.list}'](),
            selected: me['@{selected}']
        });
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            me['@{active.to.tab}'](0);
            me.updater.digest({
                show: false
            });
        }
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            me.updater.digest({
                show: true,
                top: me['@{owner.node}'].outerHeight() + 5
            });
        }
    },
    '@{fillText}': function () {
        var me = this;
        me.updater.digest({
            placeholder: me['@{placeholder}'],
            texts: me['@{get.text}']()
        });
    },
    '@{show}<click>': function () {
        var me = this;
        var node = me['@{owner.node}'];
        if (!node.hasClass('__mx-linkage_index_-notallowed')) {
            me['@{show}']();
        }
    },
    '@{activeTab}<click>': function (e) {
        this['@{active.to.tab}'](e.params.i);
    },
    '@{select}<click>': function (e) {
        var me = this;
        var currentTab = me['@{active.tab}'];
        var headers = me['@{headers}'];
        var selected = me['@{selected}'];
        var valueKey = me.updater.get('valueKey');
        var one = e.params.o;
        var itemId = one[valueKey];
        selected = selected.slice(0, currentTab);
        selected.push(itemId);
        currentTab++;
        var info = me['@{list.info}'];
        me['@{selected}'] = selected;
        if (currentTab < headers.length && info.map[itemId].children) {
            me['@{active.to.tab}'](currentTab);
        }
        else {
            me['@{fillText}']();
            me['@{hide}']();
            me['@{owner.node}'].trigger({
                type: 'change',
                selected: selected
            });
        }
    }
});

});