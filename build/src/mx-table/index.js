/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_galleryaz","._zs_galleryme{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*=\"mx-table/excel\"],[mx-view*=\"mx-table/index\"]{position:relative}[mx-view*=\"mx-table/excel\"] table,[mx-view*=\"mx-table/index\"] table{table-layout:auto}[mx-view*=\"mx-table/excel\"] ._zs_gallerymf,[mx-view*=\"mx-table/excel\"] ._zs_gallerymg,[mx-view*=\"mx-table/index\"] ._zs_gallerymf,[mx-view*=\"mx-table/index\"] ._zs_gallerymg{position:absolute;left:0;right:0;overflow-x:scroll;overflow-y:hidden}[mx-view*=\"mx-table/excel\"] ._zs_gallerymg,[mx-view*=\"mx-table/index\"] ._zs_gallerymg{top:0;z-index:1;-ms-overflow-style:none;overflow:auto}[mx-view*=\"mx-table/excel\"] ._zs_gallerymg::-webkit-scrollbar,[mx-view*=\"mx-table/index\"] ._zs_gallerymg::-webkit-scrollbar{display:none;width:0;height:0}[mx-view*=\"mx-table/excel\"] ._zs_gallerymg::-webkit-scrollbar-thumb,[mx-view*=\"mx-table/index\"] ._zs_gallerymg::-webkit-scrollbar-thumb{background-color:transparent}[mx-view*=\"mx-table/excel\"] ._zs_gallerymf,[mx-view*=\"mx-table/index\"] ._zs_gallerymf{display:none;z-index:2}[mx-view*=\"mx-table/excel\"] ._zs_gallerymf ._zs_gallerymh,[mx-view*=\"mx-table/index\"] ._zs_gallerymf ._zs_gallerymh{height:10px}[mx-view*=\"mx-table/excel\"] ._zs_gallerymf::-webkit-scrollbar,[mx-view*=\"mx-table/index\"] ._zs_gallerymf::-webkit-scrollbar{width:14px;height:14px}[mx-view*=\"mx-table/excel\"] ._zs_gallerymf::-webkit-scrollbar-thumb,[mx-view*=\"mx-table/index\"] ._zs_gallerymf::-webkit-scrollbar-thumb{background-color:#d8e3ff;border-radius:7px}[mx-view*=\"mx-table/excel\"] ._zs_gallerymi,[mx-view*=\"mx-table/index\"] ._zs_gallerymi{position:absolute;top:0;left:0;z-index:2;background-color:#fff;width:auto}[mx-view*=\"mx-table/excel\"] ._zs_gallerymj,[mx-view*=\"mx-table/index\"] ._zs_gallerymj{box-shadow:3px 0 4px rgba(0,0,0,.06)}");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        // 默认展示第一行
        me['__dw'] = 0;
        var node = $('#' + me.id);
        me['__j'] = node;
        var leftTable = node.find('table[left="true"]');
        if (leftTable && leftTable.length > 0) {
            me['__dx'] = leftTable;
            me['__dy'] = me['__dz'](leftTable, 'left');
            me['__dA'] = leftTable.find('thead');
            me['__dB'] = node.find('table[center="true"]');
        }
        else {
            me['__dB'] = node.find('table');
        }
        me['__dC'] = me['__dz'](me['__dB'], 'main');
        me['__dD'] = me['__dB'].find('thead');
        me['__dE'] = (extra.sticky + '') === 'true';
        me['__dF'] = extra.stickyInterval || 0;
        me['__dG'] = extra.rowHoverClass || 'hover-tr';
        // 自定义滚动节点
        if (extra.scrollWrapper) {
            me['__bs'] = $('#' + extra.scrollWrapper);
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
        me['__dH']();
        me['__dI'](me['__dw'], 'add');
    },
    '__dz': function (table, id) {
        id = this.id + '_' + id;
        table.attr('id', id + '_table');
        var wrapper = table.parent('div');
        wrapper.attr(id, id);
        return wrapper;
    },
    '__dH': function () {
        var me = this;
        // 左侧固定表格
        var leftTable = me['__dx'];
        // 中间滚动表格
        var table = me['__dB'];
        if (leftTable) {
            // 计算左侧固定表格宽度
            me['__dJ']();
            // 滚动表格跨度
            var wrapper = me['__dC'];
            wrapper.addClass('_zs_gallerymg');
            wrapper.css('left', leftTable.outerWidth());
            me['__dK']();
            // 表格分栏时同步两边表格的内容的高度
            me['__dL']();
        }
        // 根据内容宽度计算头部th的宽度
        me['__dM']();
        // 分栏时模拟滚动条
        // windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
        me['__dN']();
        // 表头吸顶
        me['__dO']();
    },
    /**
     * 分栏时模拟滚动条
     * windows下面无法鼠标左右滚动，需要模拟滚动条，滚定条吸底在可视范围之内
     */
    '__dN': function () {
        var me = this;
        var viewId = me.id;
        var leftWrapper = me['__dy'];
        var inmain, watchInmainScroll;
        if (me['__bs']) {
            inmain = me['__bs'];
            watchInmainScroll = function () {
                me['__dP'](inmain);
            };
        }
        else {
            inmain = $(window);
            watchInmainScroll = function () {
                me['__dQ'](inmain);
            };
        }
        if (leftWrapper && (leftWrapper.length > 0) && (leftWrapper.hasClass('_zs_gallerymj'))) {
            me['__dR'] = true;
            var mainWrapper_1 = me['__dC'], mainTable = me['__dB'];
            var outerWidth = mainWrapper_1.width(), innerWidth = mainTable.width();
            var scrollbar_1 = $('#' + viewId + '_scrollbar');
            if (scrollbar_1 && scrollbar_1.length) {
                scrollbar_1.css({
                    width: outerWidth
                });
                scrollbar_1.find('._zs_gallerymh').width(innerWidth);
            }
            else {
                var tmpl = "<div id=\"" + viewId + "_scrollbar\" class=\"_zs_gallerymf\" style=\"width:" + outerWidth + "px;\"><div class=\"_zs_gallerymh\" style=\"width:" + innerWidth + "px;\"><div><div>";
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
                me['__dS'] = sl;
            };
            scrollbar_1.off('scroll', syncToMain).on('scroll', syncToMain);
            mainWrapper_1.off('scroll', syncToLeft).on('scroll', syncToLeft);
            me.on('destroy', function () {
                inmain.off('scroll.custombar', watchInmainScroll);
            });
            inmain.off('scroll.custombar', watchInmainScroll).on('scroll.custombar', watchInmainScroll);
            watchInmainScroll();
            if (me['__dS']) {
                mainWrapper_1[0].scrollLeft = me['__dS'];
                scrollbar_1[0].scrollLeft = me['__dS'];
            }
        }
        else {
            me['__dR'] = false;
            var scrollbar = $('#' + viewId + '_scrollbar');
            if (scrollbar && scrollbar.length) {
                scrollbar.remove();
            }
        }
    },
    '__dO': function () {
        var me = this;
        if (me['__dE']) {
            var inmain_1, watchInmainScroll_1;
            if (me['__bs']) {
                inmain_1 = me['__bs'];
                watchInmainScroll_1 = function () {
                    me['__dT'](inmain_1);
                };
            }
            else {
                inmain_1 = $(window);
                watchInmainScroll_1 = function () {
                    me['__dU'](inmain_1);
                };
            }
            me.on('destroy', function () {
                inmain_1.off('scroll.customsticky', watchInmainScroll_1);
            });
            inmain_1.on('scroll.customsticky', watchInmainScroll_1);
            me['__dV'] = me['__dD'].height();
            watchInmainScroll_1();
        }
    },
    /**
     * 根据内容算头部
     */
    '__dM': function () {
        var me = this;
        var wrapFn = function (table) {
            var trs = table.find('tbody>tr');
            var firstTds = table.find('tbody>tr:first-child>td');
            var widthArr = [];
            for (var i = 0; i < firstTds.length; i++) {
                var td = firstTds.eq(i);
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
            if (len > 0) {
                // 有tbody的时候
                // 根据table的宽度计算
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
            }
            else {
                // 没有tbody的时候，设置自己本身的宽度
                var firstThs = table.find('thead>tr:first-child>th');
                var thWidthArr = [];
                for (var i = 0; i < firstThs.length; i++) {
                    var td = firstThs.eq(i);
                    var colspan = +td.attr('colspan') || 1;
                    var width = td.outerWidth();
                    for (var j = 0; j < colspan; j++) {
                        thWidthArr.push(width / colspan);
                    }
                }
                for (var i = 0; i < headTrs.length; i++) {
                    var ths = $(headTrs[i]).find('th');
                    var gap = 0;
                    for (var j = 0; j < ths.length; j++) {
                        var th = ths.eq(j);
                        var colspan = +th.attr('colspan') || 1;
                        var width = 0;
                        for (var k = 0; k < colspan; k++) {
                            width += thWidthArr[k + gap];
                        }
                        th.css('width', width);
                        gap = gap + colspan;
                    }
                }
            }
        };
        wrapFn(me['__dB']);
        var leftTable = me['__dx'];
        if (leftTable) {
            wrapFn(leftTable);
        }
    },
    '__dW': function (table) {
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
    '__dJ': function () {
        var me = this;
        var table = me['__dx'];
        var wrapper = me['__dy'];
        var width = me['__dW'](table);
        table.css('width', width);
        table.find('thead').css('width', width);
        wrapper.css('width', table.outerWidth());
    },
    '__dK': function () {
        var me = this;
        var node = me['__j'];
        var table = me['__dB'];
        var leftTable = me['__dx'];
        var layoutWidth = node.width() - leftTable.outerWidth();
        var width = me['__dW'](table);
        var leftWrapper = me['__dy'];
        if (width > layoutWidth) {
            table.css('width', width);
            table.find('thead').css('width', width);
            leftWrapper.css({
                'position': 'relative',
                'z-index': 2
            });
            leftWrapper.addClass('_zs_gallerymj');
        }
        else {
            table.css('width', layoutWidth);
            table.find('thead').css('width', layoutWidth);
            leftWrapper.removeClass('_zs_gallerymj');
        }
    },
    /**
     * 表格分栏时同步两边表格的表头高度
     */
    '__dL': function () {
        var me = this;
        var table = me['__dB'], leftTable = me['__dx'];
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
            me['__dX']();
        }
    },
    '$doc<navslidend,tableresize>': function (e) {
        this['__dX']();
    },
    '$win<resize>': function (e) {
        this['__dX']();
    },
    '__dX': function () {
        var me = this;
        var leftTable = me['__dx'];
        if (leftTable) {
            // 重新计算主体表格的宽度
            me['__dK']();
            // 重新同步内容高度
            me['__dL']();
            // 重新初始化模拟的滚动条
            me['__dN']();
        }
        // 重新同步表头高度
        me['__dM']();
    },
    '__dI': function (index, action) {
        var me = this;
        var hoverClass = me['__dG'];
        var trs = me['__dB'].find('tbody>tr');
        if (trs.length == 0) {
            // 表格被清空了
            return;
        }
        var action = action + 'Class';
        var operationTrClass = 'operation-tr', operationTrOpenClass = 'operation-tr-open', operationNextTrOpenClass = 'next-operation-tr-open';
        var tr = trs.eq(index);
        if (!tr || !tr.length || (tr.css('display') == 'none')) {
            // 1. 数据变化可能导致hover行不存在了
            // 2. hover的这一行外部有样式控制隐藏了
            // 不存在则更新到第一行
            index = 0;
            me['__dw'] = index;
            me['__j'].attr('data-hover', index);
            tr = trs.eq(index);
        }
        tr[action](hoverClass);
        var next = tr.next('.' + operationTrClass);
        var hasNext = next && next.length;
        if (hasNext) {
            next[action](operationTrOpenClass);
            tr[action](operationNextTrOpenClass);
        }
        var leftTable = me['__dx'];
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
        var hoverClass = me['__dG'];
        var target = e.eventTarget;
        var flag = !Magix.inside(e.relatedTarget, target);
        if (!flag || $(target).hasClass('operation-tr')) {
            // 操作行hover忽略
            return;
        }
        // 取消当前选中
        me['__dI'](me['__dw'], 'remove');
        // 更新选中项
        var trs = $(target).parents('tbody').find('tr');
        var index = trs.index(target);
        me['__dw'] = index;
        me['__dI'](index, 'add');
    },
    '__dY': function (node, sticky, top) {
        var me = this;
        var headerHeight = me['__dV'];
        var mainWrapper = me['__dC'], mainHeader = me['__dD'], leftWrapper = me['__dy'], leftHeader = me['__dA'];
        var nodeHeight = node.height();
        if (sticky) {
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
    '__dT': function (node) {
        var me = this;
        if (!me['__dE']) {
            return;
        }
        var top = node.scrollTop();
        var headerHeight = me['__dV'];
        var owner = me['__j'];
        var max = owner.height() - node.height();
        if (top >= 0 && top <= max) {
            me['__dY'](node, true, top);
        }
        else {
            me['__dY'](node, false);
        }
    },
    '__dU': function (node) {
        var me = this;
        if (!me['__dE']) {
            return;
        }
        var top = node.scrollTop();
        var headerHeight = me['__dV'];
        var owner = me['__j'];
        var ownerOffset = owner.offset();
        var interval = +me['__dF'];
        var min = ownerOffset.top - interval;
        var max = min + owner.height() - headerHeight;
        if (top >= min && top <= max) {
            me['__dY'](node, true, top - min);
        }
        else {
            me['__dY'](node, false);
        }
    },
    '__dP': function (node) {
        var me = this;
        if (!me['__dR']) {
            return;
        }
        var top = node.scrollTop();
        var leftWrapper = me['__dy'], mainTable = me['__dB'];
        var scrollbar = $('#' + me.id + '_scrollbar');
        var bar = scrollbar.find('._zs_gallerymh');
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
    '__dQ': function (node) {
        var me = this;
        if (!me['__dR']) {
            return;
        }
        var top = node.scrollTop(), maxHeight = node.height();
        var leftWrapper = me['__dy'], mainTable = me['__dB'];
        var tbody = mainTable.find('tbody');
        var between = function (value) {
            var min = top, max = top + maxHeight;
            return (min <= value) && (value <= max);
        };
        var scrollbar = $('#' + me.id + '_scrollbar');
        var bar = scrollbar.find('._zs_gallerymh');
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