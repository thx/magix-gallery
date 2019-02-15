/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/range",["magix","$","mx-calendar/util","../mx-medusa/util","mx-switch/index","./datepicker"],(require,exports,module)=>{
/*Magix,$,Util,I18n*/
require("mx-switch/index");
require("./datepicker");
/**
 * 可能会直接使用该view
 */
var Magix = require("magix");
var $ = require("$");
var Util = require("mx-calendar/util");
var DateFormat = Util.dateFormat;
var DateParse = Util.dateParse;
var GetDefaultDate = Util.getDefaultDate;
var GetQuickInfos = Util.getQuickInfos;
var ForeverStr = Util.foreverStr;
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-calendar_range_","/* @dependent: ./index.less */\n._zs_gallery_mx-calendar_range_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-calendar_range_-wrapper {\n  position: relative;\n  z-index: 1000;\n  min-width: 280px;\n  width: 100%;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #fff;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-title {\n  margin-bottom: 10px;\n  color: #999;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range {\n  position: relative;\n  margin-bottom: 15px;\n  line-height: 24px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input {\n  float: left;\n  width: 50%;\n  min-width: 110px;\n  text-align: center;\n  cursor: text;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"] {\n  width: 100%;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-range-disabled,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input {\n  height: 24px;\n  padding: 0;\n  line-height: 24px;\n  border-radius: 4px;\n  background-color: #f0f0f0;\n  border: 0;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: #333;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: #4d7fff;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: #14c9ce;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-range-disabled {\n  display: inline-block;\n  width: 100%;\n  cursor: not-allowed;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  color: #ccc;\n  vertical-align: middle;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input-left {\n  padding-right: 9px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input-right {\n  padding-left: 9px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-gap {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 18px;\n  height: 24px;\n  margin-left: -9px;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st {\n  float: left;\n  width: 44%;\n  height: 24px;\n  margin-right: 6%;\n  margin-bottom: 10px;\n  padding: 0 10px;\n  line-height: 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st:hover {\n  background: #f0f0f0;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st._zs_gallery_mx-calendar_range_-selected,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st._zs_gallery_mx-calendar_range_-selected:hover {\n  color: #4d7fff;\n  background: #f6f9ff;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts._zs_gallery_mx-calendar_range_-shortcuts-small ._zs_gallery_mx-calendar_range_-st {\n  width: 32%;\n  margin-right: 1%;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-footer {\n  padding-top: 10px;\n  border-top: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-calendar_range_-wrapper._zs_gallery_mx-calendar_range_-time {\n  min-width: 320px;\n}\n._zs_gallery_mx-calendar_range_-wrapper._zs_gallery_mx-calendar_range_-time ._zs_gallery_mx-calendar_range_-range-input {\n  min-width: 140px;\n}\n._zs_gallery_mx-calendar_range_-wrapper._zs_gallery_mx-calendar_range_-inlay {\n  border: 0 none;\n}\n");
var RangeDate = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', timeType = $$.timeType, inlay = $$.inlay, title = $$.title, vsEnable = $$.vsEnable, vs = $$.vs, startDisabled = $$.startDisabled, dates = $$.dates, min = $$.min, endDisabled = $$.endDisabled, max = $$.max, formatter = $$.formatter, disabledWeeks = $$.disabledWeeks, dateType = $$.dateType, vsSingle = $$.vsSingle, endMinFn = $$.endMinFn, align = $$.align, quickInfos = $$.quickInfos, quickGap = $$.quickGap, quickTip = $$.quickTip, submitText = $$.submitText, cancelText = $$.cancelText; var $expr, $art, $line; try {
    $p += '<div mxv class="_zs_gallery_mx-calendar_range_-wrapper ';
    $line = 1;
    $art = 'if timeType';
    ;
    $expr = '<%if (timeType) {%>';
    if (timeType) {
        ;
        $p += ' _zs_gallery_mx-calendar_range_-time ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 1;
    $art = 'if inlay';
    ;
    $expr = '<%if (inlay) {%>';
    if (inlay) {
        ;
        $p += ' _zs_gallery_mx-calendar_range_-inlay ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-contextmenu="' + $viewId + '@{prevent}()"><div mxv mxa="_zs_gallery{:_" class="_zs_gallery_mx-calendar_range_-range"><div mxa="_zs_gallery{:a" class="_zs_gallery_mx-calendar_range_-title clearfix"><span mxa="_zs_gallery{:b" class="fl">';
    $line = 4;
    $art = '=title';
    ;
    $p += ($expr = '<%=title%>', $e(title)) + '：</span>';
    $line = 5;
    $art = 'if vsEnable';
    ;
    $expr = '<%if (vsEnable) {%>';
    if (vsEnable) {
        ;
        $p += '<span class="fr" mx-change="' + $viewId + '@{vs.toggle}()" mx-view="mx-switch/index?state=';
        $line = 6;
        $art = '=vs';
        ;
        $p += ($expr = '<%!$eu(vs)%>', $eu(vs)) + '"></span>';
        $line = 7;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv mxa="_zs_gallery{:c" class="clearfix pr"><div mxv mxa="_zs_gallery{:d" class="_zs_gallery_mx-calendar_range_-range-input _zs_gallery_mx-calendar_range_-range-input-left">';
    $line = 11;
    $art = 'if startDisabled';
    ;
    $expr = '<%if (startDisabled) {%>';
    if (startDisabled) {
        ;
        $p += '<div mxa="_zs_gallery{:e" class="_zs_gallery_mx-calendar_range_-range-disabled">';
        $line = 12;
        $art = '=dates.startStr';
        ;
        $p += ($expr = '<%=dates.startStr%>', $e(dates.startStr)) + '</div>';
        $line = 13;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxv="disabledWeeks" ';
        $line = 15;
        $art = 'if vs';
        ;
        $expr = '<%if (vs) {%>';
        if (vs) {
            ;
            $p += ' class="_zs_gallery_mx-calendar_range_-vs1" ';
            $line = 15;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' mx-change="' + $viewId + '@{sync.date}({trigger:\'start\'})" mx-view="mx-calendar/datepicker?min=';
        $line = 16;
        $art = '=min';
        ;
        $p += ($expr = '<%!$eu(min)%>', $eu(min)) + '&max=';
        $line = 17;
        $art = '=(endDisabled?dates.endStr:max)';
        ;
        $p += ($expr = '<%!$eu((endDisabled ? dates.endStr : max))%>', $eu((endDisabled ? dates.endStr : max))) + '&formatter=';
        $line = 18;
        $art = '=formatter';
        ;
        $p += ($expr = '<%!$eu(formatter)%>', $eu(formatter)) + '&disabledWeeks=';
        $line = 19;
        $art = '@disabledWeeks';
        ;
        $p += ($expr = '<%@disabledWeeks%>', $i($$ref, disabledWeeks)) + '&timeType=';
        $line = 20;
        $art = '=timeType';
        ;
        $p += ($expr = '<%!$eu(timeType)%>', $eu(timeType)) + '&dateType=';
        $line = 21;
        $art = '=dateType';
        ;
        $p += ($expr = '<%!$eu(dateType)%>', $eu(dateType)) + '&selected=';
        $line = 22;
        $art = '=dates.startStr';
        ;
        $p += ($expr = '<%!$eu(dates.startStr)%>', $eu(dates.startStr)) + '"></div>';
        $line = 24;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxs="_zs_gallery{:_" class="_zs_gallery_mx-calendar_range_-range-gap">-</div><div mxv mxa="_zs_gallery{:f" class="_zs_gallery_mx-calendar_range_-range-input _zs_gallery_mx-calendar_range_-range-input-right">';
    $line = 28;
    $art = 'if ((!vs&&vsSingle) || endDisabled)';
    ;
    $expr = '<%if ((!vs && vsSingle) || endDisabled) {%>';
    if ((!vs && vsSingle) || endDisabled) {
        ;
        $p += '<div mxa="_zs_gallery{:g" class="_zs_gallery_mx-calendar_range_-range-disabled">';
        $line = 29;
        $art = '=dates.endStr';
        ;
        $p += ($expr = '<%=dates.endStr%>', $e(dates.endStr)) + '</div>';
        $line = 30;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxv="disabledWeeks" ';
        $line = 32;
        $art = 'if vs';
        ;
        $expr = '<%if (vs) {%>';
        if (vs) {
            ;
            $p += ' class="_zs_gallery_mx-calendar_range_-vs2" ';
            $line = 32;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' mx-change="' + $viewId + '@{sync.date}({trigger:\'end\'})" mx-view="mx-calendar/datepicker?min=';
        $line = 33;
        $art = '=(!vs?endMinFn(dates.startStr,min):min)';
        ;
        $p += ($expr = '<%!$eu((!vs ? endMinFn(dates.startStr, min) : min))%>', $eu((!vs ? endMinFn(dates.startStr, min) : min))) + '&max=';
        $line = 34;
        $art = '=max';
        ;
        $p += ($expr = '<%!$eu(max)%>', $eu(max)) + '&formatter=';
        $line = 35;
        $art = '=formatter';
        ;
        $p += ($expr = '<%!$eu(formatter)%>', $eu(formatter)) + '&disabledWeeks=';
        $line = 36;
        $art = '@disabledWeeks';
        ;
        $p += ($expr = '<%@disabledWeeks%>', $i($$ref, disabledWeeks)) + '&timeType=';
        $line = 37;
        $art = '=timeType';
        ;
        $p += ($expr = '<%!$eu(timeType)%>', $eu(timeType)) + '&dateType=';
        $line = 38;
        $art = '=dateType';
        ;
        $p += ($expr = '<%!$eu(dateType)%>', $eu(dateType)) + '&align=';
        $line = 39;
        $art = '=align';
        ;
        $p += ($expr = '<%!$eu(align)%>', $eu(align)) + '&selected=';
        $line = 40;
        $art = '=dates.endStr';
        ;
        $p += ($expr = '<%!$eu(dates.endStr)%>', $eu(dates.endStr)) + '"></div>';
        $line = 42;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div>';
    $line = 46;
    $art = 'if (quickInfos.length&&!vs&&!vsSingle)';
    ;
    $expr = '<%if (quickInfos.length && !vs && !vsSingle) {%>';
    if (quickInfos.length && !vs && !vsSingle) {
        ;
        $p += '<div class="_zs_gallery_mx-calendar_range_-shortcuts ';
        $line = 47;
        $art = 'if quickInfos.length > quickGap';
        ;
        $expr = '<%if (quickInfos.length > quickGap) {%>';
        if (quickInfos.length > quickGap) {
            ;
            $p += '_zs_gallery_mx-calendar_range_-shortcuts-small';
            $line = 47;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"><div mxa="_zs_gallery{:h" class="_zs_gallery_mx-calendar_range_-title">';
        $line = 48;
        $art = '=quickTip';
        ;
        $p += ($expr = '<%=quickTip%>', $e(quickTip)) + '：</div><div mxa="_zs_gallery{:i" class="clearfix">';
        $line = 50;
        $art = 'each quickInfos as info';
        ;
        $expr = '<%for (var $art_ikndbfijxs$art_i = 0, $art_cqvhauki$art_c = quickInfos.length; $art_ikndbfijxs$art_i < $art_cqvhauki$art_c; $art_ikndbfijxs$art_i++) {        var info = quickInfos[$art_ikndbfijxs$art_i]%>';
        for (var $art_ikndbfijxs$art_i = 0, $art_cqvhauki$art_c = quickInfos.length; $art_ikndbfijxs$art_i < $art_cqvhauki$art_c; $art_ikndbfijxs$art_i++) {
            var info = quickInfos[$art_ikndbfijxs$art_i];
            $p += '<span class="_zs_gallery_mx-calendar_range_-st ';
            $line = 51;
            $art = 'if (dates.quickDateKey==info.key)';
            ;
            $expr = '<%if (dates.quickDateKey == info.key) {%>';
            if (dates.quickDateKey == info.key) {
                ;
                $p += '_zs_gallery_mx-calendar_range_-selected';
                $line = 51;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + '@{date.picked}({quick:true,quickInfo:\'';
            $line = 52;
            $art = '@info';
            ;
            $p += ($expr = '<%@info%>', $i($$ref, info)) + '\'})" title="';
            $line = 53;
            $art = '=info.text';
            ;
            $p += ($expr = '<%=info.text%>', $e(info.text)) + '">';
            $line = 53;
            $art = '=info.text';
            ;
            $p += ($expr = '<%=info.text%>', $e(info.text)) + '</span>';
            $line = 54;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 57;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxa="_zs_gallery{:j" class="_zs_gallery_mx-calendar_range_-footer clearfix"><button mxa="_zs_gallery{:k" mx-click="' + $viewId + '@{date.picked}()" type="button" class="btn btn-small btn-brand mr10">';
    $line = 59;
    $art = '=submitText';
    ;
    $p += ($expr = '<%=submitText%>', $e(submitText)) + '</button><button mxa="_zs_gallery{:l" mx-click="' + $viewId + '@{cancel}()" type="button" class="btn btn-small">';
    $line = 60;
    $art = '=cancelText';
    ;
    $p += ($expr = '<%=cancelText%>', $e(cancelText)) + '</button></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/range.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var ops = $.extend(true, {}, extra.configs);
        var that = this;
        ops.inlay = ((ops.inlay + '') === 'true');
        ops.dates = ops.dates || {};
        ops.formatter = ops.formatter || 'YYYY-MM-dd';
        ops.title = ops.title || I18n['calendar.range.title'];
        var dates = ops.dates, formatter = ops.formatter, quickDates = ops.quickDates || [];
        var startStr = dates.startStr, endStr = dates.endStr;
        var min = ops.min, max = ops.max;
        if (!startStr) {
            dates.startStr = startStr = GetDefaultDate(min, max, formatter);
            dates.start = DateParse(startStr);
        }
        if (!dates.start) {
            dates.start = DateParse(dates.startStr);
        }
        // 包含快捷方式不限的时候end可能为空，不需默认初始化
        if (!endStr) {
            dates.endStr = endStr = GetDefaultDate(min, max, formatter);
            dates.end = DateParse(endStr);
        }
        if (!dates.end) {
            dates.end = DateParse(dates.endStr);
        }
        var quickInfos = GetQuickInfos(ops.quickDates, startStr, formatter);
        if (!dates.quickDateKey) {
            for (var index = 0; index < quickInfos.length; index++) {
                var q = quickInfos[index];
                if (q.start == startStr && q.end == endStr) {
                    dates.quickDateKey = q.key;
                    dates.quickDateText = q.text;
                    break;
                }
            }
        }
        ops.quickInfos = quickInfos;
        ops.quickGap = ops.quickGap || 7;
        ops.quickTip = I18n['calendar.quick'];
        ops.submitText = I18n['dialog.submit'];
        ops.cancelText = I18n['dialog.cancel'];
        ops.endMinFn = function (curStart, curMin) {
            if (!curMin) {
                return curStart;
            }
            var s = new Date(curStart), m = new Date(curMin);
            if (s.getTime() > m.getTime()) {
                return curStart;
            }
            else {
                return curMin;
            }
        };
        that.updater.set(ops);
    },
    render: function () {
        var that = this;
        that.updater.digest();
        that['@{owner.node}'] = $('#' + that.id);
    },
    '@{sync.date}<change>': function (e) {
        e.stopPropagation();
        var that = this;
        var updater = that.updater;
        var dates = updater.get('dates'), vs = updater.get('vs'), vsSingle = updater.get('vsSingle'), formatter = updater.get('formatter'), quickDates = updater.get('quickDates'), quickInfos = updater.get('quickInfos');
        var trigger = e.params.trigger;
        var result = e.date + (e.time ? ' ' + e.time : '');
        dates[trigger + 'Str'] = result;
        var startStr = dates.startStr, endStr = dates.endStr;
        var start = new Date(DateFormat(startStr, formatter)), end;
        if (endStr == ForeverStr) {
            end = ForeverStr;
        }
        else {
            end = new Date(DateFormat(endStr, formatter));
            // 结束时间小于开始时间，进行修正
            if (!vs && !vsSingle && (end.getTime() < start.getTime())) {
                end = start;
                endStr = DateFormat(end, formatter);
            }
        }
        // 开始时间会影响快捷日期
        var quickInfos = GetQuickInfos(quickDates, startStr, formatter);
        var quickDateText, quickDateKey;
        for (var index = 0; index < quickInfos.length; index++) {
            var q = quickInfos[index];
            if (q.start == startStr && q.end == endStr) {
                quickDateText = q.text;
                quickDateKey = q.key;
                break;
            }
        }
        that.updater.digest({
            quickInfos: quickInfos,
            dates: {
                start: start,
                end: end,
                startStr: startStr,
                endStr: endStr,
                quickDateText: quickDateText,
                quickDateKey: quickDateKey
            }
        });
    },
    '@{vs.toggle}<change>': function (e) {
        e.stopPropagation();
        this.updater.digest({
            vs: e.state
        });
    },
    '@{date.picked}<click>': function (e) {
        var that = this;
        var updater = that.updater;
        var data = updater.get();
        var dates = data.dates, formatter = data.formatter, quickDates = data.quickDates;
        var params = e.params;
        if (params.quick) {
            // 选择快捷方式
            // 快捷日期可能需要动态计算，已当前开始时间为准
            var quickInfo = params.quickInfo;
            var start = new Date(DateFormat(quickInfo.start, formatter));
            var end = void 0;
            if (quickInfo.end == ForeverStr) {
                // 不限的情况不考虑
                end = ForeverStr;
            }
            else {
                end = new Date(DateFormat(quickInfo.end, formatter));
                // 如果有最大最小值，选择快捷日期的时候会进行范围修正
                var min = void 0, max = void 0, minMillions = void 0, maxMillions = void 0;
                if (data.min) {
                    min = new Date(DateFormat(data.min, formatter));
                    minMillions = min.getTime();
                }
                if (data.max) {
                    max = new Date(DateFormat(data.max, formatter));
                    maxMillions = max.getTime();
                }
                var startMillions = start.getTime(), endMillions = end.getTime();
                if (minMillions && (startMillions < minMillions)) {
                    // 开始时间小于最小值
                    start = min;
                }
                else if (maxMillions && (startMillions > maxMillions)) {
                    // 开始时间大于最大值
                    start = max;
                }
                if (maxMillions && (endMillions > maxMillions)) {
                    // 结束时间大于最大值
                    end = max;
                }
                else if (minMillions && (endMillions < minMillions)) {
                    // 结束时间小于最小值
                    end = min;
                }
                if (end.getTime() < start.getTime()) {
                    end = start;
                }
            }
            var startStr = DateFormat(start, formatter), endStr = (end == ForeverStr) ? ForeverStr : DateFormat(end, formatter);
            // 开始时间会影响快捷日期
            var quickInfos = GetQuickInfos(quickDates, startStr, formatter);
            var quickDateText = void 0, quickDateKey = void 0;
            for (var index = 0; index < quickInfos.length; index++) {
                var q = quickInfos[index];
                if (q.start == startStr && q.end == endStr) {
                    quickDateText = q.text;
                    quickDateKey = q.key;
                    break;
                }
            }
            dates = {
                start: start,
                end: end,
                startStr: startStr,
                endStr: endStr,
                quickDateText: quickDateText,
                quickDateKey: quickDateKey
            };
        }
        else {
            // 确定
            var vs = data.vs, vsSingle = data.vsSingle;
            var startStr = dates.startStr, endStr = dates.endStr, start = dates.start, end = dates.end;
            // 修正结束时间：
            //  1. 对比的情况下，可能保留了非对比情况的不限快捷方式选项，如果结束时间为不限，切换为开始时间
            //  2. 不对比选择连续时间的时候，可能有对比切换的结果，如果结束时间小于开始时间，结束时间替换为开始时间
            if (((endStr == ForeverStr) && vs) ||
                (!vs && !vsSingle && (endStr != ForeverStr) && (end.getTime() < start.getTime()))) {
                endStr = startStr;
                end = new Date(DateFormat(endStr, formatter));
            }
            Magix.mix(dates, {
                end: end,
                endStr: endStr
            });
        }
        updater.digest({
            dates: dates
        });
        that['@{owner.node}'].trigger({
            type: 'change',
            vs: data.vs,
            dates: dates
        });
    },
    '@{cancel}<click>': function () {
        this['@{owner.node}'].trigger('cancel');
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    }
});
module.exports = RangeDate;

});