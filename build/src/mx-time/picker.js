/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/picker",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor*/
require("./index");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_gallery_mx-time_picker_","/* @dependent: ./index.less */\n._zs_gallery_mx-time_picker_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-time_picker_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-time_picker_-wrapper {\n  position: relative;\n  border: 1px solid #e6e6e6;\n  padding: 10px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 1;\n  width: 244px;\n}\n._zs_gallery_mx-time_picker_-time {\n  margin: 0 10px;\n}\n._zs_gallery_mx-time_picker_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 10px 10px 0;\n  padding: 10px 0 0 0;\n}\n");
var format = function (t) {
    if (t < 10)
        return '0' + t;
    return t;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, time = $$.time, types = $$.types; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-time_picker_-wrapper" id="wrapper_' + ($expr = '<%=viewId%>', $e(viewId)) + '"><div mx-view="mx-time/index?time=' + ($expr = '<%!$eu(time)%>', $eu(time)) + '&types=' + ($expr = '<%!$eu(types)%>', $eu(types)) + '" id="time_' + ($expr = '<%=viewId%>', $e(viewId)) + '" class="_zs_gallery_mx-time_picker_-time clearfix" mx-change="' + $viewId + '@{take}()"></div><div mxs="_zs_galleryc,:_" class="_zs_gallery_mx-time_picker_-footer"><button type="button" class="btn btn-brand" mx-click="' + $viewId + '@{hide}({enter:true})">确定</button><button type="button" class="btn ml5" mx-click="' + $viewId + '@{hide}()">取消</button></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/picker.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        Monitor['@{setup}']();
        var oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        var click = function () {
            me['@{show}']();
        };
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['@{owner.node}'] = oNode;
        oNode.prop('autocomplete', 'off');
        var time = oNode.val().trim();
        if (!time) {
            var d = new Date();
            time = format(d.getHours()) + ':' +
                format(d.getMinutes()) + ':' +
                format(d.getSeconds());
        }
        extra.time = time;
        me['@{time}'] = time;
        me['@{time.bak}'] = time;
        me.updater.set(extra);
    },
    '@{inside}': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, 'temp_' + me.id) ||
            Magix.inside(node, this['@{owner.node}'][0]);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.shown}']) {
            var node = me['@{relate.node}'], ref = me['@{owner.node}'];
            node.show();
            me['@{ui.shown}'] = true;
            Monitor['@{add}'](me);
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
            var v = me['@{owner.node}'].val().trim();
            if (v && me['@{time}'] != v) {
                me['@{time}'] = v;
                me['@{time.bak}'] = v;
                $('#time_' + me.id).invokeView('val', [v]);
            }
        }
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.shown}']) {
            me['@{ui.shown}'] = false;
            me['@{relate.node}'].hide();
            Monitor['@{remove}'](me);
            if (me['@{time}'] != me['@{time.bak}']) {
                me['@{time}'] = me['@{time.bak}'];
                $('#time_' + me.id).invokeView('val', [me['@{time}']]);
            }
        }
    },
    '@{take}<change>': function (e) {
        this['@{time}'] = e.time;
    },
    '@{hide}<click>': function (e) {
        var me = this;
        if (e.params.enter) {
            me['@{time.bak}'] = me['@{time}'];
        }
        me['@{hide}']();
        if (e.params.enter) {
            me['@{owner.node}'].val(me['@{time}']).trigger('change');
        }
    }
});

});