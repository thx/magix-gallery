/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_galleryW","._zs_gallerygZ{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryh_{padding-left:1%}._zs_galleryha{width:10%}._zs_galleryhb ._zs_galleryhc{padding-top:40px;padding-bottom:10px;border-bottom:1px solid #e6e6e6}._zs_galleryhb ._zs_galleryhc ._zs_galleryhd,._zs_galleryhb ._zs_galleryhc ._zs_galleryhe{float:left;height:36px;text-align:center;vertical-align:middle;cursor:pointer}._zs_galleryhb ._zs_galleryhc ._zs_galleryhd{position:relative;width:10%;margin-right:3%;margin-left:1%;border-radius:4px;color:#333;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}._zs_galleryhb ._zs_galleryhc ._zs_galleryhd ._zs_galleryhf{position:absolute;top:-18px;width:100%;height:18px;line-height:18px;right:0;text-align:center;color:#999}._zs_galleryhb ._zs_galleryhc ._zs_galleryhd ._zs_galleryhg{width:100%;margin-top:8px;padding:0}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe{position:relative;width:3.5%;color:#999;line-height:20px;font-weight:700;font-family:Tahoma}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe._zs_galleryhh{width:2%}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryhi{position:relative;height:36px}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryhi:before{content:\"\";position:absolute;top:-16px;left:0;width:100%;height:16px;background-color:transparent}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryhj{position:absolute;top:13px;left:0;width:0;height:10px;border-left:1px solid #e6e6e6}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryhj ._zs_galleryhk{position:absolute;top:-31px;left:50%;width:40px;margin-left:-20px;color:#ccc}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe._zs_galleryhl ._zs_galleryhj{height:16px}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe._zs_galleryhm ._zs_galleryhi{background-color:#f6f9ff}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe._zs_galleryhm ._zs_galleryhi:before{background-color:#4d7fff}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe._zs_galleryhm ._zs_galleryhj{border-left:1px solid #d8e3ff}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe._zs_galleryhm ._zs_galleryhj ._zs_galleryhk{color:#fff}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryhn,._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryho{position:absolute;top:0;width:0;height:36px;border-left:1px solid #4d7fff}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryhn:before,._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryho:before{content:\"\";position:absolute;top:0;right:-3px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #4d7fff}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryhn ._zs_galleryhp,._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryho ._zs_galleryhp{position:absolute;top:-16px;left:-10px;width:20px;height:16px;background-color:#4d7fff;color:#fff;text-align:center;line-height:16px;border-radius:2px}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryho{left:0}._zs_galleryhb ._zs_galleryhc ._zs_galleryhe ._zs_galleryhn{right:-1px}._zs_galleryhq{margin-right:2%;margin-left:1%;padding:10px 0;color:#999}");
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
} ; var $g = '', $_temp, $p = '', simple = $$.simple, types = $$.types, viewId = $$.viewId, type = $$.type, periods = $$.periods, tip = $$.tip; $p += '<div mxv mxa="_zs_galleryb7:_" class="_zs_galleryhb">'; if (!simple) {
    ;
    $p += '<div mxv mxa="_zs_galleryb7:a" class="_zs_galleryh_"><span mxs="_zs_galleryb7:_" class="color-9 mr10">快捷操作：</span>';
    for (var $art_iurvcjqba$art_i = 0, $art_cbyibyyxk$art_c = types.length; $art_iurvcjqba$art_i < $art_cbyibyyxk$art_c; $art_iurvcjqba$art_i++) {
        var t = types[$art_iurvcjqba$art_i];
        $p += '<label mxv mxa="_zs_galleryb7:b" class="mr40"><input type="radio" name="' + $e(viewId) + '_opers" value="' + $e(t.value) + '" mx-change="' + $viewId + 'changeType({type:\'' + $e($eq(t.value)) + '\'})" ';
        if (t.value == type) {
            ;
            $p += ' checked="true" ';
        }
        ;
        $p += '/>' + $e(t.text) + '</label>';
    }
    ;
    $p += '</div>';
} ; $p += ' '; for (var pIndex = 0, $art_cbyvtsdkl$art_c = periods.length; pIndex < $art_cbyvtsdkl$art_c; pIndex++) {
    var p = periods[pIndex];
    $p += '<ul mxa="_zs_galleryb7:c" class="_zs_galleryhc clearfix"><li mxa="_zs_galleryb7:d" class="_zs_galleryhd"><span mxs="_zs_galleryb7:a" class="_zs_galleryhf">时间段</span><a href="javascript:;" class="btn btn-small _zs_galleryhg ';
    if (p.selected) {
        ;
        $p += ' btn-brand ';
    }
    ;
    $p += '" mx-click="' + $viewId + 'toggleAll({pIndex:' + $e(pIndex) + '})">' + $e(p.name) + '</a></li>';
    for (var $art_icujitdmbu$art_i = 0, $art_objmsxaopeh$art_obj = p.hours, $art_ckerjzn$art_c = $art_objmsxaopeh$art_obj.length; $art_icujitdmbu$art_i < $art_ckerjzn$art_c; $art_icujitdmbu$art_i++) {
        var h = $art_objmsxaopeh$art_obj[$art_icujitdmbu$art_i];
        $p += '<li mx-mousedown="' + $viewId + 'drag()" class="_zs_galleryhe ';
        if (h.milestone) {
            ;
            $p += ' _zs_galleryhl ';
        }
        ;
        $p += ' ';
        if (h.selected) {
            ;
            $p += ' _zs_galleryhm ';
        }
        ;
        $p += '" data-period="' + $e(pIndex) + '" data-hour="' + $e(h.index) + '"><div mxs="_zs_galleryb7:b" class="_zs_galleryhi"></div><div class="_zs_galleryho ';
        if (!h.firstSelected) {
            ;
            $p += ' hide ';
        }
        ;
        $p += '" style="z-index: ' + $e(h.zIndex) + ';"><span mxa="_zs_galleryb7:e" class="_zs_galleryhp">' + $e(h.index) + '</span></div><div class="_zs_galleryhn ';
        if (!h.endSelected) {
            ;
            $p += ' hide ';
        }
        ;
        $p += '" style="z-index: ' + $e(h.zIndex) + '"><span mxa="_zs_galleryb7:f" class="_zs_galleryhp">' + $e(h.indexNext) + '</span></div><div mxa="_zs_galleryb7:g" class="_zs_galleryhj"><span mxa="_zs_galleryb7:h" class="_zs_galleryhk">' + $e(h.index) + '</span></div></li>';
    }
    ;
    $p += '<li mxs="_zs_galleryb7:c" class="_zs_galleryhe _zs_galleryhl _zs_galleryhh"><span class="_zs_galleryhj"><span class="_zs_galleryhk">24</span></span></li></ul>';
} ; $p += '</div><div mxa="_zs_galleryb7:i" class="clearfix _zs_galleryhq"><a mxs="_zs_galleryb7:d" mx-click="' + $viewId + 'clearAll()" href="javascript:;" class="btn btn-small _zs_galleryha"><i class="mc-iconfont displacement-2 mr5 color-9">&#xe72e;</i>清空</a><span mxa="_zs_galleryb7:j" class="fr lh32">' + $e(tip) + '</span></div>'; return $p; },
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
        var parent = target.parent('._zs_galleryhc');
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