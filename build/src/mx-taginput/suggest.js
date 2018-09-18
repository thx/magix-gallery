/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/suggest",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_gallery_mx-taginput_suggest_","/* @dependent: ./index.less */\n._zs_gallery_mx-taginput_suggest_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-taginput_suggest_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-taginput_suggest_-suggest {\n  position: relative;\n  z-index: 1;\n  max-height: 260px;\n  padding: 10px;\n  font-size: 12px;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n  overflow: auto;\n  list-style: none;\n  background-color: #fff;\n  line-height: 1.5;\n}\n._zs_gallery_mx-taginput_suggest_-suggest ._zs_gallery_mx-taginput_suggest_-item {\n  cursor: pointer;\n}\n._zs_gallery_mx-taginput_suggest_-suggest ._zs_gallery_mx-taginput_suggest_-item ._zs_gallery_mx-taginput_suggest_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 10px;\n  height: 32px;\n  color: #666;\n  line-height: 32px;\n  border-radius: 4px;\n}\n._zs_gallery_mx-taginput_suggest_-suggest ._zs_gallery_mx-taginput_suggest_-item ._zs_gallery_mx-taginput_suggest_-item-link:hover,\n._zs_gallery_mx-taginput_suggest_-suggest ._zs_gallery_mx-taginput_suggest_-item ._zs_gallery_mx-taginput_suggest_-item-link:focus,\n._zs_gallery_mx-taginput_suggest_-suggest ._zs_gallery_mx-taginput_suggest_-item ._zs_gallery_mx-taginput_suggest_-item-link:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-taginput_suggest_-suggest ._zs_gallery_mx-taginput_suggest_-item:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-taginput_suggest_-suggest ._zs_gallery_mx-taginput_suggest_-active {\n  color: #333;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, width = $$.width, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '';
    $line = 1;
    $art = 'if (list && list.length)';
    ;
    $p += '';
    $expr = '<%if (list && list.length) {%>';
    if (list && list.length) {
        ;
        $p += '<ul class="_zs_gallery_mx-taginput_suggest_-suggest unselectable" style="width: ';
        $line = 3;
        $art = '=width';
        ;
        $p += '' + ($expr = '<%=width%>', $e(width)) + 'px;" mx-mouseout="' + $viewId + '@{out}()" mx-mousemove="' + $viewId + '@{move}()" mx-contextmenu="' + $viewId + '@{prevent}()">';
        $line = 7;
        $art = 'each list as one idx';
        ;
        $p += '';
        $expr = '<%for (var idx = 0, $art_chcxokerd$art_c = list.length; idx < $art_chcxokerd$art_c; idx++) {        var one = list[idx]%>';
        for (var idx = 0, $art_chcxokerd$art_c = list.length; idx < $art_chcxokerd$art_c; idx++) {
            var one = list[idx];
            $p += '<li mxa="_zs_galleryc&:_" class="_zs_gallery_mx-taginput_suggest_-item"><a href="javascript:;" class="_zs_gallery_mx-taginput_suggest_-item-link" data-idx="';
            $line = 10;
            $art = '=idx';
            ;
            $p += '' + ($expr = '<%=idx%>', $e(idx)) + '" mx-click="' + $viewId + '@{pick}({item:\'';
            $line = 11;
            $art = '@one';
            ;
            $p += '' + ($expr = '<%@one%>', $i($$ref, one)) + '\'})" id="sg_';
            $line = 11;
            $art = '=viewId';
            ;
            $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_';
            $line = 11;
            $art = '=idx';
            ;
            $p += '' + ($expr = '<%=idx%>', $e(idx)) + '">';
            $line = 12;
            $art = '=one.text';
            ;
            $p += '' + ($expr = '<%=one.text%>', $e(one.text)) + '</a></li>';
            $line = 15;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $line = 17;
        $art = 'else';
        ;
        $p += '';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div class="_zs_gallery_mx-taginput_suggest_-suggest text-center color-9" style="width: ';
        $line = 18;
        $art = '=width';
        ;
        $p += '' + ($expr = '<%=width%>', $e(width)) + 'px;">无匹配选项</div>';
        $line = 19;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/suggest.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{scroll.top}'] = extra.scrollTop || 0;
        me['@{data.list}'] = extra.list || [];
        me['@{offset.left}'] = (extra.offsetLeft || 0) | 0;
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            me['@{owner.node}'].off('keyup paste input', me['@{fn.watch}'])
                .off('focus', me['@{fn.show}']);
        });
        me.updater.set({
            viewId: me.id,
            width: extra.width
        });
        me['@{ui.index}'] = -1;
        me['@{relate.ids}'] = [me.id].concat(extra.relateIds.split(','));
    },
    '@{inside}': function (node) {
        var me = this;
        var ids = me['@{relate.ids}'];
        for (var i = 0; i < ids.length; i++) {
            if (Magix.inside(node, ids[i])) {
                return true;
            }
        }
        return false;
    },
    '@{list.update}': function (list, ignore) {
        var me = this;
        if (!ignore) {
            me['@{data.list}'] = list;
        }
        me['@{ui.index}'] = -1;
        me.updater.digest({
            list: me['@{source.list}'] = list
        });
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        me['@{owner.node}'] = oNode;
        oNode.on('focus', me['@{fn.show}'] = $.proxy(me['@{show}'], me))
            .on('keyup paste input', me['@{fn.watch}'] = $.proxy(me['@{filter}'], me));
        me['@{list.update}'](me['@{data.list}']);
        me['@{relate.list.node}'] = $('#' + me.id + ' ul');
        setTimeout(me.wrapAsync(function () {
            me['@{relate.list.node}'].prop('scrollTop', me['@{scroll.top}']);
        }), 0);
    },
    '@{filter}': function (e) {
        var me = this;
        if (!me['@{ui.show}']) {
            me['@{show}']();
        }
        var slist = me['@{source.list}'];
        if (e.keyCode == 40) {
            me['@{normal}']();
            me['@{ui.index}']++;
            if (me['@{ui.index}'] >= slist.length) {
                me['@{ui.index}'] = 0;
            }
            me['@{highlight}']();
        }
        else if (e.keyCode == 38) {
            me['@{normal}']();
            me['@{ui.index}']--;
            if (me['@{ui.index}'] < 0) {
                me['@{ui.index}'] = slist.length - 1;
            }
            me['@{highlight}']();
        }
        else if (e.keyCode == 13) {
            if (me['@{ui.index}'] > -1 && me['@{ui.index}'] < me['@{source.list}'].length) {
                var item = me['@{source.list}'][me['@{ui.index}']];
                me['@{normal}']();
                me['@{ui.index}'] = -1;
                me['@{hide}']();
                me['@{owner.node}'].trigger({
                    type: 'pick',
                    item: item
                });
            }
        }
        else {
            var val = $.trim(e.target.value);
            if (val != me['@{value}']) {
                me['@{value}'] = val;
                if (val) {
                    var arr = [];
                    var list = me['@{data.list}'].slice();
                    var text = void 0;
                    for (var i = 0, one = void 0; i < list.length; i++) {
                        one = list[i];
                        text = one.text;
                        if ((text + '').indexOf(val) >= 0) {
                            arr.push(one);
                        }
                    }
                    me['@{list.update}'](arr, true);
                }
                else {
                    me['@{list.update}'](me['@{data.list}'], true);
                }
            }
        }
    },
    '@{show}': function () {
        var me = this;
        var updater = me.updater;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = 'from show ';
            var rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor['@{add}'](me);
            var offset = me['@{owner.node}'].position();
            me['@{relate.node}'].show().css({
                display: 'block',
                left: offset.left + me['@{offset.left}'],
                top: offset.top + me['@{owner.node}'].outerHeight() + 10
            });
            me['@{owner.node}'].trigger('showlist');
        }
    },
    '@{normal}': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.removeClass('_zs_gallery_mx-taginput_suggest_-active');
    },
    '@{highlight}': function (ignore) {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.addClass('_zs_gallery_mx-taginput_suggest_-active');
        if (!ignore && node.length) {
            me['@{temp.ignore}'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            var height = node.outerHeight();
            var scrolled = (me['@{ui.index}'] + 1) * height;
            var rNode = me['@{relate.list.node}'];
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
            Monitor['@{remove}'](me);
            me['@{relate.node}'].hide();
            me['@{owner.node}'].trigger('hidelist');
        }
    },
    '@{pick}<click>': function (e) {
        e.preventDefault();
        var me = this;
        var item = e.params.item;
        me['@{hide}']();
        me['@{owner.node}'].trigger({
            type: 'pick',
            item: item,
            scrollTop: me['@{relate.list.node}'].prop('scrollTop')
        });
    },
    '@{out}<mouseout>': function (e) {
        var flag = !Magix.inside(e.relateTarget, e.eventTarget);
        if (flag) {
            var me = this;
            me['@{normal}']();
            me['@{ui.index}'] = -1;
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
            if (idx != me['@{ui.index}']) {
                me['@{normal}']();
                me['@{ui.index}'] = idx;
                me['@{highlight}'](true);
            }
        }
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});