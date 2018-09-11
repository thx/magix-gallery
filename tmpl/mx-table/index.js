/**
 * 功能：只左侧滚动（外部固定左侧的宽度） + hover展示操作项目
 */
let Magix = require('magix');
let $ = require('$');
let WidthReg = /width\s*:\s*(\d+)px/;
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        // 默认展示第一行
        me['@{hover.index}'] = 0;

        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        let leftTable = node.find('table[left="true"]');
        if (leftTable && leftTable.length > 0) {
            me['@{table.left}'] = leftTable;
            me['@{table.left.wrapper}'] = me['@{wrapper.get}'](leftTable, 'left');
            me['@{table.left.thead}'] = leftTable.find('thead');
            me['@{table.main}'] = node.find('table[center="true"]');
        } else {
            me['@{table.main}'] = node.find('table');
        }
        me['@{table.main.wrapper}'] = me['@{wrapper.get}'](me['@{table.main}'], 'main');
        me['@{table.main.thead}'] = me['@{table.main}'].find('thead');

        me['@{need.sticky}'] = (extra.sticky + '') === 'true';
        me['@{hover.class}'] = extra.rowHoverClass || 'hover-tr';

        // 自定义滚动节点
        if (extra.scrollWrapper) {
            me['@{scroll.wrapper}'] = $('#' + extra.scrollWrapper);
        }

        me.assign();
    },
    assign() {
        return true;
    },
    render() {
        let me = this;
        me['@{table.init}']();
        me['@{toggle.hover.state}'](me['@{hover.index}'], 'add');
    },

    '@{wrapper.get}' (table, id) {
        id = this.id + '_' + id;
        table.attr('id', id + '_table');
        let wrapper = table.parent('div');
        wrapper.attr(id, id);
        return wrapper;
    },

    '@{table.init}' () {
        let me = this;
        // 左侧固定表格
        let leftTable = me['@{table.left}'];

        // 中间滚动表格
        let table = me['@{table.main}'];
        if (leftTable) {
            // 计算左侧固定表格宽度
            me['@{left.table.sync.width}']();
            
            // 滚动表格跨度
            let wrapper = me['@{table.main.wrapper}'];
            wrapper.addClass('@index.less:wrapper');
            wrapper.css('left', leftTable.outerWidth());
            me['@{main.table.sync.width}']();
            
            // 表格分栏时同步两边表格的内容的高度
            me['@{table.sync.height}']();
        }
        // 根据内容宽度计算头部th的宽度
        me['@{table.sync.th.width}']();

        // 分栏时模拟滚动条
        // windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
        me['@{scroll.init}']();

        // 表头吸顶
        me['@{sticky.init}']();
    },

    /**
     * 分栏时模拟滚动条
     * windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
     */
    '@{scroll.init}' () {
        let me = this;
        let viewId = me.id;
        let leftWrapper = me['@{table.left.wrapper}'];
        
        let inmain, watchInmainScroll;
        if (me['@{scroll.wrapper}']) {
            inmain = me['@{scroll.wrapper}'];
            watchInmainScroll = () => {
                me['@{sync.scroll.pos.custom}'](inmain);
            };
        } else {
            inmain = $(window);
            watchInmainScroll = () => {
                me['@{sync.scroll.pos.win}'](inmain);
            };
        }
        if (leftWrapper && (leftWrapper.length > 0) && (leftWrapper.hasClass('@index.less:left-shadow'))) {
            me['@{need.scroll}'] = true;
            let mainWrapper = me['@{table.main.wrapper}'],
                mainTable = me['@{table.main}'];

            let outerWidth = mainWrapper.width(),
                innerWidth = mainTable.width();

            let scrollbar = $('#' + viewId + '_scrollbar');
            if (scrollbar && scrollbar.length) {
                scrollbar.css({
                    width: outerWidth
                });
                scrollbar.find('.@index.less:bar').width(innerWidth);
            } else {
                let tmpl = `<div id="${viewId}_scrollbar" class="@index.less:scrollbar" style="width:${outerWidth}px;"><div class="@index.less:bar" style="width:${innerWidth}px;"><div><div>`
                mainWrapper.after($(tmpl));
                scrollbar = $('#' + viewId + '_scrollbar');
            }

            let syncToMain = () => {
                mainWrapper[0].scrollLeft = scrollbar[0].scrollLeft;
            }
            let syncToLeft = () => {
                let sl = mainWrapper[0].scrollLeft;
                scrollbar[0].scrollLeft = sl;
                // 缓存滚动位置，下次刷新时候恢复
                me['@{scroll.left.back}'] = sl;
            }
            scrollbar.off('scroll', syncToMain).on('scroll', syncToMain);
            mainWrapper.off('scroll', syncToLeft).on('scroll',syncToLeft);
            
            if (!me['@{setup.scroll}']) {
                me['@{setup.scroll}'] = 1;

                me.on('destroy', () => {
                    inmain.off('scroll.custombar', watchInmainScroll);
                });
                inmain.off('scroll.custombar', watchInmainScroll).on('scroll.custombar', watchInmainScroll);
            }

            watchInmainScroll();
            if(me['@{scroll.left.back}']){
                mainWrapper[0].scrollLeft = me['@{scroll.left.back}'];
                scrollbar[0].scrollLeft = me['@{scroll.left.back}'];
            }
        }else{
            me['@{need.scroll}'] = false;
            let scrollbar = $('#' + viewId + '_scrollbar');
            if(scrollbar && scrollbar.length){
                scrollbar.remove();
            }
        }
    },
    '@{sticky.init}' () {
        let me = this;

        if (me['@{need.sticky}']) {
            let inmain, watchInmainScroll;
            if (me['@{scroll.wrapper}']) {
                inmain = me['@{scroll.wrapper}'];
                watchInmainScroll = () => {
                    me['@{sync.sticky.pos.custom}'](inmain);
                };
            } else {
                inmain = $(window);
                watchInmainScroll = () => {
                    me['@{sync.sticky.pos.win}'](inmain);
                };
            }
            if (!me['@{setup.sticky}']) {
                me['@{setup.sticky}'] = 1;

                me.on('destroy', () => {
                    inmain.off('scroll.customsticky', watchInmainScroll);
                });
                inmain.on('scroll.customsticky', watchInmainScroll);
                me['@{thead.height}'] = me['@{table.main.thead}'].height();
            }

            watchInmainScroll();
        }
    },

    /**
     * 根据内容算头部
     */
    '@{table.sync.th.width}' () {
        let me = this;
        let wrapFn = (table) => {
            let trs = table.find('tbody>tr');
            let firstTds = table.find('tbody>tr:first-child>td');
            let widthArr = [];
            for (let i = 0; i < firstTds.length; i++) {
                let td = firstTds.eq(i); 
                let colspan = +td.attr('colspan') || 1;
                let width = td.outerWidth();
                for(let j = 0; j < colspan; j++){
                    widthArr.push(width / colspan);
                }
            }

            let len = trs.length;
            for(let i = 0; i < len; i++){
                let tds = $(trs[i]).find('td');
                let gap = 0;
                for(let j = 0; j < tds.length; j++){
                    let td = tds.eq(j); 
                    let colspan = +td.attr('colspan') || 1;
                    let width = 0;
                    for(let k = 0; k < colspan; k++){
                        width += widthArr[k + gap];
                    }
                    td.css('width', width);
                    gap = gap + colspan;
                }
            }

            let headTrs = table.find('thead>tr');
            if(len > 0){
                // 有tbody的时候
                // 根据table的宽度计算
                for(let i = 0; i < headTrs.length; i++){
                    let ths = $(headTrs[i]).find('th');
                    let gap = 0;
                    for(let j = 0; j < ths.length; j++){
                        let th = ths.eq(j); 
                        let colspan = +th.attr('colspan') || 1;
                        let width = 0;
                        for(let k = 0; k < colspan; k++){
                            width += widthArr[k + gap];
                        }
                        th.css('width', width);
                        gap = gap + colspan;
                    }
                }
            }else{
                // 没有tbody的时候，设置自己本身的宽度
                let firstThs = table.find('thead>tr:first-child>th');
                let thWidthArr = [];
                for (let i = 0; i < firstThs.length; i++) {
                    let td = firstThs.eq(i); 
                    let colspan = +td.attr('colspan') || 1;
                    let width = td.outerWidth();
                    for(let j = 0; j < colspan; j++){
                        thWidthArr.push(width / colspan);
                    }
                }
                for(let i = 0; i < headTrs.length; i++){
                    let ths = $(headTrs[i]).find('th');
                    let gap = 0;
                    for(let j = 0; j < ths.length; j++){
                        let th = ths.eq(j); 
                        let colspan = +th.attr('colspan') || 1;
                        let width = 0;
                        for(let k = 0; k < colspan; k++){
                            width += thWidthArr[k + gap];
                        }
                        th.css('width', width);
                        gap = gap + colspan;
                    }
                }
            }
        }
        wrapFn(me['@{table.main}']);

        let leftTable = me['@{table.left}'];
        if (leftTable) {
            wrapFn(leftTable);
        }
    },

    '@{table.width.get}' (table) {
        let ths = table.find('thead>tr:first-child>th');
        let width = table.attr('width');
        if (!width) {
            width = 0;
            for (let i = ths.length; i--;) {
                let th = ths.eq(i);
                let thWidth = 120;
                let style = th.attr('style');
                if (style) {
                    let m = style.match(WidthReg);
                    if (m) {
                        thWidth = parseInt(m[1]);
                    }
                } else {
                    let m = th.attr('width');
                    if (m) {
                        thWidth = +m;
                    } else {
                        thWidth = th.outerWidth();
                    }
                }
                width += thWidth;
            }
        }
        return +width;
    },

    '@{left.table.sync.width}' () {
        let me = this;
        let table = me['@{table.left}'];
        let wrapper = me['@{table.left.wrapper}'];
        let width = me['@{table.width.get}'](table);
        table.css('width', width);
        table.find('thead').css('width', width);
        wrapper.css('width', table.outerWidth());
    },

    '@{main.table.sync.width}' () {
        let me = this;
        let node = me['@{owner.node}'];
        let table = me['@{table.main}'];
        let leftTable = me['@{table.left}'];
        let layoutWidth = node.width() - leftTable.outerWidth();
        let width = me['@{table.width.get}'](table);
        let leftWrapper = me['@{table.left.wrapper}'];
        if (width > layoutWidth) {
            table.css('width', width);
            table.find('thead').css('width', width);
            leftWrapper.css({
                'position': 'relative',
                'z-index': 2
            })
            leftWrapper.addClass('@index.less:left-shadow');
        } else {
            table.css('width', layoutWidth);
            table.find('thead').css('width', layoutWidth);
            leftWrapper.removeClass('@index.less:left-shadow');
        }
    },

    /**
     * 表格分栏时同步两边表格的表头高度
     */
    '@{table.sync.height}' () {
        let me = this;
        let table = me['@{table.main}'],
            leftTable = me['@{table.left}'];

        let trs = table.find('tbody>tr'),
            leftTrs = leftTable.find('tbody>tr');

        for (var i = 0; i < leftTrs.length; i++) {
            let maxHeight = Math.max(
                $(leftTrs[i]).height(),
                $(trs[i]).height()
            )
            $(leftTrs[i]).height(maxHeight);
            $(trs[i]).height(maxHeight);
        }

        // thead > tr（可能分组分行）
        let mainHeadTrs = table.find('thead>tr'),
            leftHeadTrs = leftTable.find('thead>tr');

        let getHeight = (headTrs) => {
            let headHeight = 0;
            for (var i = 0; i < headTrs.length; i++) {
                headHeight += $(headTrs[i]).height();
            }
            return headHeight;
        }
        let maxHeaderHeight = Math.max(
            getHeight(mainHeadTrs),
            getHeight(leftHeadTrs)
        )
        if (mainHeadTrs.length == 1) {
            mainHeadTrs.height(maxHeaderHeight);
        }
        if (leftHeadTrs.length == 1) {
            leftHeadTrs.height(maxHeaderHeight);
        }
    },

    '$doc<htmlchanged>' (e) {
        let me = this;
        if (e.vId == me.owner.pId) {
            me['@{rechange}']();
        }
    },

    '$doc<navslidend,tableresize>' (e) {
        this['@{rechange}']();
    },

    '$win<resize>' (e) {
        this['@{rechange}']();
    },

    '@{rechange}' () {
        let me = this;
        let leftTable = me['@{table.left}'];
        if (leftTable) {
            // 重新计算主体表格的宽度
            me['@{main.table.sync.width}']();

            // 重新同步内容高度
            me['@{table.sync.height}']();

            // 重新初始化模拟的滚动条
            me['@{scroll.init}']();
        }

        // 重新同步表头高度
        me['@{table.sync.th.width}']();
    },

    '@{toggle.hover.state}' (index, action) {
        let me = this;
        let hoverClass = me['@{hover.class}'];
        let trs = me['@{table.main}'].find('tbody>tr');
        if(trs.length == 0){
            // 表格被清空了
            return;
        }

        let action = action + 'Class';
        let operationTrClass = 'operation-tr',
            operationTrOpenClass = 'operation-tr-open',
            operationNextTrOpenClass = 'next-operation-tr-open';

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
            tr[action](operationNextTrOpenClass);
        }

        let leftTable = me['@{table.left}'];
        if (leftTable) {
            let leftTrs = leftTable.find('tbody>tr');
            let leftTr = leftTrs.eq(index);
            leftTr[action](hoverClass);
            if (hasNext) {
                let leftNext = leftTr.next('.' + operationTrClass);
                leftNext[action](operationTrOpenClass);
                leftTr[action](operationNextTrOpenClass);
            }
        }
    },

    '$tbody>tr<mouseover>' (e) {
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
    },

    '@{sync.sticky.pos}' (node, sticky, top) {
        let me = this;
        let headerHeight = me['@{thead.height}'];
        let mainWrapper = me['@{table.main.wrapper}'],
            mainHeader = me['@{table.main.thead}'],
            leftWrapper = me['@{table.left.wrapper}'],
            leftHeader = me['@{table.left.thead}'];

        let nodeHeight = node.height();
        if (sticky) {
            mainWrapper.css({
                paddingTop: headerHeight
            })

            mainHeader.css({
                position: 'absolute',
                zIndex: 99,
                top: top
            });
            if (leftHeader) {
                leftWrapper.css({
                    paddingTop: headerHeight
                })
                leftHeader.css({
                    position: 'absolute',
                    zIndex: 99,
                    top: top
                });
            }
        } else {
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
        }
    },

    '@{sync.sticky.pos.custom}' (node) {
        let me = this;
        if (!me['@{need.sticky}']) {
            return;
        }
        let top = node.scrollTop();
        let headerHeight = me['@{thead.height}'];

        let owner = me['@{owner.node}'];
        let max = owner.height() - node.height();
        if (top >= 0 && top <= max) {
            me['@{sync.sticky.pos}'](node, true, top);
        } else {
            me['@{sync.sticky.pos}'](node, false);
        }
    },

    '@{sync.sticky.pos.win}' (node) {
        let me = this;
        if (!me['@{need.sticky}']) {
            return;
        }
        let top = node.scrollTop();
        let headerHeight = me['@{thead.height}'];

        let owner = me['@{owner.node}'];
        let ownerOffset = owner.offset();
        let min = ownerOffset.top;
        let max = ownerOffset.top + owner.height() - headerHeight;
        if (top >= min && top <= max) {
            me['@{sync.sticky.pos}'](node, true, top - min);
        } else {
            me['@{sync.sticky.pos}'](node, false);
        }
    },

    '@{sync.scroll.pos.custom}' (node) {
        let me = this;
        if (!me['@{need.scroll}']) {
            return;
        }
        let top = node.scrollTop();

        let leftWrapper = me['@{table.left.wrapper}'],
            mainTable = me['@{table.main}'];
        let scrollbar = $('#' + me.id + '_scrollbar');
        let bar = scrollbar.find('.@index.less:bar');
        let scrollbarHeight = scrollbar.height(),
            barHeight = bar.height(),
            left = leftWrapper.width();

        let targetTop;;
        if (mainTable.height() > node.height()) {
            targetTop = node.height() - scrollbarHeight + top;
        } else {
            targetTop = node.height() - scrollbarHeight;
        }

        scrollbar.css({
            display: 'block',
            position: 'absolute',
            left: left,
            top: targetTop
        })
    },

    '@{sync.scroll.pos.win}' (node) {
        let me = this;
        if (!me['@{need.scroll}']) {
            return;
        }
        let top = node.scrollTop(),
            maxHeight = node.height();

        let leftWrapper = me['@{table.left.wrapper}'],
            mainTable = me['@{table.main}'];
        let tbody = mainTable.find('tbody');

        let between = (value) => {
            let min = top,
                max = top + maxHeight;
            return (min <= value) && (value <= max);
        }

        let scrollbar = $('#' + me.id + '_scrollbar');
        let bar = scrollbar.find('.@index.less:bar');
        let scrollbarHeight = scrollbar.height(),
            barHeight = bar.height();

        let tbodyTop = tbody.offset().top;
        let tbodyHeight = tbody.height();
        let tbodyBottom = tbodyTop + tbodyHeight + scrollbarHeight - barHeight;

        // table在视线范围之内
        if (tbodyBottom < top || tbodyTop > top + maxHeight) {
            scrollbar.css({
                display: 'none'
            })
        } else {
            if (between(tbodyBottom)) {
                // 底部可见
                let left = leftWrapper.width();
                scrollbar.css({
                    display: 'block',
                    position: 'absolute',
                    left: left,
                    bottom: barHeight - scrollbarHeight
                })
            } else {
                let left = leftWrapper.offset().left + leftWrapper.width();
                scrollbar.css({
                    display: 'block',
                    position: 'fixed',
                    left: left,
                    bottom: 0
                })
            }
        }

    }

});