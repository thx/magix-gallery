/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/datepicker",["magix","$","../mx-monitor/index","mx-calendar/util","./index"],(require,exports,module)=>{
/*Magix,$,Monitor,Util*/
require("./index");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var Util = require("mx-calendar/util");
var GetDefaultDate = Util.getDefaultDate;
Magix.applyStyle("_zs_gallery_mx-calendar_rangepicker_","/* @dependent: ./index.less */\n._zs_gallery_mx-calendar_rangepicker_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-calendar_rangepicker_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n/**\n   css3注意点小计\n    - animation-fill-mode 动画结束停在最后一帧\n    - translate(-30%, 0) 百分比是相对于元素自己的宽高，margin-left:-30%; 是相对于父容器的宽高\n    - transition、animation动画不能设置display:none;\n    - :after, :before等伪元素目前不支持嵌套，未来会支持 [还有多重伪元素 div::before(3) { content: ”; }];\n      - :after.content 用法\n        { content:  }  - 加载指定资源图片\n        { content: attr(data-src) } - 读取当前节点上的自定义属性值\n        { content: content:\"选项\" counter(sectioncounter) \"： \";\n          counter-increment: sectioncounter;\n        } - 自动计数器 【参考资料：http://dev.opera.com/articles/view/automatic-numbering-with-css-counters/】\n\n    - box-sizing: [content-box | padding-box | border-box];\n      - 全局设置：\n        html {\n          box-sizing: border-box;\n        }\n        *, *:before, *:after {\n          box-sizing: inherit;\n        }\n        // 宽度包含了border以及padding，这在容器设置了100%百分比宽度时又设置了padding时很有用\n */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-calendar_rangepicker_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-calendar_rangepicker_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n[mx-view*=\"mx-calendar/rangepicker\"],\n[mx-view*=\"mx-calendar/datepicker\"] {\n  position: relative;\n}\n[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper,\n[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper {\n  display: none;\n  position: absolute;\n  z-index: 10;\n  min-width: 100%;\n}\n[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper._zs_gallery_mx-calendar_rangepicker_-open,\n[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper._zs_gallery_mx-calendar_rangepicker_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-calendar_rangepicker_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-calendar_rangepicker_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input,\n[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input {\n  width: 100%;\n}\n._zs_gallery_mx-calendar_rangepicker_-result {\n  position: relative;\n  color: #999;\n}\n._zs_gallery_mx-calendar_rangepicker_-result ._zs_gallery_mx-calendar_rangepicker_-center {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 36px;\n  height: 30px;\n  margin-left: -18px;\n  line-height: 30px;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_rangepicker_-result ._zs_gallery_mx-calendar_rangepicker_-co {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_rangepicker_-result ._zs_gallery_mx-calendar_rangepicker_-co-left {\n  padding-right: 18px;\n}\n._zs_gallery_mx-calendar_rangepicker_-result ._zs_gallery_mx-calendar_rangepicker_-co-right {\n  padding-left: 18px;\n}\n._zs_gallery_mx-calendar_rangepicker_-result ._zs_gallery_mx-calendar_rangepicker_-result-prefix {\n  color: #999;\n  margin-right: 5px;\n}\n._zs_gallery_mx-calendar_rangepicker_-result:hover {\n  color: #666;\n}\n._zs_gallery_mx-calendar_rangepicker_-result:hover ._zs_gallery_mx-calendar_rangepicker_-result-prefix {\n  color: #999;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-left {\n  color: #4d7fff;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-right {\n  color: #14c9ce;\n}\n");
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
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '" mx-click="' + $viewId + '@{toggle}()" mx-change="' + $viewId + '@{stop}()"><div mxa="_zs_gallery6:_" class="_zs_gallery_mx-calendar_rangepicker_-result">';
    $line = 5;
    $art = 'if dateInfo.prefix';
    ;
    $p += '';
    $expr = '<%if (dateInfo.prefix) {%>';
    if (dateInfo.prefix) {
        ;
        $p += '<span mxa="_zs_gallery6:a" class="_zs_gallery_mx-calendar_rangepicker_-result-prefix">';
        $line = 6;
        $art = '=dateInfo.prefix';
        ;
        $p += '' + ($expr = '<%=dateInfo.prefix%>', $e(dateInfo.prefix)) + '：</span>';
        $line = 7;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 8;
    $art = '=dateInfo.selected';
    ;
    $p += '' + ($expr = '<%=dateInfo.selected%>', $e(dateInfo.selected)) + '</div></div><div mxv="dateInfo" class="_zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper ';
    $line = 11;
    $art = 'if show';
    ;
    $p += '';
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += '_zs_gallery_mx-calendar_rangepicker_-open';
        $line = 11;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '" id="dpcnt_';
    $line = 11;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '" style="left: ';
    $line = 12;
    $art = '=left';
    ;
    $p += '' + ($expr = '<%=left%>', $e(left)) + 'px; top: ';
    $line = 12;
    $art = '=top';
    ;
    $p += '' + ($expr = '<%=top%>', $e(top)) + 'px;" mx-view="mx-calendar/index?configs=';
    $line = 13;
    $art = '@dateInfo';
    ;
    $p += '' + ($expr = '<%@dateInfo%>', $i($$ref, dateInfo)) + '" mx-change="' + $viewId + '@{date.picked}()" mx-cancel="' + $viewId + '@{hide}()"></div>';
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
    },
    render: function () {
        var that = this;
        var dateInfo = that['@{extra}'];
        dateInfo.hasBtn = 1;
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
        that['@{owner.node}'].trigger({
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