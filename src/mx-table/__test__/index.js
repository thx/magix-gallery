/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/index",["magix","../../mx-checkbox/linkage","../sticky","__test__/hl","../index","../attach","../rwd"],(require,exports,module)=>{
/*Magix,Linkage*/
require("../sticky");
require("__test__/hl");
require("../index");
require("../attach");
require("../rwd");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../../mx-checkbox/linkage");
Magix.applyStyle("__mx-table___test___index_",".__mx-table___test___index_-row-hover {\n  background: red;\n}\n");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_U:_">mx-table</h2><h3 mxs="_U:a">固定表头</h3><div mxv mxa="_U:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_U:a" mx-view="mx-table/sticky"><table mxv mxa="_U:b" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxs="_U:b"><th colspan="3">合并列测试</th><th colspan="3">合并列测试</th></tr><tr mxv><th mxv><input mxs="_U:c" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<th>示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example1" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 5; j++) {%>';
        for (var j = 0; j < 5; j++) {
            ;
            $p += '<td>示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_U:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-vframe src="app/gallery/mx-table/sticky"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div><h3 mxs="_U:e" class="__mx-style_index_-mt30">固定列</h3><div mxv mxa="_U:c" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_U:d" mx-view="mx-table/index?rwdRange=2%2C-1"><table mxv mxa="_U:e" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv mxa="_U:f" style="width:50px"><input mxs="_U:f" type="checkbox" class="__mx-style_index_-checkbox" linkage="example2"/></th>';
    $expr = '<%for (var i = 0; i < 25; i++) {%>';
    for (var i = 0; i < 25; i++) {
        ;
        $p += '<th mxa="_U:g" style="width:200px">示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '<th mxs="_U:g" style="width:100px">操作</th><th mxs="_U:h" style="width:200px">操作</th></tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example2" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 25; j++) {%>';
        for (var j = 0; j < 25; j++) {
            ;
            $p += '<td>示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '<td><a mxs="_U:i" href="#">删除</a><br mxs="_U:j"/><a mxs="_U:k" href="#">报告</a><br mxs="_U:j"/>';
        $expr = '<%if (i % 3) {%>';
        if (i % 3) {
            ;
            $p += '<a mxs="_U:l" href="#">代码</a><br mxs="_U:j"/><a mxs="_U:m" href="#">备注</a><br mxs="_U:j"/><a mxs="_U:n" href="#">更多</a><br mxs="_U:j"/>';
            $expr = '<%}%>';
        }
        ;
        $p += '</td><td mxs="_U:o">adf</td></tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_U:p" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-table rwd-range="2,-1"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example2" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n                &lt;th style="width:100px"&gt;操作&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example2" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n                &lt;td&gt;\n                    &lt;a href="#"&gt;删除&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;报告&lt;/a&gt;&lt;br /&gt;\n                    &lt;%if(i%3){%&gt;\n                    &lt;a href="#"&gt;代码&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;备注&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;更多&lt;/a&gt;&lt;br /&gt;\n                    &lt;%}%&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><h3 mxs="_U:q" class="__mx-style_index_-mt30">固定列和表头</h3><div mxv mxa="_U:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_U:i" mx-view="mx-table/index?rwdRange=2%2C-2&sticky=true&rowHoverClass=__mx-table___test___index_-row-hover"><table mxv mxa="_U:j" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv mxa="_U:k" style="width:50px"><input mxs="_U:r" type="checkbox" class="__mx-style_index_-checkbox" linkage="example3"/></th>';
    $expr = '<%for (var i = 0; i < 25; i++) {%>';
    for (var i = 0; i < 25; i++) {
        ;
        $p += '<th mxa="_U:l" style="width:200px">示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example3" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 25; j++) {%>';
        for (var j = 0; j < 25; j++) {
            ;
            $p += '<td>示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_U:s" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-vframe src="app/gallery/mx-table/index" rwd-range="2,-2" sticky="true"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example3" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example3" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div><h3 mxs="_U:t" class="__mx-style_index_-mt30">自由组装</h3><div mxs="_U:u">当需要高度自定义时，可以使用该模式，按要求处理相应的内容即可</div><div mxs="_U:v" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-table/attach?sticky=true&rowHoverClass=__mx-table___test___index_-row-hover"><div table-role="main"><table class="__mx-style_index_-table __mx-style_index_-table-striped" style="width:4140px"><thead><tr><th rowspan="2" style="width:140px"></th><th rowspan="2" style="width:2600px">eee</th><th colspan="2">bb</th><th colspan="3">xxxx</th><th colspan="2"></th></tr><tr><th style="width:200px;">111</th><th style="width:200px;">111</th><th style="width:200px;">111</th><th style="width:200px;">111</th><th style="width:200px;">111</th><th style="width:200px;"></th><th style="width:200px;"></th></tr></thead><tbody><tr><td style="width:140px"></td><td style="width:2600px">1111</td><td style="width:200px">2222</td><td style="width:200px">333</td><td style="width:200px">aaa</td><td style="width:200px">1111</td><td style="width:200px">2222</td><td style="width:200px"></td><td style="width:200px"></td></tr><tr><td></td><td>1111</td><td>2222</td><td>333<br/>eeeeee</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr><tr><td></td><td>1111<br/>aaaa</td><td>2222</td><td>333</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr></tbody></table></div><table class="__mx-style_index_-table __mx-style_index_-table-striped" table-role="left-sticky" style="width:140px;"><thead><tr><th style="width:140px;height:85px;">aa</th></tr></thead><tbody><tr><td>aaa</td></tr><tr><td>aaa</td></tr><tr><td>aaa</td></tr></tbody></table><table class="__mx-style_index_-table __mx-style_index_-table-striped" style="width:400px;" table-role="right-sticky"><thead><tr><th colspan="2">测试</th></tr><tr><th style="width:200px;">测试1</th><th style="width:200px;">测试2</th></tr></thead><tbody><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr></tbody></table></div></div><div mxs="_U:w" style="color:red">使用该模式需要注意以下几点<br/>1. 请注意下面模板中的table-role属性，其中table-role="main"一定放在div上，紧跟其后的是左右固定列的表格<br/>2. 3个表格(左右固定的表格可以根据需要进行删除，比如只留右侧固定)需要自己算出占用的实际宽度<br/>3. 请确保3个表格的thead保持同样的高度</div><div mxs="_U:x" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-table.attach sticky="true"&gt;\n    &lt;div table-role="main"&gt;\n        &lt;table class="table table-striped" style="width:4140px"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &lt;th rowspan="2" style="width:140px"&gt;&lt;/th&gt;\n                    &lt;th rowspan="2" style="width:2600px"&gt;eee&lt;/th&gt;\n                    &lt;th colspan="2"&gt;bb&lt;/th&gt;\n                    &lt;th colspan="3"&gt;xxxx&lt;/th&gt;\n                    &lt;th colspan="2"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &lt;tr&gt;\n                    &lt;td style="width:140px"&gt;&lt;/td&gt;\n                    &lt;td style="width:2600px"&gt;1111&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;2222&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;333&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;aaa&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;1111&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;2222&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;br /&gt;eeeeee&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;br /&gt;aaaa&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/div&gt;\n    &lt;table class="table table-striped" table-role="left-sticky" style="width:140px;"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:140px;height:85px;"&gt;aa&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class="table table-striped" style="width:400px;" table-role="right-sticky"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th colspan="2"&gt;测试&lt;/th&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;th style="width:200px;"&gt;测试1&lt;/th&gt;\n                &lt;th style="width:200px;"&gt;测试2&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.attach&gt;</pre></div><h3 mxs="_U:y" class="__mx-style_index_-mt30">旧版</h3><div mxv mxa="_U:m" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_U:n" mx-view="mx-table/rwd?rwdRange=2%2C-2"><table mxv mxa="_U:o" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv mxa="_U:p" style="width:50px"><input mxs="_U:z" type="checkbox" class="__mx-style_index_-checkbox" linkage="example4"/></th>';
    $expr = '<%for (var i = 0; i < 25; i++) {%>';
    for (var i = 0; i < 25; i++) {
        ;
        $p += '<th mxa="_U:q" style="width:200px">示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example4" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 25; j++) {%>';
        for (var j = 0; j < 25; j++) {
            ;
            $p += '<td>示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_U:A" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-vframe src="app/gallery/mx-table/rwd"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example4" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example4" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [Linkage],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});