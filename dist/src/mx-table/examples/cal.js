/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/cal",["magix","examples/example","$"],(require,exports,module)=>{
/*Magix,Base,$*/

var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-table_examples_cal_","._zs_gallery_mx-table_examples_cal_-custom {\n  width: 600px;\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_mx-table_examples_cal_-custom tbody td {\n  padding: 8px!important;\n  background-color: transparent!important;\n  border-right: 1px solid var(--color-border);\n}\n._zs_gallery_mx-table_examples_cal_-tag {\n  display: inline-block;\n  margin: 0 4px;\n  padding: 0 4px;\n  height: 20px;\n  line-height: 16px;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-border);\n  text-align: center;\n  border-radius: 2px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n._zs_gallery_mx-table_examples_cal_-prefix {\n  width: 30px;\n}\n");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, rows = $$.rows; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerye4:_" class="mb20"><div mxs="_zs_gallerye4:_" class="mb10">1. 原始表格：当前4*4的表格，x坐标的取值范围【0-3】，y的取值范围【0-3】</div><div mxa="_zs_gallerye4:a" class="pl15"><table class="table _zs_gallery_mx-table_examples_cal_-custom" id="';
    $line = 5;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_table"><tbody mxs="_zs_gallerye4:a"><tr><td rowspan="2">A</td><td>B</td><td rowspan="2">C</td><td>D</td></tr><tr><td rowspan="3">E</td><td>F</td></tr><tr><td>G</td><td>H</td><td>I</td></tr><tr><td>J</td><td colspan="2">L</td></tr></tbody></table></div></div><div mxs="_zs_gallerye4:b" class="mb20"><div class="mb10">2. 根据属性<span class="_zs_gallery_mx-table_examples_cal_-tag">colspan</span>得到单元格相对于当前行的相对位置<span class="_zs_gallery_mx-table_examples_cal_-tag">x</span>，后一行的位置等于<span class="_zs_gallery_mx-table_examples_cal_-tag">prevRow.x + prevRow.colspan</span>，第一次计算得到以下结果：</div><div class="pl15"><table class="table _zs_gallery_mx-table_examples_cal_-custom mb10"><tbody><tr><td>(0,0)<span class="color-brand ml10">A</span></td><td>(1,0)<span class="color-brand ml10">B</span></td><td>(2,0)<span class="color-brand ml10">C</span></td><td>(3,0)<span class="color-brand ml10">D</span></td></tr><tr><td>(0,1)<span class="color-brand ml10">E</span></td><td>(1,1)<span class="color-brand ml10">F</span></td><td>(2,1)</td><td>(3,1)</td></tr><tr><td>(0,2)<span class="color-brand ml10">G</span></td><td>(1,2)<span class="color-brand ml10">H</span></td><td>(2,2)<span class="color-brand ml10">I</span></td><td>(3,2)</td></tr><tr><td>(0,3)<span class="color-brand ml10">J</span></td><td>(1,3)<span class="color-brand ml10">L</span></td><td>(2,3)</td><td>(3,3)</td></tr></tbody></table><pre class="tip-content">\n// 二维数组\nlet rows = [];\n\n// 计算同一行的x位置\nfor (let i = 0; i &lt; trs.length; i++) &#123;\n    let tds = $(trs[i]).find(\'td\');\n\n    let gap = 0;\n    let row = [];\n    for (let j = 0; j &lt; tds.length; j++) &#123;\n        let td = tds.eq(j);\n        let colspan = +td.attr(\'colspan\') || 1,\n            rowspan = +td.attr(\'rowspan\') || 1;\n        row.push(&#123;\n            x: gap,\n            y: i,\n            colspan,\n            rowspan,\n            left: td.offset().left,  //用于判断位置\n            content: td.html()\n        &#125;)\n        gap = gap + colspan;\n    &#125;\n\n    rows.push(row);\n&#125;\n        </pre></div></div><div mxs="_zs_gallerye4:c" class="mb20"><div class="mb10">3. 可以从上表看出，由于<span class="_zs_gallery_mx-table_examples_cal_-tag">rowspan</span>的存在，部分单元格在计算位置时存在偏差，分析可得，当前单元格存在rowspan时，以下两种情况的单元格需要进行移动：</div><div class="pl15"><div>1. 当前单元格后面的单元格</div><div class="mb10">2. 两行行差小于当前单元格的rowspan</div><pre class="tip-content">\n//计算 rowspan对后边行的影响\nfor (let rowIndex = 0; rowIndex &lt; rows.length - 1; rowIndex++) &#123;\n    let row = rows[rowIndex];\n    for (let cellIndex = 0; cellIndex &lt; row.length; cellIndex++) &#123;\n        let curCell = row[cellIndex];\n        if (curCell.rowspan &gt; 1) &#123;\n            // 后面行，left&lt;当前cell的位置进行移动\n            for (let nextRowIndex = rowIndex + 1; (nextRowIndex &lt; rows.length) && (curCell.rowspan &gt; nextRowIndex - rowIndex); nextRowIndex++) &#123;\n                let nextRow = rows[nextRowIndex];\n                for (let nextCellIndex = 0; nextCellIndex &lt; nextRow.length; nextCellIndex++) &#123;\n                    let nextCell = nextRow[nextCellIndex];\n                    if (nextCell.left &gt; curCell.left) &#123;\n                        nextCell.x += curCell.colspan;\n                    &#125;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n&#125;    \n        </pre></div></div><div><div mxs="_zs_gallerye4:d" class="mb10">4. 最终结果</div><div mxa="_zs_gallerye4:b" class="pl15 clearfix"><table mxs="_zs_gallerye4:e" class="table _zs_gallery_mx-table_examples_cal_-custom fl"><tbody><tr><td>(0,0)<span class="color-brand ml10">A</span></td><td>(1,0)<span class="color-brand ml10">B</span></td><td>(2,0)<span class="color-brand ml10">C</span></td><td>(3,0)<span class="color-brand ml10">D</span></td></tr><tr><td>(0,1)</td><td>(1,1)<span class="color-brand ml10">E</span></td><td>(2,1)</td><td>(3,1)<span class="color-brand ml10">F</span></td></tr><tr><td>(0,2)<span class="color-brand ml10">G</span></td><td>(1,2)</td><td>(2,2)<span class="color-brand ml10">H</span></td><td>(3,2)<span class="color-brand ml10">I</span></td></tr><tr><td>(0,3)<span class="color-brand ml10">J</span></td><td>(1,3)</td><td>(2,3)<span class="color-brand ml10">L</span></td><td>(3,3)</td></tr></tbody></table><div mxa="_zs_gallerye4:c" class="fl ml20">';
    $line = 151;
    $art = 'each rows as row';
    ;
    $expr = '<%for (var $art_ierokpdnya$art_i = 0, $art_cddlvhe$art_c = rows.length; $art_ierokpdnya$art_i < $art_cddlvhe$art_c; $art_ierokpdnya$art_i++) {    var row = rows[$art_ierokpdnya$art_i]%>';
    for (var $art_ierokpdnya$art_i = 0, $art_cddlvhe$art_c = rows.length; $art_ierokpdnya$art_i < $art_cddlvhe$art_c; $art_ierokpdnya$art_i++) {
        var row = rows[$art_ierokpdnya$art_i];
        $p += ' ';
        $line = 152;
        $art = 'each row as cell';
        ;
        $expr = '<%for (var $art_ileieqjhh$art_i = 0, $art_cnhekhyw$art_c = row.length; $art_ileieqjhh$art_i < $art_cnhekhyw$art_c; $art_ileieqjhh$art_i++) {        var cell = row[$art_ileieqjhh$art_i]%>';
        for (var $art_ileieqjhh$art_i = 0, $art_cnhekhyw$art_c = row.length; $art_ileieqjhh$art_i < $art_cnhekhyw$art_c; $art_ileieqjhh$art_i++) {
            var cell = row[$art_ileieqjhh$art_i];
            $p += '<div mxa="_zs_gallerye4:d" class="clearfix"><div mxa="_zs_gallerye4:e" class="fl _zs_gallery_mx-table_examples_cal_-prefix">';
            $line = 154;
            $art = '=cell.content';
            ;
            $p += ($expr = '<%=cell.content%>', $e(cell.content)) + '：</div><div mxa="_zs_gallerye4:f" class="fl">&#123;x: ';
            $line = 155;
            $art = '=cell.x';
            ;
            $p += ($expr = '<%=cell.x%>', $e(cell.x)) + ', y: ';
            $line = 155;
            $art = '=cell.y';
            ;
            $p += ($expr = '<%=cell.y%>', $e(cell.y)) + '&#125;</div></div>';
            $line = 157;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 158;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/cal.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var viewId = that.id;
        that.updater.digest({
            viewId: viewId,
            rows: []
        });
        var table = $('#' + viewId + '_table');
        var trs = table.find('tbody>tr');
        // 二维数组
        var rows = [];
        // 计算同一行的x位置
        for (var i = 0; i < trs.length; i++) {
            var tds = $(trs[i]).find('td');
            var gap = 0;
            var row = [];
            for (var j = 0; j < tds.length; j++) {
                var td = tds.eq(j);
                var colspan = +td.attr('colspan') || 1, rowspan = +td.attr('rowspan') || 1;
                row.push({
                    x: gap,
                    y: i,
                    colspan: colspan,
                    rowspan: rowspan,
                    left: td.offset().left,
                    content: td.html()
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
        that.updater.digest({
            rows: rows
        });
    }
});

});