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

        // 计算宽度，取第一行th即可，子th宽度均分
        let ths = this['@{owner.node}'].find('thead>tr:first-child>th');
        this['@{width.arr}'] = [];
        this['@{width.arr.sum}'] = 0;
        this['@{width.wrapper}'] = this['@{owner.node}'].outerWidth();
        for (let i = 0; i < ths.length; i++) {
            let colspan = (+ths[i].colSpan || 1),
                w = $(ths[i]).outerWidth();
            for (let j = 0; j < colspan; j++) {
                // 单个单元格设置宽度值，取真实展示值
                this['@{width.arr}'].push(w / colspan);
            }
            this['@{width.arr.sum}'] += w;
        };

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
        let owner = that['@{owner.node}'],
            width = that['@{width.arr.sum}'],
            wrapperWidth = that['@{width.wrapper}'];

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
        let ths = owner.find('thead>tr:first-child>th');
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

        let tds = owner.find('tbody>tr:first-child>td');
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
            stickyZIndex = 2;
        let len = widthArr.length;

        // 隐藏滚动条
        let theadWrapper = owner.find('[mx-stickytable-wrapper="head"]'),
            tbodyWrapper = owner.find('[mx-stickytable-wrapper="body"]');
        theadWrapper.addClass('@index.less:hidden-scrollbar');
        tbodyWrapper.addClass('@index.less:hidden-scrollbar');
        let syncToTHead = () => { theadWrapper[0] && (theadWrapper[0].scrollLeft = tbodyWrapper[0].scrollLeft); };
        let syncToTBody = () => { tbodyWrapper[0] && (tbodyWrapper[0].scrollLeft = theadWrapper[0].scrollLeft); };
        theadWrapper.off('scroll', syncToTBody).on('scroll', syncToTBody);
        tbodyWrapper.off('scroll', syncToTHead).on('scroll', syncToTHead);

        // 同步thead宽度到tbody上
        let tds = owner.find('tbody>tr:first-child>td');
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

        // 左右固定的列
        let fixStyles = (lines, selector) => {
            ['left', 'right'].forEach(direction => {
                let num = that[`@{col.sticky.${direction}}`];
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
                            } else if ((direction == 'right') && (count + colspan > len - num)) {
                                // 右侧
                                if (count + colspan == len - num + 1) {
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

        if (that['@{thead.sticky.wrapper}']) {
            // 指定滚动容器
        } else {
            // 相对于window定位
            let inmain = $(window);
            let watchInmainScroll = () => {
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
            that.on('destroy', () => {
                inmain.off('scroll.sticky');
            });
            inmain.on('scroll.sticky', watchInmainScroll);
            watchInmainScroll();
        }
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
        this['@{trigger.reset}']();
    },

    '@{trigger.reset}'() {
        // 更新吸顶宽度
        this['@{thead.stickying}'] = false;
        this['@{trigger.init}']();
    }
});