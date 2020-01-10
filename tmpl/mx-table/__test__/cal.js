let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@cal.less');

module.exports = Base.extend({
    tmpl: '@cal.html',
    render() {
        let that = this;
        let viewId = that.id;
        that.updater.digest({
            viewId,
            rows: []
        });

        let table = $('#' + viewId + '_table');
        let trs = table.find('tbody>tr');
        // 二维数组
        let rows = [];

        // 计算同一行的x位置
        for (let i = 0; i < trs.length; i++) {
            let tds = $(trs[i]).find('td');

            let gap = 0;
            let row = [];
            for (let j = 0; j < tds.length; j++) {
                let td = tds.eq(j);
                let colspan = +td.attr('colspan') || 1,
                    rowspan = +td.attr('rowspan') || 1;
                row.push({
                    x: gap,
                    y: i,
                    colspan,
                    rowspan,
                    left: td.offset().left,  //用于判断位置
                    content: td.html()
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

        that.updater.digest({
            rows
        })
    }
});