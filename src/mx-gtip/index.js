/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
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
Magix.applyStyle("__mx-gtip_index_","/* @dependent: ./index.less */\n.__mx-gtip_index_-gtip {\n  border: solid 1px #e6e6e6;\n  background-color: #fff;\n  padding: 8px 20px;\n  position: fixed;\n  z-index: 450;\n  border-radius: 4px;\n  width: 300px;\n  height: 65px;\n  overflow: hidden;\n  word-break: break-all;\n  transition: all 0.3s;\n  opacity: 0;\n}\n.__mx-gtip_index_-fadein {\n  opacity: 1;\n}\n.__mx-gtip_index_-fadeout {\n  opacity: 0;\n}\n");
var GTipManager = {
    '@{calc.pos}': function (dock) {
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
    '@{add}': function (tip, dock) {
        if (!dock) {
            dock = 'rt';
        }
        var me = this;
        if (!Docks[dock]) {
            throw new Error('mx-gip unsupport dock:' + dock);
        }
        var list = me['$' + dock] || (me['$' + dock] = []);
        list.push(tip);
        tip.on('@{tipremoved}', function () {
            me['@{remove}'](tip, dock);
        });
        me['@{calc.pos}'](dock);
    },
    '@{remove}': function (tip, dock) {
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
        me['@{calc.pos}'](dock);
    }
};
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
} ; var $g = '', $_temp, $p = '', tip = $$.tip; var $expr, $art, $line; try {
    $p += ($expr = '<%=tip.msg%>', $e(tip.msg)) + '';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-gtip/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{extra}'] = extra;
        me.on('destroy', function () {
            me['@{owner.node}'].trigger('@{tipremoved}').remove();
        });
    },
    render: function () {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.addClass('__mx-gtip_index_-gtip');
        me['@{owner.node}'] = oNode;
        me.updater.digest({
            tip: me['@{extra}']
        });
        if (me['@{extra}'].timeout) {
            setTimeout(me.wrapAsync(function () {
                me['@{close}']();
            }), me['@{extra}'].timeout);
        }
        setTimeout(me.wrapAsync(function () {
            oNode.addClass('__mx-gtip_index_-fadein');
        }), 20);
    },
    '@{close}': function () {
        var me = this;
        me['@{owner.node}'].addClass('__mx-gtip_index_-fadeout');
        setTimeout(me.wrapAsync(function () {
            me.owner.unmountVframe();
        }), 300);
    }
}, {
    '@{gtipShow}': function (ops) {
        var id = Magix.guid('gtip-');
        $('body').append("<div id=\"" + id + "\" />");
        this.owner.mountVframe(id, 'mx-gtip/index', ops);
        GTipManager['@{add}']($('#' + id), ops.dock);
    },
    gtipRT: function (msg, timeout) {
        this['@{gtipShow}']({
            msg: msg,
            dock: 'rt',
            timeout: timeout || 3000
        });
    },
    gtipRB: function (msg, timeout) {
        this['@{gtipShow}']({
            msg: msg,
            dock: 'rb',
            timeout: timeout || 3000
        });
    },
    gtipLT: function (msg, timeout) {
        this['@{gtipShow}']({
            msg: msg,
            dock: 'lt',
            timeout: timeout || 3000
        });
    },
    gtipLB: function (msg, timeout) {
        this['@{gtipShow}']({
            msg: msg,
            dock: 'lb',
            timeout: timeout || 3000
        });
    }
});

});