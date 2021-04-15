import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
const StickyTableZIndex = 10000;
const StickyTableDragMinWidth = 80;
const StickyTableDragMaxWidth = 800;
const StickyDragLineWidth = 12;
Magix.applyStyle('@index.less');

export default View.extend({
    init(extra) {
        let that = this;

        let owner = $('#' + that.id);
        that['@{owner.node}'] = owner;

        // 默认hover第一行
        that['@{hover.index}'] = 0;

        // 可拖动排序指标
        that['@{drag.timers}'] = {};
        that.on('destroy', () => {
            for (let i in that['@{drag.timers}']) {
                clearTimeout(that['@{drag.timers}'][i]);
            }
        });

        that.assign(extra);
    },

    /**
    * 每次都重新计算
    */
    assign(extra) {
        let that = this;
        let owner = that['@{owner.node}'];

        // 子列表展开收起状态缓存
        that['@{subs.toggle.store}'] = that['@{subs.toggle.store}'] || {};
        let subs = owner.find('[mx-stickytable-sub]');
        for (let i = 0; i < subs.length; i++) {
            let item = subs[i];
            that['@{subs.toggle.store}'][item.getAttribute('mx-stickytable-sub')] = (item.getAttribute('mx-stickytable-sub-expand') === 'true');
        }

        // 指标排序
        that['@{sorts.toggle.store}'] = {};
        let sorts = owner.find('[mx-stickytable-sort]');
        for (let i = 0; i < sorts.length; i++) {
            let item = sorts[i];
            let field = item.getAttribute('mx-stickytable-sort'),
                order = item.getAttribute('mx-stickytable-sort-order');
            if (order == 'desc' || order == 'asc') {
                // 当前只有一个指标可排序
                that['@{sorts.toggle.store}'][field] = order;
                break;
            }
        }

        // 是否需要空状态
        that['@{empty.text}'] = extra.emptyText || '';
        that['@{empty.text.white}'] = (extra.emptyBg + '' === 'white'); // 是否为白底色

        // 表头吸顶状态，非指定吸顶容器的时候，相对于window定位
        that['@{thead.sticky}'] = extra.theadSticky + '' === 'true';
        that['@{thead.sticky.wrapper}'] = extra.theadStickyWrapper;
        // 联动吸顶的筛选项容器：仅对相对window吸顶的生效
        that['@{filter.wrapper}'] = extra.filterWrapper;

        // 左右栏固定
        that['@{col.sticky.left}'] = +extra.leftColSticky || 0;
        that['@{col.sticky.right}'] = +extra.rightColSticky || 0;

        // linkages checkbox的联动筛选
        // 原先为逗号分隔则逗号分隔，原先数组则为数组，默认逗号分隔
        that['@{linkages.type}'] = (extra.linkages instanceof Array) ? 'array' : 'comma';
        that['@{linkages}'] = ((extra.linkages instanceof Array) ? extra.linkages : (extra.linkages ? extra.linkages.split(',') : [])).map(v => v + '');
        that['@{linkages.shift}'] = extra.linkagesShift + '' === 'true'; // 是否支持shift批量选中（默认false）

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
            widthErrors = [], dragErrors = [];
        that['@{width.arr}'] = [];
        for (let i = 0; i < ths.length; i++) {
            // 单个单元格设置宽度值，width
            // 处理样式时设置style width，以保证每次width计算下来都是一样的
            let th = ths[i];
            let colspan = (+th.colSpan || 1),
                w = +th.width;
            if (!w) {
                widthErrors.push(th.textContent);
            }

            let dragValue = th.getAttribute('mx-stickytable-drag');
            if (th.hasAttribute('mx-stickytable-drag') && (dragValue + '' === 'null' || dragValue + '' === 'undefined' || dragValue + '' === '')) {
                dragErrors.push(th.textContent);
            }
            for (let j = 0; j < colspan; j++) {
                that['@{width.arr}'].push(w / colspan);
            }
            width += w;
        };

        if (widthErrors.length > 0) {
            // 必须设置宽度
            console.error(`请给列${widthErrors.join('，')}设置宽度`);
            return;
        }
        if (dragErrors.length > 0) {
            // 支持拖动排序的字段必选设置value值
            console.error(`请给支持拖动的列${dragErrors.join('，')}设置value值`);
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
            let bd = owner.find('[mx-stickytable-wrapper="body"]');
            let ed = owner.find('[mx-stickytable-wrapper="empty"]');
            if (!ed || !ed.length) {
                bd.after(`<div mx-stickytable-wrapper="empty" class="${that['@{empty.text.white}'] ? 'mx-effects-empty-white' : 'mx-effects-empty'}">
                    <img class="mx-effects-img" src="https://img.alicdn.com/tfs/TB1zGfFVFP7gK0jSZFjXXc5aXXa-600-600.png" />
                    <div class="mx-effects-tip">${that['@{empty.text}']}</div>
                </div>`);
            }
        }

        this['@{cal.linkages}']();
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
            items.css({ position: '', zIndex: '', left: '', right: '' });

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

                // 如果改动了原始节点的属性，digest之后，diff有变化的节点值会重置，无变化节点不重置
                // 最终获取的width数组，有的为原始值，有的为计算值，表现上差异较大
                // 设置style，不修改原有width属性，下次刷新时，原始设置值不变，保证宽度的稳定性
                $(ths[i]).outerWidth(w / width * wrapperWidth);
            }
        }

        let tdLines = owner.find('tbody>tr');
        for (let j = 0; j < tdLines.length; j++) {
            let tds = $(tdLines[j]).find('td');

        }

        // 同步thead宽度到tbody上
        let tbodys = owner.find('tbody');
        for (let m = 0; m < tbodys.length; m++) {
            let tbd = $(tbodys[m]);

            let clgStr = '<colgroup mx-stickytable-placeholder="colgroup">';
            let tdLines = tbd.find('tr');
            for (let j = 0; j < tdLines.length; j++) {
                let tds = $(tdLines[j]).find('td');
                for (let i = 0; i < tds.length; i++) {
                    let w = 0, c = cellsMap.td[j][i];
                    for (let k = 0; k < c.colspan; k++) {
                        w += widthArr[c.x + k];

                        if (j == 0) {
                            clgStr += `<col span="1" style="width: ${widthArr[c.x + k] / width * wrapperWidth}px;"/>`;
                        }
                    }

                    // 设置style，不修改原有width属性，下次刷新时，原始设置值不变
                    $(tds[i]).outerWidth(w / width * wrapperWidth);
                }
            }

            // 在tbody前追加一行colgroup 防止首行tr有colspan时导致宽度异常
            clgStr += '</colgroup>';
            let clgNode = tbd.prev('[mx-stickytable-placeholder="colgroup"]');
            if (!clgNode || !clgNode.length) {
                tbd.before(clgStr);
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
            stickyZIndex = 2,
            cellsMap = that['@{cells.map}'];
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
        let tbodys = owner.find('tbody');
        for (let m = 0; m < tbodys.length; m++) {
            let tbd = $(tbodys[m]);

            let clgStr = '<colgroup mx-stickytable-placeholder="colgroup">';
            let tdLines = tbd.find('tr');
            for (let j = 0; j < tdLines.length; j++) {
                let tds = $(tdLines[j]).find('td');
                for (let i = 0; i < tds.length; i++) {
                    let w = 0, c = cellsMap.td[j][i];
                    for (let k = 0; k < c.colspan; k++) {
                        w += widthArr[c.x + k];

                        if (j == 0) {
                            clgStr += `<col span="1" style="width: ${widthArr[c.x + k]}px;"/>`;
                        }
                    }
                    // 设置style，不修改原有width属性，下次刷新时，原始设置值不变
                    $(tds[i]).outerWidth(w);
                }
            }

            // 在tbody前追加一行colgroup 防止首行tr有colspan时导致宽度异常
            clgStr += '</colgroup>';
            let clgNode = tbd.prev('[mx-stickytable-placeholder="colgroup"]');
            if (!clgNode || !clgNode.length) {
                tbd.before(clgStr);
            }
        }

        // 左右固定的列
        let fixStyles = (lines, selector) => {
            let cells = cellsMap[selector];
            ['left', 'right'].forEach(direction => {
                let num = nums[direction];
                if (num > 0) {
                    for (let i = 0, ll = lines.length; i < ll; i++) {
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
                                // zIndex  
                                // 左侧的更高，为了显示拖拉线样式
                                // 上面行的更高，为了显示一些自定义超出行的小浮层
                                item.css({
                                    position: 'sticky',
                                    zIndex: ll - i + len - cell.x + stickyZIndex,
                                    left
                                })
                            } else if ((direction == 'right') && (cell.x >= len - num)) {
                                // 右侧
                                if (cell.x == len - num) {
                                    item.addClass('@index.less:right-shadow');
                                }
                                item.css({
                                    position: 'sticky',
                                    zIndex: ll - i + len - cell.x + stickyZIndex,
                                    right: width - left - item.outerWidth()
                                })
                            }
                        }
                    }
                }
            })
        };
        // thead高于tbody
        fixStyles(owner.find('thead>tr'), 'th');
        fixStyles(owner.find('tbody>tr'), 'td');

        let scrollHead = owner.find('[mx-stickytable-wrapper="head"]'),
            scrollBody = owner.find('[mx-stickytable-wrapper="body"]'),
            scrollBar = owner.find('[mx-stickytable-wrapper="bar"]');
        // 隐藏原始滚动条
        scrollHead.addClass('@index.less:hidden-scrollbar');
        scrollBody.addClass('@index.less:hidden-scrollbar');
        if (owner.find('tbody>tr').length > 0) {
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
            scrollBar.css(scrollBarStyles);
            let scrollbarInner = owner.find('[mx-stickytable-wrapper="bar-inner"]');
            scrollbarInner.css({ width });

            // 同步滚动条的进度
            that['@{sync.scrolls}']([scrollHead[0], scrollBody[0], scrollBar[0]]);

            // 模拟滚动条吸底计算
            that['@{cal.scrollbar.sticky}']();
        }
    },

    '@{sync.scrolls}'(scrolls) {
        let that = this;
        let max = scrolls.length;
        if (!max || max === 1) {
            return;
        };

        // 用于标注
        let sign = 0;

        // 同步滚动条的进度
        let scrollFn = (e) => {
            // 标注为 0 时 表示滚动起源
            if (!sign) {
                sign = max - 1;
                let left = e.target.scrollLeft;
                for (let es of scrolls) {
                    // 同步所有除自己以外节点
                    if (es == e.target) {
                        continue;
                    };
                    es.scrollLeft = left;
                    that['@{scrollbar.scroll.left}'] = left;
                }
            } else {
                // 其他节点滚动时 标注减一
                --sign;
            }
        };
        for (let i = 0; i < max; i++) {
            let trigger = scrolls[i];

            // 给每一个节点绑定 scroll 事件
            trigger.removeEventListener('scroll', scrollFn, true);
            trigger.addEventListener('scroll', scrollFn, true);

            if (that['@{scrollbar.scroll.left}']) {
                trigger && (trigger.scrollLeft = that['@{scrollbar.scroll.left}']);
            }
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
     * 1. 相对window：支持联动筛选项进行吸顶
     * 2. 相对指定容器
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
            let filterWrapper = $(that['@{filter.wrapper}']);
            let filterHeight = 0;
            if (filterWrapper && filterWrapper.length) {
                filterHeight = filterWrapper.outerHeight();
                filterWrapper.closest('[mx-stickytable-filter="placeholder"]').css({
                    height: filterHeight
                })
            }

            // 相对于window定位
            inmain = $(window);
            watchScroll = () => {
                let top = inmain.scrollTop();
                let { top: min } = owner.offset();
                min = min - filterHeight;
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
                        top: filterHeight,
                        left: theadPlaceholder.offset().left,
                        width: theadPlaceholder.outerWidth()
                    });
                    if (filterHeight > 0) {
                        filterWrapper.css({
                            position: 'fixed',
                            zIndex: StickyTableZIndex + 1,
                            top: 0,
                            left: theadPlaceholder.offset().left,
                            width: theadPlaceholder.outerWidth()
                        });
                    }
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
                    if (filterHeight > 0) {
                        filterWrapper.css({
                            position: 'initial',
                            zIndex: 'auto',
                            top: 'auto',
                            left: 'auto',
                            width: '100%'
                        });
                    }
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

    /**
     * 拖动单元格
     * 不分栏表格：拖动时影响当前th以及紧随的th：当前th和跟随的th的宽度和不变
     * 分栏table：根据拖动后情况计算
     * 
     * dragfinish：拖动的会改变节点属性，要保证稳定性，请修改之后一定要监听dragfinish缓存修改后的结果
     * 否则重新digest时会回置到之前的状态
     */
    '$[mx-stickytable-drag-trigger="item"]<mousedown>'(e) {
        e.preventDefault();

        let that = this;
        let hasSticky = (that['@{col.sticky.left}'] > 0) || (that['@{col.sticky.right}'] > 0);
        let owner = that['@{owner.node}'];
        let th = $(e.eventTarget).closest('th');
        let nextTh = th.next('th');
        if (!nextTh || !nextTh.length) {
            // 最后一列不可拖动
            return;
        }

        // 设置的值
        let setWidth = +th.attr('width'),
            setNextWidth = +nextTh.attr('width');

        // 范围修正
        // 可拖动最小值：Math.min(设置的最小值，默认值，实际展示宽度)
        // 可拖动最小值：Math.max(设置的最大值，默认值，实际展示宽度)
        let setMinWidth = Math.min(+th.attr('min-width') || StickyTableDragMinWidth, setWidth),
            setMaxWidth = Math.max(+th.attr('max-width') || StickyTableDragMaxWidth, setWidth),
            setNextMinWidth = Math.min(+nextTh.attr('min-width') || StickyTableDragMinWidth, setNextWidth),
            setNextMaxWidth = Math.max(+nextTh.attr('max-width') || StickyTableDragMaxWidth, setNextWidth);

        // 实际展示的值
        let width = th.outerWidth(),
            nextWidth = nextTh.outerWidth();
        let scale = width / setWidth;
        let minWidth = scale * setMinWidth,
            maxWidth = scale * setMaxWidth,
            minNextWidth = scale * setNextMinWidth,
            maxNextWidth = scale * setNextMaxWidth;

        let trigger = th.find('[mx-stickytable-drag-trigger="item"]'),
            mask = th.find('[mx-stickytable-drag-trigger="mask"]');
        let line = $('<div style="opacity: 0; position: absolute; z-index: 100003; top: 0; width: 0; height: 100%; border-right: 1px solid var(--color-brand);"></div>');
        owner.append(line);
        let { left: offsetLeft } = th.offset(),
            { left: tableLeft } = owner.offset();
        let startX = e.pageX - offsetLeft;

        $(document.body).off('mousemove.stickytable.drag')
            .on('mousemove.stickytable.drag', (moveEvent) => {
                moveEvent.preventDefault();
                that['@{draging}'] = true;

                let diffX = moveEvent.pageX - offsetLeft;
                let endX;
                if (hasSticky) {
                    // 分栏table只影响尽量只影响自身
                    // 向右（变宽） or 向左（变窄）
                    endX = (diffX > startX) ? Math.min(diffX, maxWidth) : Math.max(diffX, minWidth);
                } else {
                    // 不分栏table需要只影响当前列和后一个th，需要把下一个元素的最大最小宽度考虑进去
                    // 向右（变宽） or 向左（变窄）
                    endX = (diffX > startX) ? Math.min(diffX, maxWidth, width + nextWidth - minNextWidth) : Math.max(diffX, minWidth, width + nextWidth - maxNextWidth);
                }

                trigger.css({ borderRight: '4px solid var(--color-brand)', left: endX - StickyDragLineWidth });
                mask.css({ opacity: 0.2, width: endX });
                line.css({ opacity: 1, left: offsetLeft - tableLeft + endX });
            });

        $(document.body).off('mouseup.stickytable.dragend')
            .on('mouseup.stickytable.dragend', function (upEvent) {
                upEvent.preventDefault();
                $(document.body).off('mousemove.stickytable.drag');

                // 当前th和跟随的th的宽度和不变
                let left = +trigger.css('left').replace('px', '');
                let targetWidth = Math.round((left + StickyDragLineWidth) / scale);
                if (targetWidth < setMinWidth) {
                    targetWidth = setMinWidth;
                } else if (targetWidth > setMaxWidth) {
                    targetWidth = setMaxWidth;
                }
                let targetNextWidth = setWidth + setNextWidth - targetWidth;
                if (hasSticky) {
                    // 分栏table
                    // 容器宽和设置列宽差距
                    let widthGap = that['@{width.wrapper}'] - that['@{width.arr.sum}'];
                    if ((widthGap > 0) &&
                        (targetWidth - setWidth < widthGap) &&
                        (targetNextWidth <= setNextMaxWidth) &&
                        (targetNextWidth >= setNextMinWidth)) {
                        // 原先为：容器宽 > 设置宽的和，前显示为不分栏状态
                        // 调整后：保持不分栏状态，并且后一个的设置值在其范围之内，影响自身和后一个th
                        // 保持不分栏状态，影响自身和后一个th
                        th[0].width = targetWidth;
                        nextTh[0].width = targetNextWidth;

                        owner.trigger({
                            type: 'dragfinish',
                            items: {
                                [th.attr('mx-stickytable-drag')]: targetWidth,
                                [nextTh.attr('mx-stickytable-drag')]: targetNextWidth
                            }
                        });
                    } else {
                        // 1. 原先不分栏，调整后分栏
                        // 2. 原先分栏
                        // 只影响自己
                        th[0].width = targetWidth;

                        owner.trigger({
                            type: 'dragfinish',
                            items: {
                                [th.attr('mx-stickytable-drag')]: targetWidth
                            }
                        });
                    }
                } else {
                    // 不分栏table
                    th[0].width = targetWidth;
                    nextTh[0].width = targetNextWidth;

                    owner.trigger({
                        type: 'dragfinish',
                        items: {
                            [th.attr('mx-stickytable-drag')]: targetWidth,
                            [nextTh.attr('mx-stickytable-drag')]: targetNextWidth
                        }
                    });
                }

                // 恢复初始状态
                trigger.css({ opacity: 0, borderRight: '1px solid var(--color-brand)', left: `calc(100% - ${StickyDragLineWidth}px)` });
                mask.css({ opacity: 0, width: 0 });
                line.remove();

                // 更新全局状态
                that['@{draging}'] = false;
                $(document.body).off('mouseup.stickytable.dragend');

                // 重新计算table
                that['@{trigger.reset}']();
            });
    },

    '$th[mx-stickytable-drag]<mouseover>'(e) {
        this['@{toggle.drag}'](e, 'show');
    },

    '$th[mx-stickytable-drag]<mouseout>'(e) {
        this['@{toggle.drag}'](e, 'hide');
    },

    /**
     * 自由列宽hover出现trigger
     */
    '@{toggle.drag}'(e, type) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let that = this;
        let th = $(e.eventTarget);
        let id = `${type}${th.attr('mx-stickytable-drag')}`;
        clearTimeout(that['@{drag.timers}'][id]);
        if (that['@{draging}']) {
            return;
        }

        that['@{drag.timers}'][id] = setTimeout(() => {
            let line = th.find('[mx-stickytable-drag-trigger="item"]');
            line.css({
                opacity: (type == 'show') ? 1 : 0,
                borderRight: '1px solid var(--color-brand)'
            })
        }, 100)
    },
    /**
     * 初始化linkages联动关系
     */
    '@{cal.linkages}'() {
        let owner = this['@{owner.node}'];
        let children = owner.find('input[mx-stickytable-linkage]');
        if (!children || !children.length) {
            return;
        }
        this['@{apply.checkbox}'](false);
    },
    /**
     * checkbox父节点
     */
    '$input[mx-stickytable-linkage-parent]<change>'(e) {
        e.stopPropagation();
        let owner = this['@{owner.node}'];
        let linkages = this['@{linkages}'];
        let checked = e.target.checked;

        // 找最底层input
        let lp = (parent) => {
            let pv = parent.attr('mx-stickytable-linkage-parent');
            let children = owner.find(`input[mx-stickytable-linkage="${pv}"]`);
            for (let i = 0; i < children.length; i++) {
                let child = $(children[i]);
                if (!child.attr('mx-stickytable-linkage-parent')) {
                    // 最底层input，先删除在push
                    let cv = child[0].value;
                    let ii = linkages.indexOf(cv);
                    if (ii > -1) {
                        linkages.splice(ii, 1);
                    }
                    if (checked && !child[0].disabled) {
                        // 可选状态
                        linkages.push(cv);
                    }
                } else {
                    lp(child);
                }
            }
        }
        lp($(e.eventTarget));

        this['@{linkages}'] = linkages;
        this['@{apply.checkbox}'](true);
    },

    /**
     * 记录shift按住状态
     */
    '$input[mx-stickytable-linkage]<click>'(e) {
        this['@{shifted}'] = e.shiftKey;
    },

    /**
     * checkbox子节点
     */
    '$input[mx-stickytable-linkage]<change>'(e) {
        e.stopPropagation();
        let that = this;
        let owner = that['@{owner.node}'],
            linkages = that['@{linkages}'];
        let child = e.target;

        // 当前input为最底层input
        // 本身也为父节点的不处理
        if (!child.getAttribute('mx-stickytable-linkage-parent')) {
            let cv = child.value,
                checked = child.checked;
            let ii = linkages.indexOf(cv);
            if (ii > -1) {
                linkages.splice(ii, 1);
            }
            if (checked) {
                linkages.push(cv);
            }
            if (that['@{linkages.shift}']) {
                // 支持shift批量选中
                if (!that['@{linkages.shift.start}']) {
                    that['@{linkages.shift.start}'] = child;
                }
                if (that['@{shifted}']) {
                    let leafs = owner.find('input[mx-stickytable-linkage]:not([mx-stickytable-linkage-parent])');
                    let leafArr = Array.from(leafs);
                    let start = leafArr.indexOf(child);
                    let end = leafArr.indexOf(that['@{linkages.shift.start}']);
                    let betweens = leafArr.slice(Math.min(start, end), Math.max(start, end) + 1);
                    let bvs = [];
                    for (let i = 0; i < betweens.length; i++) {
                        let bv = betweens[i].value;
                        bvs.push(bv);
                        let bi = linkages.indexOf(bv);
                        if (bi > -1) {
                            linkages.splice(bi, 1);
                        }
                    }
                    if (checked) {
                        linkages.push(...bvs);
                    }
                }
                that['@{linkages.shift.start}'] = child;
            }
            that['@{linkages}'] = linkages;
            that['@{apply.checkbox}'](true);
        }
    },
    '@{apply.checkbox}'(fire) {
        let that = this;
        let owner = that['@{owner.node}'],
            linkages = that['@{linkages}'],
            type = that['@{linkages.type}'];

        // 更新叶子节点状态
        let leafs = owner.find('input[mx-stickytable-linkage]:not([mx-stickytable-linkage-parent])');
        let leafValues = [];
        for (let i = 0; i < leafs.length; i++) {
            let cv = leafs[i].value;
            leafValues.push(cv);
            $(leafs[i]).prop('checked', linkages.indexOf(cv) > -1);
            $(leafs[i]).prop('indeterminate', false);
        }

        let lp = (cvs) => {
            let pvsMap = {};

            for (let i = 0; i < cvs.length; i++) {
                let cv = cvs[i];
                let child = owner.find(`input[value="${cv}"]`);
                let pv = child.attr('mx-stickytable-linkage');
                // 只到找到最顶层节点e
                if (pv) {
                    pvsMap[pv] = true;
                }
            }
            for (let pv in pvsMap) {
                // 同步到父节点
                let parent = owner.find(`input[mx-stickytable-linkage-parent="${pv}"]`),
                    siblings = owner.find(`input[mx-stickytable-linkage="${pv}"]`);
                let len = siblings.length,
                    enabledLen = 0,
                    disabledLen = 0,
                    checkedLen = 0,
                    indeterminateLen = 0;
                for (let i = 0; i < len; i++) {
                    if (siblings[i].disabled) {
                        disabledLen++;
                    } else {
                        enabledLen++;
                        if ($(siblings[i]).prop('checked')) {
                            checkedLen++;
                        } else if ($(siblings[i]).prop('indeterminate')) {
                            indeterminateLen++;
                        }
                    }
                }
                parent.prop('checked', (checkedLen == enabledLen) && (enabledLen > 0));
                parent.prop('indeterminate', (((checkedLen < enabledLen) && (checkedLen > 0)) || indeterminateLen > 0) && (enabledLen > 0));
                parent.prop('disabled', (disabledLen == len));
            }

            let pvs = Object.keys(pvsMap);
            if (pvs.length > 0) {
                lp(pvs);
            }
        }
        // 递归计算父节点状态
        lp(leafValues);

        if (fire) {
            owner.trigger({
                type: 'change',
                linkages: (type == 'array') ? linkages : linkages.join(',')
            });
        }
    }
});