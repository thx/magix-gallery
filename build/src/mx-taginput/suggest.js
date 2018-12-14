/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/suggest",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_gallery_mx-taginput_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-taginput_index_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt {\n  position: relative;\n  height: auto;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #e6e6e6;\n  border-radius: 4px;\n  padding: 2px 6px;\n  cursor: text;\n  transition: border-color 0.25s;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt:hover {\n  border-color: #ccc;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-placeholder,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item {\n  height: 22px;\n  line-height: 22px;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-placeholder {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  margin-top: -11px;\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item,\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger {\n  float: left;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item {\n  float: left;\n  position: relative;\n  max-width: 220px;\n  padding-right: 26px;\n  padding-left: 6px;\n  margin-right: 4px;\n  background-color: #eee;\n  border-radius: 4px;\n  cursor: pointer;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 20px;\n  line-height: 22px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  color: #ccc;\n  transition: color 0.25s;\n  border-left: 1px solid #fff;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover {\n  color: #999;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-ipt ._zs_gallery_mx-taginput_index_-trigger {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: transparent;\n}\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-ipt {\n  cursor: not-allowed;\n  background-color: #fafafa;\n}\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-ipt:hover {\n  border-color: #e6e6e6;\n}\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-item {\n  cursor: not-allowed;\n}\n[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallery_mx-taginput_index_-item ._zs_gallery_mx-taginput_index_-item-delete:hover {\n  color: #ccc;\n}\n[mx-view*=\"mx-taginput/index\"] ._zs_gallery_mx-taginput_index_-loading-small {\n  padding: 40px 0;\n}\n");
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
    $line = 1;
    $art = 'if (list && list.length)';
    ;
    $expr = '<%if (list && list.length) {%>';
    if (list && list.length) {
        ;
        $p += '<ul class="suggest unselectable" style="width: ';
        $line = 3;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px;" mx-mouseout="' + $viewId + '@{out}()" mx-mousemove="' + $viewId + '@{move}()" mx-contextmenu="' + $viewId + '@{prevent}()">';
        $line = 7;
        $art = 'each list as one idx';
        ;
        $expr = '<%for (var idx = 0, $art_cxpjcbmpbjab$art_c = list.length; idx < $art_cxpjcbmpbjab$art_c; idx++) {        var one = list[idx]%>';
        for (var idx = 0, $art_cxpjcbmpbjab$art_c = list.length; idx < $art_cxpjcbmpbjab$art_c; idx++) {
            var one = list[idx];
            $p += '<li mxa="_zs_gallerydW:_" class="suggest-item"><a href="javascript:;" class="suggest-item-link" data-idx="';
            $line = 10;
            $art = '=idx';
            ;
            $p += ($expr = '<%=idx%>', $e(idx)) + '" mx-click="' + $viewId + '@{add}({item:\'';
            $line = 11;
            $art = '@one';
            ;
            $p += ($expr = '<%@one%>', $i($$ref, one)) + '\'})" id="sg_';
            $line = 11;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
            $line = 11;
            $art = '=idx';
            ;
            $p += ($expr = '<%=idx%>', $e(idx)) + '">';
            $line = 12;
            $art = '=one.text';
            ;
            $p += ($expr = '<%=one.text%>', $e(one.text)) + '</a></li>';
            $line = 15;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $line = 17;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div class="suggest" style="width: ';
        $line = 18;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div mxs="_zs_gallerydW:_" class="pt20 pb20 text-center color-9">无匹配选项</div></div>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
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
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            me['@{trigger.node}'].off('keyup paste input', me['@{fn.watch}'])
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
        me['@{relate.node}'] = $('#' + me.id);
        me['@{trigger.node}'] = me['@{relate.node}'].prev('input');
        me['@{trigger.node}'].on('focus', me['@{fn.show}'] = $.proxy(me['@{show}'], me))
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
                me['@{trigger.node}'].trigger({
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
            var offset = me['@{trigger.node}'].position();
            me['@{relate.node}'].show().css({
                display: 'block',
                left: offset.left - 7,
                top: offset.top + me['@{trigger.node}'].outerHeight() + 14
            });
            me['@{trigger.node}'].trigger('showlist');
        }
    },
    '@{normal}': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.removeClass('unfound-[suggest-active]-from-index.less');
    },
    '@{highlight}': function (ignore) {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.addClass('unfound-[suggest-active]-from-index.less');
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
            me['@{trigger.node}'].trigger('hidelist');
        }
    },
    '@{pick}<click>': function (e) {
        e.preventDefault();
        var me = this;
        var item = e.params.item;
        me['@{hide}']();
        me['@{trigger.node}'].trigger({
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