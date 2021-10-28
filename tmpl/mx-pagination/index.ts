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
        this.assign(ops);
    },
    assign(ops) {
        let that = this;
        that.updater.snapshot();

        // 展示类型
        //    square 方形
        //    circle 圆形
        let mode = ops.mode, allowModeMap = { square: true, circle: true };
        if (!allowModeMap[mode]) {
            mode = that['@{get.css.var}']('--mx-pagination-mode', 'square');
        }

        // 可选翻页数
        let sizes = [];
        try {
            sizes = JSON.parse(ops.sizes);
        } catch (e) {
            sizes = ops.sizes || [];
        }
        if (!sizes || !sizes.length) {
            sizes = DefaultSizes;
        }

        // 当前第几页
        // 优先级page > offset
        let page,
            size = +ops.size || 40,
            offset = +ops.offset;
        if (ops.page) {
            page = ops.page;
        } else if (offset) {
            page = parseInt(offset / size) + 1;
        } else {
            page = 1;
        }

        that.updater.set({
            mode,
            hideTotal: ops.hideTotal + '' === 'true',  // 默认false
            jump: (ops.jump + '') !== 'false', // 是否有快捷跳转，默认true
            simplify: (ops.simplify + '') === 'true', // 默认false
            mini: (ops.mini + '') === 'true', // 顺序翻页，默认false
            total: (ops.total | 0) || 0, //总数
            page, // 当前页数，从1开始
            size, // 当前分页数
            sizes, //可选分页数
            sizesChange: (ops.sizesChange + '') !== 'false', // 是否可切换分页数，默认true
            sizesPlacement: ops.sizesPlacement || 'bottom',
            step: ops.step || 5, //页码过多时，中间显示多少条页码
        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },
    render() {
        let that = this;
        let data = that.updater.get();
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

        that.updater.digest({
            offsetStart,
            offsetEnd,
            pages,
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
        });
    },
    '@{fire.event}'() {
        let that = this;
        let node = $('#' + that.id);
        let { page, size } = that.updater.get();
        let offset = (page - 1) * size;
        node.trigger({
            type: 'change',
            page,
            size,
            offset
        });
    },
    '@{to.page}<click>'(e) {
        e.preventDefault();
        this.updater.set(e.params);
        this.render();
        this['@{fire.event}']();
    },
    '@{change.size}<change>'(e) {
        e.stopPropagation();
        this.updater.set({ size: e.value });
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
        this.updater.set({ page });
        this.render();
        this['@{fire.event}']();
    },
    '@{prevent}<click>'(e) {
        e.preventDefault();
    }
});

