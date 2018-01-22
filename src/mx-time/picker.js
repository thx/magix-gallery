/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/picker",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor*/
require("./index");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_O","._fC{position:relative;border:1px solid #e6e6e6;padding:10px 0;border-radius:4px;background-color:#fff;z-index:1;width:271px}._fD{margin:0 10px}._fE{border-top:1px solid #e6e6e6;margin:10px 10px 0;padding:10px 0 0}");
var format = function (t) {
    if (t < 10)
        return '0' + t;
    return t;
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_fC\" id=\"wrapper_<%=$$.viewId%>\"><div mx-view=\"mx-time/index?time=<%!$eu($$.time)%>&types=<%!$eu($$.types)%>\" id=\"time_<%=$$.viewId%>\" class=\"_fD _ai\" mx-change=\"\u001f\u001e__gC()\"></div><div class=\"_fE\"><button type=\"button\" class=\"_an _ao\" mx-click=\"\u001f\u001e__a({enter:true})\">确定</button><button type=\"button\" class=\"_an _s\" mx-click=\"\u001f\u001e__a()\">取消</button></div></div>"},
    init: function (extra) {
        var me = this;
        Monitor['__d']();
        var oNode = $('#' + me.id);
        me['__e'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        var click = function () {
            me['__f']();
        };
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['__i'] = oNode;
        oNode.prop('autocomplete', 'off');
        var time = oNode.val().trim();
        if (!time) {
            var d = new Date();
            time = format(d.getHours()) + ':' +
                format(d.getMinutes()) + ':' +
                format(d.getSeconds());
        }
        extra.time = time;
        me['__gz'] = time;
        me['__gA'] = time;
        me.updater.set(extra);
    },
    '__j': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, 'temp_' + me.id) ||
            Magix.inside(node, this['__i'][0]);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '__f': function () {
        var me = this;
        if (!me['__gB']) {
            var node = me['__e'], ref = me['__i'];
            node.show();
            me['__gB'] = true;
            Monitor['__l'](me);
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
            var v = me['__i'].val().trim();
            if (v && me['__gz'] != v) {
                me['__gz'] = v;
                me['__gA'] = v;
                $('#time_' + me.id).invokeView('val', [v]);
            }
        }
    },
    '__a': function () {
        var me = this;
        if (me['__gB']) {
            me['__gB'] = false;
            me['__e'].hide();
            Monitor['__g'](me);
            if (me['__gz'] != me['__gA']) {
                me['__gz'] = me['__gA'];
                $('#time_' + me.id).invokeView('val', [me['__gz']]);
            }
        }
    },
    '__gC<change>': function (e) {
        this['__gz'] = e.time;
    },
    '__a<click>': function (e) {
        var me = this;
        if (e.params.enter) {
            me['__gA'] = me['__gz'];
        }
        me['__a']();
        if (e.params.enter) {
            me['__i'].val(me['__gz']).trigger('change');
        }
    }
});

});