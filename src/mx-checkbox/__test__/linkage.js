/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-checkbox/__test__/linkage',["magix","../linkage","../../mx-gtip/index"],function(require,exports,module){
/*Magix,Linkage,GTip*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Linkage = require('../linkage');
var GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"B ag\"><table class=\"ay az\"><thead><tr><th><input type=\"checkbox\" class=\"aq\" linkage=\"example1\"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody><%for(var b=0;b<10;b++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example1\" value=\"ex1_<%=b%>\"></td><%for(var c=0;c<5;c++){%><td>示例字段内容<%=c%></td><%}%></tr><%}%></tbody></table><div class=\"ag\"><button class=\"a_ a al am\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示示例1选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-checkbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@linkage.html',\n    mixins: [Linkage, GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showEx1&lt;click&gt;' () {\n        this.gtipRT(this.getSelectedIds('example1'));\n    }\n});</pre></div>","subs":[]},
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