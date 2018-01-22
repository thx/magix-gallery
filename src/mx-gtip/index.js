/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var TipHeight = 65; //写死
var SpaceVertical = 5;
var SpaceHorizontal = 10;
var Docks = {
    lt: function (tip, index) {
        tip.css({
            top: TipHeight * index + SpaceVertical * (index + 1),
            left: SpaceHorizontal
        });
    },
    rt: function (tip, index) {
        tip.css({
            top: TipHeight * index + SpaceVertical * (index + 1),
            right: SpaceHorizontal
        });
    },
    lb: function (tip, index) {
        tip.css({
            bottom: TipHeight * index + SpaceVertical * (index + 1),
            left: SpaceHorizontal
        });
    },
    rb: function (tip, index) {
        tip.css({
            bottom: TipHeight * index + SpaceVertical * (index + 1),
            right: SpaceHorizontal
        });
    }
};
Magix.applyStyle("_v","._dy{border:1px solid #e6e6e6;background-color:#fff;padding:8px 20px;position:fixed;z-index:450;border-radius:4px;width:300px;height:65px;overflow:hidden;word-break:break-all;-webkit-transition:all .3s;transition:all .3s;opacity:0}._dz{opacity:1}._dA{opacity:0}");
var GTipManager = {
    '__cR': function (dock) {
        var me = this;
        var list = me['$' + dock];
        if (list && list.length) {
            for (var i = 0, tip = void 0; i < list.length; i++) {
                tip = list[i];
                var fn = Docks[dock];
                fn(tip, i);
            }
        }
    },
    '__l': function (tip, dock) {
        if (!dock) {
            dock = 'rt';
        }
        var me = this;
        if (!Docks[dock]) {
            throw new Error('mx-gip unsupport dock:' + dock);
        }
        var list = me['$' + dock] || (me['$' + dock] = []);
        list.push(tip);
        tip.on('__cS', function () {
            me['__g'](tip, dock);
        });
        me['__cR'](dock);
    },
    '__g': function (tip, dock) {
        tip.off('close');
        var me = this;
        var list = me['$' + dock];
        for (var i = list.length - 1; i >= 0; i--) {
            var t = list[i];
            if (t == tip) {
                list.splice(i, 1);
                break;
            }
        }
        me['__cR'](dock);
    }
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<%=$$.tip.msg%>"},
    init: function (extra) {
        var me = this;
        me['__c'] = extra;
        me.on('destroy', function () {
            me['__i'].trigger('__cS').remove();
        });
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.addClass('_dy');
        me['__i'] = oNode;
        me.updater.digest({
            tip: me['__c']
        });
        if (me['__c'].timeout) {
            setTimeout(me.wrapAsync(function () {
                me['__bl']();
            }), me['__c'].timeout);
        }
        setTimeout(me.wrapAsync(function () {
            oNode.addClass('_dz');
        }), 20);
    },
    '__bl': function () {
        var me = this;
        me['__i'].addClass('_dA');
        setTimeout(me.wrapAsync(function () {
            me.owner.unmountVframe();
        }), 300);
    }
}, {
    '__cT': function (ops) {
        var id = Magix.guid('gtip-');
        $('body').append("<div id=\"" + id + "\" />");
        this.owner.mountVframe(id, 'mx-gtip/index', ops);
        GTipManager['__l']($('#' + id), ops.dock);
    },
    gtipRT: function (msg, timeout) {
        this['__cT']({
            msg: msg,
            dock: 'rt',
            timeout: timeout || 3000
        });
    },
    gtipRB: function (msg, timeout) {
        this['__cT']({
            msg: msg,
            dock: 'rb',
            timeout: timeout || 3000
        });
    },
    gtipLT: function (msg, timeout) {
        this['__cT']({
            msg: msg,
            dock: 'lt',
            timeout: timeout || 3000
        });
    },
    gtipLB: function (msg, timeout) {
        this['__cT']({
            msg: msg,
            dock: 'lb',
            timeout: timeout || 3000
        });
    }
});

});