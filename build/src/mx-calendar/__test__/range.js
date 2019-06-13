/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/range",["magix","$","mx-medusa/util","__test__/subs","mx-title/second","./6","./12","./20","./7","./8","./9","./11","./15","./13","./10","./18","__test__/api","__test__/event","./implement"],(require,exports,module)=>{
/*Magix,$,I18n*/
require("__test__/subs");
require("mx-title/second");
require("./6");
require("./12");
require("./20");
require("./7");
require("./8");
require("./9");
require("./11");
require("./15");
require("./13");
require("./10");
require("./18");
require("__test__/api");
require("__test__/event");
require("./implement");
var Magix = require("magix");
var $ = require("$");
var I18n = require("mx-medusa/util");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options, events = $$.events, supportQuickDates = $$.supportQuickDates; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallery.:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'对比+时间段\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'对比+单天\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'选择时分秒\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'自定义trigger\',\n            key: viewId + \'_demo12\'\n        },{\n            name: \'动态快捷日期\',\n            key: viewId + \'_demo9\'\n        },{\n            name: \'禁选开始或结束\',\n            key: viewId + \'_demo11\'\n        },{\n            name: \'部分不可选\',\n            key: viewId + \'_demo15\'\n        },{\n            name: \'历史选中修正\',\n            key: viewId + \'_demo13\'\n        },{\n            name: \'范围修正\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'自定义formatter\',\n            key: viewId + \'_demo18\'\n        },{\n            name: \'禁选\',\n            key: viewId + \'_demo20\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }, {\n        name: \'快捷日期备选项\',\n        key: viewId + \'_quick\'\n    }, {\n        name: \'关于实现方案\',\n        key: viewId + \'_implement\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'对比+时间段\',                    key: viewId + \'_demo6\'                }, {                    name: \'对比+单天\',                    key: viewId + \'_demo7\'                }, {                    name: \'选择时分秒\',                    key: viewId + \'_demo8\'                }, {                    name: \'自定义trigger\',                    key: viewId + \'_demo12\'                }, {                    name: \'动态快捷日期\',                    key: viewId + \'_demo9\'                }, {                    name: \'禁选开始或结束\',                    key: viewId + \'_demo11\'                }, {                    name: \'部分不可选\',                    key: viewId + \'_demo15\'                }, {                    name: \'历史选中修正\',                    key: viewId + \'_demo13\'                }, {                    name: \'范围修正\',                    key: viewId + \'_demo10\'                }, {                    name: \'自定义formatter\',                    key: viewId + \'_demo18\'                }, {                    name: \'禁选\',                    key: viewId + \'_demo20\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }, {            name: \'快捷日期备选项\',            key: viewId + \'_quick\'        }, {            name: \'关于实现方案\',            key: viewId + \'_implement\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '对比+时间段', key: viewId + '_demo6' }, { name: '对比+单天', key: viewId + '_demo7' }, { name: '选择时分秒', key: viewId + '_demo8' }, { name: '自定义trigger', key: viewId + '_demo12' }, { name: '动态快捷日期', key: viewId + '_demo9' }, { name: '禁选开始或结束', key: viewId + '_demo11' }, { name: '部分不可选', key: viewId + '_demo15' }, { name: '历史选中修正', key: viewId + '_demo13' }, { name: '范围修正', key: viewId + '_demo10' }, { name: '自定义formatter', key: viewId + '_demo18' }, { name: '禁选', key: viewId + '_demo20' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }, { name: '快捷日期备选项', key: viewId + '_quick' }, { name: '关于实现方案', key: viewId + '_implement' }])) + '"></div><div id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery.:a" class="clearfix mb20"><div mxa="_zs_gallery.:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-calendar/__test__/6" id="';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-calendar/__test__/12" id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo12"></div><div mx-view="mx-calendar/__test__/20" id="';
    $line = 58;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo20"></div></div><div mxa="_zs_gallery.:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-calendar/__test__/7" id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-calendar/__test__/8" id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-calendar/__test__/9" id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mx-view="mx-calendar/__test__/11" id="';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div><div mx-view="mx-calendar/__test__/15" id="';
    $line = 65;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo15"></div><div mx-view="mx-calendar/__test__/13" id="';
    $line = 66;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo13"></div><div mx-view="mx-calendar/__test__/10" id="';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div><div mx-view="mx-calendar/__test__/18" id="';
    $line = 68;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo18"></div></div></div><div id="';
    $line = 72;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 73;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 75;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 76;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '" class="mb40"></div><div id="';
    $line = 78;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_quick" mx-view="mx-title/second?content=%E5%BF%AB%E6%8D%B7%E6%97%A5%E6%9C%9F%E5%A4%87%E9%80%89%E9%A1%B9"></div><div mxa="_zs_gallery.:d" class="pr20 mb40"><table mxa="_zs_gallery.:e" class="table _zs_gallery___test___layout_-desc-table"><thead mxs="_zs_gallery.:_"><tr><th width="100">配置key值</th><th width="100">显示文案</th><th width="200">描述</th></tr></thead><tbody>';
    $line = 89;
    $art = 'each supportQuickDates as item';
    ;
    $expr = '<%for (var $art_ijkzwmbpphs$art_i = 0, $art_cktfzjjmgkg$art_c = supportQuickDates.length; $art_ijkzwmbpphs$art_i < $art_cktfzjjmgkg$art_c; $art_ijkzwmbpphs$art_i++) {    var item = supportQuickDates[$art_ijkzwmbpphs$art_i]%>';
    for (var $art_ijkzwmbpphs$art_i = 0, $art_cktfzjjmgkg$art_c = supportQuickDates.length; $art_ijkzwmbpphs$art_i < $art_cktfzjjmgkg$art_c; $art_ijkzwmbpphs$art_i++) {
        var item = supportQuickDates[$art_ijkzwmbpphs$art_i];
        $p += '<tr><td>';
        $line = 91;
        $art = '=item.key';
        ;
        $p += ($expr = '<%=item.key%>', $e(item.key)) + '</td><td>';
        $line = 92;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</td><td>';
        $line = 93;
        $art = '=item.tip';
        ;
        $p += ($expr = '<%=item.tip%>', $e(item.tip)) + '</td></tr>';
        $line = 95;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div mx-view="mx-calendar/__test__/implement" id="';
    $line = 100;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_implement"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/range.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var viewId = that.id;
        var options = [{
                key: 'start',
                desc: '默认选中开始日期',
                type: 'string',
                def: '根据max和min进行修正'
            }, {
                key: 'end',
                desc: '默认选中结束日期，不限的情况下end=不限即可',
                type: 'string',
                def: '根据max和min进行修正'
            }, {
                key: 'start-disabled',
                desc: '是否禁止选择开始日期<br>开始日期禁止使用的时候，只允许使用动态计算的快捷日期<br>动态计算的都是依据开始日期计算的',
                type: 'string',
                def: 'false'
            }, {
                key: 'end-disabled',
                desc: '是否禁止选中结束日期<br>结束日期禁止使用的时候，禁止快捷操作，开始日期最大可选为结束日期',
                type: 'string',
                def: 'false'
            }, {
                key: 'vsenable',
                desc: '是否可对比',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'vs',
                desc: '对比初始值',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'single',
                desc: 'vsenable=true时可生效，关闭对比的时候选择单天还是连续的时间段',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'shortcuts',
                desc: '是否有快捷方式',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'shortkeys',
                desc: "\u81EA\u5B9A\u4E49\u5FEB\u6377\u65B9\u5F0Fkey\u503C\uFF0C<a href=\"javascript:;\" mx-click=\"to({id:'" + viewId + "_quick'})\" class=\"color-brand\">\u67E5\u770B\u5907\u9009\u503C</a>",
                type: 'array',
                def: 'shortcuts=true时，默认为["today","yesterday","passed7","preWeekMon","passed15","lastestThisMonth","passed30","preMonth"]'
            }, {
                key: 'max',
                desc: '最大可选的日期',
                type: 'string'
            }, {
                key: 'min',
                desc: '最小可选的日期',
                type: 'string'
            }, {
                key: 'date-type',
                desc: "<pre>\n\u5E74\u6708\u65E5\u9009\u62E9\u7C7B\u578B\uFF1A\n\u53EF\u9009\u62E9\"year,month,day\"\u4E2D\u7684\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\n\u6B64\u5916\"all\" = \"year,month,day\" = \"\"\uFF0C\u4E0D\u8BBE\u7F6E\u7684\u65F6\u5019\u9ED8\u8BA4\u5E74\u6708\u65E5\u90FD\u663E\u793A\n</pre>",
                type: 'string',
                def: ''
            }, {
                key: 'time-type',
                desc: "<pre>\n\u65F6\u5206\u79D2\u9009\u62E9\u7C7B\u578B\uFF1A\n1.\u8BBE\u7F6E\u8BE5\u503C\u540E\u4F1A\u51FA\u73B0\u65F6\u95F4\u9009\u62E9\u7EC4\u4EF6\n  \u53EF\u9009\u62E9\"hour,minute,second\"\u4E2D\u7684\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\n  \u6B64\u5916\u63D0\u4F9B\u5FEB\u6377\u7684\u914D\u7F6E\"all\" = \"hour,minute,second\"\n2.\u4E0D\u8BBE\u7F6E\u65E0\u65F6\u5206\u79D2\u9009\u62E9            \n            </pre>",
                type: 'string',
                def: ''
            }, {
                key: 'formatter',
                desc: 'date格式',
                type: 'string',
                def: 'YYYY-MM-dd'
            }, {
                key: 'align',
                desc: '日历选择面板与目标的对齐方式，可选left和right',
                type: 'string',
                def: 'left'
            }, {
                key: 'text-align',
                desc: '选中结果文案对齐方式，可选left，right和center，默认居中对齐',
                type: 'string',
                def: 'center'
            }, {
                key: 'disabled-weeks',
                desc: '限制周几不可选，[0, 1, 2, 3, 4, 5, 6]的子集',
                type: 'array',
                def: '[]'
            }, {
                key: 'week-start',
                desc: '从周几开，0-6，0表示周日',
                type: 'number',
                def: '0'
            }, {
                key: 'disabled',
                desc: '是否禁用',
                type: '',
                def: 'false'
            }];
        var supportQuickDates = [{
                key: 'today',
                text: I18n['calendar.today'],
                tip: I18n['calendar.today']
            }, {
                key: 'yesterday',
                text: I18n['calendar.yesterday'],
                tip: I18n['calendar.yesterday']
            }, {
                key: 'beforeYesterday',
                text: I18n['calendar.before.yesterday'],
                tip: I18n['calendar.before.yesterday']
            }, {
                key: 'preMonth',
                text: I18n['calendar.last.month'],
                tip: I18n['calendar.last.month']
            }, {
                key: 'preWeekSun',
                text: I18n['calendar.last.week'],
                tip: I18n['calendar.last.week.sunday']
            }, {
                key: 'preWeekMon',
                text: I18n['calendar.last.week'],
                tip: I18n['calendar.last.week.monday']
            }, {
                key: 'lastestWeekSun',
                text: I18n['calendar.this.week'],
                tip: I18n['calendar.this.week.sunday']
            }, {
                key: 'lastestWeekMon',
                text: I18n['calendar.this.week'],
                tip: I18n['calendar.this.week.monday']
            }, {
                key: 'passedThisMonth',
                text: I18n['calendar.this.month'],
                tip: I18n['calendar.this.month.yestarday']
            }, {
                key: 'lastestThisMonth',
                text: I18n['calendar.this.month'],
                tip: I18n['calendar.this.month.today']
            }, {
                key: 'passed{n}',
                text: I18n['calendar.passed'] + ' n ' + I18n['calendar.unit'],
                tip: I18n['calendar.passed'] + ' n ' + I18n['calendar.unit.yesterday'] + '，' + I18n['calendar.n.arbitrary'] + '，passed1，passed15...'
            }, {
                key: 'lastest{n}',
                text: I18n['calendar.lastest'] + ' n ' + I18n['calendar.unit'],
                tip: I18n['calendar.lastest'] + ' n ' + I18n['calendar.unit.today'] + '，' + I18n['calendar.n.arbitrary'] + '，lastest1，lastest15...'
            }, {
                key: 'dynamicStart{n}',
                text: I18n['calendar.dynamic.end'].replace('${day}', 'n'),
                tip: I18n['calendar.dynamic.end.tip'].replace('${day}', 'n') + '，' + I18n['calendar.n.arbitrary'] + '，dynamicStart1，dynamicStart15...'
            }, {
                key: 'dynamicEndThisMonth',
                text: I18n['calendar.natural.month'],
                tip: I18n['calendar.natural.month.tip']
            }, {
                key: 'dynamicEndNextMonth',
                text: I18n['calendar.next.month'],
                tip: I18n['calendar.next.month.tip']
            }, {
                key: 'forever',
                text: I18n['calendar.forever'],
                tip: I18n['calendar.forever.tip']
            }];
        var events = [{
                type: 'change',
                desc: '切换日期，切换对比时会触发',
                params: [{
                        key: 'start',
                        desc: '开始时间，包含时分秒',
                        type: 'string'
                    }, {
                        key: 'end',
                        desc: '结束时间，包含时分秒',
                        type: 'string'
                    }, {
                        key: 'vs',
                        desc: '是否对比',
                        type: 'boolean'
                    }, {
                        key: 'dates',
                        desc: "<pre>\u5F53\u524D\u72B6\u6001\u5B8C\u6574\u5BF9\u8C61\n{\n    start: 'Date\uFF0C\u5F00\u59CB\u65F6\u95F4',\n    startStr: 'string\uFF0Cdates.startStr == start',\n    end: 'Date\uFF0C\u7ED3\u675F\u65F6\u95F4',\n    endStr: 'string\uFF0Cdates.endStr == end',\n    quickDateKey: 'string\uFF0C\u5F53\u524D\u5339\u914D\u7684\u5FEB\u6377\u65E5\u671Fkey',\n    quickDateText: 'string\uFF0C\u5F53\u524D\u5339\u914D\u7684\u5FEB\u6377\u65E5\u671F\u6587\u6848'\n}\n</pre>",
                        type: 'object'
                    }]
            }];
        that.updater.digest({
            viewId: viewId,
            options: options,
            events: events,
            supportQuickDates: supportQuickDates
        });
    }
});

});