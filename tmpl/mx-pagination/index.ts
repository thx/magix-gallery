/**
 * 分页组件
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as I18n from '../mx-medusa/util';
const DefaultSizes = [10, 20, 30, 40];
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(ops) {
        this.updater.snapshot();
        this.assign(ops);
    },
    assign(ops) {
        let me = this;
        me.updater.snapshot();

        let sizes = [];
        try {
            sizes = JSON.parse(ops.sizes);
        } catch (e) {
            sizes = ops.sizes
        }

        if (!sizes || !sizes.length) {
            sizes = DefaultSizes;
        }

        let sizesChange = true;
        if ((/^false$/i).test(ops.sizesChange)) {
            sizesChange = false;
        }

        // 当前第几页
        // 优先级page > offset
        let page,
            size = ops.size || 40;
        if (ops.page) {
            page = ops.page;
        } else if (ops.offset) {
            page = parseInt(ops.offset / size) + 1;
        } else {
            page = 1;
        }

        me.updater.set({
            step: ops.step || 5, //页码过多时，中间显示多少条页码
            simplify: (ops.simplify + '') === 'true',
            mini: (ops.mini + '') === 'true',
            hideTotal: (ops.hideTotal + '') === 'true', //是否隐藏总计
            jump: (ops.jump + '') === 'false', //是否有快捷跳转
            total: (ops.total | 0) || 0, //总数
            page,
            size, //当前分页数
            sizesChange: sizesChange, //是否可切换分页数
            sizesPlacement: ops.sizesPlacement || 'bottom',
            sizes: sizes //可选分页数
        });

        // altered是否有变化 true：有变化
        let altered = me.updater.altered();
        return altered;
    },
    render() {
        let info = this['@{cal.page.info}']();
        this.updater.digest(info);
    },
    '@{cal.page.info}'() {
        let me = this;
        let data = me.updater.get();
        let total = data.total;
        let page = data.page | 0;
        let pages = Math.ceil((data.total || 1) / data.size);
        if (page > pages) {
            page = pages;
        }
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

        if (total == 0) {
            offsetStart = offsetEnd = 0;
        }

        let tipOffset = I18n['pager.offset'].replace('{min}', `${offsetStart}`).replace('{max}', `${offsetEnd}`),
            tipTotal = I18n['pager.total'].replace('{total}', `${total}`),
            tipPer = I18n['pager.per.page'],
            tipUnit = I18n['pager.unit'],
            tipJumpTo = I18n['pager.jump.to'],
            tipJumpUnit = I18n['pager.jump.unit'];

        // 跳转，下一页
        let next = page + 1;
        if (next > pages) {
            next = pages;
        }
        return {
            pages,
            offsetStart: offsetStart,
            offsetEnd: offsetEnd,
            page,
            start,
            end,
            next,
            tipOffset,
            tipTotal,
            tipPer,
            tipUnit,
            tipJumpTo,
            tipJumpUnit
        };
    },
    '@{fire.event}'() {
        let me = this;
        let node = $('#' + me.id);
        let data = me.updater.get();
        let page = +data.page, size = +data.size;
        let offset = (page - 1) * size;
        node.trigger({
            type: 'change',
            page,
            size,
            offset
        });
    },
    '@{toPage}<click>'(e) {
        e.preventDefault();
        this.updater.set(e.params);
        this.render();
        this['@{fire.event}']();
    },
    '@{changeSize}<change>'(e) {
        e.stopPropagation();
        this.updater.set({
            size: e.value
        });
        this.render();
        this['@{fire.event}']();
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },
    '@{jump}<click>'(e) {
        e.stopPropagation();
        var i = $(`#${this.id}_jump_input`);
        let page = +(i.val());
        if (!Number.isInteger(page)) {
            return;
        }
        this.updater.set({
            page: page
        });
        this.render();
        this['@{fire.event}']();
    },
    '@{prevent}<click>'(e) {
        e.preventDefault();
    }
});

