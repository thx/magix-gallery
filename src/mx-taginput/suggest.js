/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/suggest",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.1
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_M","._fu{border:1px solid #e6e6e6;font-size:14px;max-height:260px;overflow:auto;list-style:none;border-radius:4px;background-color:#fff;padding:3px 0;line-height:1.8;position:relative;z-index:1}._fv{padding:0 4px;cursor:pointer;margin:2px 0}._fw{color:#666;display:block;width:100%;padding:0 6px;height:29px;line-height:29px;border-radius:4px}._fx,._fw:active,._fw:focus,._fw:hover{color:#333;background-color:#f0f0f0}._fx{border-radius:4px;text-decoration:none;outline:0}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul class=\"<%if($$.rList&&$$.list.length){%>_fu <%}%>_aj\" style=\"width:<%=$$.width%>px;\" mx-mouseout=\"\u001f\u001e__eg()\" mx-mousemove=\"\u001f\u001e__fc()\" mx-contextmenu=\"\u001f\u001e__E()\"><%if($$.rList){for(var _=0,a;_<$$.list.length;_++){a=$$.list[_]%><li class=\"_fv\"><a href=\"#\" class=\"_fw\" data-idx=\"<%=_%>\" mx-click=\"\u001f\u001e__fb({item:'<%@a%>'})\" id=\"sg_<%=$$.viewId%>_<%=_%>\"><%=$$.textKey?a[$$.textKey]:a%></a></li><%}}%></ul>"},
    init: function (extra) {
        var me = this;
        me['__gn'] = extra.scrollTop || 0;
        me['__eQ'] = extra.list || [];
        me['__go'] = (extra.offsetLeft || 0) | 0;
        Monitor['__d']();
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
            me['__i'].off('keyup paste input', me['__eR'])
                .off('focus', me['__eS']);
        });
        me.updater.set({
            viewId: me.id,
            width: extra.width || 340,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['__gp'] = -1;
        me['__gq'] = [me.id].concat(extra.relateIds.split(','));
    },
    '__j': function (node) {
        var me = this;
        var ids = me['__gq'];
        for (var i = 0; i < ids.length; i++) {
            if (Magix.inside(node, ids[i])) {
                return true;
            }
        }
        return false;
    },
    '__gs': function (list, ignore) {
        var me = this;
        if (!ignore) {
            me['__eQ'] = list;
        }
        me['__gp'] = -1;
        me.updater.digest({
            list: me['__gr'] = list
        });
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        me['__e'] = oNode;
        oNode = oNode.prev('input');
        me['__i'] = oNode;
        oNode.on('focus', me['__eS'] = $.proxy(me['__f'], me))
            .on('keyup paste input', me['__eR'] = $.proxy(me['__eW'], me));
        me['__gs'](me['__eQ']);
        me['__eX'] = $('#' + me.id + ' ul');
        setTimeout(me.wrapAsync(function () {
            me['__eX'].prop('scrollTop', me['__gn']);
        }), 0);
    },
    '__eW': function (e) {
        var me = this;
        if (!me['__k'])
            me['__f']();
        var slist = me['__gr'];
        if (e.keyCode == 40) {
            me['__eY']();
            me['__gp']++;
            if (me['__gp'] >= slist.length) {
                me['__gp'] = 0;
            }
            me['__eZ']();
        }
        else if (e.keyCode == 38) {
            me['__eY']();
            me['__gp']--;
            if (me['__gp'] < 0) {
                me['__gp'] = slist.length - 1;
            }
            me['__eZ']();
        }
        else if (e.keyCode == 13) {
            if (me['__gp'] > -1 && me['__gp'] < me['__gr'].length) {
                var item = me['__gr'][me['__gp']];
                me['__eY']();
                me['__gp'] = -1;
                me['__a']();
                me['__i'].trigger({
                    type: 'pick',
                    item: item
                });
            }
        }
        else {
            var val = $.trim(e.target.value);
            if (val != me['__cJ']) {
                me['__cJ'] = val;
                if (val) {
                    var arr = [];
                    var list = me['__eQ'].slice();
                    var key = me.updater.get('textKey');
                    var text = void 0;
                    for (var i = 0, one = void 0; i < list.length; i++) {
                        one = list[i];
                        text = key ? one[key] : one;
                        if ((text + '').indexOf(val) >= 0) {
                            arr.push(one);
                        }
                    }
                    me['__gs'](arr, true);
                }
                else {
                    me['__gs'](me['__eQ'], true);
                }
            }
        }
    },
    '__f': function () {
        var me = this;
        var updater = me.updater;
        if (!me['__k']) {
            me['__k'] = 'from show ';
            var rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor['__l'](me);
            var offset = me['__i'].position();
            me['__e'].show().css({
                display: 'block',
                left: offset.left + me['__go'],
                top: offset.top + me['__i'].outerHeight() + 10
            });
            me['__i'].trigger('showlist');
        }
    },
    '__eY': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['__gp']);
        node.removeClass('_fx');
    },
    '__eZ': function (ignore) {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['__gp']);
        node.addClass('_fx');
        if (!ignore && node.length) {
            me['__fa'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            var height = node.outerHeight();
            var scrolled = (me['__gp'] + 1) * height;
            var rNode = me['__eX'];
            var vHeight = rNode.height();
            var sTop = rNode.prop('scrollTop');
            var items = Math.ceil(vHeight / height);
            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            }
            else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['__gp'] + 2 - items) * height);
            }
        }
    },
    '__a': function () {
        var me = this;
        if (me['__k']) {
            me['__k'] = false;
            Monitor['__g'](me);
            me['__e'].hide();
            me['__i'].trigger('hidelist');
        }
    },
    '__fb<click>': function (e) {
        e.preventDefault();
        var me = this;
        var item = e.params.item;
        me['__a']();
        me['__i'].trigger({
            type: 'pick',
            item: item,
            scrollTop: me['__eX'].prop('scrollTop')
        });
    },
    '__eg<mouseout>': function (e) {
        var flag = !Magix.inside(e.relateTarget, e.eventTarget);
        if (flag) {
            var me = this;
            me['__eY']();
            me['__gp'] = -1;
        }
    },
    '__fc<mousemove>': function (e) {
        var me = this;
        if (me['__fa']) {
            delete me['__fa'];
            return;
        }
        var target = $(e.target);
        if (target.is('li')) {
            var idx = target.data('idx');
            if (idx != me['__gp']) {
                me['__eY']();
                me['__gp'] = idx;
                me['__eZ'](true);
            }
        }
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});