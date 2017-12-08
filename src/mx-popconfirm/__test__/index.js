/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-popconfirm/__test__/index',["magix","../../mx-checkbox/linkage","../../mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../../mx-checkbox/linkage');
let GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popconfirm</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example1\"></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%><th>操作</th></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example1\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<5;j++){%><td>示例字段内容<%=j%></td><%}%><td><a href=\"#\" mx-enter=\"\u001f\u001edel({id:<%=i%>})\" mx-view=\"mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E5%88%A0%E9%99%A4%EF%BC%9F\">删除</a></td></tr><%}%></tbody></table></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n            &lt;th&gt;操作&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n            &lt;td&gt;&lt;a href=\"#\" mx-enter=\"del({id:&lt;%=i%&gt;})\" mx-view=\"mx-popconfirm/index\" view-content=\"确认删除？\"&gt;删除&lt;/a&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('../../mx-checkbox/linkage');\nlet GTip = require('../../mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Linkage,GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'del&lt;enter&gt;' (e) {\n        this.gtipRT('delete:' + e.params.id);\n    }\n});</pre></div>","subs":[],"file":"mx-popconfirm/__test__/index.html"},
    mixins: [Linkage, GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'del<enter>'(e) {
        this.gtipRT('delete:' + e.params.id);
    }
});

});