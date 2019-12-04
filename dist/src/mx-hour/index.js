/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/index",["magix","$","../mx-util/view"],(require,exports,module)=>{
/*magix_1,$,View*/

"use strict";
exports.__esModule = true;
/**
 * 选择时段
 */
var magix_1 = require("magix");
var $ = require("$");
var View = require("../mx-util/view");
magix_1["default"].applyStyle("_zs_gallery_mx-hour_index_","._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours {\n  padding-top: 40px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour {\n  float: left;\n  height: 36px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all {\n  position: relative;\n  width: 10%;\n  margin-right: 1.8%;\n  border-radius: 4px;\n  color: #333;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all ._zs_gallery_mx-hour_index_-all-tip {\n  position: absolute;\n  top: -18px;\n  width: 100%;\n  height: 18px;\n  line-height: 18px;\n  right: 0;\n  text-align: center;\n  color: #999;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all ._zs_gallery_mx-hour_index_-all-btn {\n  width: 100%;\n  margin-top: 8px;\n  padding: 0;\n  font-size: 12px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour {\n  position: relative;\n  width: 3.6%;\n  color: #999;\n  line-height: 20px;\n  font-weight: bold;\n  font-family: \"Tahoma\";\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-hour-last {\n  width: 1.8%;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-inner {\n  position: relative;\n  height: 36px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-inner:before {\n  content: '';\n  position: absolute;\n  top: -16px;\n  left: 0;\n  width: 100%;\n  height: 16px;\n  background-color: transparent;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-line {\n  position: absolute;\n  top: 13px;\n  left: 0;\n  width: 0;\n  height: 10px;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-line ._zs_gallery_mx-hour_index_-hour-info {\n  position: absolute;\n  top: -31px;\n  left: 50%;\n  width: 40px;\n  margin-left: -20px;\n  color: #ccc;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-milestone ._zs_gallery_mx-hour_index_-hour-line {\n  height: 16px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-inner {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-inner:before {\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-line ._zs_gallery_mx-hour_index_-hour-info {\n  color: #fff;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end {\n  position: absolute;\n  top: 0;\n  width: 0;\n  height: 36px;\n  border-left: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start:before,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -3px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start ._zs_gallery_mx-hour_index_-line-info,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end ._zs_gallery_mx-hour_index_-line-info {\n  position: absolute;\n  top: -16px;\n  left: -10px;\n  width: 20px;\n  height: 16px;\n  background-color: var(--color-brand);\n  color: #fff;\n  text-align: center;\n  line-height: 16px;\n  border-radius: 2px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start {\n  left: 0;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end {\n  right: -1px;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper {\n  padding: 10px 0;\n  color: #999;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper ._zs_gallery_mx-hour_index_-clear-btn {\n  font-size: 12px;\n  width: 10%;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper ._zs_gallery_mx-hour_index_-oper-tip {\n  line-height: var(--input-small-height);\n  margin-right: 1.8%;\n}\n");
var WeekMap = {
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六',
    7: '周日'
};
exports["default"] = View.extend({
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
} ; var $g = '', $_temp, $p = '', periods = $$.periods, types = $$.types, viewId = $$.viewId, type = $$.type, tip = $$.tip; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryc&:_" class="_zs_gallery_mx-hour_index_-period">';
    $line = 3;
    $art = 'if (periods.length == 7)';
    ;
    $expr = '<%if (periods.length == 7) {%>';
    if (periods.length == 7) {
        ;
        $p += '<div mxv><span mxs="_zs_galleryc&:_" class="color-9 mr10">快捷操作：</span>';
        $line = 6;
        $art = 'each types as t';
        ;
        $expr = '<%for (var $art_ionxqtpu$art_i = 0, $art_cfmntihmv$art_c = types.length; $art_ionxqtpu$art_i < $art_cfmntihmv$art_c; $art_ionxqtpu$art_i++) {        var t = types[$art_ionxqtpu$art_i]%>';
        for (var $art_ionxqtpu$art_i = 0, $art_cfmntihmv$art_c = types.length; $art_ionxqtpu$art_i < $art_cfmntihmv$art_c; $art_ionxqtpu$art_i++) {
            var t = types[$art_ionxqtpu$art_i];
            $p += '<label mxv mxa="_zs_galleryc&:a" class="mr40"><input type="radio" name="';
            $line = 8;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_opers" value="';
            $line = 8;
            $art = '=t.value';
            ;
            $p += ($expr = '<%=t.value%>', $e(t.value)) + '" mx-change="' + $viewId + 'changeType({value:\'';
            $line = 9;
            $art = '=t.value';
            ;
            $p += ($expr = '<%=$eq(t.value)%>', $e($eq(t.value))) + '\'})" ';
            $line = 10;
            $art = 'if (t.value == type)';
            ;
            $expr = '<%if (t.value == type) {%>';
            if (t.value == type) {
                ;
                $p += ' checked="true" ';
                $line = 10;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '/>';
            $line = 10;
            $art = '=t.text';
            ;
            $p += ($expr = '<%=t.text%>', $e(t.text)) + '</label>';
            $line = 12;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 14;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 16;
    $art = 'each periods as p pIndex';
    ;
    $expr = '<%for (var pIndex = 0, $art_czhxtysj$art_c = periods.length; pIndex < $art_czhxtysj$art_c; pIndex++) {    var p = periods[pIndex]%>';
    for (var pIndex = 0, $art_czhxtysj$art_c = periods.length; pIndex < $art_czhxtysj$art_c; pIndex++) {
        var p = periods[pIndex];
        $p += '<ul mxa="_zs_galleryc&:b" class="_zs_gallery_mx-hour_index_-hours clearfix"><li mxa="_zs_galleryc&:c" class="_zs_gallery_mx-hour_index_-all"><span mxs="_zs_galleryc&:a" class="_zs_gallery_mx-hour_index_-all-tip">时间段</span><a href="javascript:;" class="btn btn-small _zs_gallery_mx-hour_index_-all-btn ';
        $line = 20;
        $art = 'if p.selected';
        ;
        $expr = '<%if (p.selected) {%>';
        if (p.selected) {
            ;
            $p += ' btn-brand ';
            $line = 20;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-click="' + $viewId + 'toggleAll({pIndex:';
        $line = 21;
        $art = '=pIndex';
        ;
        $p += ($expr = '<%=pIndex%>', $e(pIndex)) + '})">';
        $line = 21;
        $art = '=p.name';
        ;
        $p += ($expr = '<%=p.name%>', $e(p.name)) + '</a></li>';
        $line = 23;
        $art = 'each p.hours as h';
        ;
        $expr = '<%for (var $art_iqozyfzi$art_i = 0, $art_objstxynhp$art_obj = p.hours, $art_cmshkbgzd$art_c = $art_objstxynhp$art_obj.length; $art_iqozyfzi$art_i < $art_cmshkbgzd$art_c; $art_iqozyfzi$art_i++) {        var h = $art_objstxynhp$art_obj[$art_iqozyfzi$art_i]%>';
        for (var $art_iqozyfzi$art_i = 0, $art_objstxynhp$art_obj = p.hours, $art_cmshkbgzd$art_c = $art_objstxynhp$art_obj.length; $art_iqozyfzi$art_i < $art_cmshkbgzd$art_c; $art_iqozyfzi$art_i++) {
            var h = $art_objstxynhp$art_obj[$art_iqozyfzi$art_i];
            $p += '<li mx-mousedown="' + $viewId + 'drag()" class="_zs_gallery_mx-hour_index_-hour ';
            $line = 24;
            $art = 'if h.milestone';
            ;
            $expr = '<%if (h.milestone) {%>';
            if (h.milestone) {
                ;
                $p += ' _zs_gallery_mx-hour_index_-milestone ';
                $line = 24;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 24;
            $art = 'if h.selected';
            ;
            $expr = '<%if (h.selected) {%>';
            if (h.selected) {
                ;
                $p += ' _zs_gallery_mx-hour_index_-selected ';
                $line = 24;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" data-period="';
            $line = 25;
            $art = '=pIndex';
            ;
            $p += ($expr = '<%=pIndex%>', $e(pIndex)) + '" data-hour="';
            $line = 26;
            $art = '=h.index';
            ;
            $p += ($expr = '<%=h.index%>', $e(h.index)) + '"><div mxs="_zs_galleryc&:b" class="_zs_gallery_mx-hour_index_-hour-inner"></div><div class="_zs_gallery_mx-hour_index_-line-start ';
            $line = 28;
            $art = 'if !h.firstSelected';
            ;
            $expr = '<%if (!h.firstSelected) {%>';
            if (!h.firstSelected) {
                ;
                $p += ' hide ';
                $line = 28;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" style="z-index: ';
            $line = 28;
            $art = '=h.zIndex';
            ;
            $p += ($expr = '<%=h.zIndex%>', $e(h.zIndex)) + ';"><span mxa="_zs_galleryc&:d" class="_zs_gallery_mx-hour_index_-line-info">';
            $line = 29;
            $art = '=h.index';
            ;
            $p += ($expr = '<%=h.index%>', $e(h.index)) + '</span></div><div class="_zs_gallery_mx-hour_index_-line-end ';
            $line = 31;
            $art = 'if !h.endSelected';
            ;
            $expr = '<%if (!h.endSelected) {%>';
            if (!h.endSelected) {
                ;
                $p += ' hide ';
                $line = 31;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" style="z-index: ';
            $line = 31;
            $art = '=h.zIndex';
            ;
            $p += ($expr = '<%=h.zIndex%>', $e(h.zIndex)) + '"><span mxa="_zs_galleryc&:e" class="_zs_gallery_mx-hour_index_-line-info">';
            $line = 32;
            $art = '=h.indexNext';
            ;
            $p += ($expr = '<%=h.indexNext%>', $e(h.indexNext)) + '</span></div><div mxa="_zs_galleryc&:f" class="_zs_gallery_mx-hour_index_-hour-line"><span mxa="_zs_galleryc&:g" class="_zs_gallery_mx-hour_index_-hour-info">';
            $line = 35;
            $art = '=h.index';
            ;
            $p += ($expr = '<%=h.index%>', $e(h.index)) + '</span></div></li>';
            $line = 38;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<li mxs="_zs_galleryc&:c" class="_zs_gallery_mx-hour_index_-hour _zs_gallery_mx-hour_index_-milestone _zs_gallery_mx-hour_index_-hour-last"><span class="_zs_gallery_mx-hour_index_-hour-line"><span class="_zs_gallery_mx-hour_index_-hour-info">24</span></span></li></ul>';
        $line = 45;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_galleryc&:h" class="clearfix _zs_gallery_mx-hour_index_-opers-wrapper"><a mxs="_zs_galleryc&:d" mx-click="' + $viewId + 'clearAll()" href="javascript:;" class="btn btn-small _zs_gallery_mx-hour_index_-clear-btn"><i class="mc-iconfont displacement-2 mr5 color-9">&#xe72e;</i>清空</a><span mxa="_zs_galleryc&:i" class="fr _zs_gallery_mx-hour_index_-oper-tip">';
    $line = 51;
    $art = '=tip';
    ;
    $p += ($expr = '<%=tip%>', $e(tip)) + '</span></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-hour/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var tip = extra.tip || '', selected = extra.selected || [];
        // 历史可配置参数simple
        // 1. true：极简模式，默认只区分工作日和双休日
        // 2. false：每日单独设置
        var simple = (extra.simple + '' !== 'false'), groups = extra.groups; //分组信息
        if (!groups) {
            groups = simple ? [12345, 67] : [1, 2, 3, 4, 5, 6, 7];
        }
        // 所有选中的日期
        var map = {};
        selected.forEach(function (item) {
            // 支持合并配置，具体计算是展开成单日
            var weeks = (item.week + '').split('');
            weeks.forEach(function (week) {
                map[week] = (item.times || []).map(function (time) {
                    return time + '';
                });
            });
        });
        var getHours = function () {
            var hours = [];
            for (var i = 0; i < 24; i++) {
                hours.push({
                    'index': i,
                    'indexNext': (i + 1),
                    'milestone': (i % 6 == 0),
                    'zIndex': (i + 10) //fix样式
                });
            }
            return hours;
        };
        var periods = groups.map(function (weeks, index) {
            // 多天合并的，取一天即可
            weeks = (weeks + '').split('');
            var times = map[weeks[0]] || [];
            var hours = getHours();
            hours.forEach(function (h) {
                h.selected = (times.indexOf(h.index + '') > -1);
            });
            return {
                name: (weeks.length > 1) ? WeekMap[weeks[0]] + "\u81F3" + WeekMap[weeks[weeks.length - 1]] : WeekMap[weeks[0]],
                hours: hours,
                weeks: weeks
            };
        });
        // 拆分成单日选择时的批量操作功能
        var types = [{
                text: '全日程',
                value: '1234567'
            }, {
                text: '工作日',
                value: '12345'
            }, {
                text: '双休日',
                value: '67'
            }];
        var type = '';
        var _loop_1 = function (i) {
            var t = types[i];
            var weeks = (t.value + '').split('');
            var all = true;
            weeks.forEach(function (week) {
                all = all && ((map[week] || []).length == 24);
            });
            if (all) {
                type = types[i].value;
                return "break";
            }
        };
        for (var i = 0; i < types.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        that.updater.set({
            tip: tip,
            periods: that.sync(periods),
            type: type,
            types: types
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest();
    },
    sync: function (periods) {
        periods.forEach(function (p) {
            var hours = p.hours;
            var allSelected = true;
            for (var i = 0; i < hours.length; i++) {
                var h = hours[i];
                var prev = hours[i - 1], next = hours[i + 1];
                h.firstSelected = false;
                h.endSelected = false;
                if (h.selected) {
                    if ((prev && !prev.selected) || !prev) {
                        h.firstSelected = true;
                    }
                    if ((next && !next.selected) || !next) {
                        h.endSelected = true;
                    }
                }
                allSelected = allSelected && h.selected;
            }
            p.selected = allSelected;
        });
        return periods;
    },
    'clearAll<click>': function (event) {
        var periods = this.updater.get('periods');
        periods.forEach(function (p) {
            p.hours.forEach(function (h) {
                h.selected = false;
            });
        });
        this.updater.digest({
            periods: this.sync(periods)
        });
    },
    'toggleAll<click>': function (event) {
        var periods = this.updater.get('periods');
        var period = periods[event.params.pIndex];
        var allSelected = !period.selected;
        period.hours.forEach(function (h) {
            h.selected = allSelected;
        });
        this.updater.digest({
            periods: this.sync(periods)
        });
    },
    /**
     * 拖动选择，第一个是什么状态，则所有选中标签都是什么状态
     */
    'drag<mousedown>': function (event) {
        var that = this;
        var periods = that.updater.get('periods');
        var target = $(event.eventTarget);
        var pIndex = target.data('period'), hourIndex = target.data('hour');
        var selected = !periods[pIndex].hours[hourIndex].selected;
        that.toggle(pIndex, hourIndex, selected);
        var parent = target.parent('._zs_gallery_mx-hour_index_-hours');
        var siblings = parent.find('[data-hour]');
        siblings.on('mouseenter.drag', function (e) {
            e.preventDefault();
            var t = $(this);
            that.toggle(t.data('period'), t.data('hour'), selected);
        });
        $(document.body).off('mouseup.drag')
            .on('mouseup.drag', function (event) {
            siblings.off('mouseenter.drag');
        });
        event.preventDefault();
        return false;
    },
    toggle: function (pIndex, hourIndex, selected) {
        var periods = this.updater.get('periods');
        periods[pIndex].hours[hourIndex].selected = selected;
        this.updater.digest({
            periods: this.sync(periods)
        });
    },
    /**
     * 每日单独选择时有的批量功能
     */
    'changeType<change>': function (event) {
        var that = this;
        var value = event.params.value;
        var periods = that.updater.get('periods');
        var weeks = (value + '').split('');
        periods.forEach(function (p) {
            p.hours.forEach(function (h) {
                h.selected = (weeks.indexOf(p.weeks + '') > -1);
            });
        });
        that.updater.digest({
            type: value,
            periods: that.sync(periods)
        });
    },
    val: function () {
        var periods = this.updater.get('periods');
        var results = [];
        periods.forEach(function (p) {
            var times = [];
            p.hours.forEach(function (h) {
                if (h.selected) {
                    times.push(h.index);
                }
            });
            p.weeks.forEach(function (week) {
                results.push({
                    week: week,
                    name: WeekMap[week],
                    times: times
                });
            });
        });
        return results;
    }
});

});