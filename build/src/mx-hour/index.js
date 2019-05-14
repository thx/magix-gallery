/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/**
 * 选择时段
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-hour_index_","._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours {\n  padding-top: 40px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour {\n  float: left;\n  height: 36px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all {\n  position: relative;\n  width: 10%;\n  margin-right: 1.8%;\n  border-radius: 4px;\n  color: #333;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all ._zs_gallery_mx-hour_index_-all-tip {\n  position: absolute;\n  top: -18px;\n  width: 100%;\n  height: 18px;\n  line-height: 18px;\n  right: 0;\n  text-align: center;\n  color: #999;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-all ._zs_gallery_mx-hour_index_-all-btn {\n  width: 100%;\n  margin-top: 8px;\n  padding: 0;\n  font-size: 12px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour {\n  position: relative;\n  width: 3.6%;\n  color: #999;\n  line-height: 20px;\n  font-weight: bold;\n  font-family: \"Tahoma\";\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-hour-last {\n  width: 1.8%;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-inner {\n  position: relative;\n  height: 36px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-inner:before {\n  content: '';\n  position: absolute;\n  top: -16px;\n  left: 0;\n  width: 100%;\n  height: 16px;\n  background-color: transparent;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-line {\n  position: absolute;\n  top: 13px;\n  left: 0;\n  width: 0;\n  height: 10px;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-hour-line ._zs_gallery_mx-hour_index_-hour-info {\n  position: absolute;\n  top: -31px;\n  left: 50%;\n  width: 40px;\n  margin-left: -20px;\n  color: #ccc;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-milestone ._zs_gallery_mx-hour_index_-hour-line {\n  height: 16px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-inner {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-inner:before {\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour._zs_gallery_mx-hour_index_-selected ._zs_gallery_mx-hour_index_-hour-line ._zs_gallery_mx-hour_index_-hour-info {\n  color: #fff;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end {\n  position: absolute;\n  top: 0;\n  width: 0;\n  height: 36px;\n  border-left: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start:before,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -3px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid var(--color-brand);\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start ._zs_gallery_mx-hour_index_-line-info,\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end ._zs_gallery_mx-hour_index_-line-info {\n  position: absolute;\n  top: -16px;\n  left: -10px;\n  width: 20px;\n  height: 16px;\n  background-color: var(--color-brand);\n  color: #fff;\n  text-align: center;\n  line-height: 16px;\n  border-radius: 2px;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-start {\n  left: 0;\n}\n._zs_gallery_mx-hour_index_-period ._zs_gallery_mx-hour_index_-hours ._zs_gallery_mx-hour_index_-hour ._zs_gallery_mx-hour_index_-line-end {\n  right: -1px;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper {\n  padding: 10px 0;\n  color: #999;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper ._zs_gallery_mx-hour_index_-clear-btn {\n  font-size: 12px;\n  width: 10%;\n}\n._zs_gallery_mx-hour_index_-opers-wrapper ._zs_gallery_mx-hour_index_-oper-tip {\n  line-height: var(--input-small-height);\n  margin-right: 1.8%;\n}\n");
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
} ; var $g = '', $_temp, $p = '', simple = $$.simple, types = $$.types, viewId = $$.viewId, type = $$.type, periods = $$.periods, tip = $$.tip; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycn:_" class="_zs_gallery_mx-hour_index_-period">';
    $line = 2;
    $art = 'if !simple';
    ;
    $expr = '<%if (!simple) {%>';
    if (!simple) {
        ;
        $p += '<div mxv><span mxs="_zs_gallerycn:_" class="color-9 mr10">快捷操作：</span>';
        $line = 5;
        $art = 'each types as t';
        ;
        $expr = '<%for (var $art_iojcdlb$art_i = 0, $art_clbyyqn$art_c = types.length; $art_iojcdlb$art_i < $art_clbyyqn$art_c; $art_iojcdlb$art_i++) {        var t = types[$art_iojcdlb$art_i]%>';
        for (var $art_iojcdlb$art_i = 0, $art_clbyyqn$art_c = types.length; $art_iojcdlb$art_i < $art_clbyyqn$art_c; $art_iojcdlb$art_i++) {
            var t = types[$art_iojcdlb$art_i];
            $p += '<label mxv mxa="_zs_gallerycn:a" class="mr40"><input type="radio" name="';
            $line = 7;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_opers" value="';
            $line = 7;
            $art = '=t.value';
            ;
            $p += ($expr = '<%=t.value%>', $e(t.value)) + '" mx-change="' + $viewId + 'changeType({type:\'';
            $line = 8;
            $art = '=t.value';
            ;
            $p += ($expr = '<%=$eq(t.value)%>', $e($eq(t.value))) + '\'})" ';
            $line = 9;
            $art = 'if (t.value == type)';
            ;
            $expr = '<%if (t.value == type) {%>';
            if (t.value == type) {
                ;
                $p += ' checked="true" ';
                $line = 9;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '/>';
            $line = 9;
            $art = '=t.text';
            ;
            $p += ($expr = '<%=t.text%>', $e(t.text)) + '</label>';
            $line = 11;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 13;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 15;
    $art = 'each periods as p pIndex';
    ;
    $expr = '<%for (var pIndex = 0, $art_cnlsseqcy$art_c = periods.length; pIndex < $art_cnlsseqcy$art_c; pIndex++) {    var p = periods[pIndex]%>';
    for (var pIndex = 0, $art_cnlsseqcy$art_c = periods.length; pIndex < $art_cnlsseqcy$art_c; pIndex++) {
        var p = periods[pIndex];
        $p += '<ul mxa="_zs_gallerycn:b" class="_zs_gallery_mx-hour_index_-hours clearfix"><li mxa="_zs_gallerycn:c" class="_zs_gallery_mx-hour_index_-all"><span mxs="_zs_gallerycn:a" class="_zs_gallery_mx-hour_index_-all-tip">时间段</span><a href="javascript:;" class="btn btn-small _zs_gallery_mx-hour_index_-all-btn ';
        $line = 19;
        $art = 'if p.selected';
        ;
        $expr = '<%if (p.selected) {%>';
        if (p.selected) {
            ;
            $p += ' btn-brand ';
            $line = 19;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-click="' + $viewId + 'toggleAll({pIndex:';
        $line = 20;
        $art = '=pIndex';
        ;
        $p += ($expr = '<%=pIndex%>', $e(pIndex)) + '})">';
        $line = 20;
        $art = '=p.name';
        ;
        $p += ($expr = '<%=p.name%>', $e(p.name)) + '</a></li>';
        $line = 22;
        $art = 'each p.hours as h';
        ;
        $expr = '<%for (var $art_ifzbydq$art_i = 0, $art_objnlctsxovb$art_obj = p.hours, $art_csvmmgdqxqj$art_c = $art_objnlctsxovb$art_obj.length; $art_ifzbydq$art_i < $art_csvmmgdqxqj$art_c; $art_ifzbydq$art_i++) {        var h = $art_objnlctsxovb$art_obj[$art_ifzbydq$art_i]%>';
        for (var $art_ifzbydq$art_i = 0, $art_objnlctsxovb$art_obj = p.hours, $art_csvmmgdqxqj$art_c = $art_objnlctsxovb$art_obj.length; $art_ifzbydq$art_i < $art_csvmmgdqxqj$art_c; $art_ifzbydq$art_i++) {
            var h = $art_objnlctsxovb$art_obj[$art_ifzbydq$art_i];
            $p += '<li mx-mousedown="' + $viewId + 'drag()" class="_zs_gallery_mx-hour_index_-hour ';
            $line = 23;
            $art = 'if h.milestone';
            ;
            $expr = '<%if (h.milestone) {%>';
            if (h.milestone) {
                ;
                $p += ' _zs_gallery_mx-hour_index_-milestone ';
                $line = 23;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 23;
            $art = 'if h.selected';
            ;
            $expr = '<%if (h.selected) {%>';
            if (h.selected) {
                ;
                $p += ' _zs_gallery_mx-hour_index_-selected ';
                $line = 23;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" data-period="';
            $line = 24;
            $art = '=pIndex';
            ;
            $p += ($expr = '<%=pIndex%>', $e(pIndex)) + '" data-hour="';
            $line = 25;
            $art = '=h.index';
            ;
            $p += ($expr = '<%=h.index%>', $e(h.index)) + '"><div mxs="_zs_gallerycn:b" class="_zs_gallery_mx-hour_index_-hour-inner"></div><div class="_zs_gallery_mx-hour_index_-line-start ';
            $line = 27;
            $art = 'if !h.firstSelected';
            ;
            $expr = '<%if (!h.firstSelected) {%>';
            if (!h.firstSelected) {
                ;
                $p += ' hide ';
                $line = 27;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" style="z-index: ';
            $line = 27;
            $art = '=h.zIndex';
            ;
            $p += ($expr = '<%=h.zIndex%>', $e(h.zIndex)) + ';"><span mxa="_zs_gallerycn:d" class="_zs_gallery_mx-hour_index_-line-info">';
            $line = 28;
            $art = '=h.index';
            ;
            $p += ($expr = '<%=h.index%>', $e(h.index)) + '</span></div><div class="_zs_gallery_mx-hour_index_-line-end ';
            $line = 30;
            $art = 'if !h.endSelected';
            ;
            $expr = '<%if (!h.endSelected) {%>';
            if (!h.endSelected) {
                ;
                $p += ' hide ';
                $line = 30;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" style="z-index: ';
            $line = 30;
            $art = '=h.zIndex';
            ;
            $p += ($expr = '<%=h.zIndex%>', $e(h.zIndex)) + '"><span mxa="_zs_gallerycn:e" class="_zs_gallery_mx-hour_index_-line-info">';
            $line = 31;
            $art = '=h.indexNext';
            ;
            $p += ($expr = '<%=h.indexNext%>', $e(h.indexNext)) + '</span></div><div mxa="_zs_gallerycn:f" class="_zs_gallery_mx-hour_index_-hour-line"><span mxa="_zs_gallerycn:g" class="_zs_gallery_mx-hour_index_-hour-info">';
            $line = 34;
            $art = '=h.index';
            ;
            $p += ($expr = '<%=h.index%>', $e(h.index)) + '</span></div></li>';
            $line = 37;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<li mxs="_zs_gallerycn:c" class="_zs_gallery_mx-hour_index_-hour _zs_gallery_mx-hour_index_-milestone _zs_gallery_mx-hour_index_-hour-last"><span class="_zs_gallery_mx-hour_index_-hour-line"><span class="_zs_gallery_mx-hour_index_-hour-info">24</span></span></li></ul>';
        $line = 44;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerycn:h" class="clearfix _zs_gallery_mx-hour_index_-opers-wrapper"><a mxs="_zs_gallerycn:d" mx-click="' + $viewId + 'clearAll()" href="javascript:;" class="btn btn-small _zs_gallery_mx-hour_index_-clear-btn"><i class="mc-iconfont displacement-2 mr5 color-9">&#xe72e;</i>清空</a><span mxa="_zs_gallerycn:i" class="fr _zs_gallery_mx-hour_index_-oper-tip">';
    $line = 50;
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
        var that = this;
        var tip = extra.tip || '', simple = (extra.simple + '' !== 'false'), selected = extra.selected || [];
        var map = {};
        selected.forEach(function (item) {
            map[item.week] = item.times || [];
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
        var periods;
        if (simple) {
            periods = [{
                    name: '周一至周五',
                    week: '12345'
                }, {
                    name: '周六至周日',
                    week: '67'
                }];
        }
        else {
            periods = [{
                    name: '周一',
                    week: 1
                }, {
                    name: '周二',
                    week: 2
                }, {
                    name: '周三',
                    week: 3,
                    times: [0]
                }, {
                    name: '周四',
                    week: 4
                }, {
                    name: '周五',
                    week: 5
                }, {
                    name: '周六',
                    week: 6
                }, {
                    name: '周日',
                    week: 7
                }];
        }
        that.$selected = {};
        periods.forEach(function (p, pIndex) {
            var times = (map[p.week] || []).map(function (time) {
                return time + '';
            });
            var hours = getHours();
            hours.forEach(function (h) {
                h.selected = (times.indexOf(h.index + '') > -1);
                if (h.selected) {
                    that.$selected[pIndex + '_' + h.index] = true;
                }
            });
            p.hours = hours;
        });
        that.updater.set({
            viewId: that.id,
            tip: tip,
            periods: that.sync(periods),
            simple: simple,
            type: '',
            types: [{
                    text: '全日程',
                    value: 1
                }, {
                    text: '工作日',
                    value: 2
                }, {
                    text: '双休日',
                    value: 3
                }]
        });
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
    'changeType<change>': function (event) {
        var that = this;
        var type = event.params.type;
        var periods = that.updater.get('periods');
        var filters = [];
        switch (+type) {
            case 2:
                filters = [6, 7];
                break;
            case 3:
                filters = [1, 2, 3, 4, 5];
                break;
        }
        periods.forEach(function (p) {
            p.hours.forEach(function (h) {
                h.selected = (filters.indexOf(p.week) < 0);
            });
        });
        that.updater.digest({
            type: type,
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
            results.push({
                week: p.week,
                name: p.name,
                times: times
            });
        });
        return results;
    }
});

});