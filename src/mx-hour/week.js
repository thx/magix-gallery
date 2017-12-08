/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-hour/week',["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor,Core*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
*/
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("__mx-hour_week_",".__mx-hour_week_-reset {\n  padding: 0;\n  height: 38.4px;\n  text-align: center;\n}\n.__mx-hour_week_-cycle {\n  text-align: left;\n  padding-left: 10px;\n}\n.__mx-hour_week_-no-border {\n  border: none;\n}\n.__mx-hour_week_-right-border {\n  border-right: solid 1px #e6e6e6;\n}\n.__mx-hour_week_-operation {\n  visibility: hidden;\n}\n.__mx-hour_week_-day:hover .__mx-hour_week_-operation {\n  visibility: visible;\n}\n.__mx-hour_week_-dialog {\n  position: absolute;\n  display: none;\n  background-color: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  padding: 10px;\n  margin-top: 10px;\n  z-index: 10;\n}\n.__mx-hour_week_-body {\n  margin-bottom: 10px;\n  width: 300px;\n  border-bottom: 1px solid #e6e6e6;\n}\n.__mx-hour_week_-d-label {\n  margin: 0 25px 10px 0;\n}\n.__mx-hour_week_-opshow {\n  visibility: visible;\n}\n");
let Weeks = '一二三四五六日';
let Core = require('./index');
let All = '111111111111111111111111';
let None = '000000000000000000000000';
let ImproveDays = (days) => {
    let start = 0;
    let end = 7;
    days = (days + '').split(',');
    days = days.slice(start, end);
    while (start < end) {
        days[start] = Core.improve(days[start]);
        start++;
    }
    return days;
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-hour_week_-dialog\" id=\"dlg_<%=$$.viewId%>\"><div mx-guid=\"g1\u001f\" class=\"__mx-hour_week_-body\">2\u001d</div><div><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001e@{apply}()\">确认</button><button type=\"button\" mx-click=\"\u001f\u001e@{closeDlg}()\" class=\"__mx-style_index_-btn __mx-style_index_-ml5\">取消</button></div></div><table class=\"__mx-style_index_-wp100\"><thead><tr><th class=\"__mx-hour_week_-reset\" width=\"100\">快捷设置</th><th colspan=\"2\" class=\"__mx-hour_week_-reset __mx-hour_week_-cycle\"><label class=\"__mx-style_index_-ml10\"><input mx-guid=\"g2\u001f\" class=\"__mx-style_index_-radio\" type=\"radio\" mx-change=\"\u001f\u001e@{shortcuts.processor}({type:0})\" name=\"st-<%=$$.viewId%>\" <%if($$.allDays){%> checked<%}%>> 全日程投放</label><label class=\"__mx-style_index_-ml20\"><input mx-guid=\"g3\u001f\" class=\"__mx-style_index_-radio\" type=\"radio\" mx-change=\"\u001f\u001e@{shortcuts.processor}({type:1})\" name=\"st-<%=$$.viewId%>\" <%if($$.weekdays){%> checked<%}%>> 工作日（周一至周五）投放</label><label class=\"__mx-style_index_-ml20\"><input mx-guid=\"g4\u001f\" class=\"__mx-style_index_-radio\" type=\"radio\" mx-change=\"\u001f\u001e@{shortcuts.processor}({type:2})\" name=\"st-<%=$$.viewId%>\" <%if($$.weekends){%> checked<%}%>> 休息日（周六、周日）投放</label></th></tr><tr><th class=\"__mx-hour_week_-reset\">时间</th><th class=\"__mx-hour_week_-reset\"><table class=\"__mx-style_index_-wp100\"><tbody><tr><%for(var i=0;i<24;i++){%><td class=\"__mx-hour_week_-reset __mx-hour_week_-no-border<%if(i<23){%> __mx-hour_week_-right-border<%}%>\"><%=('0'+i).slice(-2)%></td><%}%></tr></tbody></table></th><th width=\"80\" class=\"__mx-hour_week_-reset\">操作</th></tr></thead><tbody mx-guid=\"g6\u001f\">4\u001d</tbody></table>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"dlg_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["days","currentClone"],"path":"div[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var i=0;i<$$.days.length;i++){%><label class=\"__mx-hour_week_-d-label<%if(i==$$.currentClone){%> __mx-style_index_-disabled<%}%>\"><input class=\"__mx-style_index_-mr10\" type=\"checkbox\" value=\"<%=i%>\" <%if(i==$$.currentClone){%> disabled<%}%>>周<%=$$.days.charAt(i)%></label><%}%>","s":"2\u001d"},{"keys":["viewId","allDays"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.allDays){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["viewId","weekdays"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.weekdays){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["viewId","weekends"],"path":"input[mx-guid=\"g4\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.weekends){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["days","viewId"],"path":"tbody[mx-guid=\"g6\u001f\"]","tmpl":"<%for(var i=0;i<$$.days.length;i++){%><tr class=\"__mx-hour_week_-day\"><td class=\"__mx-hour_week_-reset __mx-style_index_-cp\" mx-click=\"\u001f\u001e@{toggle}({day:<%=i%>})\">周<%=$$.days.charAt(i)%></td><td class=\"__mx-hour_week_-reset\"><table class=\"__mx-style_index_-wp100\"><tbody id=\"hours_<%=$$.viewId%>_<%=i%>\" mx-view=\"mx-hour/index?border=no\" mx-change=\"\u001f\u001e@{hour}({day:<%=i%>})\"></tbody></table></td><td class=\"__mx-hour_week_-reset\"><div class=\"__mx-hour_week_-operation\"><a mx-click=\"\u001f\u001e@{copy}({day:<%=i%>})\" href=\"#\">复制到</a></div></td></tr><%}%>","s":"4\u001d"}],"file":"mx-hour/week.html"},
    init(extra) {
        let me = this;
        me['@{days}'] = ImproveDays(extra.days || [None, None, None, None, None, None, None]);
        Monitor['@{setup}']();
        me['@{owner.node}'] = $('#' + me.id);
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id,
            days: Weeks
        });
        me.val(me['@{days}']);
    },
    '@{inside}'(node) {
        let me = this;
        let inView = Magix.inside(node, 'dlg_' + me.id);
        if (!inView && me['@{ref.node}']) {
            let parent = me['@{ref.node}'].parent();
            inView = Magix.inside(node, parent[0]);
        }
        return inView;
    },
    '@{sync.shortcuts}'() {
        let me = this;
        let weekdays = me['@{days}'].slice(0, 5).join('');
        let weekends = me['@{days}'].slice(-2).join('');
        let weekdaysHas = weekdays.indexOf('1') > -1;
        let weekendsHas = weekends.indexOf('1') > -1;
        let weekdaysChecked = weekdays.indexOf('0') == -1;
        let weekendsChekced = weekends.indexOf('0') == -1;
        let allDaysChecked = weekdaysChecked && weekendsChekced;
        me.updater.digest({
            allDays: allDaysChecked,
            weekdays: !weekendsHas && weekdaysChecked,
            weekends: weekendsChekced && !weekdaysHas
        });
    },
    '@{sync.ui}'() {
        let me = this;
        let ws = me['@{days}'];
        for (let i = 0, w, vf; i < ws.length; i++) {
            w = ws[i];
            vf = Magix.Vframe.get('hours_' + me.id + '_' + i);
            if (vf) {
                vf.invoke('val', [w]);
            }
        }
    },
    val(days) {
        let me = this;
        if (days) {
            me['@{days}'] = ImproveDays(days);
            me['@{sync.ui}']();
            me['@{sync.shortcuts}']();
        }
        return me['@{days}'];
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            let ref = me['@{ref.node}'];
            let dlg = $('#dlg_' + me.id);
            dlg.show();
            let offset = ref.offset();
            let left = offset.left + ref.outerWidth() - dlg.outerWidth();
            let top = offset.top + ref.outerHeight() + 10;
            dlg.offset({
                left: left,
                top: top
            });
            ref.parent().addClass('__mx-hour_week_-opshow');
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            $('#dlg_' + me.id).hide();
            let ref = me['@{ref.node}'];
            if (ref) {
                ref.parent().removeClass('__mx-hour_week_-opshow');
            }
        }
    },
    '@{fire.event}'() {
        let me = this;
        let days = me['@{days}'];
        me['@{owner.node}'].val(days).trigger({
            type: 'change',
            days
        });
    },
    '@{shortcuts.processor}<change>'(e) {
        let me = this;
        e.stopPropagation();
        switch (e.params.type) {
            case 0:
                me['@{days}'] = [All, All, All, All, All, All, All];
                break;
            case 1:
                me['@{days}'] = [All, All, All, All, All, None, None];
                break;
            case 2:
                me['@{days}'] = [None, None, None, None, None, All, All];
                break;
        }
        me['@{sync.shortcuts}']();
        me['@{sync.ui}']();
        me['@{fire.event}']();
    },
    '@{hour}<change>'(e) {
        e.stopPropagation();
        let me = this;
        me['@{days}'][e.params.day] = e.range;
        clearTimeout(me['@{change.delay.timer}']);
        me['@{change.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{sync.shortcuts}']();
        }), 100);
        me['@{fire.event}']();
    },
    '@{toggle}<click>'(e) {
        let day = e.params.day;
        let me = this;
        let vf = Magix.Vframe.get('hours_' + me.id + '_' + day);
        if (vf) {
            let val = vf.invoke('val');
            if (val.indexOf('0') > -1) {
                vf.invoke('val', [me['@{days}'][day] = All]);
            }
            else {
                vf.invoke('val', [me['@{days}'][day] = None]);
            }
            me['@{sync.shortcuts}']();
            me['@{fire.event}']();
        }
    },
    '@{copy}<click>'(e) {
        e.preventDefault();
        let me = this;
        let ref = $(e.eventTarget);
        me['@{ref.node}'] = ref;
        me['@{show}']();
        me.updater.digest({
            currentClone: e.params.day
        });
    },
    '@{closeDlg}<click>'() {
        this['@{hide}']();
    },
    '@{apply}<click>'() {
        let me = this;
        let day = me.updater.get('currentClone');
        let val = me['@{days}'][day];
        $('#dlg_' + me.id + ' input:checked').each((idx, item) => {
            me['@{days}'][item.value] = val;
        });
        me['@{hide}']();
        me['@{sync.ui}']();
        me['@{sync.shortcuts}']();
    }
});

});