/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popconfirm/__test__/index',["magix","../../mx-checkbox/linkage","../../mx-gtip/index","../index"],function(require,exports,module){
/*Magix,Linkage,GTip*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Linkage = require('../../mx-checkbox/linkage');
var GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popconfirm</h2><div class=\"B ag\"><table class=\"ay az\"><thead><tr><th><input type=\"checkbox\" class=\"aq\" linkage=\"example1\"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%><th>操作</th></tr></thead><tbody><%for(var b=0;b<10;b++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example1\" value=\"ex1_<%=b%>\"></td><%for(var c=0;c<5;c++){%><td>示例字段内容<%=c%></td><%}%><td><a href=\"#\" mx-enter=\"\u001f\u001edel({id:<%=b%>})\" mx-view=\"mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%EF%BC%9F\">删除</a></td></tr><%}%></tbody></table></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n            &lt;th&gt;操作&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n            &lt;td&gt;&lt;a href=\"#\" mx-enter=\"del({id:&lt;%=i%&gt;})\" mx-view=\"mx-popconfirm/index\" view-content=\"确认？\"&gt;删除&lt;/a&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('../../mx-checkbox/linkage');\nlet GTip = require('../../mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Linkage,GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'del&lt;enter&gt;' (e) {\n        this.gtipRT('delete:' + e.params.id);\n    }\n});</pre></div>","subs":[]},
    mixins: [Linkage, GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'del<enter>': function (e) {
        this.gtipRT('delete:' + e.params.id);
    }
});

});