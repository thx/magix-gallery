/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/linkage",["magix","../linkage","../../mx-gtip/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../linkage");
var GTip = require("../../mx-gtip/index");
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
    $p += '<h2 mxs="_f:_">mx-checkbox</h2><div mxv mxa="_f:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><table mxv mxa="_f:a" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv><input mxs="_f:a" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
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
    $p += '</tbody></table><div mxs="_f:b" class="__mx-style_index_-clearfix"><button type="button" class="__mx-style_index_-fr __mx-style_index_-mt5 __mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + 'showEx1()">显示选中的checkbox</button></div></div><div mxs="_f:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;table class="table table-striped"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class="clearfix"&gt;\n    &lt;button class="fr mt5 btn btn-brand" mx-click="showEx1()"&gt;显示示例1选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Linkage = require(\'app/gallery/mx-checkbox/linkage\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@linkage.html\',\n    mixins: [Linkage, GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showEx1&lt;click&gt;\' () {\n        this.gtipRT(this.getSelectedIds(\'example1\'));\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/__test__/linkage.html';
    throw msg;
} return $p; },
    mixins: [Linkage, GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showEx1<click>': function () {
        this.gtipRT(this.getSelectedIds('example1'));
    }
});

});