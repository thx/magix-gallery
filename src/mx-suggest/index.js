/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-suggest/index',["magix","$","../mx-monitor/index"],function(require,exports,module){
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
Magix.applyStyle("B",".eL{position:absolute;border:1px solid #e6e6e6;font-size:14px;max-height:260px;overflow:auto;list-style:none;border-radius:4px;background-color:#fff;display:none;z-index:10;padding:3px 0;line-height:1.8}.eM{padding:0 4px;cursor:pointer;margin:2px 0}.eN{color:#666;display:block;width:100%;padding:0 6px;height:29px;line-height:29px;border-radius:4px}.eO,.eN:active,.eN:focus,.eN:hover{color:#333;background-color:#f0f0f0}.eO{border-radius:4px;text-decoration:none;outline:0}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul mx-guid=\"g0\u001f\" class=\"eL ah\" style=\"width:<%=$$.width%>px\" mx-mouseout=\"\u001f\u001e_dK()\" mx-mousemove=\"\u001f\u001e_dL()\" mx-contextmenu=\"\u001f\u001e_bA()\">1\u001d</ul>","subs":[{"keys":["width","rList","list","textKey","viewId"],"path":"ul[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.rList){for(var a=0,b;a<$$.list.length;a++){b=$$.list[a]%><li class=\"eM\" title=\"<%=$$.textKey?b[$$.textKey]:b%>\"><a href=\"#\" class=\"eN aj\" data-idx=\"<%!a%>\" mx-click=\"\u001f\u001e_dJ({item:'<%@b%>'})\" id=\"sg_<%!$$.viewId%>_<%!a%>\"><%=$$.textKey?b[$$.textKey]:b%></a></li><%}}%>","s":"1\u001d","attr":"style=\"width:<%=$$.width%>px\"","attrs":[{"n":"style"}],"mask":"21111"}]},
    init: function (extra) {
        var me = this;
        me['_dz'] = extra.list || [];
        Monitor['_d']();
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
            me['_h'].off('keyup paste input', me['_dA'])
                .off('focus', me['_dB']);
        });
        me.updater.set({
            viewId: me.id,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['_dC'] = -1;
    },
    '_i': function (node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'suggest_' + this.id);
    },
    update: function (list, ignore) {
        var me = this;
        if (!ignore) {
            me['_dz'] = list;
        }
        me['_dC'] = -1;
        me.updater.digest({
            list: me['_dD'] = list
        });
        if (me['_cV']) {
            if (!list || !list.length) {
                me['_cV'].removeClass('eL');
            }
            else {
                me['_cV'].addClass('eL');
            }
        }
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        me['_h'] = oNode;
        oNode.on('focus', me['_dB'] = $.proxy(me.show, me))
            .on('keyup paste input', me['_dA'] = $.proxy(me['_dE'], me));
        var id = 'suggest_' + me.id;
        $('<div />').attr('id', id).insertAfter(oNode);
        me.updater.to(id);
        me.updater.set({
            width: oNode.outerWidth()
        });
        me.update(me['_dz']);
        me['_cV'] = $('#' + id + ' ul');
        if (!me['_dz'] || !me['_dz'].length) {
            me['_cV'].removeClass('eL');
        }
    },
    '_dE': function (e) {
        var me = this;
        if (!me['_j'])
            me['_e']();
        var slist = me['_dD'];
        if (e.keyCode == 40) {
            me['_dF']();
            me['_dC']++;
            if (me['_dC'] >= slist.length) {
                me['_dC'] = 0;
            }
            me['_dG']();
        }
        else if (e.keyCode == 38) {
            me['_dF']();
            me['_dC']--;
            if (me['_dC'] < 0) {
                me['_dC'] = slist.length - 1;
            }
            me['_dG']();
        }
        else if (e.keyCode == 13) {
            if (me['_dC'] > -1 && me['_dC'] < me['_dD'].length) {
                var item = me['_dD'][me['_dC']];
                me['_h'].trigger({
                    type: 'pick',
                    item: item
                });
                var textKey = me.updater.get('textKey');
                if (textKey) {
                    item = item[textKey];
                }
                me['_h'].val(item).trigger('change');
                me['_dE']({
                    target: me['_h'][0]
                });
                me['_dF']();
                me['_dC'] = -1;
                me['_a']();
            }
        }
        else {
            var val = $.trim(e.target.value);
            if (val != me['_dH']) {
                me['_dH'] = val;
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
                    me.update(arr, true);
                }
                else {
                    me.update(me['_dz'], true);
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
            me['_cV'].css({
                display: 'block',
                left: offset.left + me.$offsetLeft,
                top: offset.top + me['_h'].outerHeight() + 10
            });
            me['_h'].trigger('showlist');
        }
    },
    '_dF': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['_dC']);
        node.removeClass('eO');
    },
    '_dG': function (ignore) {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['_dC']);
        node.addClass('eO');
        if (!ignore && node.length) {
            me['_dI'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            var height = node.outerHeight();
            var scrolled = (me['_dC'] + 1) * height;
            var rNode = me['_cV'];
            var vHeight = rNode.height();
            var sTop = rNode.prop('scrollTop');
            var items = Math.ceil(vHeight / height);
            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            }
            else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['_dC'] + 2 - items) * height);
            }
        }
    },
    '_a': function () {
        var me = this;
        if (me['_j']) {
            me['_j'] = false;
            Monitor['_f'](me);
            me['_cV'].hide();
            me['_h'].trigger('hidelist');
        }
    },
    '_dJ<click>': function (e) {
        e.preventDefault();
        var me = this;
        var item = e.params.item;
        me['_h'].trigger({
            type: 'pick',
            item: item
        });
        var textKey = me.updater.get('textKey');
        if (textKey) {
            item = item[textKey];
        }
        me['_h'].val(item).trigger('change');
        me['_dE']({
            target: me['_h'][0]
        });
        me['_a']();
    },
    '_dK<mouseout>': function (e) {
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            var me = this;
            me['_dF']();
            me['_dC'] = -1;
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
            if (idx != me['_dC']) {
                me['_dF']();
                me['_dC'] = idx;
                me['_dG'](true);
            }
        }
    },
    '_bA<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});