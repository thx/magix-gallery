/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.6
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("__mx-suggest_index_","/* @dependent: ./index.less */\n.__mx-suggest_index_-suggest {\n  border: 1px solid #e6e6e6;\n  font-size: 14px;\n  max-height: 260px;\n  overflow: auto;\n  list-style: none;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 10;\n  padding: 3px 0;\n  line-height: 1.8;\n  position: relative;\n}\n.__mx-suggest_index_-item {\n  padding: 0 4px;\n  cursor: pointer;\n  margin: 2px 0;\n}\n.__mx-suggest_index_-item-link {\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 6px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.__mx-suggest_index_-item-link:hover,\n.__mx-suggest_index_-item-link:focus,\n.__mx-suggest_index_-item-link:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.__mx-suggest_index_-active {\n  color: #333;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', rList = $$.rList, list = $$.list, width = $$.width, textKey = $$.textKey, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<ul class="';
    $expr = '<%if (rList && list.length) {%>';
    if (rList && list.length) {
        ;
        $p += '__mx-suggest_index_-suggest ';
        $expr = '<%}%>';
    }
    ;
    $p += '__mx-style_index_-unselectable" style="width:' + ($expr = '<%=width%>', $e(width)) + 'px;" mx-mouseout="' + $viewId + '@{out}()" mx-mousemove="' + $viewId + '@{move}()" mx-contextmenu="' + $viewId + '@{stop}()">';
    $expr = '<%if (rList) {%>';
    if (rList) {
        ;
        $p += ' ';
        $expr = '<%for (var i = 0, one; i < list.length; i++) {%>';
        for (var i = 0, one; i < list.length; i++) {
            ;
            $p += ' ';
            $expr = '<%one = list[i]%>';
            one = list[i];
            $p += '<li class="__mx-suggest_index_-item" title="' + ($expr = '<%=textKey ? one[textKey] : one%>', $e(textKey ? one[textKey] : one)) + '"><a href="#" class="__mx-suggest_index_-item-link __mx-style_index_-ellipsis" data-idx="' + ($expr = '<%=i%>', $e(i)) + '" mx-click="' + $viewId + '@{pick}({item:\'' + ($expr = '<%@one%>', $i($$ref, one)) + '\'})" id="sg_' + ($expr = '<%=viewId%>', $e(viewId)) + '_' + ($expr = '<%=i%>', $e(i)) + '">' + ($expr = '<%=textKey ? one[textKey] : one%>', $e(textKey ? one[textKey] : one)) + '</a></li>';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-suggest/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{data.list}'] = extra.list || [];
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            me['@{owner.node}'].off('keyup paste input', me['@{fn.watch}'])
                .off('focus', me['@{fn.show}']);
        });
        me.updater.set({
            viewId: me.id,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['@{ui.select.index}'] = -1;
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id) ||
            Magix.inside(node, this['@{owner.node}'][0]);
    },
    update: function (list, ignore) {
        var me = this;
        clearTimeout(me['@{delay.updater.timer}']);
        me['@{delay.updater.timer}'] = setTimeout(me.wrapAsync(function () {
            if (!ignore) {
                me['@{data.list}'] = list;
            }
            me['@{ui.select.index}'] = -1;
            me.updater.digest({
                list: me['@{data.source.list}'] = list
            });
        }), 20);
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        var id = me.id;
        oNode = oNode.prev('input');
        me['@{owner.node}'] = oNode;
        oNode.on('focus', me['@{fn.show}'] = $.proxy(me['@{show}'], me))
            .on('keyup paste input', me['@{fn.watch}'] = $.proxy(me['@{filter}'], me));
        oNode.prop('vframe', me.owner);
        me.updater.set({
            width: oNode.outerWidth()
        });
        me.update(me['@{data.list}']);
        me['@{relate.node}'] = $('#' + id);
        me['@{relate.list.node}'] = $('#' + id + ' ul');
    },
    '@{filter}': function (e) {
        var me = this;
        if (!me['@{ui.show}'])
            me['@{show}']();
        var slist = me['@{data.source.list}'];
        if (e.keyCode == 40) {
            me['@{normal}']();
            me['@{ui.select.index}']++;
            if (me['@{ui.select.index}'] >= slist.length) {
                me['@{ui.select.index}'] = 0;
            }
            me['@{highlight}']();
        }
        else if (e.keyCode == 38) {
            me['@{normal}']();
            me['@{ui.select.index}']--;
            if (me['@{ui.select.index}'] < 0) {
                me['@{ui.select.index}'] = slist.length - 1;
            }
            me['@{highlight}']();
        }
        else if (e.keyCode == 13) {
            if (me['@{ui.select.index}'] > -1 && me['@{ui.select.index}'] < me['@{data.source.list}'].length) {
                var item = me['@{data.source.list}'][me['@{ui.select.index}']];
                me['@{owner.node}'].trigger({
                    type: 'pick',
                    item: item
                });
                var textKey = me.updater.get('textKey');
                if (textKey) {
                    item = item[textKey];
                }
                me['@{owner.node}'].val(item).trigger('change');
                me['@{filter}']({
                    target: me['@{owner.node}'][0]
                });
                me['@{normal}']();
                me['@{ui.select.index}'] = -1;
                me['@{hide}']();
            }
        }
        else {
            var val = $.trim(e.target.value);
            if (val != me['@{temp.value}']) {
                me['@{temp.value}'] = val;
                if (val) {
                    var arr = [];
                    var list = me['@{data.list}'].slice();
                    var key = me.updater.get('textKey');
                    var text = void 0;
                    for (var i = 0, one = void 0; i < list.length; i++) {
                        one = list[i];
                        text = key ? one[key] : one;
                        if ((text + '').indexOf(val) >= 0) {
                            arr.push(one);
                        }
                    }
                    me.update(arr, true);
                }
                else {
                    me.update(me['@{data.list}'], true);
                }
            }
        }
    },
    '@{show}': function () {
        var me = this;
        var updater = me.updater;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            var rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor['@{add}'](me);
            var offset = me['@{owner.node}'].position();
            me['@{relate.node}'].css({
                display: 'block',
                left: offset.left,
                top: offset.top + me['@{owner.node}'].outerHeight() + 5
            });
            me['@{owner.node}'].trigger('showlist');
        }
    },
    '@{normal}': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['@{ui.select.index}']);
        node.removeClass('__mx-suggest_index_-active');
    },
    '@{highlight}': function (ignore) {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['@{ui.select.index}']);
        node.addClass('__mx-suggest_index_-active');
        if (!ignore && node.length) {
            me['@{temp.ignore}'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            var height = node.outerHeight();
            var scrolled = (me['@{ui.select.index}'] + 1) * height;
            var rNode = me['@{relate.list.node}'];
            var vHeight = rNode.height();
            var sTop = rNode.prop('scrollTop');
            var items = Math.ceil(vHeight / height);
            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            }
            else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['@{ui.select.index}'] + 2 - items) * height);
            }
        }
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            me['@{relate.node}'].hide();
            me['@{owner.node}'].trigger('hidelist');
        }
    },
    '@{pick}<click>': function (e) {
        e.preventDefault();
        var me = this;
        var item = e.params.item;
        me['@{owner.node}'].trigger({
            type: 'pick',
            item: item
        });
        var textKey = me.updater.get('textKey');
        if (textKey) {
            item = item[textKey];
        }
        me['@{owner.node}'].val(item).trigger('change');
        me['@{filter}']({
            target: me['@{owner.node}'][0]
        });
        me['@{hide}']();
    },
    '@{out}<mouseout>': function (e) {
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            var me = this;
            me['@{normal}']();
            me['@{ui.select.index}'] = -1;
        }
    },
    '@{move}<mousemove>': function (e) {
        var me = this;
        if (me['@{temp.ignore}']) {
            delete me['@{temp.ignore}'];
            return;
        }
        var target = $(e.target);
        if (target.is('li')) {
            var idx = target.data('idx');
            if (idx != me['@{ui.select.index}']) {
                me['@{normal}']();
                me['@{ui.select.index}'] = idx;
                me['@{highlight}'](true);
            }
        }
    },
    '@{stop}<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});