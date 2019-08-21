/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/index",["magix","$","../mx-util/monitor","./content"],(require,exports,module)=>{
/*Magix,$,Monitor*/
require("./content");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-util/monitor");
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, disabled = $$.disabled, name = $$.name, time = $$.time, rList = $$.rList, viewId = $$.viewId, types = $$.types; var $expr, $art, $line; try {
    $p += '<div class="mx-trigger ';
    $line = 1;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' mx-trigger ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 2;
    $art = 'if !disabled';
    ;
    $expr = '<%if (!disabled) {%>';
    if (!disabled) {
        ;
        $p += ' mx-click="' + $viewId + '@{show}()" ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '><span mxa="_zs_gallerye~:_" class="mx-trigger-label">';
    $line = 4;
    $art = 'if name';
    ;
    $expr = '<%if (name) {%>';
    if (name) {
        ;
        $p += '<span mxa="_zs_gallerye~:a" class="color-9">';
        $line = 4;
        $art = '=name';
        ;
        $p += ($expr = '<%=name%>', $e(name)) + '：</span>';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 5;
    $art = '=time';
    ;
    $p += ($expr = '<%=time%>', $e(time)) + '</span><span mxs="_zs_gallerye~:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div><div class="mx-output mx-output-bottom ';
    $line = 10;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' mx-output-open ';
        $line = 10;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 11;
    $art = 'if rList';
    ;
    $expr = '<%if (rList) {%>';
    if (rList) {
        ;
        $p += '<div mx-view="mx-time/content?time=';
        $line = 14;
        $art = '=time';
        ;
        $p += ($expr = '<%!$eu(time)%>', $eu(time)) + '&types=';
        $line = 15;
        $art = '=types';
        ;
        $p += ($expr = '<%!$eu(types)%>', $eu(types)) + '" id="';
        $line = 13;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_content" mx-change="' + $viewId + '@{stop}()"></div><div mxs="_zs_gallerye~:a" class="mx-output-footer clearfix"><a href="javascript:;" class="fl btn btn-small btn-brand" mx-click="' + $viewId + '@{hide}({enter:true})">确定</a><a href="javascript:;" class="fl btn btn-small ml10" mx-click="' + $viewId + '@{hide}()">取消</a></div>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{owner.node}'] = $('#' + me.id);
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        var disabled = (extra.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        var time = extra.time;
        if (!time) {
            var d = new Date();
            time = format(d.getHours()) + ':' +
                format(d.getMinutes()) + ':' +
                format(d.getSeconds());
        }
        me.updater.set({
            viewId: me.id,
            disabled: disabled,
            time: time,
            types: extra.types,
            expand: false //列表是否展开
        });
        me['@{owner.node}'].val(time);
    },
    render: function () {
        this.updater.digest({});
    },
    '@{hide}': function () {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me.updater.digest({
                expand: false
            });
            Monitor['@{remove}'](me);
        }
    },
    '@{show}<click>': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (!expand) {
            var d = {
                expand: true
            };
            var r = me.updater.get('rList');
            if (!r) {
                d.rList = true;
            }
            me.updater.digest(d);
            Monitor['@{add}'](me);
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}<click>': function (e) {
        var me = this;
        var oldTime = me.updater.get('time');
        var newTime = oldTime;
        if (e.params.enter) {
            // 确定
            var vf = Magix.Vframe.get(me.id + '_content');
            newTime = vf.invoke('val');
        }
        me['@{hide}']();
        if (e.params.enter) {
            if (oldTime != newTime) {
                me.updater.digest({
                    time: newTime
                });
                me['@{owner.node}'].val(newTime).trigger({
                    type: 'change',
                    time: newTime
                });
            }
        }
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});