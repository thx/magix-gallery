/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/**
 * 功能：只左侧滚动（外部固定左侧的宽度） + hover展示操作项目
 */
var Magix = require("magix");
var $ = require("$");
var WidthReg = /width\s*:\s*(\d+)px/;
Magix.applyStyle("_zs_gallery_mx-table_index_","[mx-view*=\"mx-table/index\"],\n[mx-view*=\"mx-table/excel\"] {\n  position: relative;\n}\n[mx-view*=\"mx-table/index\"] table,\n[mx-view*=\"mx-table/excel\"] table {\n  table-layout: auto;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-wrapper,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-wrapper,\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-scrollbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-wrapper,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-wrapper {\n  top: 0;\n  z-index: 1;\n  -ms-overflow-style: none;\n  overflow: auto;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar {\n  display: none;\n  width: 0;\n  height: 0;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar-thumb,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-scrollbar {\n  display: none;\n  z-index: 2;\n  opacity: 0.3;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar ._zs_gallery_mx-table_index_-bar,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-scrollbar ._zs_gallery_mx-table_index_-bar {\n  height: 1px;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar {\n  width: 14px;\n  height: 14px;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar-thumb,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--color-brand);\n  border-radius: 7px;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-left-shadow,\n[mx-view*=\"mx-table/excel\"] ._zs_gallery_mx-table_index_-left-shadow {\n  box-shadow: 3px 0 4px rgba(0, 0, 0, 0.06);\n}\n");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        // 默认展示第一行
        me['@{hover.index}'] = 0;
        var node = $('#' + me.id);
        me['@{owner.node}'] = node;
        var leftTable = node.find('table[left="true"]');
        if (leftTable && leftTable.length > 0) {
            me['@{table.left}'] = leftTable;
            me['@{table.left.wrapper}'] = me['@{wrapper.get}'](leftTable, 'left');
            me['@{table.left.thead}'] = leftTable.find('thead');
            me['@{table.main}'] = node.find('table[center="true"]');
        }
        else {
            me['@{table.main}'] = node.find('table');
        }
        me['@{table.main.wrapper}'] = me['@{wrapper.get}'](me['@{table.main}'], 'main');
        me['@{table.main.thead}'] = me['@{table.main}'].find('thead');
        me['@{need.sticky}'] = (extra.sticky + '') === 'true';
        me['@{sticky.end}'] = (extra.stickyEnd + '') === 'true'; //滚动时隐藏吸顶，结束滚动吸顶
        me['@{sticky.interval}'] = extra.stickyInterval || 0;
        me['@{hover.class}'] = extra.rowHoverClass || 'hover-tr';
        // 自定义滚动节点
        if (extra.scrollWrapper) {
            me['@{scroll.wrapper}'] = $('#' + extra.scrollWrapper);
        }
        me.assign();
    },
    /**
     * 每次都重新计算
     */
    assign: function () {
        return true;
    },
    render: function () {
        var me = this;
        me['@{table.init}']();
        me['@{toggle.hover.state}'](me['@{hover.index}'], 'add');
        if (Magix.task) {
            Magix.task(me['@{table.init}'], [], me);
        }
    },
    '@{wrapper.get}': function (table, id) {
        id = this.id + '_' + id;
        table.attr('id', id + '_table');
        var wrapper = table.parent('div');
        wrapper.attr(id, id);
        return wrapper;
    },
    '@{table.init}': function () {
        var me = this;
        // 左侧固定表格
        var leftTable = me['@{table.left}'];
        // 中间滚动表格
        var table = me['@{table.main}'];
        if (leftTable) {
            // 计算左侧固定表格宽度
            me['@{left.table.sync.width}']();
            // 滚动表格跨度
            var wrapper = me['@{table.main.wrapper}'];
            wrapper.addClass('_zs_gallery_mx-table_index_-wrapper');
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
    '@{scroll.init}': function () {
        var me = this;
        var viewId = me.id;
        var leftWrapper = me['@{table.left.wrapper}'];
        var inmain, watchInmainScroll;
        if (me['@{scroll.wrapper}']) {
            inmain = me['@{scroll.wrapper}'];
            watchInmainScroll = function () {
                me['@{sync.scroll.pos.custom}'](inmain);
            };
        }
        else {
            inmain = $(window);
            watchInmainScroll = function () {
                me['@{sync.scroll.pos.win}'](inmain);
            };
        }
        if (leftWrapper && (leftWrapper.length > 0) && (leftWrapper.hasClass('_zs_gallery_mx-table_index_-left-shadow'))) {
            me['@{need.scroll}'] = true;
            var mainWrapper_1 = me['@{table.main.wrapper}'], mainTable = me['@{table.main}'];
            var outerWidth = mainWrapper_1.width(), innerWidth = mainTable.width();
            var scrollbar_1 = $('#' + viewId + '_scrollbar');
            if (scrollbar_1 && scrollbar_1.length) {
                scrollbar_1.css({
                    width: outerWidth
                });
                scrollbar_1.find('._zs_gallery_mx-table_index_-bar').width(innerWidth);
            }
            else {
                var tmpl = "<div id=\"" + viewId + "_scrollbar\" class=\"_zs_gallery_mx-table_index_-scrollbar\" style=\"width:" + outerWidth + "px;\"><div class=\"_zs_gallery_mx-table_index_-bar\" style=\"width:" + innerWidth + "px;\"><div><div>";
                mainWrapper_1.after($(tmpl));
                scrollbar_1 = $('#' + viewId + '_scrollbar');
            }
            var syncToMain = function () {
                mainWrapper_1[0].scrollLeft = scrollbar_1[0].scrollLeft;
            };
            var syncToLeft = function () {
                var sl = mainWrapper_1[0].scrollLeft;
                scrollbar_1[0].scrollLeft = sl;
                // 缓存滚动位置，下次刷新时候恢复
                me['@{scroll.left.back}'] = sl;
            };
            scrollbar_1.off('scroll', syncToMain).on('scroll', syncToMain);
            mainWrapper_1.off('scroll', syncToLeft).on('scroll', syncToLeft);
            me.on('destroy', function () {
                inmain.off('scroll.custombar', watchInmainScroll);
            });
            inmain.off('scroll.custombar', watchInmainScroll).on('scroll.custombar', watchInmainScroll);
            watchInmainScroll();
            if (me['@{scroll.left.back}']) {
                mainWrapper_1[0].scrollLeft = me['@{scroll.left.back}'];
                scrollbar_1[0].scrollLeft = me['@{scroll.left.back}'];
            }
        }
        else {
            me['@{need.scroll}'] = false;
            var scrollbar = $('#' + viewId + '_scrollbar');
            if (scrollbar && scrollbar.length) {
                scrollbar.remove();
            }
        }
    },
    '@{sticky.init}': function () {
        var me = this;
        var owner = me['@{owner.node}'];
        var mainHeader = me['@{table.main.thead}'], leftHeader = me['@{table.left.thead}'];
        if (me['@{need.sticky}']) {
            if (me['@{scroll.wrapper}']) {
                // 自定义滚动节点
                var inmain_1 = me['@{scroll.wrapper}'];
                var watchInmainScroll_1 = function () {
                    var top = inmain_1.scrollTop();
                    var max = owner.height() - inmain_1.height();
                    if (top >= 0 && top <= max) {
                        me['@{sync.sticky.pos}'](inmain_1, top);
                    }
                    else {
                        me['@{sync.sticky.pos.recover}'](inmain_1);
                    }
                };
                me.on('destroy', function () {
                    inmain_1.off('scroll.customsticky', watchInmainScroll_1);
                });
                inmain_1.on('scroll.customsticky', watchInmainScroll_1);
                watchInmainScroll_1();
            }
            else {
                // 相对于window滚动
                var inmain_2 = $(window);
                var headerHeight_1 = me['@{table.main.thead}'].height();
                // 预留顶部间隔
                var interval_1 = +me['@{sticky.interval}'];
                var watchInmainScroll = function () {
                    var top = inmain_2.scrollTop();
                    var ownerOffset = owner.offset();
                    var min = ownerOffset.top - interval_1;
                    var max = min + owner.height() - headerHeight_1;
                    if (top >= min && top <= max) {
                        me['@{sync.sticky.pos}'](inmain_2, top - min);
                    }
                    else {
                        me['@{sync.sticky.pos.recover}'](inmain_2);
                    }
                };
                me.on('destroy', function () {
                    inmain_2.off('scroll.sticky');
                });
                if (me['@{sticky.end}']) {
                    // 滚动时隐藏，滚动结束显示
                    inmain_2.on('scroll.sticky', function () {
                        me['@{sync.sticky.pos.recover}'](inmain_2);
                        clearTimeout(me['@{sticky.end.timer}']);
                        me['@{sticky.end.timer}'] = setTimeout(me.wrapAsync(function () {
                            var top = inmain_2.scrollTop();
                            var ownerOffset = owner.offset();
                            var min = ownerOffset.top - interval_1;
                            var max = min + owner.height() - headerHeight_1;
                            if (top >= min && top <= max) {
                                me['@{sync.sticky.pos}'](inmain_2, top - min - headerHeight_1);
                                var duration = 200;
                                mainHeader.animate({
                                    top: top - min
                                }, duration);
                                if (leftHeader) {
                                    leftHeader.animate({
                                        top: top - min
                                    }, duration);
                                }
                            }
                            else {
                                me['@{sync.sticky.pos.recover}'](inmain_2);
                            }
                        }), 250);
                    });
                }
                else {
                    inmain_2.on('scroll.sticky', watchInmainScroll);
                }
                watchInmainScroll();
            }
        }
    },
    '@{sync.sticky.pos}': function (node, top) {
        var me = this;
        var mainWrapper = me['@{table.main.wrapper}'], mainHeader = me['@{table.main.thead}'], leftWrapper = me['@{table.left.wrapper}'], leftHeader = me['@{table.left.thead}'];
        var headerHeight = mainHeader.height();
        mainWrapper.css({
            paddingTop: headerHeight
        });
        mainHeader.css({
            position: 'absolute',
            zIndex: 80,
            top: top
        });
        if (leftHeader) {
            leftWrapper.css({
                paddingTop: headerHeight
            });
            leftHeader.css({
                position: 'absolute',
                zIndex: 80,
                top: top
            });
        }
    },
    '@{sync.sticky.pos.recover}': function (node) {
        var me = this;
        var mainWrapper = me['@{table.main.wrapper}'], mainHeader = me['@{table.main.thead}'], leftWrapper = me['@{table.left.wrapper}'], leftHeader = me['@{table.left.thead}'];
        mainWrapper.css({
            paddingTop: 0
        });
        mainHeader.css({
            position: 'initial',
            zIndex: 'auto',
            top: 'auto'
        });
        if (leftHeader) {
            leftWrapper.css({
                paddingTop: 0
            });
            leftHeader.css({
                position: 'initial',
                zIndex: 'auto',
                top: 'auto'
            });
        }
    },
    /**
     * 根据内容算头部
     * 内容存在时，取表单第一行计算整体内容宽度
     * 组件只考虑了表单内容colspan的情况，未考虑rowspan情况
     * thead存在分组的情况，rowspan+colspan，用tbody内容的宽度去同步表头的宽度
     */
    '@{table.sync.th.width}': function () {
        var me = this;
        var wrapFn = function (table) {
            var trs = table.find('tbody>tr');
            var headTrs = table.find('thead>tr');
            // 宽度设置在th上
            var widthArr = [];
            var firstThs = table.find('thead>tr:first-child>th');
            for (var i = 0; i < firstThs.length; i++) {
                var th = firstThs.eq(i);
                var colspan = +th.attr('colspan') || 1;
                var width = th.outerWidth();
                for (var j = 0; j < colspan; j++) {
                    widthArr.push(width / colspan);
                }
            }
            var len = trs.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    var tds = $(trs[i]).find('td');
                    var gap = 0;
                    for (var j = 0; j < tds.length; j++) {
                        var td = tds.eq(j);
                        var colspan = +td.attr('colspan') || 1;
                        var width = 0;
                        for (var k = 0; k < colspan; k++) {
                            width += widthArr[k + gap];
                        }
                        td.css('width', width);
                        gap = gap + colspan;
                    }
                }
            }
            // 同步宽度到表头
            // 二维数组
            var rows = [];
            // 计算同一行的x位置
            for (var i = 0; i < headTrs.length; i++) {
                var ths = $(headTrs[i]).find('th');
                var gap = 0, row = [];
                for (var j = 0; j < ths.length; j++) {
                    var td = ths.eq(j);
                    var colspan = +td.attr('colspan') || 1, rowspan = +td.attr('rowspan') || 1;
                    row.push({
                        x: gap,
                        y: i,
                        colspan: colspan,
                        rowspan: rowspan,
                        left: td.offset().left //用于判断位置
                    });
                    gap = gap + colspan;
                }
                rows.push(row);
            }
            //计算 rowspan对后边行的影响
            for (var rowIndex = 0; rowIndex < rows.length - 1; rowIndex++) {
                var row = rows[rowIndex];
                for (var cellIndex = 0; cellIndex < row.length; cellIndex++) {
                    var curCell = row[cellIndex];
                    if (curCell.rowspan > 1) {
                        // 后面行，left<当前cell的位置进行移动
                        for (var nextRowIndex = rowIndex + 1; (nextRowIndex < rows.length) && (curCell.rowspan > nextRowIndex - rowIndex); nextRowIndex++) {
                            var nextRow = rows[nextRowIndex];
                            for (var nextCellIndex = 0; nextCellIndex < nextRow.length; nextCellIndex++) {
                                var nextCell = nextRow[nextCellIndex];
                                if (nextCell.left > curCell.left) {
                                    nextCell.x += curCell.colspan;
                                }
                            }
                        }
                    }
                }
            }
            for (var i = 0; i < headTrs.length; i++) {
                var ths = $(headTrs[i]).find('th');
                for (var j = 0; j < ths.length; j++) {
                    var width = 0;
                    var cell = rows[i][j];
                    for (var k = 0; k < cell.colspan; k++) {
                        width += widthArr[cell.x + k];
                    }
                    ths.eq(j).css('width', width);
                }
                rows.push(row);
            }
        };
        wrapFn(me['@{table.main}']);
        var leftTable = me['@{table.left}'];
        if (leftTable) {
            wrapFn(leftTable);
        }
    },
    '@{table.width.get}': function (table) {
        var ths = table.find('thead>tr:first-child>th');
        var width = table.attr('width');
        if (!width) {
            width = 0;
            for (var i = ths.length; i--;) {
                var th = ths.eq(i);
                var thWidth = 120;
                var style = th.attr('style');
                if (style) {
                    var m = style.match(WidthReg);
                    if (m) {
                        thWidth = parseInt(m[1]);
                    }
                }
                else {
                    var m = th.attr('width');
                    if (m) {
                        thWidth = +m;
                    }
                    else {
                        thWidth = th.outerWidth();
                    }
                }
                width += thWidth;
            }
        }
        return +width;
    },
    '@{left.table.sync.width}': function () {
        var me = this;
        var table = me['@{table.left}'];
        var wrapper = me['@{table.left.wrapper}'];
        var width = me['@{table.width.get}'](table);
        table.css('width', width);
        table.find('thead').css('width', width);
        wrapper.css('width', table.outerWidth());
    },
    '@{main.table.sync.width}': function () {
        var me = this;
        var node = me['@{owner.node}'];
        var table = me['@{table.main}'];
        var leftTable = me['@{table.left}'];
        var layoutWidth = node.width() - leftTable.outerWidth();
        var width = me['@{table.width.get}'](table);
        var leftWrapper = me['@{table.left.wrapper}'];
        if (width > layoutWidth) {
            table.css('width', width);
            table.find('thead').css('width', width);
            leftWrapper.css({
                'position': 'relative',
                'z-index': 2
            });
            leftWrapper.addClass('_zs_gallery_mx-table_index_-left-shadow');
        }
        else {
            table.css('width', layoutWidth);
            table.find('thead').css('width', layoutWidth);
            leftWrapper.removeClass('_zs_gallery_mx-table_index_-left-shadow');
        }
    },
    /**
     * 表格分栏时同步两边表格的表头高度
     */
    '@{table.sync.height}': function () {
        var me = this;
        var table = me['@{table.main}'], leftTable = me['@{table.left}'];
        var trs = table.find('tbody>tr'), leftTrs = leftTable.find('tbody>tr');
        for (var i = 0; i < leftTrs.length; i++) {
            var maxHeight = Math.max($(leftTrs[i]).height(), $(trs[i]).height());
            $(leftTrs[i]).height(maxHeight);
            $(trs[i]).height(maxHeight);
        }
        // thead > tr（可能分组分行）
        var mainHeadTrs = table.find('thead>tr'), leftHeadTrs = leftTable.find('thead>tr');
        var getHeight = function (headTrs) {
            var headHeight = 0;
            for (var i = 0; i < headTrs.length; i++) {
                headHeight += $(headTrs[i]).height();
            }
            return headHeight;
        };
        var maxHeaderHeight = Math.max(getHeight(mainHeadTrs), getHeight(leftHeadTrs));
        if (mainHeadTrs.length == 1) {
            mainHeadTrs.height(maxHeaderHeight);
        }
        if (leftHeadTrs.length == 1) {
            leftHeadTrs.height(maxHeaderHeight);
        }
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (me.owner && (me.owner.pId == e.vId)) {
            me['@{trigger.rechange}']();
        }
    },
    '$doc<navslidend,tableresize>': function (e) {
        this['@{trigger.rechange}']();
    },
    '$win<resize>': function (e) {
        this['@{trigger.rechange}']();
    },
    '@{trigger.rechange}': function () {
        var me = this;
        me['@{rechange}']();
        if (Magix.task) {
            Magix.task(me['@{rechange}'], [], me);
        }
    },
    '@{rechange}': function () {
        var me = this;
        var leftTable = me['@{table.left}'];
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
    '@{toggle.hover.state}': function (index, action) {
        var me = this;
        var hoverClass = me['@{hover.class}'];
        var trs = me['@{table.main}'].find('tbody>tr');
        if (trs.length == 0) {
            // 表格被清空了
            return;
        }
        var action = action + 'Class';
        var operationTrClass = 'operation-tr', operationTrOpenClass = 'operation-tr-open';
        var tr = trs.eq(index);
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
        var next = tr.next('.' + operationTrClass);
        var hasNext = next && next.length;
        if (hasNext) {
            next[action](operationTrOpenClass);
        }
        var leftTable = me['@{table.left}'];
        if (leftTable) {
            var leftTrs = leftTable.find('tbody>tr');
            var leftTr = leftTrs.eq(index);
            leftTr[action](hoverClass);
            if (hasNext) {
                var leftNext = leftTr.next('.' + operationTrClass);
                leftNext[action](operationTrOpenClass);
            }
        }
    },
    '$tbody>tr<mouseover>': function (e) {
        var me = this;
        var hoverClass = me['@{hover.class}'];
        var target = e.eventTarget;
        var flag = !Magix.inside(e.relatedTarget, target);
        if (!flag || $(target).hasClass('operation-tr')) {
            // 操作行hover忽略
            return;
        }
        // 取消当前选中
        me['@{toggle.hover.state}'](me['@{hover.index}'], 'remove');
        // 更新选中项
        var trs = $(target).parents('tbody').find('tr');
        var index = trs.index(target);
        me['@{hover.index}'] = index;
        me['@{toggle.hover.state}'](index, 'add');
    },
    '@{sync.scroll.pos.custom}': function (node) {
        var me = this;
        if (!me['@{need.scroll}']) {
            return;
        }
        var top = node.scrollTop();
        var leftWrapper = me['@{table.left.wrapper}'], mainTable = me['@{table.main}'];
        var scrollbar = $('#' + me.id + '_scrollbar');
        var bar = scrollbar.find('._zs_gallery_mx-table_index_-bar');
        var scrollbarHeight = scrollbar.height(), barHeight = bar.height(), left = leftWrapper.width();
        var targetTop;
        ;
        if (mainTable.height() > node.height()) {
            targetTop = node.height() - scrollbarHeight + top;
        }
        else {
            targetTop = node.height() - scrollbarHeight;
        }
        scrollbar.css({
            display: 'block',
            position: 'absolute',
            left: left,
            top: targetTop
        });
    },
    '@{sync.scroll.pos.win}': function (node) {
        var me = this;
        if (!me['@{need.scroll}']) {
            return;
        }
        var top = node.scrollTop(), maxHeight = node.height();
        var leftWrapper = me['@{table.left.wrapper}'], mainTable = me['@{table.main}'];
        var tbody = mainTable.find('tbody');
        var between = function (value) {
            var min = top, max = top + maxHeight;
            return (min <= value) && (value <= max);
        };
        var scrollbar = $('#' + me.id + '_scrollbar');
        var bar = scrollbar.find('._zs_gallery_mx-table_index_-bar');
        var scrollbarHeight = scrollbar.height(), barHeight = bar.height();
        var tbodyTop = tbody.offset().top;
        var tbodyHeight = tbody.height();
        var tbodyBottom = tbodyTop + tbodyHeight + scrollbarHeight - barHeight;
        // table在视线范围之内
        if (tbodyBottom < top || tbodyTop > top + maxHeight) {
            scrollbar.css({
                display: 'none'
            });
        }
        else {
            if (between(tbodyBottom)) {
                // 底部可见
                var left = leftWrapper.width();
                scrollbar.css({
                    display: 'block',
                    position: 'absolute',
                    left: left,
                    bottom: barHeight - scrollbarHeight
                });
            }
            else {
                var left = leftWrapper.offset().left + leftWrapper.width();
                scrollbar.css({
                    display: 'block',
                    position: 'fixed',
                    left: left,
                    bottom: 0
                });
            }
        }
    }
});

});