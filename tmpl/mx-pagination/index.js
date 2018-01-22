/*
ver:2.0.3
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let DefaultSizes = [10, 20, 30, 40, 50, 100];
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me.updater.set({
            sizes: DefaultSizes
        });
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        let total = (ops.total | 0) || 0;
        let size = ops.size || 20;
        let page = ops.page || 1;
        me.updater.set({
            step: ops.step || 7,
            simplify: (ops.simplify + '') === 'true',
            mini: (ops.mini + '') === 'true',
            page: page,
            total: total,
            size: size
        });
        return true;
    },
    render() {
        let me = this;
        let info = me['@{cal.page.info}']();
        me.updater.digest(info);
    },
    '@{cal.page.info}'() {
        let me = this;
        let data = me.updater.get();
        let page = data.page | 0;
        let pages = Math.ceil((data.total || 1) / data.size);
        if (page > pages) page = pages;
        let step = data.step | 0;
        let middle = step / 2 | 0;
        let start = Math.max(1, page - middle);
        let end = Math.min(pages, start + step - 1);
        start = Math.max(1, end - step + 1);
        let offset;
        if (start <= 2) { //=2 +1  =1  +2
            offset = 3 - start;
            if (end + offset < pages) {
                end += offset;
            }
        }
        if (end + 2 > pages) {
            offset = 2 - (pages - end);
            if ((start - offset) > 1) {
                start -= offset;
            }
        }
        if (start == 3) {
            start -= 1;
        }
        if (end + 2 == pages) {
            end += 1;
        }
        let offsetStart = (page - 1) * data.size + 1;
        let offsetEnd = Math.min(data.total, page * data.size);
        return {
            pages,
            offsetStart: offsetStart,
            offsetEnd: offsetEnd,
            startSpace: (data.total + '').length - (offsetStart + '').length,
            endSpace: (data.total + '').length - (offsetEnd + '').length,
            pageSpace: (pages + '').length - (page + '').length,
            page,
            start,
            end
        };
    },
    '@{fire.event}'() {
        let me = this;
        let node = $('#' + me.id);
        let data = me.updater.get();
        node.trigger({
            type: 'change',
            page: data.page,
            size: data.size
        });
    },
    '@{toPage}<click>'(e) {
        e.preventDefault();
        let me = this;
        me.updater.set(e.params);
        me.render();
        me['@{fire.event}']();
    },
    '@{changeSize}<change>'(e) {
        e.stopPropagation();
        let me = this;
        me.updater.set({
            page: 1,
            size: e.item
        });
        me.render();
        me['@{fire.event}']();
    },
    '@{prevent}<click>'(e) {
        e.preventDefault();
    }
});