/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
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
Magix.applyStyle("_I","._eW{border:1px solid #e6e6e6;font-size:14px;max-height:260px;overflow:auto;list-style:none;border-radius:4px;background-color:#fff;z-index:10;padding:3px 0;line-height:1.8;position:relative}._eX{padding:0 4px;cursor:pointer;margin:2px 0}._eY{color:#666;display:block;width:100%;padding:0 6px;height:29px;line-height:29px;border-radius:4px}._eZ,._eY:active,._eY:focus,._eY:hover{color:#333;background-color:#f0f0f0}._eZ{border-radius:4px;text-decoration:none;outline:0}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul class=\"<%if($$.rList&&$$.list.length){%>_eW <%}%>_aj\" style=\"width:<%=$$.width%>px;\" mx-mouseout=\"\u001f\u001e__eg()\" mx-mousemove=\"\u001f\u001e__fc()\" mx-contextmenu=\"\u001f\u001e__as()\"><%if($$.rList){for(var _=0,a;_<$$.list.length;_++){a=$$.list[_]%><li class=\"_eX\" title=\"<%=$$.textKey?a[$$.textKey]:a%>\"><a href=\"#\" class=\"_eY _al\" data-idx=\"<%=_%>\" mx-click=\"\u001f\u001e__fb({item:'<%@a%>'})\" id=\"sg_<%=$$.viewId%>_<%=_%>\"><%=$$.textKey?a[$$.textKey]:a%></a></li><%}}%></ul>"},
    init: function (extra) {
        var me = this;
        me['__eQ'] = extra.list || [];
        Monitor['__d']();
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
            me['__i'].off('keyup paste input', me['__eR'])
                .off('focus', me['__eS']);
        });
        me.updater.set({
            viewId: me.id,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['__eT'] = -1;
    },
    '__j': function (node) {
        return Magix.inside(node, this.id) ||
            Magix.inside(node, this['__i'][0]);
    },
    update: function (list, ignore) {
        var me = this;
        clearTimeout(me['__eU']);
        me['__eU'] = setTimeout(me.wrapAsync(function () {
            if (!ignore) {
                me['__eQ'] = list;
            }
            me['__eT'] = -1;
            me.updater.digest({
                list: me['__eV'] = list
            });
        }), 20);
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        var id = me.id;
        oNode = oNode.prev('input');
        me['__i'] = oNode;
        oNode.on('focus', me['__eS'] = $.proxy(me['__f'], me))
            .on('keyup paste input', me['__eR'] = $.proxy(me['__eW'], me));
        oNode.prop('vframe', me.owner);
        me.updater.set({
            width: oNode.outerWidth()
        });
        me.update(me['__eQ']);
        me['__e'] = $('#' + id);
        me['__eX'] = $('#' + id + ' ul');
    },
    '__eW': function (e) {
        var me = this;
        if (!me['__k'])
            me['__f']();
        var slist = me['__eV'];
        if (e.keyCode == 40) {
            me['__eY']();
            me['__eT']++;
            if (me['__eT'] >= slist.length) {
                me['__eT'] = 0;
            }
            me['__eZ']();
        }
        else if (e.keyCode == 38) {
            me['__eY']();
            me['__eT']--;
            if (me['__eT'] < 0) {
                me['__eT'] = slist.length - 1;
            }
            me['__eZ']();
        }
        else if (e.keyCode == 13) {
            if (me['__eT'] > -1 && me['__eT'] < me['__eV'].length) {
                var item = me['__eV'][me['__eT']];
                me['__i'].trigger({
                    type: 'pick',
                    item: item
                });
                var textKey = me.updater.get('textKey');
                if (textKey) {
                    item = item[textKey];
                }
                me['__i'].val(item).trigger('change');
                me['__eW']({
                    target: me['__i'][0]
                });
                me['__eY']();
                me['__eT'] = -1;
                me['__a']();
            }
        }
        else {
            var val = $.trim(e.target.value);
            if (val != me['__f_']) {
                me['__f_'] = val;
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
                    me.update(arr, true);
                }
                else {
                    me.update(me['__eQ'], true);
                }
            }
        }
    },
    '__f': function () {
        var me = this;
        var updater = me.updater;
        if (!me['__k']) {
            me['__k'] = true;
            var rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor['__l'](me);
            var offset = me['__i'].position();
            me['__e'].css({
                display: 'block',
                left: offset.left,
                top: offset.top + me['__i'].outerHeight() + 5
            });
            me['__i'].trigger('showlist');
        }
    },
    '__eY': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['__eT']);
        node.removeClass('_eZ');
    },
    '__eZ': function (ignore) {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['__eT']);
        node.addClass('_eZ');
        if (!ignore && node.length) {
            me['__fa'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            var height = node.outerHeight();
            var scrolled = (me['__eT'] + 1) * height;
            var rNode = me['__eX'];
            var vHeight = rNode.height();
            var sTop = rNode.prop('scrollTop');
            var items = Math.ceil(vHeight / height);
            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            }
            else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['__eT'] + 2 - items) * height);
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
        me['__i'].trigger({
            type: 'pick',
            item: item
        });
        var textKey = me.updater.get('textKey');
        if (textKey) {
            item = item[textKey];
        }
        me['__i'].val(item).trigger('change');
        me['__eW']({
            target: me['__i'][0]
        });
        me['__a']();
    },
    '__eg<mouseout>': function (e) {
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            var me = this;
            me['__eY']();
            me['__eT'] = -1;
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
            if (idx != me['__eT']) {
                me['__eY']();
                me['__eT'] = idx;
                me['__eZ'](true);
            }
        }
    },
    '__as<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});