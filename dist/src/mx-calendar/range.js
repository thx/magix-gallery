/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_gallery_mx-calendar_range_","/* --mx-calendar-range-input-width: 100px; 的值同 [mx-view*=\"mx-calendar/datepicker\"]的最小宽度默认保持一致 */\n._zs_gallery_mx-calendar_range_-wrapper {\n  --mx-calendar-range-input-width: 100px;\n  position: relative;\n  z-index: 1000;\n  min-width: calc(var(--mx-calendar-range-input-width) * 2 + 40px);\n  width: 100%;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-title {\n  margin-bottom: 5px;\n  color: #999;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range {\n  position: relative;\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input {\n  float: left;\n  width: 50%;\n  min-width: var(--mx-calendar-range-input-width);\n  text-align: center;\n  cursor: text;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_rangepicker_-result {\n  height: var(--input-small-height);\n  padding: 0;\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  background-color: var(--color-bg-hover);\n  border: 0;\n  color: #333;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: var(--color-brand-vs);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"] {\n  width: 100%;\n  min-height: var(--input-small-height);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"]:hover ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-disabled] ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-disabled]:hover ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"]:hover ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-disabled] ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-disabled]:hover ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"] ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"]:hover ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-disabled] ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input [mx-view*=\"mx-calendar/datepicker\"][mx-disabled]:hover ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: #999;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input-left {\n  padding-right: 9px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input-right {\n  padding-left: 9px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-gap {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 18px;\n  height: var(--input-small-height);\n  margin-left: -9px;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts {\n  margin-top: 15px;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st {\n  float: left;\n  width: 44%;\n  height: var(--input-small-height);\n  margin-right: 6%;\n  margin-top: 5px;\n  padding: 0 10px;\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st._zs_gallery_mx-calendar_range_-selected,\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st._zs_gallery_mx-calendar_range_-selected:hover {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts._zs_gallery_mx-calendar_range_-shortcuts-small ._zs_gallery_mx-calendar_range_-st {\n  width: 32%;\n  margin-right: 1%;\n}\n._zs_gallery_mx-calendar_range_-wrapper._zs_gallery_mx-calendar_range_-time {\n  --mx-calendar-range-input-width: calc(var(--font-size) * 11);\n}\n");
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
} ; var $g = '', $_temp, $p = '', timeType = $$.timeType, title = $$.title, vsEnable = $$.vsEnable, vs = $$.vs, min = $$.min, endDisabled = $$.endDisabled, dates = $$.dates, max = $$.max, formatter = $$.formatter, disabledWeeks = $$.disabledWeeks, dateType = $$.dateType, startDisabled = $$.startDisabled, endMinFn = $$.endMinFn, align = $$.align, vsSingle = $$.vsSingle, quickInfos = $$.quickInfos, quickGap = $$.quickGap, quickTip = $$.quickTip, submitText = $$.submitText, cancelText = $$.cancelText, errorMsg = $$.errorMsg; var $expr, $art, $line; try {
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
    $p += '" mx-contextmenu="' + $viewId + '@{prevent}()"><div mxv mxa="_zs_gallery;:_" class="_zs_gallery_mx-calendar_range_-range"><div mxa="_zs_gallery;:a" class="_zs_gallery_mx-calendar_range_-title clearfix"><span mxa="_zs_gallery;:b" class="fl">';
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
    $p += '</div><div mxv mxa="_zs_gallery;:c" class="clearfix pr"><div mxv mxa="_zs_gallery;:d" class="_zs_gallery_mx-calendar_range_-range-input _zs_gallery_mx-calendar_range_-range-input-left"><div mxv="disabledWeeks" ';
    $line = 12;
    $art = 'if vs';
    ;
    $expr = '<%if (vs) {%>';
    if (vs) {
        ;
        $p += ' class="_zs_gallery_mx-calendar_range_-vs1" ';
        $line = 12;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' mx-change="' + $viewId + '@{sync.date}({trigger:\'start\'})" mx-view="mx-calendar/datepicker?min=';
    $line = 13;
    $art = '=min';
    ;
    $p += ($expr = '<%!$eu(min)%>', $eu(min)) + '&max=';
    $line = 14;
    $art = '=(endDisabled?dates.endStr:max)';
    ;
    $p += ($expr = '<%!$eu((endDisabled ? dates.endStr : max))%>', $eu((endDisabled ? dates.endStr : max))) + '&formatter=';
    $line = 15;
    $art = '=formatter';
    ;
    $p += ($expr = '<%!$eu(formatter)%>', $eu(formatter)) + '&disabledWeeks=';
    $line = 16;
    $art = '@disabledWeeks';
    ;
    $p += ($expr = '<%@disabledWeeks%>', $i($$ref, disabledWeeks)) + '&timeType=';
    $line = 17;
    $art = '=timeType';
    ;
    $p += ($expr = '<%!$eu(timeType)%>', $eu(timeType)) + '&dateType=';
    $line = 18;
    $art = '=dateType';
    ;
    $p += ($expr = '<%!$eu(dateType)%>', $eu(dateType)) + '&selected=';
    $line = 19;
    $art = '=dates.startStr';
    ;
    $p += ($expr = '<%!$eu(dates.startStr)%>', $eu(dates.startStr)) + '&disabled=';
    $line = 20;
    $art = 'if startDisabled';
    ;
    $expr = '<%if (startDisabled) {%>';
    if (startDisabled) {
        ;
        $p += 'true';
        $line = 20;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"></div></div><div mxs="_zs_gallery;:_" class="_zs_gallery_mx-calendar_range_-range-gap">-</div><div mxv mxa="_zs_gallery;:e" class="_zs_gallery_mx-calendar_range_-range-input _zs_gallery_mx-calendar_range_-range-input-right"><div mxv="disabledWeeks" ';
    $line = 26;
    $art = 'if vs';
    ;
    $expr = '<%if (vs) {%>';
    if (vs) {
        ;
        $p += ' class="_zs_gallery_mx-calendar_range_-vs2" ';
        $line = 26;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' mx-change="' + $viewId + '@{sync.date}({trigger:\'end\'})" mx-view="mx-calendar/datepicker?min=';
    $line = 27;
    $art = '=(!vs?endMinFn(dates.startStr,min):min)';
    ;
    $p += ($expr = '<%!$eu((!vs ? endMinFn(dates.startStr, min) : min))%>', $eu((!vs ? endMinFn(dates.startStr, min) : min))) + '&max=';
    $line = 28;
    $art = '=max';
    ;
    $p += ($expr = '<%!$eu(max)%>', $eu(max)) + '&formatter=';
    $line = 29;
    $art = '=formatter';
    ;
    $p += ($expr = '<%!$eu(formatter)%>', $eu(formatter)) + '&disabledWeeks=';
    $line = 30;
    $art = '@disabledWeeks';
    ;
    $p += ($expr = '<%@disabledWeeks%>', $i($$ref, disabledWeeks)) + '&timeType=';
    $line = 31;
    $art = '=timeType';
    ;
    $p += ($expr = '<%!$eu(timeType)%>', $eu(timeType)) + '&dateType=';
    $line = 32;
    $art = '=dateType';
    ;
    $p += ($expr = '<%!$eu(dateType)%>', $eu(dateType)) + '&align=';
    $line = 33;
    $art = '=align';
    ;
    $p += ($expr = '<%!$eu(align)%>', $eu(align)) + '&selected=';
    $line = 34;
    $art = '=dates.endStr';
    ;
    $p += ($expr = '<%!$eu(dates.endStr)%>', $eu(dates.endStr)) + '&disabled=';
    $line = 35;
    $art = 'if ((!vs&&vsSingle) || endDisabled)';
    ;
    $expr = '<%if ((!vs && vsSingle) || endDisabled) {%>';
    if ((!vs && vsSingle) || endDisabled) {
        ;
        $p += 'true';
        $line = 35;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"></div></div></div></div>';
    $line = 40;
    $art = 'if (quickInfos.length&&!vs&&!vsSingle)';
    ;
    $expr = '<%if (quickInfos.length && !vs && !vsSingle) {%>';
    if (quickInfos.length && !vs && !vsSingle) {
        ;
        $p += '<div class="_zs_gallery_mx-calendar_range_-shortcuts ';
        $line = 41;
        $art = 'if quickInfos.length > quickGap';
        ;
        $expr = '<%if (quickInfos.length > quickGap) {%>';
        if (quickInfos.length > quickGap) {
            ;
            $p += '_zs_gallery_mx-calendar_range_-shortcuts-small';
            $line = 41;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"><div mxa="_zs_gallery;:f" class="_zs_gallery_mx-calendar_range_-title">';
        $line = 42;
        $art = '=quickTip';
        ;
        $p += ($expr = '<%=quickTip%>', $e(quickTip)) + '：</div><div mxa="_zs_gallery;:g" class="clearfix">';
        $line = 44;
        $art = 'each quickInfos as info';
        ;
        $expr = '<%for (var $art_icwzyhrh$art_i = 0, $art_cxyqhyy$art_c = quickInfos.length; $art_icwzyhrh$art_i < $art_cxyqhyy$art_c; $art_icwzyhrh$art_i++) {        var info = quickInfos[$art_icwzyhrh$art_i]%>';
        for (var $art_icwzyhrh$art_i = 0, $art_cxyqhyy$art_c = quickInfos.length; $art_icwzyhrh$art_i < $art_cxyqhyy$art_c; $art_icwzyhrh$art_i++) {
            var info = quickInfos[$art_icwzyhrh$art_i];
            $p += '<span class="_zs_gallery_mx-calendar_range_-st ';
            $line = 45;
            $art = 'if (dates.quickDateKey==info.key)';
            ;
            $expr = '<%if (dates.quickDateKey == info.key) {%>';
            if (dates.quickDateKey == info.key) {
                ;
                $p += '_zs_gallery_mx-calendar_range_-selected';
                $line = 45;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + '@{date.picked}({quick:true,quickInfo:\'';
            $line = 46;
            $art = '@info';
            ;
            $p += ($expr = '<%@info%>', $i($$ref, info)) + '\'})" title="';
            $line = 47;
            $art = '=info.text';
            ;
            $p += ($expr = '<%=info.text%>', $e(info.text)) + '">';
            $line = 47;
            $art = '=info.text';
            ;
            $p += ($expr = '<%=info.text%>', $e(info.text)) + '</span>';
            $line = 48;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 51;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallery;:h" class="mx-output-footer"><button mxa="_zs_gallery;:i" mx-click="' + $viewId + '@{date.picked}()" type="button" class="btn btn-small btn-brand mr10">';
    $line = 54;
    $art = '=submitText';
    ;
    $p += ($expr = '<%=submitText%>', $e(submitText)) + '</button><button mxa="_zs_gallery;:j" mx-click="' + $viewId + '@{cancel}()" type="button" class="btn btn-small mr10">';
    $line = 55;
    $art = '=cancelText';
    ;
    $p += ($expr = '<%=cancelText%>', $e(cancelText)) + '</button><span mxa="_zs_gallery;:k" class="color-red">';
    $line = 56;
    $art = '=errorMsg';
    ;
    $p += ($expr = '<%=errorMsg%>', $e(errorMsg)) + '</span></div>';
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
        var dates = data.dates, formatter = data.formatter, quickDates = data.quickDates, vs = data.vs, vsSingle = data.vsSingle, minGap = data.minGap, maxGap = data.maxGap;
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
        var errorMsg = '';
        if (!vs && !vsSingle && (dates.endStr != ForeverStr)) {
            // 选择连续时间的情况下，比较天数范围
            var formatterGap = 'YYYY/MM/dd';
            var startGap = new Date(DateFormat(dates.startStr, formatterGap));
            var endGap = new Date(DateFormat(dates.endStr, formatterGap));
            var gap = (endGap.getTime() - startGap.getTime()) / (24 * 60 * 60 * 1000) + 1;
            if (minGap > 0 && gap < minGap) {
                errorMsg = "\u81F3\u5C11\u9009\u62E9" + minGap + "\u5929";
            }
            if (maxGap > 0 && gap > maxGap) {
                errorMsg = "\u81F3\u591A\u9009\u62E9" + maxGap + "\u5929";
            }
        }
        updater.digest({
            dates: dates,
            errorMsg: errorMsg
        });
        if (!errorMsg) {
            that['@{owner.node}'].trigger({
                type: 'change',
                vs: vs,
                dates: dates
            });
        }
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