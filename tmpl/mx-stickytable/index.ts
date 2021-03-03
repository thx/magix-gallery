import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
const StickyTableZIndex = 10000;
const StickyTableDragMinWidth = 80;
const StickyTableDragMaxWidth = 800;
Magix.applyStyle('@index.less');

export default View.extend({
    init(extra) {
        let that = this;

        let owner = $('#' + that.id);
        that['@{owner.node}'] = owner;

        // 默认hover第一行
        that['@{hover.index}'] = 0;

        // 子列表展开收起状态缓存
        that['@{subs.toggle.store}'] = {};
        let subs = owner.find('[mx-stickytable-sub]');
        for (let i = 0; i < subs.length; i++) {
            let item = $(subs[i]);
            that['@{subs.toggle.store}'][item.attr('mx-stickytable-sub')] = (item.attr('mx-stickytable-sub-expand') === 'true');
        }

        // 指标排序
        that['@{sorts.toggle.store}'] = {};
        let sorts = owner.find('[mx-stickytable-sort]');
        for (let i = 0; i < sorts.length; i++) {
            let item = $(sorts[i]);
            let field = item.attr('mx-stickytable-sort'),
                order = item.attr('mx-stickytable-sort-order');
            if (order == 'desc' || order == 'asc') {
                // 当前只有一个指标可排序
                that['@{sorts.toggle.store}'][field] = order;
                break;
            }
        }

        // 可拖动排序指标
        that['@{drag.timers}'] = {};
        that.on('destroy', () => {
            for (let i in that['@{drag.timers}']) {
                clearTimeout(that['@{drag.timers}'][i]);
            }
        });

        this.assign(extra);
    },

    /**
    * 每次都重新计算
    */
    assign(extra) {
        // 是否需要空状态
        this['@{empty.text}'] = extra.emptyText || '';

        // 表头吸顶状态，非指定吸顶容器的时候，相对于window定位
        this['@{thead.sticky}'] = extra.theadSticky + '' === 'true';
        this['@{thead.sticky.wrapper}'] = extra.theadStickyWrapper;

        // 左右栏固定
        this['@{col.sticky.left}'] = +extra.leftColSticky || 0;
        this['@{col.sticky.right}'] = +extra.rightColSticky || 0;

        // 每次都刷新
        return true;
    },

    render() {
        this['@{toggle.hover.state}'](this['@{hover.index}'], 'add', true);
        this['@{trigger.init}']();
    },

    '@{trigger.init}'() {
        this['@{init}']();
        if (Magix.task) {
            // 多次事件排队处理
            Magix.task(this['@{init}'], [], this);
        }
    },

    /**
     * 表格计算
     */
    '@{init}'() {
        let that = this;
        let owner = that['@{owner.node}'];

        // 单元格位置rowspan和colspan计算
        // 清除历史附加行为的影响
        that['@{cells.map}'] = {
            th: that['@{get.cells}'](owner.find('thead>tr'), 'th'),
            td: that['@{get.cells}'](owner.find('tbody>tr'), 'td')
        }

        // 清除历史附加行为的影响
        let bar = owner.find('[mx-stickytable-wrapper="bar"]');
        bar.css({ display: 'none' });

        // 计算宽度，取第一行th即可，子th宽度均分
        let ths = owner.find('thead>tr:first-child>th');
        let width = 0,
            wrapperWidth = owner.outerWidth(),
            errors = [];
        that['@{width.arr}'] = [];
        for (let i = 0; i < ths.length; i++) {
            // 单个单元格设置宽度值，width
            // 处理样式时设置style width，以保证每次width计算下来都是一样的
            let colspan = (+ths[i].colSpan || 1),
                w = +ths[i].width;
            if (!w) {
                errors.push(ths[i].textContent);
            }
            for (let j = 0; j < colspan; j++) {
                that['@{width.arr}'].push(w / colspan);
            }
            width += w;
        };
        if (errors.length > 0) {
            // 必须设置宽度
            console.error(`请给${errors.join('，')}设置宽度`);
            return;
        }

        // 宽度值
        that['@{width.arr.sum}'] = width;
        that['@{width.wrapper}'] = wrapperWidth;

        // 左右分栏
        //   1. 容器宽度 < 单元格宽度    =>  分栏
        //   2. 容器宽度 >= 单元格宽度   =>  不分栏
        // 左右不分栏  => 不分栏
        if ((that['@{col.sticky.left}'] > 0 || that['@{col.sticky.right}'] > 0) &&
            (width > wrapperWidth)) {
            // 左右栏固定：按照设定值显示
            that['@{cal.col.sticky}']();
        } else {
            // 不分栏：按比例均分
            that['@{cal.width}']();
        }

        // 表头吸顶
        if (that['@{thead.sticky}']) {
            that['@{cal.thead.sticky}']();
        }

        // 子列表展开收起
        that['@{toggle.subs}'](owner.find('[mx-stickytable-sub]'));

        // 指标排序
        that['@{toggle.sorts}']();

        // 表格无内容，设置默认的空状态
        let trs = owner.find('tbody>tr');
        if (trs.length == 0 && that['@{empty.text}']) {
            let colspan = that['@{width.arr}'].length;
            owner.find('tbody').html(`<tr>
                <td colspan="${colspan}" style="padding: 0;">
                    <div class="mx-effects-empty">
                        <img class="mx-effects-img" src="https://img.alicdn.com/tfs/TB1zGfFVFP7gK0jSZFjXXc5aXXa-600-600.png" />
                        <div class="mx-effects-tip">${that['@{empty.text}']}</div>
                    </div>
                </td>
            </tr>`);
        }
    },

    /**
     * 获取单元格的二维数组，考虑colspan和rowspan
     */
    '@{get.cells}'(lines, selector) {
        // 二维数组
        let cells = [];

        // 计算同一行的x位置
        for (let i = 0; i < lines.length; i++) {
            let items = $(lines[i]).find(selector);
            // resize的时候，可能变化固定栏状态
            // 清除附加行为的影响
            items.removeClass('@index.less:left-shadow @index.less:right-shadow');
            items.css({ position: '', zIndex: '', left: '' });

            let gap = 0, row = [];
            for (let j = 0; j < items.length; j++) {
                let item = items.eq(j);
                let colspan = +item.attr('colspan') || 1,
                    rowspan = +item.attr('rowspan') || 1;
                row.push({
                    x: gap,
                    y: i,
                    colspan,
                    rowspan,
                    left: item.offset().left  //用于判断位置
                })
                gap = gap + colspan;
            }
            cells.push(row);
        }

        // 计算 rowspan对后边行的影响
        for (let rowIndex = 0; rowIndex < cells.length - 1; rowIndex++) {
            let row = cells[rowIndex];
            for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
                let curCell = row[cellIndex];
                if (curCell.rowspan > 1) {
                    // 后面行，left<当前cell的位置进行移动
                    for (let nextRowIndex = rowIndex + 1; (nextRowIndex < cells.length) && (curCell.rowspan > nextRowIndex - rowIndex); nextRowIndex++) {
                        let nextRow = cells[nextRowIndex];
                        for (let nextCellIndex = 0; nextCellIndex < nextRow.length; nextCellIndex++) {
                            let nextCell = nextRow[nextCellIndex];
                            if (nextCell.left > curCell.left) {
                                nextCell.x += curCell.colspan;
                            }
                        }
                    }
                }
            }
        }

        return cells;
    },

    /**
     * 不分栏场景：
     * 同步表头宽度到表格内
     * 在容器宽度内按照比例分配
     */
    '@{cal.width}'() {
        let that = this;
        let owner = that['@{owner.node}'],
            widthArr = that['@{width.arr}'],
            width = that['@{width.arr.sum}'],
            wrapperWidth = that['@{width.wrapper}'],
            cellsMap = that['@{cells.map}'];

        // layout：fixed
        // 根据容器宽度重新计算一遍真实展示宽度
        let thLines = owner.find('thead>tr');
        for (let j = 0; j < thLines.length; j++) {
            let ths = $(thLines[j]).find('th');
            for (let i = 0; i < ths.length; i++) {
                let w = 0, c = cellsMap.th[j][i];
                for (let k = 0; k < c.colspan; k++) {
                    w += widthArr[c.x + k];
                }
                // 设置style，不修改原有width属性，下次刷新时，原始设置值不变
                $(ths[i]).outerWidth(w / width * wrapperWidth);
            }
        }

        let tdLines = owner.find('tbody>tr');
        for (let j = 0; j < tdLines.length; j++) {
            let tds = $(tdLines[j]).find('td');
            for (let i = 0; i < tds.length; i++) {
                let w = 0, c = cellsMap.td[j][i];
                for (let k = 0; k < c.colspan; k++) {
                    w += widthArr[c.x + k];
                }
                // 设置style，不修改原有width属性，下次刷新时，原始设置值不变
                $(tds[i]).outerWidth(w / width * wrapperWidth);
            }
        }
    },

    /**
     * 左右栏固定
     * 宽度设置值为多少就是多少
     */
    '@{cal.col.sticky}'() {
        let that = this;
        let owner = that['@{owner.node}'],
            widthArr = that['@{width.arr}'],
            width = that['@{width.arr.sum}'],
            wrapperWidth = that['@{width.wrapper}'],
            nums = { left: that['@{col.sticky.left}'], right: that['@{col.sticky.right}'] },
            cellsMap = that['@{cells.map}'],
            stickyZIndex = 2;
        let len = widthArr.length;

        // layout：fixed
        // 根据容器宽度重新计算一遍真实展示宽度
        let thLines = owner.find('thead>tr');
        for (let j = 0; j < thLines.length; j++) {
            let ths = $(thLines[j]).find('th');
            for (let i = 0; i < ths.length; i++) {
                let w = 0, c = cellsMap.th[j][i];
                for (let k = 0; k < c.colspan; k++) {
                    w += widthArr[c.x + k];
                }
                // 设置style，不修改原有width属性，下次刷新时，原始设置值不变
                $(ths[i]).outerWidth(w);
            }
        }

        // 同步thead宽度到tbody上
        let tdLines = owner.find('tbody>tr');
        for (let j = 0; j < tdLines.length; j++) {
            let tds = $(tdLines[j]).find('td');
            for (let i = 0; i < tds.length; i++) {
                let w = 0, c = cellsMap.td[j][i];
                for (let k = 0; k < c.colspan; k++) {
                    w += widthArr[c.x + k];
                }
                // 设置style，不修改原有width属性，下次刷新时，原始设置值不变
                $(tds[i]).outerWidth(w);
            }
        }

        // 左右固定的列
        let fixStyles = (lines, selector) => {
            let cells = cellsMap[selector];
            ['left', 'right'].forEach(direction => {
                let num = nums[direction];
                if (num > 0) {
                    for (let i = 0; i < lines.length; i++) {
                        let items = $(lines[i]).find(selector);
                        for (let j = 0; j < items.length; j++) {
                            let item = $(items[j]);
                            let left = 0, cell = cells[i][j];
                            for (let k = 0; k < cell.x; k++) {
                                left += widthArr[k];
                            }
                            if ((direction == 'left') && (cell.x < num)) {
                                // 左侧
                                if (cell.x + cell.colspan == num) {
                                    // 有超出操作项时，取消分栏shadow样式
                                    let overOpers = item.find('[mx-stickytable-operation="line-over-opers"]');
                                    if (!overOpers || !overOpers.length) {
                                        item.addClass('@index.less:left-shadow');
                                    }
                                }
                                item.css({
                                    position: 'sticky',
                                    zIndex: stickyZIndex,
                                    left
                                })
                            } else if ((direction == 'right') && (cell.x >= len - num)) {
                                // 右侧
                                if (cell.x == len - num) {
                                    item.addClass('@index.less:right-shadow');
                                }
                                item.css({
                                    position: 'sticky',
                                    zIndex: stickyZIndex,
                                    right: width - left - item.outerWidth()
                                })
                            }
                        }
                    }
                }
            })
        };
        fixStyles(owner.find('thead>tr'), 'th');
        fixStyles(owner.find('tbody>tr'), 'td');

        let scrolls = {
            head: owner.find('[mx-stickytable-wrapper="head"]'),
            body: owner.find('[mx-stickytable-wrapper="body"]'),
            bar: owner.find('[mx-stickytable-wrapper="bar"]')
        }
        // 隐藏原始滚动条
        scrolls.head.addClass('@index.less:hidden-scrollbar');
        scrolls.body.addClass('@index.less:hidden-scrollbar');
        if (tdLines.length > 0) {
            // windows下鼠标滑动无mac方便，模拟滚动条跟随效果，随时可操作
            let scrollbarLeft = 0, scrollbarRight = 0;
            if (nums.left > 0) {
                for (let i = 0; i < nums.left; i++) {
                    scrollbarLeft += widthArr[i];
                }
            }
            if (nums.right > 0) {
                for (let i = 0; i < nums.right; i++) {
                    scrollbarRight += widthArr[len - i - 1];
                }
            }

            let scrollbarWidth = wrapperWidth - scrollbarLeft - scrollbarRight,
                scrollbarHeight = 14;
            let scrollBarStyles = {
                '--stickytable-scrollbar-height': wrapperWidth / scrollbarWidth * scrollbarHeight,
                display: 'block',
                zIndex: StickyTableZIndex,
                width: owner.outerWidth(),
                transform: `scale(${scrollbarWidth / wrapperWidth})`,
                'transform-origin': '0 0',
                position: 'absolute',
                left: scrollbarLeft,
                top: '100%',
                marginTop: 0 - scrollbarHeight
            }
            scrolls.bar.css(scrollBarStyles);
            let scrollbarInner = owner.find('[mx-stickytable-wrapper="bar-inner"]');
            scrollbarInner.css({ width });

            // 同步滚动条的进度
            let scrollFn = (e) => {
                if ($(e.target).attr('mx-stickytable-wrapper') != e.data.key) {
                    return;
                }
                that['@{scrollbar.scroll.left}'] = e.target.scrollLeft;
                for (let key in scrolls) {
                    if (key != e.data.key) {
                        scrolls[key][0] && (scrolls[key][0].scrollLeft = that['@{scrollbar.scroll.left}']);
                    }
                }
            };
            for (let key in scrolls) {
                scrolls[key].off('scroll', scrollFn).on('scroll', { key }, scrollFn);
                if (that['@{scrollbar.scroll.left}']) {
                    scrolls[key][0] && (scrolls[key][0].scrollLeft = that['@{scrollbar.scroll.left}']);
                }
            };

            // 模拟滚动条吸底计算
            that['@{cal.scrollbar.sticky}']();
        }
    },

    /**
     * 模拟滚动条
     */
    '@{cal.scrollbar.sticky}'() {
        let that = this;
        let owner = that['@{owner.node}'],
            widthArr = that['@{width.arr}'];
        let tbodyWrapper = owner.find('[mx-stickytable-wrapper="body"]'),
            scrollbar = owner.find('[mx-stickytable-wrapper="bar"]');

        let scrollbarLeft = 0, leftColSticky = that['@{col.sticky.left}'];
        if (leftColSticky > 0) {
            for (let i = 0; i < leftColSticky; i++) {
                scrollbarLeft += widthArr[i];
            }
        }

        // 模拟滚动条吸底计算
        let inmain, watchScroll;
        if (that['@{thead.sticky.wrapper}']) {
            // 指定滚动容器
            inmain = $(that['@{thead.sticky.wrapper}']);
            watchScroll = () => {
                let { top: it } = inmain.offset(), ih = inmain.outerHeight(),
                    borderBottom = +inmain.css('borderBottomWidth').replace('px', '') || 0;
                it = it - borderBottom;
                let { top: bt } = tbodyWrapper.offset(), bh = tbodyWrapper.outerHeight();
                if (bt + bh > it + ih && bt < it + ih) {
                    // 吸顶 一直改变absolute会导致抖动，滚动时使用fix定位
                    // 滚动结束会调整为absolute定位，每次滚动时重新定位下
                    // if (that['@{scrollbar.stickying}']) {
                    //     return;
                    // }
                    that['@{scrollbar.stickying}'] = true;

                    scrollbar.css({
                        position: 'fixed',
                        left: owner.offset().left + scrollbarLeft,
                        top: it + ih - $(window).scrollTop()
                    });
                } else {
                    // 不吸顶
                    if (!that['@{scrollbar.stickying}']) {
                        return;
                    }
                    that['@{scrollbar.stickying}'] = false;

                    scrollbar.css({
                        position: 'absolute',
                        left: scrollbarLeft,
                        top: '100%'
                    });
                }

                // fixed定位保证稳定性
                // 滚动结束后，更新为absolute定位
                if (that['@{scrollbar.stickying.end}']) {
                    clearTimeout(that['@{scrollbar.stickying.end}']);
                }
                that['@{scrollbar.stickying.end}'] = setTimeout(that.wrapAsync(() => {
                    if (that['@{scrollbar.stickying}']) {
                        scrollbar.css({
                            position: 'absolute',
                            left: scrollbarLeft,
                            top: it + ih - owner.offset().top
                        });
                    }
                }), 250);
            };
        } else {
            // 相对于window定位
            inmain = $(window);
            watchScroll = () => {
                let winScroll = inmain.scrollTop(),
                    winHeight = inmain.height(),
                    tbodyTop = tbodyWrapper.offset().top,
                    tbodyHeight = tbodyWrapper.outerHeight();

                // table在视线范围之内
                if ((winScroll + winHeight < tbodyTop + tbodyHeight) && (tbodyTop < winScroll + winHeight)) {
                    // 底部可见
                    if (that['@{scrollbar.stickying}']) {
                        return;
                    }
                    that['@{scrollbar.stickying}'] = true;

                    scrollbar.css({
                        position: 'fixed',
                        left: owner.offset().left + scrollbarLeft
                    });
                } else {
                    if (!that['@{scrollbar.stickying}']) {
                        return;
                    }
                    that['@{scrollbar.stickying}'] = false;

                    scrollbar.css({
                        position: 'absolute',
                        left: scrollbarLeft
                    });
                }
            };
        }
        that.on('destroy', () => {
            inmain.off('scroll.barsticky');
        });
        inmain.off('scroll.barsticky', watchScroll).on('scroll.barsticky', watchScroll);
        watchScroll();

    },

    /**
     * 表头吸顶
     */
    '@{cal.thead.sticky}'() {
        let that = this;
        let owner = that['@{owner.node}'];
        let theadWrapper = owner.find('[mx-stickytable-wrapper="head"]');
        let theadPlaceholder = owner.find('[mx-stickytable-wrapper="placeholder"]');
        let theadHeight = theadPlaceholder.outerHeight();

        let inmain, watchScroll;
        if (that['@{thead.sticky.wrapper}']) {
            // 指定滚动容器
            inmain = $(that['@{thead.sticky.wrapper}']);
            watchScroll = () => {
                let { top: it } = inmain.offset(),
                    borderTop = +inmain.css('borderTopWidth').replace('px', '') || 0;
                it = it + borderTop;
                let { top: ot, left: ol } = owner.offset(),
                    oh = owner.outerHeight();
                if (ot < it && (it - ot < oh - theadHeight)) {
                    // 吸顶 一直改变absolute会导致抖动，滚动时使用fix定位
                    // 滚动结束会调整为absolute定位，每次滚动时重新定位下
                    // if (that['@{thead.stickying}']) {
                    //     return;
                    // }
                    that['@{thead.stickying}'] = true;
                    theadWrapper.css({
                        position: 'fixed',
                        zIndex: StickyTableZIndex,
                        top: it - $(window).scrollTop(),
                        left: ol,
                        width: theadPlaceholder.outerWidth()
                    });
                } else {
                    // 不吸顶
                    if (!that['@{thead.stickying}']) {
                        return;
                    }
                    that['@{thead.stickying}'] = false;

                    // 恢复初始样式
                    theadWrapper.css({
                        position: 'initial',
                        zIndex: 'auto',
                        top: 'auto',
                        left: 'auto',
                        width: '100%'
                    });
                }

                // fixed定位保证稳定性
                // 滚动结束后，更新为absolute定位
                if (that['@{thead.stickying.end}']) {
                    clearTimeout(that['@{thead.stickying.end}']);
                }
                that['@{thead.stickying.end}'] = setTimeout(that.wrapAsync(() => {
                    if (that['@{thead.stickying}']) {
                        theadWrapper.css({
                            position: 'absolute',
                            zIndex: StickyTableZIndex,
                            top: it - owner.offset().top,
                            left: 0,
                            width: theadPlaceholder.outerWidth()
                        });
                    }
                }), 250);
            };
        } else {
            // 相对于window定位
            inmain = $(window);
            watchScroll = () => {
                let top = inmain.scrollTop();
                let { top: min } = owner.offset();
                let max = min + owner.outerHeight() - theadHeight;
                if (top > min && top < max) {
                    // 吸顶
                    if (that['@{thead.stickying}']) {
                        return;
                    }

                    that['@{thead.stickying}'] = true;
                    theadWrapper.css({
                        position: 'fixed',
                        zIndex: StickyTableZIndex,
                        top: 0,
                        left: theadPlaceholder.offset().left,
                        width: theadPlaceholder.outerWidth()
                    });
                } else {
                    // 不吸顶
                    if (!that['@{thead.stickying}']) {
                        return;
                    }

                    that['@{thead.stickying}'] = false;
                    theadWrapper.css({
                        position: 'initial',
                        zIndex: 'auto',
                        top: 'auto',
                        left: 'auto',
                        width: '100%'
                    });
                }
            };
        }
        that.on('destroy', () => {
            inmain.off('scroll.sticky');
        });
        inmain.off('scroll.sticky', watchScroll).on('scroll.sticky', watchScroll);
        watchScroll();
    },

    '@{toggle.hover.state}'(index, action, immediate) {
        let that = this;
        let trs = that['@{owner.node}'].find('tbody>tr');
        if (trs.length == 0) {
            // 表格被清空了
            return;
        }

        let tr = trs.eq(index);
        if (!tr || !tr.length || (tr.css('display') == 'none')) {
            // 1. 数据变化可能导致hover行不存在了
            // 2. hover的这一行外部有样式控制隐藏了
            // 不存在则更新到第一行
            index = 0;
            that['@{hover.index}'] = index;
            tr = trs.eq(index);
        }
        let operationTr = tr.next('tr');
        let operationAttr = operationTr ? (operationTr.attr('mx-stickytable-operation') || '') : '';
        let hasOperation = operationAttr.indexOf('line') > -1;

        // 无需动画的场景
        if (!immediate) {
            tr.find('td').css({
                transition: 'background-color var(--duration) ease-out'
            })
        }

        tr.attr('mx-stickytable-hover', action == 'add');
        if (hasOperation) {
            operationTr.attr('mx-stickytable-operation', (action == 'add') ? 'line-open' : 'line');
            if (!immediate) {
                operationTr.find('td').css({
                    transition: 'background-color var(--duration) ease-out'
                });
            }
        }
    },

    '$tbody>tr<mouseover>'(e) {
        let that = this;
        let target = $(e.eventTarget);
        let targetAttr = target ? (target.attr('mx-stickytable-operation') || '') : '';
        let flag = !Magix.inside(e.relatedTarget, target);
        if (!flag || (targetAttr.indexOf('line') > -1)) {
            // 操作行hover忽略
            return;
        }

        // 取消当前选中
        that['@{toggle.hover.state}'](that['@{hover.index}'], 'remove', false);

        // 更新选中项
        let trs = $(target).parents('tbody').find('tr');
        let index = trs.index(target);
        that['@{hover.index}'] = index;
        that['@{toggle.hover.state}'](index, 'add', false);
    },

    /**
     * 切换展开收起状态
     */
    '$[mx-stickytable-sub]<click>'(e) {
        let item = $(e.eventTarget);
        let parentValue = item.attr('mx-stickytable-sub');
        this['@{subs.toggle.store}'][parentValue] = !this['@{subs.toggle.store}'][parentValue];
        this['@{toggle.subs}']([item]);

        // 重新计算展现态
        this['@{trigger.reset}']();
    },

    '@{toggle.subs}'(items) {
        if (!items || !items.length) {
            return;
        }

        let that = this;
        let owner = that['@{owner.node}'];
        let store = that['@{subs.toggle.store}'];
        for (let i = 0; i < items.length; i++) {
            let item = $(items[i]);
            let parentValue = item.attr('mx-stickytable-sub');
            let expand = store[parentValue];
            item.attr('mx-stickytable-sub-expand', expand);
            if (expand) {
                item.html('<i class="mc-iconfont @index.less:sub-expand">&#xe653;</i>');
                owner.find(`tr[mx-stickytable-sub-parent="${parentValue}"]`).css({
                    display: ''
                });
            } else {
                item.html('<i class="mc-iconfont @index.less:sub-close">&#xe652;</i>');
                owner.find(`tr[mx-stickytable-sub-parent="${parentValue}"]`).css({
                    display: 'none'
                });
            }
        }
    },

    /**
     * 某个指标排序
     */
    '$[mx-stickytable-sort-trigger]<click>'(e) {
        let item = $(e.eventTarget).closest('[mx-stickytable-sort]');
        let field = item.attr('mx-stickytable-sort'),
            order = item.attr('mx-stickytable-sort-order'),
            orderField = item.attr('mx-stickytable-sort-order-field') || 'orderField',
            orderBy = item.attr('mx-stickytable-sort-order-by') || 'orderBy';
        if (order == 'desc') {
            order = 'asc';
        } else {
            // 默认降序排序
            order = 'desc';
        }

        // 同一时间只有一个指标可筛选
        this['@{sorts.toggle.store}'] = {
            [field]: order
        };
        this['@{toggle.sorts}']();

        // 反馈到地址栏
        Magix.Router.to({
            [orderField]: field,
            [orderBy]: order
        });
    },

    /**
     * 指标排序
     */
    '@{toggle.sorts}'() {
        let that = this;
        let owner = that['@{owner.node}'];
        let items = owner.find('[mx-stickytable-sort]');
        if (!items || !items.length) {
            return;
        }

        let icons = {
            desc: '&#xe6cd;',
            asc: '&#xe6ce;',
            def: '&#xe6cc;'
        }
        let store = that['@{sorts.toggle.store}'];
        for (let i = 0; i < items.length; i++) {
            let item = $(items[i]);
            let field = item.attr('mx-stickytable-sort');
            let order = store[field];
            if (!(order == 'desc' || order == 'asc')) {
                order = 'def';
            }
            item.attr('mx-stickytable-sort-order', order);
            let trigger = item.find('[mx-stickytable-sort-trigger="true"]');
            trigger.html(icons[order]);
        }
    },

    '$doc<htmlchanged>'(e) {
        if (this.owner && (this.owner.pId == e.vId)) {
            this['@{trigger.reset}']();
        }
    },

    /**
     * navslidend：侧边导航切换
     */
    '$doc<navslidend>'(e) {
        this['@{trigger.reset}']();
    },

    '$win<resize>'(e) {
        let that = this;
        if (!that['@{trigger.reseting}']) {
            requestAnimationFrame(() => {
                that['@{trigger.reset}']();
                that['@{trigger.reseting}'] = false;
            });
            that['@{trigger.reseting}'] = true;
        }

        // let that = this;
        // if (that['@{resize.timer}']) {
        //     clearTimeout(that['@{resize.timer}']);
        // }

        // that['@{resize.timer}'] = setTimeout(that.wrapAsync(() => {
        //     that['@{trigger.reset}']();
        // }), 100);
    },

    '@{trigger.reset}'() {
        // 更新吸顶宽度
        this['@{thead.stickying}'] = false;
        this['@{scrollbar.stickying}'] = false;
        this['@{trigger.init}']();
    },

    '$[mx-stickytable-drag="line"]<mousedown>'(e) {
        e.preventDefault();

        let that = this;
        let owner = that['@{owner.node}'];
        let th = $(e.eventTarget).closest('th');

        // 设置的值
        let lineWidth = 12,
            setWidth = +th.attr('width'),
            setMinWidth = +th.attr('min-width') || StickyTableDragMinWidth,
            setMaxWidth = +th.attr('max-width') || StickyTableDragMaxWidth;

        // 实际展示的值
        let showWidth = th.outerWidth();
        let scale = showWidth / setWidth;
        let minWidth = scale * setMinWidth,
            maxWidth = scale * setMaxWidth;

        let line = th.find('[mx-stickytable-drag="line"]'),
            lineInner = th.find('[mx-stickytable-drag="line-inner"]');
        let { left: offsetLeft } = th.offset(),
            tableHeight = owner.outerHeight();
        let startX = e.pageX - offsetLeft;

        $(document.body).off('mousemove.stickytable.drag')
            .on('mousemove.stickytable.drag', (moveEvent) => {
                moveEvent.preventDefault();
                that['@{draging}'] = true;

                let diffX = moveEvent.pageX - offsetLeft;
                let endX;
                if (diffX > startX) {
                    // 向右
                    endX = Math.min(diffX, maxWidth);
                } else {
                    // 向左
                    endX = Math.max(diffX, minWidth);
                }

                line.css({
                    'background-color': 'var(--color-brand)',
                    'left': endX - lineWidth
                })
                lineInner.css({
                    'height': tableHeight
                })
            });

        $(document.body).off('mouseup.stickytable.dragend')
            .on('mouseup.stickytable.dragend', function (upEvent) {
                upEvent.preventDefault();
                $(document.body).off('mousemove.stickytable.drag');

                // 改变width属性，用于重新计算
                let left = +line.css('left').replace('px', '');
                th[0].width = (left + lineWidth) / scale;

                // 恢复初始状态
                line.css({
                    'background-color': 'transparent',
                    left: `calc(100% - ${lineWidth}px)`;
                    opacity: 0
                });
                lineInner.css({
                    height: '100%'
                })

                // 更新全局状态
                that['@{draging}'] = false;
                $(document.body).off('mouseup.stickytable.dragend');

                // 重新计算table
                that['@{trigger.reset}']();
            });
    },

    '$[mx-stickytable-drag="th"]<mouseover>'(e) {
        this['@{toggle.drag}'](e, 'show');
    },

    '$[mx-stickytable-drag="th"]<mouseout>'(e) {
        this['@{toggle.drag}'](e, 'hide');
    },

    '@{toggle.drag}'(e, type) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let that = this;
        let th = $(e.eventTarget);
        let id = `${type}${th.index()}`;
        clearTimeout(that['@{drag.timers}'][id]);
        if (that['@{draging}']) {
            return;
        }

        that['@{drag.timers}'][id] = setTimeout(() => {
            let line = th.find('[mx-stickytable-drag="line"]');
            line.css({
                opacity: (type == 'show') ? 1 : 0
            })
        }, 100)
    }
});