/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/index",["magix","$","mx-calendar/util","../mx-medusa/util","mx-time/content"],(require,exports,module)=>{
/*Magix,$,Util,I18n*/
require("mx-time/content");
var Magix = require("magix");
var $ = require("$");
var Util = require("mx-calendar/util");
var PadZero = Util.padZero;
var ForeverStr = Util.foreverStr;
var DateFormat = Util.dateFormat;
var DateParse = Util.dateParse;
var GetDefaultDate = Util.getDefaultDate;
Magix.applyStyle("_zs_gallery_mx-calendar_index_",":root {\n  --mx-calendar-item-gap: 2px;\n  --mx-calendar-item-size: calc(2 * var(--font-size));\n  --mx-calendar-width: calc((var(--mx-calendar-item-size) + var(--mx-calendar-item-gap) * 2) * 7 + 20px);\n  --mx-calendar-height: calc((var(--mx-calendar-item-size) + var(--mx-calendar-item-gap) * 2) * 8 + 20px);\n  --mx-calendar-ym-width: calc((var(--mx-calendar-width) - 60px) / 3);\n  --mx-calendar-ym-height: calc((var(--mx-calendar-height) - var(--mx-calendar-item-size) - var(--mx-calendar-item-gap) * 2 - 80px) / 4);\n  --mx-calendar-time-width: calc(var(--mx-calendar-item-size) * 2 + 6px);\n}\n._zs_gallery_mx-calendar_index_-wrapper {\n  position: relative;\n  z-index: 1000;\n  width: var(--mx-calendar-width);\n  padding: 0;\n  background-color: #fff;\n  border-radius: var(--border-radius);\n  overflow-y: hidden;\n  color: #333;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header {\n  width: var(--mx-calendar-width);\n  padding: 2px 4px;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-minus {\n  float: left;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-plus {\n  float: right;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-minus,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-plus {\n  line-height: var(--mx-calendar-item-size);\n  font-size: var(--font-size);\n  color: #ccc;\n  cursor: pointer;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-minus:hover,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-plus:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-title {\n  display: inline-block;\n  height: var(--mx-calendar-item-size);\n  line-height: var(--mx-calendar-item-size);\n  padding: 0 10px;\n  cursor: pointer;\n  border-radius: var(--border-radius);\n  color: #666;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-title:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body {\n  width: var(--mx-calendar-width);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-weeks {\n  background-color: var(--color-bg);\n  padding: 0 10px;\n  color: #666;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-days {\n  padding: 10px;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-week,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-day {\n  float: left;\n  width: var(--mx-calendar-item-size);\n  height: var(--mx-calendar-item-size);\n  margin: var(--mx-calendar-item-gap);\n  line-height: var(--mx-calendar-item-size);\n  border-radius: 4px;\n  cursor: pointer;\n  color: #333;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-day:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-gray {\n  color: #999;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-today,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-today:hover {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-notallowed,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-notallowed:hover {\n  color: var(--color-disabled);\n  cursor: not-allowed;\n  background: #fff;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-selected,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-selected:hover {\n  color: #fff;\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-time {\n  border-top: 1px solid var(--color-border);\n}\n._zs_gallery_mx-calendar_index_-y-panel,\n._zs_gallery_mx-calendar_index_-m-panel {\n  position: absolute;\n  top: -100%;\n  left: 0;\n  right: 0;\n  transition: top 0.15s;\n  background-color: #fff;\n}\n._zs_gallery_mx-calendar_index_-ym-show {\n  top: 0;\n}\n._zs_gallery_mx-calendar_index_-ym {\n  float: left;\n  width: var(--mx-calendar-ym-width);\n  height: var(--mx-calendar-ym-height);\n  margin: 10px;\n  line-height: var(--mx-calendar-ym-height);\n  border-radius: var(--border-radius);\n  font-size: calc(var(--font-size) + 2px);\n  cursor: pointer;\n}\n._zs_gallery_mx-calendar_index_-ym:hover {\n  background-color: var(--color-bg-hover);\n}\n[mx-view*=\"mx-time/content\"] {\n  min-width: var(--mx-calendar-width);\n  padding: 10px;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-groups {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  z-index: 2;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group {\n  overflow: hidden;\n  flex: 0 0 var(--mx-calendar-time-width);\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group ._zs_gallery_mx-calendar_index_-ipt {\n  width: 100%;\n  height: 40px;\n  font-size: 24px;\n  text-align: center;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group ._zs_gallery_mx-calendar_index_-ipb {\n  width: var(--mx-calendar-item-size);\n  height: var(--mx-calendar-item-size);\n  line-height: var(--mx-calendar-item-size);\n  font-size: var(--font-size);\n  text-align: center;\n  font-weight: bold;\n  background-color: var(--color-bg-hover);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  transition: all var(--duration);\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group ._zs_gallery_mx-calendar_index_-ipb:hover {\n  background-color: #ccc;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group ._zs_gallery_mx-calendar_index_-time-disabled ._zs_gallery_mx-calendar_index_-ipb {\n  background-color: var(--color-disabled);\n  color: #ccc;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-sps {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 40px;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-sps ._zs_gallery_mx-calendar_index_-sp {\n  float: left;\n  width: 50%;\n  font-size: 24px;\n  height: 40px;\n  line-height: 40px;\n  font-weight: bolder;\n  text-align: center;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-sps ._zs_gallery_mx-calendar_index_-sp._zs_gallery_mx-calendar_index_-spa {\n  padding-left: calc(var(--mx-calendar-time-width) / 2);\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-sps ._zs_gallery_mx-calendar_index_-sp._zs_gallery_mx-calendar_index_-spb {\n  padding-right: calc(var(--mx-calendar-time-width) / 2);\n}\n");
var I18n = require("../mx-medusa/util");
var Days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map(function (key) {
    return I18n['calendar.' + key];
});
var Today = new Date();
var GetNumOfDays = function (year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
};
var ParseEnablePanels = function (type) {
    if (!type) {
        type = 'all';
    }
    var enables = {
        year: true,
        month: true,
        day: true
    };
    if (type != 'all') {
        for (var p in enables) {
            if (type.indexOf(p) === -1) {
                delete enables[p];
            }
        }
    }
    return enables;
};
var GetWeekText = function (weekStart) {
    var a = [];
    for (var i = 0; i < 7; i++) {
        a[i] = Days[(i + weekStart) % 7];
    }
    return a;
};
var DateDisabled = function (current, start, end, disabledWeeks) {
    // disabledWeeks 不可选择周几
    var day = current.getDay();
    if (disabledWeeks.indexOf(day) > -1) {
        return true;
    }
    var ts = current.getTime(), flag;
    if (start) {
        flag = ts < start.getTime();
    }
    if (!flag) {
        if (end) {
            flag = ts > end.getTime();
        }
        else {
            flag = false;
        }
    }
    return flag;
};
var MonthDisabled = function (year, month, start, end) {
    var flag, current = parseInt(year + PadZero(month), 10);
    if (start) {
        start = parseInt(start.getFullYear() + PadZero(start.getMonth()), 10);
        flag = current < start;
    }
    if (!flag && end) {
        end = parseInt(end.getFullYear() + PadZero(end.getMonth()), 10);
        flag = current > end;
    }
    return flag;
};
var YearDisabled = function (year, start, end) {
    var flag;
    if (start) {
        flag = year < start.getFullYear();
    }
    if (!flag && end) {
        flag = year > end.getFullYear();
    }
    return flag;
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
} ; var $g = '', $_temp, $p = '', types = $$.types, id = $$.id, year = $$.year, month = $$.month, weekText = $$.weekText, days = $$.days, timeType = $$.timeType, timeValue = $$.timeValue, showMonth = $$.showMonth, months = $$.months, showYear = $$.showYear, startYear = $$.startYear, endYear = $$.endYear, years = $$.years; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery{:_" class="_zs_gallery_mx-calendar_index_-wrapper unselectable" mx-contextmenu="' + $viewId + '@{prevent}()">';
    $expr = '<%if (types.day) {%>';
    if (types.day) {
        ;
        $p += '<div id="days_' + ($expr = '<%=id%>', $e(id)) + '" class="clearfix"><div mxa="_zs_gallery{:a" class="_zs_gallery_mx-calendar_index_-header"><span mxs="_zs_gallery{:_" class="mc-iconfont _zs_gallery_mx-calendar_index_-minus fl" mx-click="' + $viewId + '@{changeMonth}()">&#xe61e;</span><span class="_zs_gallery_mx-calendar_index_-title" mx-click="' + $viewId + '';
        $expr = '<%if (types.month) {%>';
        if (types.month) {
            ;
            $p += '@{showMonths}';
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '@{showYears}';
            $expr = '<%}%>';
        }
        ;
        $p += '()">' + ($expr = '<%=year%>', $e(year)) + '-' + ($expr = '<%=(\'0\' + month).slice(-2)%>', $e(('0' + month).slice(-2))) + '</span><span mxs="_zs_gallery{:a" class="mc-iconfont _zs_gallery_mx-calendar_index_-plus fr" mx-click="' + $viewId + '@{changeMonth}({next:true})">&#xe61e;</span></div><div mxa="_zs_gallery{:b" class="_zs_gallery_mx-calendar_index_-body"><div mxa="_zs_gallery{:c" class="_zs_gallery_mx-calendar_index_-weeks clearfix">';
        $expr = '<%for (var i = 0; i < weekText.length; i++) {%>';
        for (var i = 0; i < weekText.length; i++) {
            ;
            $p += '<span mxa="_zs_gallery{:d" class="_zs_gallery_mx-calendar_index_-week">' + ($expr = '<%=weekText[i]%>', $e(weekText[i])) + '</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxa="_zs_gallery{:e" class="_zs_gallery_mx-calendar_index_-days clearfix">';
        $expr = '<%for (var i = 0; i < days.length; i++) {%>';
        for (var i = 0; i < days.length; i++) {
            ;
            $p += ' ';
            $expr = '<%var tds = days[i]%>';
            var tds = days[i];
            $p += ' ';
            $expr = '<%for (var j = 0; j < tds.length; j++) {%>';
            for (var j = 0; j < tds.length; j++) {
                ;
                $p += '<span class="_zs_gallery_mx-calendar_index_-day';
                $expr = '<%if (tds[j].today) {%>';
                if (tds[j].today) {
                    ;
                    $p += ' _zs_gallery_mx-calendar_index_-today';
                    $expr = '<%}%>';
                }
                ;
                $expr = '<%if (tds[j].otherMonth) {%>';
                if (tds[j].otherMonth) {
                    ;
                    $p += ' _zs_gallery_mx-calendar_index_-gray';
                    $expr = '<%}%>';
                }
                ;
                $expr = '<%if (tds[j].disabled) {%>';
                if (tds[j].disabled) {
                    ;
                    $p += ' _zs_gallery_mx-calendar_index_-notallowed';
                    $expr = '<%}%>';
                }
                ;
                $expr = '<%if (tds[j].selected) {%>';
                if (tds[j].selected) {
                    ;
                    $p += ' _zs_gallery_mx-calendar_index_-selected';
                    $expr = '<%}%>';
                }
                ;
                $p += '" ';
                $expr = '<%if (!tds[j].disabled) {%>';
                if (!tds[j].disabled) {
                    ;
                    $p += ' mx-click="' + $viewId + '@{choose}({toMonth:' + ($expr = '<%=tds[j].month%>', $e(tds[j].month)) + ',date:\'' + ($expr = '<%=$eq(tds[j].full)%>', $e($eq(tds[j].full))) + '\'})" ';
                    $expr = '<%}%>';
                }
                ;
                $p += ' title="' + ($expr = '<%=tds[j].full%>', $e(tds[j].full)) + '">' + ($expr = '<%=tds[j].day%>', $e(tds[j].day)) + '</span>';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $expr = '<%if (timeType) {%>';
        if (timeType) {
            ;
            $p += '<div class="clearfix _zs_gallery_mx-calendar_index_-time" mx-change="' + $viewId + '@{setTime}()" mx-view="mx-time/content?time=' + ($expr = '<%!$eu(timeValue)%>', $eu(timeValue)) + '&types=' + ($expr = '<%!$eu(timeType)%>', $eu(timeType)) + '"></div><div mxs="_zs_gallery{:b" class="mx-output-footer"><button type="button" class="btn btn-small btn-brand" mx-click="' + $viewId + '@{hide}({enter:true})">确定</button><button type="button" class="btn btn-small ml10" mx-click="' + $viewId + '@{hide}()">取消</button></div>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $expr = '<%if (types.month) {%>';
    if (types.month) {
        ;
        $p += '<div class="clearfix';
        $expr = '<%if (types.day) {%>';
        if (types.day) {
            ;
            $p += ' _zs_gallery_mx-calendar_index_-m-panel';
            $expr = '<%}%>';
        }
        ;
        $expr = '<%if (showMonth) {%>';
        if (showMonth) {
            ;
            $p += ' _zs_gallery_mx-calendar_index_-ym-show';
            $expr = '<%}%>';
        }
        ;
        $p += '"><div mxa="_zs_gallery{:f" class="_zs_gallery_mx-calendar_index_-header"><span mxs="_zs_gallery{:c" class="mc-iconfont _zs_gallery_mx-calendar_index_-minus fl" mx-click="' + $viewId + '@{changeYear}()">&#xe61e;</span><span mxa="_zs_gallery{:g" class="_zs_gallery_mx-calendar_index_-title" mx-click="' + $viewId + '@{showYears}()">' + ($expr = '<%=year%>', $e(year)) + '</span><span mxs="_zs_gallery{:d" class="mc-iconfont _zs_gallery_mx-calendar_index_-plus fr" mx-click="' + $viewId + '@{changeYear}({next:true})">&#xe61e;</span></div><div mxa="_zs_gallery{:h" class="_zs_gallery_mx-calendar_index_-body clearfix">';
        $expr = '<%for (var i = 0, m; i < months.length; i++) {%>';
        for (var i = 0, m; i < months.length; i++) {
            ;
            $p += ' ';
            $expr = '<%m = months[i]%>';
            m = months[i];
            $p += '<span class="_zs_gallery_mx-calendar_index_-ym';
            $expr = '<%if (m.disabled) {%>';
            if (m.disabled) {
                ;
                $p += ' _zs_gallery_mx-calendar_index_-notallowed';
                $expr = '<%}%>';
            }
            ;
            $expr = '<%if (m.selected) {%>';
            if (m.selected) {
                ;
                $p += ' _zs_gallery_mx-calendar_index_-selected';
                $expr = '<%}%>';
            }
            ;
            $p += '" ';
            $expr = '<%if (!m.disabled) {%>';
            if (!m.disabled) {
                ;
                $p += ' mx-click="' + $viewId + '@{pickMonth}({month:\'' + ($expr = '<%=$eq(m.month)%>', $e($eq(m.month))) + '\'})" ';
                $expr = '<%}%>';
            }
            ;
            $p += '>' + ($expr = '<%=m.month%>', $e(m.month)) + '</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $expr = '<%if (types.year) {%>';
    if (types.year) {
        ;
        $p += '<div class="clearfix';
        $expr = '<%if (types.day || types.month) {%>';
        if (types.day || types.month) {
            ;
            $p += ' _zs_gallery_mx-calendar_index_-y-panel';
            $expr = '<%}%>';
        }
        ;
        $expr = '<%if (showYear) {%>';
        if (showYear) {
            ;
            $p += ' _zs_gallery_mx-calendar_index_-ym-show';
            $expr = '<%}%>';
        }
        ;
        $p += '"><div mxa="_zs_gallery{:i" class="_zs_gallery_mx-calendar_index_-header"><span mxs="_zs_gallery{:e" class="mc-iconfont _zs_gallery_mx-calendar_index_-minus fl" mx-click="' + $viewId + '@{changeYear}({range:true})">&#xe61e;</span><span mxa="_zs_gallery{:j" class="_zs_gallery_mx-calendar_index_-title">' + ($expr = '<%=startYear%>', $e(startYear)) + '-' + ($expr = '<%=endYear%>', $e(endYear)) + '</span><span mxs="_zs_gallery{:f" class="mc-iconfont _zs_gallery_mx-calendar_index_-plus fr" mx-click="' + $viewId + '@{changeYear}({range:true,next:true})">&#xe61e;</span></div><div mxa="_zs_gallery{:k" class="_zs_gallery_mx-calendar_index_-body clearfix">';
        $expr = '<%for (var i = 0, y; i < years.length; i++) {%>';
        for (var i = 0, y; i < years.length; i++) {
            ;
            $p += ' ';
            $expr = '<%y = years[i]%>';
            y = years[i];
            $p += '<span class="_zs_gallery_mx-calendar_index_-ym';
            $expr = '<%if (y.selected) {%>';
            if (y.selected) {
                ;
                $p += ' _zs_gallery_mx-calendar_index_-selected';
                $expr = '<%}%>';
            }
            ;
            $expr = '<%if (y.disabled) {%>';
            if (y.disabled) {
                ;
                $p += ' _zs_gallery_mx-calendar_index_-notallowed';
                $expr = '<%}%>';
            }
            ;
            $p += '" ';
            $expr = '<%if (!y.disabled) {%>';
            if (!y.disabled) {
                ;
                $p += ' mx-click="' + $viewId + '@{pickYear}({year:\'' + ($expr = '<%=$eq(y.year)%>', $e($eq(y.year))) + '\'})" ';
                $expr = '<%}%>';
            }
            ;
            $p += '>' + ($expr = '<%=y.year%>', $e(y.year)) + '</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
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
    msg += $expr + '\r\n\tat file:mx-calendar/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this['@{extra}'] = $.extend(true, {}, extra.configs);
    },
    render: function () {
        var me = this;
        var ops = me['@{extra}'];
        ops = ops || {};
        var forever = (ops.selected == ForeverStr);
        var formatter = ops.formatter || 'YYYY-MM-dd';
        // 最大最小不关心时分秒，时分秒的大小不限制
        var max, min;
        // Safari不支持YYYY-MM-dd，使用YYYY/MM/dd
        if (ops.max) {
            max = new Date(DateFormat(ops.max, 'YYYY/MM/dd') + ' 23:59:59');
        }
        if (ops.min) {
            min = new Date(DateFormat(ops.min, 'YYYY/MM/dd') + ' 00:00:00');
        }
        var today = new Date();
        if (!ops.selected || forever) {
            ops.selected = GetDefaultDate(ops);
        }
        var selected = DateParse(ops.selected);
        var timeValue = DateFormat(selected, 'hh:mm:ss'), dateValue = DateFormat(selected, formatter.slice(0, 10));
        var types = ParseEnablePanels(ops.dateType);
        var weekStart = ops.weekStart | 0;
        var timeType = ops.timeType;
        var disabledWeeks = (ops.disabledWeeks || []).map(function (w) {
            return +w;
        });
        me.updater.set({
            formatter: formatter,
            types: types,
            showYear: 0,
            showMonth: 0,
            timeType: timeType,
            timeValue: timeValue,
            dateValue: dateValue,
            max: max,
            min: min,
            id: me.id,
            weekStart: weekStart,
            weekText: GetWeekText(weekStart),
            disabledWeeks: disabledWeeks
        });
        // 不限的情况特殊处理，不设置选中值
        me['@{update.selected}'](selected, forever);
        me['@{update.years}']();
        me['@{update.months}']();
        me['@{update.days}'](true);
    },
    '@{toDefaultPanel}': function () {
        var me = this;
        var updater = me.updater;
        updater.set({
            showYear: 0,
            showMonth: 0
        });
        var data = updater.get();
        if (data.timeType) {
            if (me['@{date.value.bak}']) {
                me['@{update.selected}'](me['@{date.value.bak}']);
                me['@{update.years}']();
                me['@{update.months}']();
                me['@{update.days}']();
                delete me['@{date.value.bak}'];
            }
            if (me['@{time.value.bak}']) {
                updater.set({
                    timeValue: me['@{time.value.bak}']
                });
                delete me['@{time.value.bak}'];
            }
        }
        updater.digest();
    },
    '@{update.selected}': function (selected, forever) {
        var me = this, data = me.updater;
        selected = DateParse(selected);
        var formatter = data.get('formatter');
        if (selected) {
            data.set({
                year: selected.getFullYear(),
                month: selected.getMonth() + 1,
                selectedYear: selected.getFullYear(),
                selectedMonth: selected.getMonth() + 1,
                selected: forever ? '' : DateFormat(selected, formatter)
            });
        }
    },
    '@{update.years}': function (render) {
        var me = this;
        var data = me.updater;
        var json = data.get();
        var year = json.year;
        var min = json.min;
        var max = json.max;
        var startYear = year - year % 10 - 1;
        var endYear = startYear + 11;
        var rows = [];
        for (var i = startYear; i <= endYear; i++) {
            rows.push({
                year: i,
                selected: i == json.selectedYear,
                disabled: YearDisabled(i, min, max)
            });
        }
        data.set({
            startYear: startYear,
            endYear: endYear,
            years: rows
        });
        if (render) {
            data.digest();
        }
    },
    '@{update.months}': function (render) {
        var rows = [], data = this.updater, json = data.get(), year = json.year, min = json.min, max = json.max;
        for (var i = 1; i <= 12; i++) {
            rows.push({
                month: i,
                selected: year == json.selectedYear && i == json.selectedMonth,
                disabled: MonthDisabled(year, i - 1, min, max)
            });
        }
        data.set({
            months: rows
        });
        if (render) {
            data.digest();
        }
    },
    '@{update.days}': function (render) {
        var me = this;
        var trs = [];
        var data = me.updater;
        var weekStart = data.get('weekStart');
        var disabledWeeks = data.get('disabledWeeks');
        var year = data.get('year');
        var month = data.get('month');
        var startOffset = (7 - weekStart + new Date(year, month - 1, 1).getDay()) % 7;
        var tds = [];
        var days = GetNumOfDays(year, month), i;
        var preDays = GetNumOfDays(year, month - 1);
        var max = data.get('max');
        var min = data.get('min');
        var day, date, formatDay;
        // 日期不关注时分秒
        var formatter = data.get('formatter');
        formatter = formatter.slice(0, 10);
        var selected = data.get('selected');
        if (selected) {
            // 不限的情况下，selected = ''
            selected = DateFormat(selected, formatter);
        }
        var today = DateFormat(Today, formatter);
        for (i = 1; i <= startOffset; i++) {
            day = preDays - (startOffset - i);
            date = new Date(year, month - 2, day);
            tds.push({
                month: month - 1,
                full: DateFormat(date, formatter),
                day: day,
                otherMonth: true,
                disabled: DateDisabled(date, min, max, disabledWeeks)
            });
        }
        for (i = 1; i <= days; i++) {
            date = new Date(year, month - 1, i);
            formatDay = DateFormat(date, formatter);
            tds.push({
                today: formatDay == today,
                selected: formatDay == selected,
                day: i,
                month: month,
                full: formatDay,
                disabled: DateDisabled(date, min, max, disabledWeeks)
            });
            if (((i + startOffset) % 7) === 0) {
                trs.push(tds);
                tds = [];
            }
        }
        var fillStart = tds.length; //补充
        var fillEnd = 14; //2周
        for (i = fillStart; i < fillEnd; i++) {
            day = i - fillStart + 1;
            date = new Date(year, month, day);
            tds.push({
                month: month + 1,
                day: day,
                otherMonth: true,
                full: DateFormat(date, formatter),
                disabled: DateDisabled(date, min, max, disabledWeeks)
            });
            if ((i + 1) % 7 === 0) {
                trs.push(tds);
                tds = [];
                if (trs.length == 6)
                    break;
            }
        }
        data.set({
            days: trs
        });
        if (render) {
            data.digest();
        }
    },
    '@{fire.event}': function (fromBtn) {
        var me = this;
        var data = me.updater.get();
        if (data.types.day) {
            if ((data.timeType && fromBtn) || !data.timeType) {
                $('#' + me.id).trigger({
                    type: 'change',
                    date: data.dateValue,
                    time: data.timeType ? data.timeValue : null
                });
            }
        }
        else {
            $('#' + me.id).trigger({
                type: 'change',
                date: data.selectedYear + (data.types.month ? '-' + ('0' + data.selectedMonth).slice(-2) : '')
            });
        }
    },
    '@{changeMonth}<click>': function (e) {
        var me = this, data = me.updater, month = data.get('month'), year = data.get('year');
        if (e.params.next) {
            month += 1;
            if (month > 12) {
                month = 1;
                year++;
            }
        }
        else {
            month -= 1;
            if (month < 1) {
                month = 12;
                year--;
            }
        }
        data.set({
            year: year,
            month: month
        });
        me['@{update.days}'](true);
    },
    '@{changeYear}<click>': function (e) {
        var me = this;
        var params = e.params;
        var data = me.updater, year = data.get('year');
        if (params.range) {
            year = year + (params.next ? 10 : -10);
        }
        else {
            year = year + (params.next ? 1 : -1);
        }
        data.set({
            year: year
        });
        if (params.range) {
            me['@{update.years}'](true);
        }
        else {
            me['@{update.months}'](true);
        }
    },
    '@{showMonths}<click>': function () {
        var me = this;
        me.updater.set({
            showMonth: 1
        });
        me['@{update.months}'](true);
    },
    '@{showYears}<click>': function () {
        var me = this;
        me.updater.set({
            showYear: 1
        });
        me['@{update.years}'](true);
    },
    '@{pickYear}<click>': function (e) {
        var year = e.params.year;
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        var types = data.types;
        if (types.day || types.month) {
            me.updater.set({
                showYear: 0,
                year: +year
            });
            if (types.month) {
                me['@{update.months}'](true);
            }
            else {
                me['@{update.days}'](true);
            }
        }
        else {
            me['@{update.selected}'](year + '-01-01');
            me['@{update.years}'](true);
            me['@{fire.event}']();
        }
    },
    '@{pickMonth}<click>': function (e) {
        var month = e.params.month;
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        if (data.types.day) {
            updater.set({
                showMonth: 0,
                month: +month
            });
            me['@{update.days}'](true);
        }
        else {
            me['@{update.selected}'](data.year + '-' + month + '-01');
            me['@{update.months}'](true);
            me['@{fire.event}']();
        }
    },
    '@{choose}<click>': function (e) {
        var me = this;
        var data = me.updater;
        var month = data.get('month');
        var turnMonth = e.params.toMonth != month;
        me['@{update.selected}'](e.params.date);
        if (!me['@{date.value.bak}']) {
            me['@{date.value.bak}'] = data.get('dateValue');
        }
        if (turnMonth) {
            me['@{update.years}']();
            me['@{update.months}']();
        }
        data.set({
            dateValue: e.params.date
        });
        me['@{update.days}'](true);
        me['@{fire.event}']();
    },
    '@{setTime}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        if (!me['@{time.value.bak}']) {
            me['@{time.value.bak}'] = me.updater.get('timeValue');
        }
        me.updater.set({
            timeValue: e.time
        });
        me['@{update.days}'](true);
        me['@{fire.event}']();
    },
    '@{hide}<click>': function (e) {
        var me = this;
        if (e.params.enter) {
            delete me['@{date.value.bak}'];
            delete me['@{time.value.bak}'];
            me['@{fire.event}'](true);
            return;
        }
        $('#' + me.id).trigger('cancel');
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});