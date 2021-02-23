import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
const TableZIndex = 10000;
Magix.applyStyle('@index.less');

export default View.extend({
    init(extra) {
        this['@{owner.node}'] = $('#' + this.id);

        // 默认hover第一行
        this['@{hover.index}'] = 0;

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

        // 计算宽度，取第一行th即可，子th宽度均分
        let ths = owner.find('thead>tr:first-child>th');
        let width = 0,
            wrapperWidth = owner.outerWidth();
        this['@{width.arr}'] = [];
        for (let i = 0; i < ths.length; i++) {
            let colspan = (+ths[i].colSpan || 1),
                w = $(ths[i]).outerWidth();
            for (let j = 0; j < colspan; j++) {
                // 单个单元格设置宽度值，取真实展示值
                this['@{width.arr}'].push(w / colspan);
            }
            width += w;
        };
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
     * 不分栏场景：
     * 同步表头宽度到表格内
     * 在容器宽度内按照比例分配
     */
    '@{cal.width}'() {
        let that = this;
        let owner = that['@{owner.node}'],
            widthArr = that['@{width.arr}'],
            width = that['@{width.arr.sum}'],
            wrapperWidth = that['@{width.wrapper}'];

        // layout：fixed
        // 根据容器宽度重新计算一遍真实展示宽度
        let thLines = owner.find('thead>tr');
        for (let j = 0; j < thLines.length; j++) {
            let ths = $(thLines[j]).find('th');
            let index1 = 0;
            for (let i = 0; i < ths.length; i++) {
                let colspan = (+ths[i].colSpan || 1);
                let w = 0;
                for (let j = 0; j < colspan; j++) {
                    w += widthArr[j + index1];
                }

                // 最后一个单元格宽度自适应
                ths[i].width = ((i == ths.length - 1) ? '' : (w / width * wrapperWidth));
                index1 += colspan;
            }
        }

        let tdLines = owner.find('tbody>tr');
        for (let j = 0; j < tdLines.length; j++) {
            let tds = $(tdLines[j]).find('td');
            let index2 = 0;
            for (let i = 0; i < tds.length; i++) {
                let colspan = (+tds[i].colSpan || 1);
                let w = 0;
                for (let j = 0; j < colspan; j++) {
                    w += widthArr[j + index2];
                }

                // 最后一个单元格宽度自适应
                tds[i].width = ((i == tds.length - 1) ? '' : (w / width * wrapperWidth));
                index2 += colspan;
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
            stickyZIndex = 2;
        let len = widthArr.length;

        // 同步thead宽度到tbody上
        let lines = owner.find('tbody>tr');
        for (let j = 0; j < lines.length; j++) {
            let tds = $(lines[j]).find('td');
            let index = 0;
            for (let i = 0; i < tds.length; i++) {
                let colspan = (+tds[i].colSpan || 1);
                let w = 0;
                for (let j = 0; j < colspan; j++) {
                    w += widthArr[j + index];
                }
                tds[i].width = w;
                index += colspan;
            }
        }

        // 左右固定的列
        let fixStyles = (lines, selector) => {
            ['left', 'right'].forEach(direction => {
                let num = nums[direction];
                if (num > 0) {
                    for (let i = 0; i < lines.length; i++) {
                        let items = $(lines[i]).find(selector);
                        let count = 0;
                        for (let j = 0; j < items.length; j++) {
                            let colspan = (+items[j].colSpan || 1);
                            let left = 0;
                            for (let k = 0; k < count; k++) {
                                left += widthArr[k];
                            }
                            if ((direction == 'left') && (count + colspan <= num)) {
                                // 左侧
                                if (count + colspan == num) {
                                    $(items[j]).addClass('@index.less:left-shadow');
                                }
                                $(items[j]).css({
                                    position: 'sticky',
                                    zIndex: stickyZIndex,
                                    left
                                })
                            } else if ((direction == 'right') && (count >= len - num)) {
                                // 右侧
                                if (count == len - num) {
                                    $(items[j]).addClass('@index.less:right-shadow');
                                }
                                $(items[j]).css({
                                    position: 'sticky',
                                    zIndex: stickyZIndex,
                                    right: width - left - $(items[j]).outerWidth()
                                })
                            }
                            count += colspan;
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
        if (lines.length > 0) {
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
                zIndex: TableZIndex,
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
                let scrollLeft = e.target.scrollLeft;
                for (let key in scrolls) {
                    if (key != e.data.key) {
                        scrolls[key][0] && (scrolls[key][0].scrollLeft = scrollLeft);
                    }
                }
            };
            for (let key in scrolls) {
                scrolls[key].off('scroll', scrollFn).on('scroll', { key }, scrollFn);
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
                if ((winScroll + winHeight <= tbodyTop + tbodyHeight) && (tbodyTop <= winScroll + winHeight)) {
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
                        zIndex: TableZIndex,
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
                            zIndex: TableZIndex,
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
                let ownerOffset = owner.offset();
                let min = ownerOffset.top;
                let max = min + owner.height() - theadHeight;
                if (top >= min && top <= max) {
                    // 吸顶
                    if (that['@{thead.stickying}']) {
                        return;
                    }

                    that['@{thead.stickying}'] = true;
                    theadWrapper.css({
                        position: 'fixed',
                        zIndex: TableZIndex,
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

    '$doc<htmlchanged>'(e) {
        if (this.owner && (this.owner.pId == e.vId)) {
            this['@{trigger.reset}']();
        }
    },

    /**
     * navslidend：侧边导航切换
     * tableresize：子列表展开收起
     */
    '$doc<navslidend,tableresize>'(e) {
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
    }
});