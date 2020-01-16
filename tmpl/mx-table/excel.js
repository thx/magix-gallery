/**
 * 表格分栏组件
 */
let Magix = require('magix');
let $ = require('$');
const WidthReg = /width\s*:\s*([\d\.]+)px/;
const WrapperClass = 'names@excel.less[left-wrapper,right-wrapper,left-shadow,right-shadow]';
Magix.applyStyle('@excel.less');

module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        // 默认展示第一行
        me['@{hover.index}'] = 0;
        me['@{hover.class}'] = extra.rowHoverClass || 'hover-tr';

        let node = $('#' + me.id);
        me['@{owner.node}'] = node;

        // 左右分栏
        ['left', 'right'].forEach(side => {
            let sideTable = node.find(`table[${side}="true"]`);
            if (sideTable && sideTable.length) {
                me[`@{table.${side}.wrapper}`] = me['@{wrapper.get}'](sideTable, side);
            }
        })

        // 中间区域表格（必有）
        let centerTable = node.find('table[center="true"]');
        me['@{table.center.wrapper}'] = me['@{wrapper.get}'](centerTable, 'center');

        me.assign();
    },

    '@{wrapper.get}'(table, id) {
        id = this.id + '_' + id;
        table.attr('id', id + '_table');
        let wrapper = table.closest('div[mx-table-wrapper]');
        wrapper.attr('id', id);
        return wrapper;
    },

    /**
     * 每次都重新计算
     */
    assign() {
        return true;
    },

    render() {
        let me = this;
        me['@{table.init}']();
        me['@{toggle.hover.state}'](me['@{hover.index}'], 'add');
    },

    '@{table.init}'() {
        let me = this;

        // 计算中间区域宽度
        let center = me['@{table.center.wrapper}'];
        center.addClass('@excel.less:wrapper');

        // 计算左右固定表格宽度
        ['left', 'right'].forEach(side => {
            let sideWrapper = me[`@{table.${side}.wrapper}`];
            if (sideWrapper && sideWrapper.length) {
                sideWrapper.addClass(WrapperClass[`${side}-wrapper`]);
                me['@{side.table.sync.width}'](side);
                center.css(`margin${side.slice(0, 1).toUpperCase() + side.slice(1)}`, sideWrapper.outerWidth());
            }
        })

        // 计算中间表格的宽度
        me['@{center.table.sync.width}']();

        // 同步所有单元格高度
        me['@{table.sync.height}']();

        // 同步所有单元格宽度
        me['@{table.sync.width}']();

        // 分栏时模拟滚动条
        // windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
        me['@{scroll.init}']();

        // 表头吸顶
        me['@{sticky.init}']();
    },

    '@{side.table.sync.width}'(side) {
        let me = this;
        let wrapper = me[`@{table.${side}.wrapper}`];

        // 宽度配置在table上或者th上
        let table = wrapper.find(`table[${side}="true"]`);
        let width = me['@{table.width.get}'](table);
        wrapper.find('table').css('width', width);
        wrapper.find('thead').css('width', width);
        wrapper.css('width', width);
    },

    '@{center.table.sync.width}'() {
        let me = this;
        let node = me['@{owner.node}'];
        let center = me['@{table.center.wrapper}'];
        let layoutWidth = node.width();
        ['left', 'right'].forEach(side => {
            let wrapper = me[`@{table.${side}.wrapper}`];
            if (wrapper) {
                layoutWidth -= wrapper.outerWidth();
            }
        })

        let width = me['@{table.width.get}'](center.find('table[center="true"]'));
        let over = (width - layoutWidth > 0);
        center.css('width', layoutWidth);
        center.find('table').css('width', over ? width : layoutWidth);
        center.find('thead').css('width', over ? width : layoutWidth);
        ['left', 'right'].forEach(side => {
            let wrapper = me[`@{table.${side}.wrapper}`];
            if (wrapper) {
                wrapper[over ? 'addClass' : 'removeClass'](WrapperClass[`${side}-shadow`]);
            }
        })
    },

    /**
     * 优先级 style.width > width
     */
    '@{table.width.get}'(table) {
        let width = 0;
        let tableStyle = table.attr('style');
        if (tableStyle) {
            let tm = tableStyle.match(WidthReg);
            if (tm) {
                width = +tm[1];
            }
        }
        width = width || +table.attr('width') || 0;
        if (!width) {
            let ths = table.find('thead>tr:first-child>th');
            for (let i = ths.length; i--;) {
                let th = ths.eq(i);
                let thWidth = 0;
                let thStyle = th.attr('style');
                if (thStyle) {
                    let m = thStyle.match(WidthReg);
                    if (m) {
                        thWidth = +m[1];
                    }
                }

                thWidth = thWidth || +th.attr('width') || th.outerWidth();
                width += thWidth;
            }
        }
        return width;
    },

    '@{table.sync.width}'() {
        let me = this;
        let wrapFn = (wrapper) => {
            // 宽度设置在th上
            let widthArr = [], sum = 0;
            let firstThs = wrapper.find('thead>tr:first-child>th');
            for (let i = 0; i < firstThs.length; i++) {
                let th = firstThs.eq(i);
                let colspan = +th.attr('colspan') || 1;

                let width = 0;
                let style = th.attr('style');
                if (style) {
                    let m = style.match(WidthReg);
                    if (m) {
                        width = +m[1];
                    }
                }
                width = width || +th.attr('width') || th.outerWidth();

                for (let j = 0; j < colspan; j++) {
                    let colWidth = width / colspan;
                    sum += colWidth;
                    widthArr.push(colWidth);
                }
            }

            let setItems = (lines) => {
                // 同步宽度到表头
                // 二维数组
                let rows = [];

                // 计算同一行的x位置
                for (let i = 0; i < lines.length; i++) {
                    let items = $(lines[i]).children();
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
                    rows.push(row);
                }

                //计算 rowspan对后边行的影响
                rows.forEach((row, rowIndex) => {
                    row.forEach((cell, cellIndex) => {
                        if (cell.rowspan > 1) {
                            // 后面行，left<当前cell的位置进行移动
                            for (let nextRowIndex = rowIndex + 1; (nextRowIndex < rows.length) && (cell.rowspan > nextRowIndex - rowIndex); nextRowIndex++) {
                                let nextRow = rows[nextRowIndex];
                                nextRow.forEach((nextCell, nextCellIndex) => {
                                    if (nextCell.left > cell.left) {
                                        nextCell.x += cell.colspan;
                                    }
                                })
                            }
                        }
                    })
                })

                let len = lines.length;
                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        if ($(lines[i]).css('display') === 'none') {
                            // 不计算隐藏行的，避免计算错位
                            continue;
                        }
                        let items = $(lines[i]).children();
                        for (let j = 0; j < items.length; j++) {
                            let width = 0;
                            let cell = rows[i][j];
                            for (let k = 0; k < cell.colspan; k++) {
                                width += widthArr[cell.x + k];
                            }
                            // 包括padding
                            items.eq(j).attr('width', width);
                        }
                    }
                }
            }

            // 宽度占位符
            let colgroup = wrapper.find('colgroup');
            for (let i = 0; i < colgroup.length; i++) {
                let items = $(colgroup[i]).children();
                for (let j = 0; j < items.length; j++) {
                    items.eq(j).attr('width', widthArr[j]);
                }
            }

            // 表格单元格
            setItems(wrapper.find('tbody>tr'));
            setItems(wrapper.find('thead>tr'));
            wrapper.find('thead').width(sum);
        }

        ['left', 'center', 'right'].forEach(side => {
            let wrapper = me[`@{table.${side}.wrapper}`];
            if (wrapper && wrapper.length) {
                wrapFn(wrapper);
            }
        })
    },

    /**
     * 表格分栏时同步两边表格的表头高度
     */
    '@{table.sync.height}'() {
        let me = this;
        let bodyArr = [],
            headArr = [];
        ['left', 'center', 'right'].forEach(side => {
            let wrapper = me[`@{table.${side}.wrapper}`];
            if (wrapper && wrapper.length) {
                bodyArr.push(wrapper.find('tbody>tr'));
                headArr.push(wrapper.find('thead>tr'));
            }
        })
        for (var i = 0; i < bodyArr[0].length; i++) {
            let maxHeight = 0;
            for (let j = 0; j < bodyArr.length; j++) {
                let height = $(bodyArr[j][i]).height();
                if (height > maxHeight) {
                    maxHeight = height;
                }
            }
            for (let j = 0; j < bodyArr.length; j++) {
                $(bodyArr[j][i]).height(maxHeight);
            }
        }

        let getHeight = (headTrs) => {
            let headHeight = 0;
            for (var i = 0; i < headTrs.length; i++) {
                headHeight += $(headTrs[i]).height();
            }
            return headHeight;
        }
        let maxHeaderHeight = 0;
        for (let i = 0; i < headArr.length; i++) {
            let headerHeight = getHeight(headArr[i]);
            if (headerHeight > maxHeaderHeight) {
                maxHeaderHeight = headerHeight;
            }
        }
        for (let i = 0; i < headArr.length; i++) {
            if (headArr[i].length == 1) {
                $(headArr[i]).height(maxHeaderHeight);
            }
        }
    },

    /**
     * 分栏时模拟滚动条
     * windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
     */
    '@{scroll.init}'() {
        let me = this;
        let viewId = me.id;

        let needScroll = false;
        ['left', 'right'].forEach(side => {
            let wrapper = me[`@{table.${side}.wrapper}`];
            if (wrapper && wrapper.length && wrapper.hasClass(WrapperClass[`${side}-shadow`])) {
                needScroll = true;
            }
        })
        me['@{need.scroll}'] = needScroll;
        if (needScroll) {
            let center = me['@{table.center.wrapper}'];
            let outerWidth = center.width(),
                innerWidth = center.find('table').width();

            let scrollbar = $('#' + viewId + '_scrollbar');
            if (scrollbar && scrollbar.length) {
                scrollbar.css({
                    width: outerWidth
                });
                scrollbar.find('.@excel.less:bar').width(innerWidth);
            } else {
                let tmpl = `<div id="${viewId}_scrollbar" class="@excel.less:scrollbar" style="width:${outerWidth}px;"><div class="@excel.less:bar" style="width:${innerWidth}px;"><div><div>`
                center.after($(tmpl));
                scrollbar = $('#' + viewId + '_scrollbar');
            }
            let watchInmainScroll = () => {
                me['@{sync.scroll.pos}']();
            }
            let syncToMain = () => {
                center[0].scrollLeft = scrollbar[0].scrollLeft;
            }
            let syncToLeft = () => {
                let sl = center[0].scrollLeft;
                scrollbar[0].scrollLeft = sl;
                // 缓存滚动位置，下次刷新时候恢复
                me['@{scroll.left.back}'] = sl;
            }
            scrollbar.off('scroll', syncToMain)
                .on('scroll', syncToMain);
            center.off('scroll', syncToLeft)
                .on('scroll', syncToLeft);
            me.on('destroy', () => {
                $(window).off('scroll.custombar', watchInmainScroll);
            });
            $(window).off('scroll.custombar', watchInmainScroll)
                .on('scroll.custombar', watchInmainScroll);
            watchInmainScroll();

            if (me['@{scroll.left.back}']) {
                center[0].scrollLeft = me['@{scroll.left.back}'];
                scrollbar[0].scrollLeft = me['@{scroll.left.back}'];
            }
        } else {
            let scrollbar = $('#' + viewId + '_scrollbar');
            if (scrollbar && scrollbar.length) {
                scrollbar.remove();
            }
        }
    },

    '@{sync.scroll.pos}'() {
        let me = this;
        if (!me['@{need.scroll}']) {
            return;
        }
        let inmain = $(window);
        let top = inmain.scrollTop(),
            maxHeight = inmain.height();

        let centerWrapper = me['@{table.center.wrapper}'];
        let centerTbody = centerWrapper.find('tbody');

        let between = (value) => {
            let min = top,
                max = top + maxHeight;
            return (min <= value) && (value <= max);
        }

        let scrollbar = $('#' + me.id + '_scrollbar');
        let bar = scrollbar.find('.@excel.less:bar');
        let scrollbarHeight = scrollbar.height(),
            barHeight = bar.height();

        let tbodyTop = centerTbody.offset().top;
        let tbodyHeight = centerTbody.height();
        let tbodyBottom = tbodyTop + tbodyHeight + scrollbarHeight - barHeight;

        // table在视线范围之内
        if (tbodyBottom < top || tbodyTop > top + maxHeight) {
            scrollbar.css({
                display: 'none'
            })
        } else {
            let leftWrapper = me['@{table.left.wrapper}'],
                rightWrapper = me['@{table.right.wrapper}'];
            if (between(tbodyBottom)) {
                // 底部可见
                let styles = {
                    display: 'block',
                    position: 'absolute',
                    bottom: barHeight - scrollbarHeight
                }
                if (leftWrapper && leftWrapper.length) {
                    styles.left = leftWrapper.width();
                }
                if (rightWrapper && rightWrapper.length) {
                    styles.right = rightWrapper.width();
                }
                scrollbar.css(styles);
            } else {
                let styles = {
                    display: 'block',
                    position: 'fixed',
                    bottom: 0
                }
                if (leftWrapper && leftWrapper.length) {
                    styles.left = leftWrapper.offset().left + leftWrapper.width();
                }
                if (rightWrapper && rightWrapper.length) {
                    styles.right = $(window).width() - rightWrapper.offset().left;
                }
                scrollbar.css(styles);
            }
        }
    },

    /**
     * 吸顶
     */
    '@{sticky.init}'() {
        // let me = this;
        // let owner = me['@{owner.node}'];
        // let mainHeader = me['@{table.main.thead}'],
        //     leftHeader = me['@{table.left.thead}'];

        // if (me['@{scroll.wrapper}']) {
        //     // 自定义滚动节点
        //     let inmain = me['@{scroll.wrapper}'];
        //     let watchInmainScroll = () => {
        //         let top = inmain.scrollTop();
        //         let max = owner.height() - inmain.height();
        //         if (top >= 0 && top <= max) {
        //             me['@{sync.sticky.pos}'](inmain, top);
        //         } else {
        //             me['@{sync.sticky.pos.recover}'](inmain);
        //         }
        //     };
        //     me.on('destroy', () => {
        //         inmain.off('scroll.customsticky', watchInmainScroll);
        //     });
        //     inmain.on('scroll.customsticky', watchInmainScroll);
        //     watchInmainScroll();
        // } else {
        //     // 相对于window滚动
        //     let inmain = $(window);
        //     let headerHeight = me['@{table.main.thead}'].height();

        //     let watchInmainScroll = () => {
        //         let top = inmain.scrollTop();
        //         let ownerOffset = owner.offset();

        //         let min = ownerOffset.top;
        //         let max = min + owner.height() - headerHeight;
        //         if (top >= min && top <= max) {
        //             me['@{sync.sticky.pos}'](inmain, top - min);
        //         } else {
        //             me['@{sync.sticky.pos.recover}'](inmain);
        //         }
        //     };
        //     me.on('destroy', () => {
        //         inmain.off('scroll.sticky');
        //     });
        //     inmain.on('scroll.sticky', watchInmainScroll);
        //     watchInmainScroll();
        // }
    },

    '@{sync.sticky.pos}'(node, top) {
        let me = this;
        let mainWrapper = me['@{table.main.wrapper}'],
            mainHeader = me['@{table.main.thead}'],
            leftWrapper = me['@{table.left.wrapper}'],
            leftHeader = me['@{table.left.thead}'];
        let headerHeight = mainHeader.height();

        mainWrapper.css({
            paddingTop: headerHeight
        })
        mainHeader.css({
            position: 'absolute',
            zIndex: 80,
            top
        });
        if (leftHeader) {
            leftWrapper.css({
                paddingTop: headerHeight
            })
            leftHeader.css({
                position: 'absolute',
                zIndex: 80,
                top
            });
        }
    },

    '@{sync.sticky.pos.recover}'(node) {
        let me = this;
        let mainWrapper = me['@{table.main.wrapper}'],
            mainHeader = me['@{table.main.thead}'],
            leftWrapper = me['@{table.left.wrapper}'],
            leftHeader = me['@{table.left.thead}'];
        mainWrapper.css({
            paddingTop: 0
        })
        mainHeader.css({
            position: 'initial',
            zIndex: 'auto',
            top: 'auto'
        });
        if (leftHeader) {
            leftWrapper.css({
                paddingTop: 0
            })
            leftHeader.css({
                position: 'initial',
                zIndex: 'auto',
                top: 'auto'
            });
        }
    },

    '$doc<htmlchanged>'(e) {
        let me = this;
        if (me.owner && (me.owner.pId == e.vId)) {
            me['@{rechange}']();
        }
    },

    '$doc<navslidend,tableresize>'(e) {
        this['@{rechange}']();
    },

    '$win<resize>'(e) {
        this['@{rechange}']();
    },

    '@{rechange}'() {
        let me = this;

        // 计算中间表格的宽度
        me['@{center.table.sync.width}']();

        // 同步所有单元格高度
        me['@{table.sync.height}']();

        // 同步所有单元格宽度
        me['@{table.sync.width}']();

        // 分栏时模拟滚动条
        // windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
        me['@{scroll.init}']();
    },

    '@{toggle.hover.state}'(index, action) {
        let me = this;
        let hoverClass = me['@{hover.class}'];
        let trs = me['@{table.center.wrapper}'].find('tbody>tr');
        if (trs.length == 0) {
            // 表格被清空了
            return;
        }

        action = action + 'Class';
        let operationTrClass = 'operation-tr',
            operationTrOpenClass = 'operation-tr-open';

        let tr = trs.eq(index);
        if (!tr || !tr.length || (tr.css('display') == 'none')) {
            // 1. 数据变化可能导致hover行不存在了
            // 2. hover的这一行外部有样式控制隐藏了
            // 不存在则更新到第一行
            index = 0;
            me['@{hover.index}'] = index;
            me['@{owner.node}'].attr('data-hover', index);
            tr = trs.eq(index);
        }
        tr[action](hoverClass);

        let next = tr.next('.' + operationTrClass);
        let hasNext = next && next.length;
        if (hasNext) {
            next[action](operationTrOpenClass);
        }

        ['left', 'center', 'right'].forEach(side => {
            let wrapper = me[`@{table.${side}.wrapper}`];
            if (wrapper && wrapper.length) {
                let sideTrs = wrapper.find('tbody>tr');
                let sideTr = sideTrs.eq(index);
                sideTr[action](hoverClass);
                if (hasNext) {
                    let sideNext = sideTr.next('.' + operationTrClass);
                    sideNext[action](operationTrOpenClass);
                }
            }
        })
    },

    '$tbody>tr<mouseover>'(e) {
        let me = this;
        let hoverClass = me['@{hover.class}'];
        let target = e.eventTarget;
        let flag = !Magix.inside(e.relatedTarget, target);
        if (!flag || $(target).hasClass('operation-tr')) {
            // 操作行hover忽略
            return;
        }

        // 取消当前选中
        me['@{toggle.hover.state}'](me['@{hover.index}'], 'remove');

        // 更新选中项
        let trs = $(target).parents('tbody').find('tr');
        let index = trs.index(target);
        me['@{hover.index}'] = index;
        me['@{toggle.hover.state}'](index, 'add');
    }

});