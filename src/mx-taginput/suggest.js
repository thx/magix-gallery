/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/suggest',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
ver:1.3.1
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
var Magix = require('magix');
var $ = require('$');
var Monitor = require('../mx-monitor/index');
Magix.applyStyle("F",".fj{position:absolute;border:1px solid #e6e6e6;font-size:14px;max-height:260px;overflow:auto;list-style:none;border-radius:4px;background-color:#fff;display:none;z-index:10;padding:3px 0;line-height:1.8}.fk{padding:0 4px;cursor:pointer;margin:2px 0}.fl{color:#666;display:block;width:100%;padding:0 6px;height:29px;line-height:29px;border-radius:4px}.fm,.fl:active,.fl:focus,.fl:hover{color:#333;background-color:#f0f0f0}.fm{border-radius:4px;text-decoration:none;outline:0}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul mx-guid=\"g0\u001f\" class=\"fj ah\" style=\"width:<%=$$.width%>px\" mx-mouseout=\"\u001f\u001e_dK()\" mx-mousemove=\"\u001f\u001e_dL()\" mx-contextmenu=\"\u001f\u001e_D()\">1\u001d</ul>","subs":[{"keys":["width","rList","list","viewId","textKey"],"path":"ul[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.rList){for(var a=0,b;a<$$.list.length;a++){b=$$.list[a]%><li class=\"fk\"><a href=\"#\" class=\"fl\" data-idx=\"<%!a%>\" mx-click=\"\u001f\u001e_dJ({item:'<%@b%>'})\" id=\"sg_<%!$$.viewId%>_<%!a%>\"><%=$$.textKey?b[$$.textKey]:b%></a></li><%}}%>","s":"1\u001d","attr":"style=\"width:<%=$$.width%>px\"","attrs":[{"n":"style"}],"mask":"21111"}]},
    init: function (extra) {
        var me = this;
        me['_eP'] = extra.scrollTop || 0;
        me['_dz'] = extra.list || [];
        me['_cr'] = (extra.offsetLeft || 0) | 0;
        Monitor['_d']();
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
            me['_h'].off('keyup paste input', me['_dA'])
                .off('focus', me['_dB']);
        });
        me.updater.set({
            viewId: me.id,
            width: extra.width || 340,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['_eQ'] = -1;
        me['_eR'] = [me.id, 'suggest_' + me.id];
        if (extra.relateIds) {
            me['_eR'] = me['_eR'].concat(extra.relateIds.split(','));
        }
    },
    '_i': function (node) {
        var me = this;
        var ids = me['_eR'];
        for (var i = 0; i < ids.length; i++) {
            if (Magix.inside(node, ids[i])) {
                return true;
            }
        }
        return false;
    },
    '_eT': function (list, ignore) {
        var me = this;
        if (!ignore) {
            me['_dz'] = list;
        }
        me['_eQ'] = -1;
        me.updater.digest({
            list: me['_eS'] = list
        });
        if (me['_cp']) {
            if (!list || !list.length) {
                me['_cp'].removeClass('fj');
            }
            else {
                me['_cp'].addClass('fj');
            }
        }
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        me['_h'] = oNode;
        oNode.on('focus', me['_dB'] = $.proxy(me['_e'], me))
            .on('keyup paste input', me['_dA'] = $.proxy(me['_dE'], me));
        var id = 'suggest_' + me.id;
        $('<div />').attr('id', id).insertAfter(oNode);
        me.updater.to(id);
        me['_eT'](me['_dz']);
        me['_cp'] = $('#' + id + ' ul');
        if (!me['_dz'] || !me['_dz'].length) {
            me['_cp'].removeClass('fj');
        }
        setTimeout(me.wrapAsync(function () {
            me['_cp'].prop('scrollTop', me['_eP']);
        }), 0);
    },
    '_dE': function (e) {
        var me = this;
        if (!me['_j'])
            me['_e']();
        var slist = me['_eS'];
        if (e.keyCode == 40) {
            me['_dF']();
            me['_eQ']++;
            if (me['_eQ'] >= slist.length) {
                me['_eQ'] = 0;
            }
            me['_dG']();
        }
        else if (e.keyCode == 38) {
            me['_dF']();
            me['_eQ']--;
            if (me['_eQ'] < 0) {
                me['_eQ'] = slist.length - 1;
            }
            me['_dG']();
        }
        else if (e.keyCode == 13) {
            if (me['_eQ'] > -1 && me['_eQ'] < me['_eS'].length) {
                var item = me['_eS'][me['_eQ']];
                me['_h'].trigger({
                    type: 'pick',
                    item: item
                });
                me['_dF']();
                me['_eQ'] = -1;
                me['_a']();
            }
        }
        else {
            var val = $.trim(e.target.value);
            if (val != me['_bN']) {
                me['_bN'] = val;
                if (val) {
                    var arr = [];
                    var list = me['_dz'].slice();
                    var key = me.updater.get('textKey');
                    var text = void 0;
                    for (var i = 0, one = void 0; i < list.length; i++) {
                        one = list[i];
                        text = key ? one[key] : one;
                        if ((text + '').indexOf(val) >= 0) {
                            arr.push(one);
                        }
                    }
                    me['_eT'](arr, true);
                }
                else {
                    me['_eT'](me['_dz'], true);
                }
            }
        }
    },
    '_e': function () {
        var me = this;
        var updater = me.updater;
        if (!me['_j']) {
            me['_j'] = true;
            var rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor['_k'](me);
            var offset = me['_h'].position();
            me['_cp'].show().css({
                left: offset.left + me['_cr'],
                top: offset.top + me['_h'].outerHeight() + 10
            });
            me['_h'].trigger('showlist');
        }
    },
    '_dF': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['_eQ']);
        node.removeClass('fm');
    },
    '_dG': function (ignore) {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['_eQ']);
        node.addClass('fm');
        if (!ignore && node.length) {
            me['_dI'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            var height = node.outerHeight();
            var scrolled = (me['_eQ'] + 1) * height;
            var rNode = me['_cp'];
            var vHeight = rNode.height();
            var sTop = rNode.prop('scrollTop');
            var items = Math.ceil(vHeight / height);
            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            }
            else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['_eQ'] + 2 - items) * height);
            }
        }
    },
    '_a': function () {
        var me = this;
        if (me['_j']) {
            me['_j'] = false;
            Monitor['_f'](me);
            me['_cp'].hide();
            me['_h'].trigger('hidelist');
        }
    },
    '_dJ<click>': function (e) {
        e.preventDefault();
        var me = this;
        var item = e.params.item;
        me['_h'].trigger({
            type: 'pick',
            item: item,
            scrollTop: me['_cp'].prop('scrollTop')
        });
        me['_a']();
    },
    '_dK<mouseout>': function (e) {
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            var me = this;
            me['_dF']();
            me['_eQ'] = -1;
        }
    },
    '_dL<mousemove>': function (e) {
        var me = this;
        if (me['_dI']) {
            delete me['_dI'];
            return;
        }
        var target = $(e.target);
        if (target.is('li')) {
            var idx = target.data('idx');
            if (idx != me['_eQ']) {
                me['_dF']();
                me['_eQ'] = idx;
                me['_dG'](true);
            }
        }
    },
    '_D<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});