/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/storestate",["magix","../linkage","../../mx-gtip/index","../storestate","mx-pagination/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip,StoreState*/
require("mx-pagination/index");
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
var StoreState = require("../storestate");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list1 = $$.list1, list1Page = $$.list1Page, list1Size = $$.list1Size; var $expr, $art, $line; try {
    $p += '<h2 mxs="_g:_">mx-checkbox</h2><div mxv mxa="_g:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><table mxv mxa="_g:a" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv><input mxs="_g:a" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<th>示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < list1.length; i++) {%>';
    for (var i = 0; i < list1.length; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example1" value="' + ($expr = '<%=list1[i].id%>', $e(list1[i].id)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 5; j++) {%>';
        for (var j = 0; j < 5; j++) {
            ;
            $p += '<td>' + ($expr = '<%=list1[i][\'f\' + j]%>', $e(list1[i]['f' + j])) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody><tfoot mxv><tr mxv><td mxv="list1Page,list1Size" colspan="6" mx-view="mx-pagination/index?total=' + ($expr = '<%@100%>', $i($$ref, 100)) + '&step=3&page=' + ($expr = '<%@list1Page%>', $i($$ref, list1Page)) + '&size=' + ($expr = '<%@list1Size%>', $i($$ref, list1Size)) + '" mx-change="' + $viewId + 'chageList1()" style="height:60px;"></td></tr></tfoot></table><div mxs="_g:b" class="__mx-style_index_-clearfix"><button class="__mx-style_index_-fr __mx-style_index_-mt5 __mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + 'showEx1()">显示选中的checkbox</button></div></div><div mxs="_g:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;table class="table table-striped"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;list1.length;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="&lt;%=list1[i].id%&gt;" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;&lt;%=list1[i][\'f\'+j]%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n    &lt;tfoot&gt;\n        &lt;tr&gt;\n            &lt;mx-vframe\n                tag="td"\n                colspan="6"\n                path="app/gallery/mx-pagination/index"\n                total="&lt;%@100%&gt;"\n                step="3"\n                page="&lt;%@list1Page%&gt;"\n                size="&lt;%@list1Size%&gt;"\n                mx-change="chageList1()"/&gt;\n        &lt;/tr&gt;\n    &lt;/tfoot&gt;\n&lt;/table&gt;\n\n&lt;div class="clearfix"&gt;\n    &lt;button class="fr mt5 btn btn-brand" mx-click="showEx1()"&gt;显示选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Linkage = require(\'app/gallery/mx-chekcbox/linkage\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nlet StoreState = require(\'app/gallery/mx-chekcbox/storestate\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@storestate.html\',\n    mixins: [Linkage, GTip, StoreState],\n    init() {\n        let list1 = [];\n        for (let j = 0; j &lt; 100; j++) {\n            let temp = {\n                id: j\n            };\n            for (let i = 0; i &lt; 5; i++) {\n                temp[\'f\' + i] = \'字段内容\' + j + \'_\' + i;\n            }\n            list1.push(temp);\n        }\n        let me = this;\n        me.$list1 = list1;\n        me.$list1Page = 1;\n        me.$list1Size = 10;\n    },\n    getList(type) {\n        let me = this;\n        let list = me[\'$\' + type];\n        let page = me[\'$\' + type + \'Page\'];\n        let size = me[\'$\' + type + \'Size\'];\n        return list.slice((page - 1) * size, page * size);\n    },\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: me.getList(\'list1\'),\n            list1Page: me.$list1Page,\n            list1Size: me.$list1Size\n        });\n    },\n    \'chageList1&lt;change&gt;\' (e) {\n        let me = this;\n        me.$list1Page = e.page;\n        me.$list1Size = e.size;\n        me.render();\n    },\n    \'showEx1&lt;click&gt;\' () {\n        let list = this.getStoreState(\'example1\');\n        if (list.length) {\n            this.gtipRT(\'选中的值：\' + list.join(\',\'));\n        } else {\n            this.gtipRT(\'请选择checkbox\');\n        }\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/__test__/storestate.html';
    throw msg;
} return $p; },
    mixins: [GTip, StoreState, Linkage],
    init: function () {
        var list1 = [];
        for (var j = 0; j < 100; j++) {
            var temp = {
                id: j
            };
            for (var i = 0; i < 5; i++) {
                temp['f' + i] = '字段内容' + j + '_' + i;
            }
            list1.push(temp);
        }
        var me = this;
        me.$list1 = list1;
        me.$list1Page = 1;
        me.$list1Size = 10;
    },
    getList: function (type) {
        var me = this;
        var list = me['$' + type];
        var page = me['$' + type + 'Page'];
        var size = me['$' + type + 'Size'];
        return list.slice((page - 1) * size, page * size);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            list1: me.getList('list1'),
            list1Page: me.$list1Page,
            list1Size: me.$list1Size
        });
    },
    'chageList1<change>': function (e) {
        var me = this;
        me.$list1Page = e.page;
        me.$list1Size = e.size;
        me.render();
    },
    'showEx1<click>': function () {
        var list = this.getStoreState('example1');
        if (list.length) {
            this.gtipRT('选中的值：' + list.join(','));
        }
        else {
            this.gtipRT('请选择checkbox');
        }
    }
});

});