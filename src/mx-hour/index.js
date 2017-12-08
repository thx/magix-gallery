/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-hour/index',["magix","$","mx-dragselect/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dragselect/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("__mx-hour_index_",".__mx-hour_index_-hour {\n  padding: 0;\n  height: 38.4px;\n  overflow: hidden;\n  cursor: default;\n  min-width: 1px;\n}\n.__mx-hour_index_-opacity-hide {\n  opacity: 0;\n}\n.__mx-hour_index_-active {\n  background-color: #f37b63;\n}\n.__mx-hour_index_-no-border {\n  border: none;\n}\n.__mx-hour_index_-right-border {\n  border-right: solid 1px #e6e6e6;\n}\n");
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<tr mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001e@{show}()\" mx-dragbegin=\"\u001f\u001e@{begin}()\" mx-dragfinish=\"\u001f\u001e@{end}()\" mx-view=\"mx-dragselect/index\">1\u001d</tr>","subs":[{"keys":["noBorder"],"path":"tr[mx-guid=\"g0\u001f\"]","tmpl":"<%for(var ii=0;ii<24;ii++){%><td class=\"__mx-hour_index_-hour<%if($$.noBorder){%> __mx-hour_index_-no-border<%if(ii<23){%> __mx-hour_index_-right-border<%}%><%}%>\" data-hour=\"<%!ii%>\"><span class=\"__mx-hour_index_-opacity-hide\"><%!('0'+ii).slice(-2)%></span></td><%}%>","s":"1\u001d"}],"file":"mx-hour/index.html"},
    init(extra) {
        let me = this;
        me['@{range}'] = extra.range;
        me['@{noBorder}'] = extra.border == 'no';
    },
    render() {
        let me = this;
        me.updater.digest({
            noBorder: me['@{noBorder}']
        });
        let ownerNode = $('#' + me.id);
        me['@{owner.node}'] = ownerNode;
        me['@{hours}'] = ownerNode.find('.__mx-hour_index_-hour');
        if (me['@{range}']) {
            me.val(me['@{range}']);
        }
    },
    val(str) {
        let me = this;
        let hours = me['@{hours}'];
        if (str || str === '') {
            let dragSelected = {};
            hours.each((idx, item) => {
                item = $(item);
                if (str.charAt(idx) == '1') {
                    dragSelected[idx] = 1;
                    item.addClass('__mx-hour_index_-active');
                }
                else {
                    item.removeClass('__mx-hour_index_-active');
                }
            });
            me['@{drag.selected}'] = dragSelected;
        }
        else {
            str = [];
            hours.each((idx, item) => {
                item = $(item);
                if (idx < 24)
                    str.push(item.hasClass('__mx-hour_index_-active') ? 1 : 0);
            });
            str = str.join('');
        }
        return str;
    },
    '@{fire.event}'() {
        let me = this;
        let startValue = me['@{start.value.temp}'];
        let current = me.val();
        if (startValue != current) {
            me['@{owner.node}'].val(current).trigger({
                type: 'change',
                range: current
            });
        }
    },
    '@{show}<change,click>'(e) {
        e.stopPropagation();
        let node = $(e.node);
        let me = this;
        let hour = node.data('hour');
        let dragSelected = me['@{drag.selected}'];
        let dragTemp = me['@{drag.temp}'];
        if (e.action == 'add') {
            if (dragSelected[hour]) {
                node.removeClass('__mx-hour_index_-active');
                delete dragSelected[hour];
                if (e.mode == 'drag') {
                    dragTemp[hour] = 1;
                }
            }
            else {
                node.addClass('__mx-hour_index_-active');
                dragSelected[hour] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[hour];
                }
            }
        }
        else if (e.action == 'remove') {
            if (dragTemp[hour]) {
                node.addClass('__mx-hour_index_-active');
                dragSelected[hour] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[hour];
                }
            }
            else {
                node.removeClass('__mx-hour_index_-active');
                delete dragSelected[hour];
                if (e.mode == 'drag') {
                    dragTemp[hour] = 1;
                }
            }
        }
        if (e.mode == 'click') {
            me['@{fire.event}']();
        }
    },
    '@{begin}<dragbegin>'(e) {
        e.stopPropagation();
        let me = this;
        me['@{start.value.temp}'] = me.val();
        me['@{drag.temp}'] = {};
    },
    '@{end}<dragfinish>'(e) {
        e.stopPropagation();
        let me = this;
        me['@{fire.event}']();
        delete me['@{drag.temp}'];
    }
}, {
    improve(str) {
        if (!str) {
            str = '';
        }
        let start = 0;
        let end = 24;
        while (start < end) {
            if (!str.charAt(start)) {
                str += '0';
            }
            start++;
        }
        return str;
    }
});

});