/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/picker',["magix","$","../mx-monitor/index","./index"],function(require,exports,module){
/*Magix,$,Monitor*/
require("./index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
var Monitor = require('../mx-monitor/index');
Magix.applyStyle("H",".fr{position:absolute;display:none;border:1px solid #e6e6e6;padding:10px 0;border-radius:4px;background-color:#fff;z-index:1;width:271px}.fs{margin:0 10px}.ft{border-top:1px solid #e6e6e6;margin:10px 10px 0;padding:10px 0 0}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"fr\" id=\"wrapper_<%=$$.viewId%>\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-time/index?time=<%!$eu($$.time)%>&type=<%!$eu($$.types)%>\" id=\"time_<%=$$.viewId%>\" class=\"fs ag\" mx-change=\"\u001f\u001e_f_()\"></div><div class=\"ft\"><button class=\"al am\" mx-click=\"\u001f\u001e_a({enter:true})\">确定</button><button class=\"al s\" mx-click=\"\u001f\u001e_a()\">取消</button></div></div>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"wrapper_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["time","types","viewId"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-time/index?time=<%!$eu($$.time)%>&type=<%!$eu($$.types)%>\" id=\"time_<%=$$.viewId%>\"","attrs":[{"n":"mx-view","v":1},{"n":"id","p":1}]}]},
    init: function (extra) {
        var me = this;
        Monitor['_d']();
        var oNode = $('#' + me.id);
        var click = function () {
            me['_e']();
        };
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
            $('#tcnt_' + me.id).remove();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['_h'] = oNode;
        oNode.prop('autocomplete', 'off');
        var time = oNode.val();
        if (!time) {
            var d = new Date();
            time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        }
        extra.time = time;
        me['_eX'] = time;
        me['_eY'] = time;
        me.updater.set(extra);
    },
    '_i': function (node) {
        var me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'tcnt_' + me.id);
    },
    render: function () {
        var me = this;
        $("<div id=\"tcnt_" + me.id + "\"/>").insertAfter(me['_h']);
        var updater = me.updater;
        updater.to('tcnt_' + me.id);
        updater.digest({
            viewId: me.id
        });
    },
    '_e': function () {
        var me = this;
        if (!me['_eZ']) {
            var node = $('#wrapper_' + me.id), ref = me['_h'];
            me['_eZ'] = true;
            Monitor['_k'](me);
            node.show();
            var offset = ref.offset();
            var left = void 0, top = void 0;
            var data = me.updater.get();
            switch (data.placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (data.align) {
                case 'right':
                    left = offset.left + ref.outerWidth() - node.outerWidth();
                    break;
                default:
                    left = offset.left;
                    break;
            }
            node.offset({
                left: left,
                top: top
            });
        }
    },
    '_a': function () {
        var me = this;
        if (me['_eZ']) {
            var node = $('#wrapper_' + me.id);
            me['_eZ'] = false;
            node.hide();
            Monitor['_f'](me);
            if (me['_eX'] != me['_eY']) {
                me['_eX'] = me['_eY'];
                $('#time_' + me.id).invokeView('val', [me['_eX']]);
            }
        }
    },
    '_f_<change>': function (e) {
        this['_eX'] = e.time;
    },
    '_a<click>': function (e) {
        var me = this;
        if (e.params.enter) {
            me['_eY'] = me['_eX'];
            me['_h'].val(me['_eX']).trigger('change');
        }
        me['_a']();
    }
});

});