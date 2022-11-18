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

        // 可选翻页数
        let sizes = [];
        try {
            sizes = JSON.parse(ops.sizes);
        } catch (e) {
            sizes = ops.sizes || [];
        }
        if (!sizes || !sizes.length) { sizes = DefaultSizes; };

        // 带文案
        let sizeStrs = sizes.map(size => {
            return {
                text: `${size}条/页`,
                value: size,
            };
        })

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

        let styles = [];
        let align = that['@{get.css.var}']('--mx-pagination-align', 'left');
        let alignRight = (align == 'right');
        if (align == 'right') {
            // 千牛组件风格
            styles = [
                '--mx-pagination-border: var(--btn-border)',
                '--mx-pagination-bg: var(--btn-bg)',
                '--mx-pagination-color: var(--btn-text)',
                '--mx-pagination-border-hover: var(--btn-border-hover)',
                '--mx-pagination-bg-hover: var(--btn-bg-hover)',
                '--mx-pagination-color-hover: var(--btn-text-hover)',
                '--mx-pagination-border-active: var(--color-brand)',
                '--mx-pagination-bg-active: var(--color-brand)',
                '--mx-pagination-color-active: #fff',
                '--mx-pagination-text-color: var(--mx-pagination-color)',
                '--mx-pagination-text-color-hover: var(--mx-pagination-color-hover)'
            ]
        } else {
            // B类风格组件
            styles = [
                '--mx-pagination-border: var(--border-highlight)',
                '--mx-pagination-bg: var(--bg-highlight)',
                '--mx-pagination-color: #666',
                '--mx-pagination-border-hover: var(--border-highlight-hover)',
                '--mx-pagination-bg-hover: var(--bg-highlight-hover)',
                '--mx-pagination-color-hover: #333',
                '--mx-pagination-border-active: var(--color-brand)',
                '--mx-pagination-bg-active: var(--color-brand)',
                '--mx-pagination-color-active: #fff',
                '--mx-pagination-text-color: var(--mx-pagination-color)',
                '--mx-pagination-text-color-hover: var(--mx-pagination-color-hover)'
            ]
        };

        let mode = (['white'].indexOf(ops.mode) > -1) ? ops.mode : '';
        switch (mode) {
            case 'white':
                // 反白模式
                styles = [
                    '--mx-pagination-border: rgba(255, 255, 255, .6)',
                    '--mx-pagination-bg: rgba(255, 255, 255, .6)',
                    '--mx-pagination-color: #333333',
                    '--mx-pagination-border-hover: rgba(255, 255, 255, .8)',
                    '--mx-pagination-bg-hover: rgba(255, 255, 255, .8)',
                    '--mx-pagination-color-hover: #333333',
                    '--mx-pagination-border-active: #ffffff',
                    '--mx-pagination-bg-active: #ffffff',
                    '--mx-pagination-color-active: #333333',
                    '--mx-pagination-text-color: rgba(255, 255, 255, .8)',
                    '--mx-pagination-text-color-hover: #ffffff'
                ]
                break;
        }

        // 是否显示详细汇总信息
        let hideDetailTotal = false;

        // 是否显示简易汇总信息
        let hideTotal = false;

        // 是否显示快捷跳转
        let hideJump = false;

        // 仅能顺序翻页
        let inOrder = false;

        if (ops.simplify + '' === 'true') {
            // 仅显示翻页器版
            hideDetailTotal = true;
            hideTotal = false;
            hideJump = false;
            inOrder = false;
        } else if (ops.mini + '' === 'true') {
            // 顺序翻页版本
            hideDetailTotal = true;
            hideTotal = false;
            hideJump = true;
            inOrder = true;
        }

        if (ops.hasOwnProperty('hideDetailTotal')) {
            // 默认false
            hideDetailTotal = ops.hideDetailTotal + '' === 'true';
        }

        if (ops.hasOwnProperty('hideTotal')) {
            // 默认false
            hideTotal = ops.hideTotal + '' === 'true';
        }

        if (ops.hasOwnProperty('hideJump')) {
            // 默认false
            hideJump = ops.hideJump + '' === 'true'
        } else if (ops.hasOwnProperty('jump')) {
            // 兼容历史api jump（默认true）
            hideJump = ops.jump + '' === 'false';
        }

        // 是否可切换分页数，默认true
        let sizesChange = ops.sizesChange + '' !== 'false';

        // 翻页器展开方向
        let sizesPlacement = ops.sizesPlacement || 'bottom';

        that.updater.set({
            mode,
            styles: styles.join(';'),
            alignRight,
            hideDetailTotal,
            hideTotal,
            hideJump,
            inOrder,
            sizesChange,
            sizesPlacement,
            total: (ops.total | 0) || 0, //总数
            page, // 当前页数，从1开始
            size, // 当前分页数
            sizes, //可选分页数
            sizeStrs,
            step: ops.step || 3, //页码过多时，中间显示多少条页码
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

