/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-checkbox/__test__/linkage',["magix","../linkage","../../mx-gtip/index"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../linkage');
let GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example1\"></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example1\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<5;j++){%><td>示例字段内容<%=j%></td><%}%></tr><%}%></tbody></table><div class=\"__mx-style_index_-clearfix\"><button type=\"button\" class=\"__mx-style_index_-fr __mx-style_index_-mt5 __mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示示例1选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-checkbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@linkage.html',\n    mixins: [Linkage, GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showEx1&lt;click&gt;' () {\n        this.gtipRT(this.getSelectedIds('example1'));\n    }\n});</pre></div>","subs":[],"file":"mx-checkbox/__test__/linkage.html"},
    mixins: [Linkage, GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showEx1<click>'() {
        this.gtipRT(this.getSelectedIds('example1'));
    }
});

});