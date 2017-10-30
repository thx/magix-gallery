/*
ver:1.3.4
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@index.less');
let DD = require('../mx-dragdrop/index');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{range}'] = extra.range;
    },
    render() {
        let me = this;
        me.updater.digest();
        me['@{hours}'] = $('#' + me.id + ' .@index.less:hour');
        if (me['@{range}']) {
            me.val(me['@{range}']);
        }
    },
    '@{range.show}'() {
        let me = this;
        let hours = me['@{hours}'];
        hours.each((idx, item) => {
            item = $(item);
            let start = item.find('.@index.less:start');
            let end = item.find('.@index.less:end');
            if (!item.hasClass('@index.less:active')) {
                start.hide();
                end.hide();
            } else {
                start[item.prev().hasClass('@index.less:active') ? 'hide' : 'show']();
                end[item.next().hasClass('@index.less:active') ? 'hide' : 'show']();
            }
        });
    },
    val(str) {
        let me = this;
        let hours = me['@{hours}'];
        if (str || str === '') {
            hours.each((idx, item) => {
                item = $(item);
                if (str.charAt(idx) == '1') {
                    item.addClass('@index.less:active');
                } else {
                    item.removeClass('@index.less:active');
                }
            });
            me['@{range.show}']();
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
    '@{start}<mousedown>'(e) {
        let me = this;
        let current = $(e.eventTarget);
        let active = current.hasClass('@index.less:active');
        current.toggleClass('@index.less:active');
        me['@{range.show}']();
        $('#' + me.id).trigger({
            type: 'change',
            range: me.val()
        });
        me['@{active.node}'] = active;
        me['@{drag.start}'] = true;
        DD.begin(e.target, () => {
            DD.clear();
        }, () => {
            delete me['@{drag.start}'];
        });
    },
    '@{over}<mouseover>'(e) {
        let me = this;
        if (me['@{drag.start}']) {
            let flag = !Magix.inside(e.relatedTarget, e.eventTarget);
            if (flag) {
                let current = $(e.eventTarget);
                current[me['@{active.node}'] ? 'removeClass' : 'addClass']('@index.less:active');
                me['@{range.show}']();
                $('#' + me.id).trigger({
                    type: 'change',
                    range: me.val()
                });
            }
        }
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