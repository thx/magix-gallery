/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/datepicker",["magix","$","../mx-util/monitor","mx-calendar/util","./index"],(require,exports,module)=>{
/*Magix,$,Monitor,Util*/
require("./index");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-util/monitor");
var Util = require("mx-calendar/util");
var GetDefaultDate = Util.getDefaultDate;
Magix.applyStyle("_zs_gallery_mx-calendar_rangepicker_","._zs_gallery_mx-calendar_rangepicker_-rangepicker-input {\n  width: 100%;\n}\n._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result {\n  position: relative;\n}\n._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-left ._zs_gallery_mx-calendar_rangepicker_-center {\n  padding: 0 5px;\n}\n._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-center ._zs_gallery_mx-calendar_rangepicker_-center {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 36px;\n  height: 30px;\n  margin-left: -18px;\n  line-height: 30px;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-center ._zs_gallery_mx-calendar_rangepicker_-co {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-center ._zs_gallery_mx-calendar_rangepicker_-co-left {\n  padding-right: 18px;\n}\n._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-center ._zs_gallery_mx-calendar_rangepicker_-co-right {\n  padding-left: 18px;\n}\n._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-left {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-right {\n  color: var(--color-brand-vs);\n}\n[mx-disabled] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input,\n[mx-disabled]:hover ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input {\n  border-color: var(--color-border);\n  cursor: not-allowed;\n  background-color: var(--color-disabled);\n  color: #999;\n}\n[mx-disabled] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-left,\n[mx-disabled]:hover ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-left,\n[mx-disabled] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-right,\n[mx-disabled]:hover ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-right {\n  color: #999;\n}\n");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, dateInfo = $$.dateInfo, show = $$.show, left = $$.left, top = $$.top; var $expr, $art, $line; try {
    $p += '<div class="input _zs_gallery_mx-calendar_rangepicker_-rangepicker-input" id="input_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" mx-click="' + $viewId + '@{toggle}()" mx-change="' + $viewId + '@{stop}()"><div mxa="_zs_gallery*:_" class="_zs_gallery_mx-calendar_rangepicker_-result">';
    $line = 5;
    $art = 'if dateInfo.prefix';
    ;
    $expr = '<%if (dateInfo.prefix) {%>';
    if (dateInfo.prefix) {
        ;
        $p += '<span mxa="_zs_gallery*:a" class="color-9 mr5">';
        $line = 6;
        $art = '=dateInfo.prefix';
        ;
        $p += ($expr = '<%=dateInfo.prefix%>', $e(dateInfo.prefix)) + '：</span>';
        $line = 7;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 8;
    $art = '=dateInfo.selected';
    ;
    $p += ($expr = '<%=dateInfo.selected%>', $e(dateInfo.selected)) + '</div></div><div mxv="dateInfo" class="mx-output mx-output-bottom ';
    $line = 11;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += ' mx-output-open ';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" style="left: ';
    $line = 12;
    $art = '=left';
    ;
    $p += ($expr = '<%=left%>', $e(left)) + 'px; top: ';
    $line = 12;
    $art = '=top';
    ;
    $p += ($expr = '<%=top%>', $e(top)) + 'px;" id="dpcnt_';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" mx-view="mx-calendar/index?configs=';
    $line = 14;
    $art = '@dateInfo';
    ;
    $p += ($expr = '<%@dateInfo%>', $i($$ref, dateInfo)) + '" mx-change="' + $viewId + '@{date.picked}()" mx-cancel="' + $viewId + '@{hide}()"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/datepicker.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        Monitor['@{setup}']();
        that.on('destroy', function () {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
        });
        that['@{extra}'] = $.extend(true, {}, extra);
        // 支持mx-disabled或者disabled
        that['@{ui.disabled}'] = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');
    },
    render: function () {
        var that = this;
        var dateInfo = that['@{extra}'];
        if (!dateInfo.selected) {
            dateInfo.selected = GetDefaultDate(dateInfo.min, dateInfo.max, dateInfo.formatter);
        }
        that.updater.digest({
            viewId: that.id,
            dateInfo: dateInfo
        });
        that['@{owner.node}'] = $('#' + that.id);
    },
    '@{inside}': function (node) {
        var that = this;
        return Magix.inside(node, that.id) || Magix.inside(node, that['@{owner.node}'][0]);
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        if (!e.dates) {
            e.stopPropagation();
        }
    },
    '@{toggle}<click>': function (e) {
        if (this['@{ui.disabled}']) {
            return;
        }
        e.preventDefault();
        var show = this.updater.get('show');
        if (show) {
            this['@{hide}']();
        }
        else {
            this['@{show}']();
        }
    },
    '@{show}': function () {
        var that = this;
        var show = that.updater.get('show');
        if (!show) {
            that.updater.digest({
                show: true
            });
            var inputNode = $('#input_' + that.id), calNode = $('#dpcnt_' + that.id);
            var dateInfo = that.updater.get('dateInfo');
            var gap = 10;
            var left = 0, top = inputNode.outerHeight() + gap;
            if (dateInfo.align == 'right') {
                left = inputNode.outerWidth() - calNode.outerWidth();
            }
            that.updater.digest({
                top: top,
                left: left
            });
            Monitor['@{add}'](that);
        }
    },
    '@{hide}': function () {
        var that = this;
        var show = that.updater.get('show');
        if (show) {
            that.updater.digest({
                show: false
            });
            Monitor['@{remove}'](that);
        }
    },
    '@{date.picked}<change>': function (e) {
        var that = this;
        e.stopPropagation();
        var dateInfo = that.updater.get('dateInfo');
        dateInfo.selected = e.date + (e.time ? ' ' + e.time : '');
        that.updater.digest({
            dateInfo: dateInfo
        });
        that['@{hide}']();
        // 通知外层数据更新
        that['@{owner.node}'].val(dateInfo.selected).trigger({
            type: 'change',
            date: e.date,
            time: e.time
        });
    },
    '@{hide}<cancel>': function () {
        this['@{hide}']();
    }
});

});