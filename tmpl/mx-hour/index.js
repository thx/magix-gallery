/*
ver:1.3.9
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@index.less');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
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
        me['@{hours}'] = ownerNode.find('.@index.less:hour');
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
                    item.addClass('@index.less:active');
                } else {
                    item.removeClass('@index.less:active');
                }
            });
            me['@{drag.selected}'] = dragSelected;
        } else {
            str = [];
            hours.each((idx, item) => {
                item = $(item);
                if (idx < 24)
                    str.push(item.hasClass('@index.less:active') ? 1 : 0);
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
                node.removeClass('@index.less:active');
                delete dragSelected[hour];
                if (e.mode == 'drag') {
                    dragTemp[hour] = 1;
                }
            } else {
                node.addClass('@index.less:active');
                dragSelected[hour] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[hour];
                }
            }
        } else if (e.action == 'remove') {
            if (dragTemp[hour]) {
                node.addClass('@index.less:active');
                dragSelected[hour] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[hour];
                }
            } else {
                node.removeClass('@index.less:active');
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