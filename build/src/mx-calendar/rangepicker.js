/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/rangepicker",["magix","$","../mx-monitor/index","mx-calendar/util","mx-medusa/util","./range"],(require,exports,module)=>{
/*Magix,$,Monitor,Util,I18n*/
require("./range");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var Util = require("mx-calendar/util");
var DateFormat = Util.dateFormat;
var GetDefaultDate = Util.getDefaultDate;
var GetQuickInfos = Util.getQuickInfos;
var GetOffsetDate = Util.getOffsetDate;
var I18n = require("mx-medusa/util");
Magix.applyStyle("_zs_gallerym","._zs_gallerybY{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_gallery_{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_gallery_{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_gallerya{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_gallerya{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryb{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryb{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryc{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryc{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryd{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryd{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}[mx-view*=\"mx-calendar/datepicker\"],[mx-view*=\"mx-calendar/rangepicker\"]{display:inline-block;position:relative;vertical-align:middle}[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallerybZ,[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallerybZ{display:none;position:absolute;z-index:1000;min-width:100%}[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallerybZ._zs_galleryc_,[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallerybZ._zs_galleryc_{display:block;-webkit-animation:_zs_gallery_ .25s ease-out;animation:_zs_gallery_ .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}[mx-view*=\"mx-calendar/datepicker\"] ._zs_galleryca,[mx-view*=\"mx-calendar/rangepicker\"] ._zs_galleryca{width:100%}._zs_galleryaO{position:relative}._zs_galleryaO._zs_gallerycb ._zs_gallerycc{padding:0 5px}._zs_galleryaO._zs_gallerycd ._zs_gallerycc{position:absolute;top:0;left:50%;width:36px;height:30px;margin-left:-18px;line-height:30px;text-align:center}._zs_galleryaO._zs_gallerycd ._zs_galleryce{display:inline-block;width:50%;text-align:center}._zs_galleryaO._zs_gallerycd ._zs_galleryaQ{padding-right:18px}._zs_galleryaO._zs_gallerycd ._zs_galleryaR{padding-left:18px}._zs_galleryaO._zs_galleryaP ._zs_galleryaQ{color:#4d7fff}._zs_galleryaO._zs_galleryaP ._zs_galleryaR{color:#14c9ce}");
var Rangepicker = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, textAlign = $$.textAlign, rangeInfo = $$.rangeInfo, result = $$.result, show = $$.show, left = $$.left, top = $$.top; $p += '<div class="input _zs_galleryca" id="input_' + $e(viewId) + '" mx-click="' + $viewId + '__o()" mx-change="' + $viewId + '__l()"><div class="_zs_galleryaO ' + $e(textAlign) + ' '; if (rangeInfo.vs) {
    ;
    $p += ' _zs_galleryaP ';
} ; $p += '">'; if (result.endStr) {
    ;
    $p += '<span mxa="_zs_gallery):_" class="_zs_galleryce _zs_galleryaQ">' + $e(result.startStr) + '</span><span mxa="_zs_gallery):a" class="_zs_gallerycc color-9">' + $e(result.centetTip) + '</span><span mxa="_zs_gallery):b" class="_zs_galleryce _zs_galleryaR">' + $e(result.endStr) + '</span>';
}
else {
    ;
    $p += ' ' + $e(result.startStr) + ' ';
} ; $p += '</div></div><div mxv="rangeInfo" class="_zs_gallerybZ '; if (show) {
    ;
    $p += '_zs_galleryc_';
} ; $p += '" id="rpcnt_' + $e(viewId) + '" style="left:' + $e(left) + 'px;top:' + $e(top) + 'px;" mx-view="mx-calendar/range?configs=' + $i($$ref, rangeInfo) + '" mx-change="' + $viewId + '__M()" mx-cancel="' + $viewId + '__m()"></div>'; return $p; },
    init: function (extra) {
        var that = this;
        Monitor['__f']();
        that.on('destroy', function () {
            Monitor['__g'](that);
            Monitor['__h']();
        });
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        that.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var centerClass = '_zs_gallerycd';
        var classes = {
            left: '_zs_gallerycb',
            center: centerClass
        };
        var textAlign = classes[extra.textAlign || 'center'] || centerClass;
        // vsEnable 是否可对比，默认关闭
        // vs 对比初始状态 
        // vsSingle 可对比情况下，关闭对比时是选择时间段还是单天
        var vsEnable = (/^true$/i).test(extra.vsenable) || false, vs = false;
        if (vsEnable) {
            vs = (/^true$/i).test(extra.vs) || false;
        }
        var vsSingle = vsEnable ? ((/^true$/i).test(extra.single) || false) : false;
        var timeType = extra.timeType; //可选时分秒
        var formatter = extra.formatter || ('YYYY-MM-dd' + (timeType ? ' hh:mm:ss' : ''));
        var dateType = extra.dateType; //可选年月日
        // 快捷选项
        var startDisabled = (/^true$/i).test(extra.startDisabled) || false; //开始时间是否可选
        var endDisabled = (/^true$/i).test(extra.endDisabled) || false; //结束时间是否可选
        var showShortcuts = !(/^false$/i).test(extra.shortcuts); // 默认开启快捷选项的
        var quickDates = showShortcuts ? (extra.shortkeys || ['today', 'yesterday', 'preWeekMon', 'lastestWeekMon', 'preMonth', 'lastestThisMonth']) : [];
        if (startDisabled) {
            // 开始时间禁止使用的时候，只允许使用动态计算的快捷日期
            // 动态计算的都是依据开始时间计算的
            showShortcuts = false;
            for (var i = 0; i < quickDates.length; i++) {
                if ((quickDates[i].indexOf('dynamic') < 0) && (quickDates[i].indexOf('forever') < 0)) {
                    quickDates.splice(i--, 1);
                }
            }
        }
        if (endDisabled) {
            // 结束时间禁止选择的时候，不允许使用快捷方式
            showShortcuts = false;
            quickDates = [];
        }
        var start = extra.start, end = extra.end, min = extra.min, max = extra.max;
        if (!start) {
            start = GetDefaultDate(min, max, formatter);
        }
        // 包含快捷方式不限的时候end=不限，不需默认初始化
        if (!end && (!showShortcuts || (quickDates.indexOf('forever') < 0))) {
            end = GetDefaultDate(min, max, formatter);
        }
        // 匹配是否为快捷日期
        var dateStart = new Date(DateFormat(start, formatter));
        var dateStartStr = DateFormat(dateStart, formatter);
        var dateEnd, dateEndStr;
        if (end == Util.foreverStr) {
            dateEnd = dateEndStr = Util.foreverStr;
        }
        else {
            dateEnd = new Date(DateFormat(end, formatter));
            dateEndStr = DateFormat(dateEnd, formatter);
        }
        var quickInfos = GetQuickInfos(quickDates, dateStartStr, formatter);
        var quickDateText, quickDateKey;
        // 可能匹配到多个
        for (var index = 0; index < quickInfos.length; index++) {
            var q = quickInfos[index];
            if (q.start == dateStartStr && q.end == dateEndStr) {
                quickDateText = q.text;
                quickDateKey = q.key;
            }
        }
        var dates = {
            start: dateStart,
            startStr: dateStartStr,
            end: dateEnd,
            endStr: dateEndStr,
            formatter: formatter,
            quickDateText: quickDateText,
            quickDateKey: quickDateKey
        };
        var rangeInfo = {
            min: min,
            max: max,
            timeType: timeType,
            dateType: dateType,
            formatter: formatter,
            quickDates: quickDates,
            quickGap: extra.quickGap,
            align: extra.align,
            vsEnable: vsEnable,
            vs: vs,
            vsSingle: vsSingle,
            startDisabled: startDisabled,
            endDisabled: endDisabled,
            dates: dates,
            disabledWeeks: extra.disabledWeeks || []
        };
        that.updater.set({
            viewId: that.id,
            rangeInfo: rangeInfo,
            textAlign: textAlign
        });
        // 双向绑定
        that['__j'] = $('#' + that.id);
        that['__j'].val(JSON.stringify({
            start: dates.startStr,
            end: dates.endStr,
            vs: vs
        }));
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this['__L']();
    },
    '__L': function () {
        var that = this;
        var rangeInfo = that.updater.get('rangeInfo');
        var dates = rangeInfo.dates, vs = rangeInfo.vs, vsSingle = rangeInfo.vsSingle, formatter = rangeInfo.formatter;
        var startStr = dates.startStr, endStr = dates.endStr, quickDateText = dates.quickDateText;
        var result = {
            centetTip: vs ? I18n['calendar.vs'] : I18n['calendar.to']
        };
        if (vs) {
            var today = DateFormat(GetOffsetDate(0), formatter);
            var yesterday = DateFormat(GetOffsetDate(-1), formatter);
            var map = {
                today: I18n['calendar.today'],
                yesterday: I18n['calendar.yesterday']
            };
            result.startStr = map[startStr] || startStr;
            result.endStr = map[endStr] || endStr;
        }
        else {
            // 非对比情况
            if (vsSingle) {
                // 选择单日
                result.startStr = startStr;
            }
            else {
                // 选择连续时间
                if (quickDateText) {
                    if (quickDateText == Util.foreverStr) {
                        // 不限的情况显示开始时间
                        result.startStr = startStr;
                        result.endStr = Util.foreverStr;
                    }
                    else {
                        result.startStr = quickDateText;
                    }
                }
                else {
                    result.startStr = startStr;
                    result.endStr = endStr;
                }
            }
        }
        that.updater.digest({
            result: result
        });
    },
    '__l<change,focusin,focusout>': function (e) {
        if (!e.dates) {
            e.stopPropagation();
        }
    },
    '__o<click>': function (e) {
        e.preventDefault();
        var show = this.updater.get('show');
        if (show) {
            this['__m']();
        }
        else {
            this['__n']();
        }
    },
    '__n': function () {
        var that = this;
        var updater = that.updater;
        var rangeInfo = updater.get('rangeInfo');
        var show = updater.get('show');
        if (!show) {
            updater.digest({
                show: true
            });
            var inputNode = $('#input_' + that.id), calNode = $('#rpcnt_' + that.id);
            var gap = 10;
            var left = 0, top = inputNode.outerHeight() + gap;
            if (rangeInfo.align == 'right') {
                left = inputNode.outerWidth() - calNode.outerWidth();
            }
            updater.digest({
                top: top,
                left: left
            });
            Monitor['__p'](that);
        }
    },
    '__m': function () {
        var that = this;
        var show = that.updater.get('show');
        if (show) {
            that.updater.digest({
                show: false
            });
            Monitor['__g'](that);
        }
    },
    '__M<change>': function (e) {
        var that = this;
        e.stopPropagation();
        var rangeInfo = that.updater.get('rangeInfo');
        var dates = e.dates, vs = e.vs;
        Magix.mix(rangeInfo, {
            dates: dates,
            vs: vs
        });
        that['__L']();
        that['__m']();
        //支持多绑定
        var result = JSON.stringify({
            start: dates.startStr,
            end: dates.endStr,
            vs: vs
        });
        that['__j'].val(result).trigger({
            type: 'change',
            start: dates.startStr,
            end: dates.endStr,
            vs: vs,
            dates: dates
        });
    },
    '__m<cancel>': function (e) {
        e.stopPropagation();
        this['__m']();
    },
    '__k': function (node) {
        var that = this;
        var inView = Magix.inside(node, that.id) ||
            Magix.inside(node, that['__j'][0]);
        if (!inView) {
            var children = that.owner.children();
            for (var i = children.length - 1; i >= 0; i--) {
                var child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('__k', [node]);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    }
});
module.exports = Rangepicker;

});