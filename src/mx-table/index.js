/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_gallery_mx-table_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-table_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-table_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-table/index\"] {\n  position: relative;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-wrapper,\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-wrapper {\n  top: 0;\n  z-index: 1;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-wrapper::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar {\n  display: none;\n  z-index: 2;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar ._zs_gallery_mx-table_index_-bar {\n  height: 10px;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar {\n  width: 14px;\n  height: 14px;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-scrollbar::-webkit-scrollbar-thumb {\n  background-color: #d8e3ff;\n  border-radius: 7px;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  background-color: #fff;\n  width: auto;\n}\n[mx-view*=\"mx-table/index\"] ._zs_gallery_mx-table_index_-left-shadow {\n  box-shadow: 3px 0 4px rgba(0, 0, 0, 0.06);\n}\n");
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
        me['@{hover.class}'] = extra.rowHoverClass || 'hover-tr';
        // 自定义滚动节点
        if (extra.scrollWrapper) {
            me['@{scroll.wrapper}'] = $('#' + extra.scrollWrapper);
        }
        me.assign();
    },
    assign: function () {
        return true;
    },
    render: function () {
        var me = this;
        me['@{table.init}']();
        me['@{toggle.hover.state}'](me['@{hover.index}'], 'add');
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
            if (!me['@{setup.scroll}']) {
                me['@{setup.scroll}'] = 1;
                me.on('destroy', function () {
                    inmain.off('scroll.custombar', watchInmainScroll);
                });
                inmain.off('scroll.custombar', watchInmainScroll).on('scroll.custombar', watchInmainScroll);
            }
            watchInmainScroll();
            if (me['@{scroll.left.back}']) {
                mainWrapper_1[0].scrollLeft = me['@{scroll.left.back}'];
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
        if (me['@{need.sticky}']) {
            var inmain_1, watchInmainScroll_1;
            if (me['@{scroll.wrapper}']) {
                inmain_1 = me['@{scroll.wrapper}'];
                watchInmainScroll_1 = function () {
                    me['@{sync.sticky.pos.custom}'](inmain_1);
                };
            }
            else {
                inmain_1 = $(window);
                watchInmainScroll_1 = function () {
                    me['@{sync.sticky.pos.win}'](inmain_1);
                };
            }
            if (!me['@{setup.sticky}']) {
                me['@{setup.sticky}'] = 1;
                me.on('destroy', function () {
                    inmain_1.off('scroll.customsticky', watchInmainScroll_1);
                });
                inmain_1.on('scroll.customsticky', watchInmainScroll_1);
                me['@{thead.height}'] = me['@{table.main.thead}'].height();
            }
            watchInmainScroll_1();
        }
    },
    /**
     * 根据内容算头部
     */
    '@{table.sync.th.width}': function () {
        var me = this;
        var wrapFn = function (table) {
            var trs = table.find('tbody>tr');
            var firstTrs = table.find('tbody>tr:first-child>td');
            var widthArr = [];
            for (var i = 0; i < firstTrs.length; i++) {
                var td = firstTrs.eq(i);
                var colspan = +td.attr('colspan') || 1;
                var width = td.outerWidth();
                for (var j = 0; j < colspan; j++) {
                    widthArr.push(width / colspan);
                }
            }
            var len = trs.length;
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
            var headTrs = table.find('thead>tr');
            for (var i = 0; i < headTrs.length; i++) {
                var ths = $(headTrs[i]).find('th');
                var gap = 0;
                for (var j = 0; j < ths.length; j++) {
                    var th = ths.eq(j);
                    var colspan = +th.attr('colspan') || 1;
                    var width = 0;
                    for (var k = 0; k < colspan; k++) {
                        width += widthArr[k + gap];
                    }
                    th.css('width', width);
                    gap = gap + colspan;
                }
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
        if (e.vId == me.owner.pId) {
            me['@{rechange}']();
        }
    },
    '$doc<navslidend,tableresize>': function (e) {
        this['@{rechange}']();
    },
    '$win<resize>': function (e) {
        this['@{rechange}']();
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
        var action = action + 'Class';
        var operationTrClass = 'operation-tr', operationTrOpenClass = 'operation-tr-open', operationNextTrOpenClass = 'next-operation-tr-open';
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
            tr[action](operationNextTrOpenClass);
        }
        var leftTable = me['@{table.left}'];
        if (leftTable) {
            var leftTrs = leftTable.find('tbody>tr');
            var leftTr = leftTrs.eq(index);
            leftTr[action](hoverClass);
            if (hasNext) {
                var leftNext = leftTr.next('.' + operationTrClass);
                leftNext[action](operationTrOpenClass);
                leftTr[action](operationNextTrOpenClass);
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
    '@{sync.sticky.pos}': function (node, sticky, top) {
        var me = this;
        var headerHeight = me['@{thead.height}'];
        var mainWrapper = me['@{table.main.wrapper}'], mainHeader = me['@{table.main.thead}'], leftWrapper = me['@{table.left.wrapper}'], leftHeader = me['@{table.left.thead}'];
        var nodeHeight = node.height();
        if (sticky) {
            mainWrapper.css({
                paddingTop: headerHeight
            });
            mainHeader.css({
                position: 'absolute',
                zIndex: 99,
                top: top
            });
            if (leftHeader) {
                leftWrapper.css({
                    paddingTop: headerHeight
                });
                leftHeader.css({
                    position: 'absolute',
                    zIndex: 99,
                    top: top
                });
            }
        }
        else {
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
        }
    },
    '@{sync.sticky.pos.custom}': function (node) {
        var me = this;
        if (!me['@{need.sticky}']) {
            return;
        }
        var top = node.scrollTop();
        var headerHeight = me['@{thead.height}'];
        var owner = me['@{owner.node}'];
        var max = owner.height() - node.height();
        if (top >= 0 && top <= max) {
            me['@{sync.sticky.pos}'](node, true, top);
        }
        else {
            me['@{sync.sticky.pos}'](node, false);
        }
    },
    '@{sync.sticky.pos.win}': function (node) {
        var me = this;
        if (!me['@{need.sticky}']) {
            return;
        }
        var top = node.scrollTop();
        var headerHeight = me['@{thead.height}'];
        var owner = me['@{owner.node}'];
        var ownerOffset = owner.offset();
        var min = ownerOffset.top;
        var max = ownerOffset.top + owner.height() - headerHeight;
        if (top >= min && top <= max) {
            me['@{sync.sticky.pos}'](node, true, top - min);
        }
        else {
            me['@{sync.sticky.pos}'](node, false);
        }
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