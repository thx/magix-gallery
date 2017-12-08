/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-table/rwd',["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-table_rwd_",".__mx-table_rwd_-wrap {\n  width: 24px;\n}\n.__mx-table_rwd_-arrow {\n  width: 12px;\n  background-color: #ccc;\n  color: #e6e6e6;\n  cursor: pointer;\n}\n.__mx-table_rwd_-arrow:hover {\n  background-color: #f96447;\n}\n.__mx-table_rwd_-f12 {\n  font-size: 12px;\n}\n.__mx-table_rwd_-rotate180 {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n.__mx-table_rwd_-end {\n  padding-right: 40px;\n}\n");
let html = "<div class=\"__mx-style_index_-pa __mx-table_rwd_-wrap __mx-style_index_-unselectable\"><div class=\"__mx-table_rwd_-arrow __mx-style_index_-fl\" mx-click=\"\u001f\u001e@{toPrev}()\"><i class=\"__mx-style_index_-mc-iconfont __mx-table_rwd_-f12\">&#xe61e;</i></div><div class=\"__mx-table_rwd_-arrow __mx-style_index_-fr\" mx-click=\"\u001f\u001e@{toNext}()\"><i class=\"__mx-style_index_-mc-iconfont __mx-table_rwd_-f12 __mx-table_rwd_-rotate180\">&#xe61e;</i></div></div>";
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me['@{rwd.range}'] = ((extra.rwdRange || [2, -1]) + '').split(',');
        me['@{rwd.limit}'] = +extra.rwdLimit || 4;
        me['@{rwd.current}'] = +extra.rwdCurrent || 1;
        $('#' + me.id).addClass('__mx-style_index_-pr');
    },
    '@{sync.vars}'() {
        let me = this;
        let table = $('#' + me.id).find('table');
        let thead = table.find('thead');
        table.css({
            borderCollapse: 'inherit'
        });
        let ths = thead.find('>tr>th');
        let rows = table.find('>tbody>tr');
        me['@{thead.ths}'] = ths;
        me['@{tbody.trs}'] = rows;
        me['@{table}'] = table;
    },
    '@{ui.flush}'() {
        let me = this;
        let ths = me['@{thead.ths}'];
        let c = me['@{rwd.current}'];
        let r = me['@{rwd.range}'];
        let l = me['@{rwd.limit}'];
        let min = +r[0];
        let max = ths.length + (+r[1]) - 1;
        let start = min + (c - 1) * l;
        let end = Math.min(max, min + c * l - 1);
        let rows = me['@{tbody.trs}'];
        me['@{pages}'] = Math.ceil((max - min + 1) / l);
        for (let i = min; i <= max; i++) {
            let th = ths.eq(i);
            if (i >= start && i <= end) {
                if (i == end) {
                    th.addClass('__mx-table_rwd_-end');
                    me['@{thead.show.ths.last}'] = th;
                }
                else {
                    th.removeClass('__mx-table_rwd_-end');
                }
                th.show();
            }
            else {
                th.hide();
            }
        }
        for (let j = rows.length; j--;) {
            let row = rows.eq(j);
            let tds = row.find('td');
            for (let i = min; i <= max; i++) {
                let td = tds.eq(i);
                if (i >= start && i <= end) {
                    td.show();
                }
                else {
                    td.hide();
                }
            }
        }
    },
    '@{ui.arrow}'() {
        let me = this, ctrl;
        if (!me['@{ui.ctrl.arrow}']) {
            ctrl = $(me.wrapEvent(html)).insertBefore(me['@{table}']);
            me['@{ui.ctrl.arrow}'] = ctrl;
        }
        ctrl = me['@{ui.ctrl.arrow}'];
        let last = me['@{thead.show.ths.last}'];
        let height = last.outerHeight();
        let offset = last.offset();
        ctrl.css({
            height,
            lineHeight: height + 'px'
        }).offset({
            left: offset.left + last.outerWidth() - 24,
            top: offset.top
        });
        let c = me['@{rwd.current}'];
        let p = me['@{pages}'];
        let children = ctrl.find('div');
        if (c == 1) {
            children.eq(0).hide();
        }
        else {
            children.eq(0).show();
        }
        if (c == p) {
            children.eq(1).hide();
        }
        else {
            children.eq(1).show();
        }
    },
    render() {
        let me = this;
        me['@{sync.vars}']();
        me['@{ui.flush}']();
        me['@{ui.arrow}']();
    },
    '@{toPrev}<click>'() {
        let me = this;
        let c = me['@{rwd.current}'];
        if (c > 1) {
            me['@{rwd.current}']--;
            me['@{ui.flush}']();
            me['@{ui.arrow}']();
        }
    },
    '@{toNext}<click>'() {
        let me = this;
        let c = me['@{rwd.current}'];
        let pages = me['@{pages}'];
        if (c < pages) {
            me['@{rwd.current}']++;
            me['@{ui.flush}']();
            me['@{ui.arrow}']();
        }
    },
    '$doc<htmlchanged>'(e) {
        let me = this;
        if (Magix.inside(e.vId, me.owner.pId)) {
            clearTimeout(me['@{ctrl.timer}']);
            me['@{ctrl.timer}'] = setTimeout(() => {
                me['@{sync.vars}']();
                me['@{ui.flush}']();
                me['@{ui.arrow}']();
            }, 0);
        }
    },
    '$doc<navslidend>'() {
        this['@{ui.arrow}']();
    },
    '$win<resize>'() {
        this['@{ui.arrow}']();
    }
});

});