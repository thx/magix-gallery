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
Magix.applyStyle("_zs_galleryo","._zs_galleryct{border:1px solid #f5f5f6}._zs_galleryct,._zs_galleryaZ{box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}._zs_galleryaZ{position:relative;z-index:1000;min-width:280px;width:100%;padding:10px;border-radius:4px;background-color:#fff;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;border:1px solid #f5f5f6}._zs_galleryaZ ._zs_gallerycu{margin-bottom:10px;color:#999}._zs_galleryaZ ._zs_galleryb_{position:relative;margin-bottom:15px;line-height:24px}._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba{float:left;width:50%;min-width:110px;text-align:center;cursor:text}._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba [mx-view*=\"mx-calendar/datepicker\"]{width:100%}._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba ._zs_gallerycv,._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba ._zs_galleryca{height:24px;padding:0;line-height:24px;border-radius:4px;background-color:#f0f0f0;border:0}._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba ._zs_galleryaO{color:#333}._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba ._zs_gallerybb ._zs_galleryaO{color:#4d7fff}._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba ._zs_gallerybc ._zs_galleryaO{color:#14c9ce}._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba ._zs_gallerycv{display:inline-block;width:100%;cursor:not-allowed;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;color:#ccc;vertical-align:middle}._zs_galleryaZ ._zs_galleryb_ ._zs_gallerycw{padding-right:9px}._zs_galleryaZ ._zs_galleryb_ ._zs_gallerycx{padding-left:9px}._zs_galleryaZ ._zs_galleryb_ ._zs_gallerycy{position:absolute;top:0;left:50%;width:18px;height:24px;margin-left:-9px;text-align:center}._zs_galleryaZ ._zs_gallerybd ._zs_gallerybe{float:left;width:44%;height:24px;margin-right:6%;margin-bottom:10px;padding:0 10px;line-height:24px;border-radius:4px;cursor:pointer;overflow:hidden;white-space:nowrap}._zs_galleryaZ ._zs_gallerybd ._zs_gallerybe:hover{background:#f0f0f0}._zs_galleryaZ ._zs_gallerybd ._zs_gallerybe._zs_gallerybf,._zs_galleryaZ ._zs_gallerybd ._zs_gallerybe._zs_gallerybf:hover{color:#4d7fff;background:#f6f9ff}._zs_galleryaZ ._zs_gallerybd._zs_gallerycz ._zs_gallerybe{width:32%;margin-right:1%}._zs_galleryaZ ._zs_gallerycA{padding-top:10px;border-top:1px solid #e6e6e6}._zs_galleryaZ._zs_gallerycB{min-width:320px}._zs_galleryaZ._zs_gallerycB ._zs_galleryba{min-width:140px}._zs_galleryaZ._zs_gallerycC{border:0}");
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
} ; var $g = '', $_temp, $p = '', timeType = $$.timeType, inlay = $$.inlay, title = $$.title, vsEnable = $$.vsEnable, vs = $$.vs, startDisabled = $$.startDisabled, dates = $$.dates, min = $$.min, endDisabled = $$.endDisabled, max = $$.max, disabledWeeks = $$.disabledWeeks, dateType = $$.dateType, vsSingle = $$.vsSingle, endMinFn = $$.endMinFn, align = $$.align, quickInfos = $$.quickInfos, quickGap = $$.quickGap, quickTip = $$.quickTip, submitText = $$.submitText, cancelText = $$.cancelText; $p += '<div mxv class="_zs_galleryaZ '; if (timeType) {
    ;
    $p += ' _zs_gallerycB ';
} ; $p += ' '; if (inlay) {
    ;
    $p += ' _zs_gallerycC ';
} ; $p += '" mx-contextmenu="' + $viewId + '__H()"><div mxv mxa="_zs_gallery(:_" class="_zs_galleryb_"><div mxa="_zs_gallery(:a" class="_zs_gallerycu clearfix"><span mxa="_zs_gallery(:b" class="fl">' + $e(title) + '：</span>'; if (vsEnable) {
    ;
    $p += '<span class="fr" mx-change="' + $viewId + '__J()" mx-view="mx-switch/index?state=' + $eu(vs) + '"></span>';
} ; $p += '</div><div mxv mxa="_zs_gallery(:c" class="clearfix pr"><div mxv mxa="_zs_gallery(:d" class="_zs_galleryba _zs_gallerycw">'; if (startDisabled) {
    ;
    $p += '<div mxa="_zs_gallery(:e" class="_zs_gallerycv">' + $e(dates.startStr) + '</div>';
}
else {
    ;
    $p += '<div mxv="disabledWeeks" ';
    if (vs) {
        ;
        $p += ' class="_zs_gallerybb" ';
    }
    ;
    $p += ' mx-change="' + $viewId + '__I({trigger:\'start\'})" mx-view="mx-calendar/datepicker?min=' + $eu(min) + '&max=' + $eu((endDisabled ? dates.endStr : max)) + '&disabledWeeks=' + $i($$ref, disabledWeeks) + '&timeType=' + $eu(timeType) + '&dateType=' + $eu(dateType) + '&selected=' + $eu(dates.startStr) + '"></div>';
} ; $p += '</div><div mxs="_zs_gallery(:_" class="_zs_gallerycy">-</div><div mxv mxa="_zs_gallery(:f" class="_zs_galleryba _zs_gallerycx">'; if ((!vs && vsSingle) || endDisabled) {
    ;
    $p += '<div mxa="_zs_gallery(:g" class="_zs_gallerycv">' + $e(dates.endStr) + '</div>';
}
else {
    ;
    $p += '<div mxv="disabledWeeks" ';
    if (vs) {
        ;
        $p += ' class="_zs_gallerybc" ';
    }
    ;
    $p += ' mx-change="' + $viewId + '__I({trigger:\'end\'})" mx-view="mx-calendar/datepicker?min=' + $eu((!vs ? endMinFn(dates.startStr, min) : min)) + '&max=' + $eu(max) + '&disabledWeeks=' + $i($$ref, disabledWeeks) + '&timeType=' + $eu(timeType) + '&dateType=' + $eu(dateType) + '&align=' + $eu(align) + '&selected=' + $eu(dates.endStr) + '"></div>';
} ; $p += '</div></div></div>'; if (quickInfos.length && !vs && !vsSingle) {
    ;
    $p += '<div class="_zs_gallerybd ';
    if (quickInfos.length > quickGap) {
        ;
        $p += '_zs_gallerycz';
    }
    ;
    $p += '"><div mxa="_zs_gallery(:h" class="_zs_gallerycu">' + $e(quickTip) + '：</div><div mxa="_zs_gallery(:i" class="clearfix">';
    for (var $art_iexuutabu$art_i = 0, $art_cctdfskbs$art_c = quickInfos.length; $art_iexuutabu$art_i < $art_cctdfskbs$art_c; $art_iexuutabu$art_i++) {
        var info = quickInfos[$art_iexuutabu$art_i];
        $p += '<span class="_zs_gallerybe ';
        if (dates.quickDateKey == info.key) {
            ;
            $p += '_zs_gallerybf';
        }
        ;
        $p += '" mx-click="' + $viewId + '__q({quick:true,quickInfo:\'' + $i($$ref, info) + '\'})" title="' + $e(info.text) + '">' + $e(info.text) + '</span>';
    }
    ;
    $p += '</div></div>';
} ; $p += '<div mxa="_zs_gallery(:j" class="_zs_gallerycA clearfix"><button mxa="_zs_gallery(:k" mx-click="' + $viewId + '__q()" type="button" class="btn btn-small btn-brand mr10">' + $e(submitText) + '</button><button mxa="_zs_gallery(:l" mx-click="' + $viewId + '__K()" type="button" class="btn btn-small">' + $e(cancelText) + '</button></div></div>'; return $p; },
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
        that['__j'] = $('#' + that.id);
    },
    '__I<change>': function (e) {
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
    '__J<change>': function (e) {
        e.stopPropagation();
        this.updater.digest({
            vs: e.state
        });
    },
    '__q<click>': function (e) {
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
            //1. 对比的情况下，可能保留了非对比情况的不限快捷方式选项，如果结束时间为不限，切换为开始时间
            //2. 不对比选择连续时间的时候，可能有对比切换的结果，如果结束时间小于开始时间，结束时间替换为开始时间
            if (((endStr == ForeverStr) && vs) ||
                (!vs && !vsSingle && (end.getTime() < start.getTime()))) {
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
        that['__j'].trigger({
            type: 'change',
            vs: data.vs,
            dates: dates
        });
    },
    '__K<click>': function () {
        this['__j'].trigger('cancel');
    },
    '__H<contextmenu>': function (e) {
        e.preventDefault();
    }
});
module.exports = RangeDate;

});