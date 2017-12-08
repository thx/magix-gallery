/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-time/picker',["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor*/
require("./index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("__mx-time_picker_",".__mx-time_picker_-wrapper {\n  position: absolute;\n  display: none;\n  border: 1px solid #e6e6e6;\n  padding: 10px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 1;\n  width: 271px;\n}\n.__mx-time_picker_-time {\n  margin: 0 10px;\n}\n.__mx-time_picker_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 10px 10px 0;\n  padding: 10px 0 0 0;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-time_picker_-wrapper\" id=\"wrapper_<%=$$.viewId%>\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-time/index?time=<%!$eu($$.time)%>&type=<%!$eu($$.types)%>\" id=\"time_<%=$$.viewId%>\" class=\"__mx-time_picker_-time __mx-style_index_-clearfix\" mx-change=\"\u001f\u001e@{take}()\"></div><div class=\"__mx-time_picker_-footer\"><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001e@{hide}({enter:true})\">确定</button><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-ml5\" mx-click=\"\u001f\u001e@{hide}()\">取消</button></div></div>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"wrapper_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["time","types","viewId"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-time/index?time=<%!$eu($$.time)%>&type=<%!$eu($$.types)%>\" id=\"time_<%=$$.viewId%>\"","attrs":[{"n":"mx-view","v":1},{"n":"id","p":1}]}],"file":"mx-time/picker.html"},
    init(extra) {
        let me = this;
        Monitor['@{setup}']();
        let oNode = $('#' + me.id);
        let click = () => {
            me['@{show}']();
        };
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            $('#tcnt_' + me.id).remove();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['@{owner.node}'] = oNode;
        oNode.prop('autocomplete', 'off');
        let time = oNode.val();
        if (!time) {
            let d = new Date();
            time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        }
        extra.time = time;
        me['@{time}'] = time;
        me['@{time.bak}'] = time;
        me.updater.set(extra);
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'tcnt_' + me.id);
    },
    render() {
        let me = this;
        $(`<div id="tcnt_${me.id}"/>`).insertAfter(me['@{owner.node}']);
        let updater = me.updater;
        updater.to('tcnt_' + me.id);
        updater.digest({
            viewId: me.id
        });
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.shown}']) {
            let node = $('#wrapper_' + me.id), ref = me['@{owner.node}'];
            me['@{ui.shown}'] = true;
            Monitor['@{add}'](me);
            node.show();
            let offset = ref.offset();
            let left, top;
            let data = me.updater.get();
            switch (data.placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (data.align) {
                case 'right':
                    left = offset.left + ref.outerWidth() - node.outerWidth();
                    break;
                default:
                    left = offset.left;
                    break;
            }
            node.offset({
                left: left,
                top: top
            });
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.shown}']) {
            let node = $('#wrapper_' + me.id);
            me['@{ui.shown}'] = false;
            node.hide();
            Monitor['@{remove}'](me);
            if (me['@{time}'] != me['@{time.bak}']) {
                me['@{time}'] = me['@{time.bak}'];
                $('#time_' + me.id).invokeView('val', [me['@{time}']]);
            }
        }
    },
    '@{take}<change>'(e) {
        console.log('take time', e.time);
        this['@{time}'] = e.time;
    },
    '@{hide}<click>'(e) {
        let me = this;
        if (e.params.enter) {
            me['@{time.bak}'] = me['@{time}'];
            me['@{owner.node}'].val(me['@{time}']).trigger('change');
        }
        me['@{hide}']();
    }
});

});