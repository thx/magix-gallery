/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-gtip/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
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
Magix.applyStyle("p",".cV{border:1px solid #e6e6e6;background-color:#fff;padding:8px 20px;position:fixed;z-index:450;border-radius:4px;width:300px;height:65px;overflow:hidden;word-break:break-all;-webkit-transition:all .3s;transition:all .3s;opacity:0}.cW{opacity:1}.cX{opacity:0}");
var GTipManager = {
    '_bT': function (dock) {
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
    '_k': function (tip, dock) {
        if (!dock) {
            dock = 'rt';
        }
        var me = this;
        if (!Docks[dock]) {
            throw new Error('mx-gip unsupport dock:' + dock);
        }
        var list = me['$' + dock] || (me['$' + dock] = []);
        list.push(tip);
        tip.on('_bU', function () {
            me['_f'](tip, dock);
        });
        me['_bT'](dock);
    },
    '_f': function (tip, dock) {
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
        me['_bT'](dock);
    }
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<%=$$.tip.msg%>","subs":[]},
    init: function (extra) {
        var me = this;
        me['_c'] = extra;
        me.on('destroy', function () {
            me['_h'].trigger('_bU').remove();
        });
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.addClass('cV');
        me['_h'] = oNode;
        me.updater.digest({
            tip: me['_c']
        });
        if (me['_c'].timeout) {
            setTimeout(me.wrapAsync(function () {
                me['_am']();
            }), me['_c'].timeout);
        }
        setTimeout(me.wrapAsync(function () {
            oNode.addClass('cW');
        }), 20);
    },
    '_am': function () {
        var me = this;
        me['_h'].addClass('cX');
        setTimeout(me.wrapAsync(function () {
            me.owner.unmountVframe();
        }), 300);
    }
}, {
    '_bV': function (ops) {
        var id = Magix.guid('gtip-');
        $('body').append("<div id=\"" + id + "\" />");
        this.owner.mountVframe(id, 'mx-gtip/index', ops);
        GTipManager['_k']($('#' + id), ops.dock);
    },
    gtipRT: function (msg, timeout) {
        this['_bV']({
            msg: msg,
            dock: 'rt',
            timeout: timeout || 3000
        });
    },
    gtipRB: function (msg, timeout) {
        this['_bV']({
            msg: msg,
            dock: 'rb',
            timeout: timeout || 3000
        });
    },
    gtipLT: function (msg, timeout) {
        this['_bV']({
            msg: msg,
            dock: 'lt',
            timeout: timeout || 3000
        });
    },
    gtipLB: function (msg, timeout) {
        this['_bV']({
            msg: msg,
            dock: 'lb',
            timeout: timeout || 3000
        });
    }
});

});