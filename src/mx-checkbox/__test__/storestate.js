/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-checkbox/__test__/storestate',["magix","../linkage","../../mx-gtip/index","../storestate","mx-pagination/index"],(require,exports,module)=>{
/*Magix,Linkage,GTip,StoreState*/
require("mx-pagination/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../linkage');
let GTip = require('../../mx-gtip/index');
let StoreState = require('../storestate');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example1\"></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%></tr></thead><tbody mx-guid=\"g1\u001f\">2\u001d</tbody><tfoot><tr><td mx-guid=\"g2\u001f\" colspan=\"6\" mx-view=\"mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>\" mx-change=\"\u001f\u001echageList1()\" style=\"height:60px\"></td></tr></tfoot></table><div class=\"__mx-style_index_-clearfix\"><button class=\"__mx-style_index_-fr __mx-style_index_-mt5 __mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;list1.length;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"&lt;%=list1[i].id%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;&lt;%=list1[i]['f'+j]%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n    &lt;tfoot&gt;\n        &lt;tr&gt;\n            &lt;mx-vframe\n                tag=\"td\"\n                colspan=\"6\"\n                path=\"app/gallery/mx-pagination/index\"\n                total=\"&lt;%@100%&gt;\"\n                step=\"3\"\n                page=\"&lt;%@list1Page%&gt;\"\n                size=\"&lt;%@list1Size%&gt;\"\n                mx-change=\"chageList1()\"/&gt;\n        &lt;/tr&gt;\n    &lt;/tfoot&gt;\n&lt;/table&gt;\n\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-chekcbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nlet StoreState = require('app/gallery/mx-chekcbox/storestate');\nmodule.exports = Magix.View.extend({\n    tmpl: '@storestate.html',\n    mixins: [Linkage, GTip, StoreState],\n    init() {\n        let list1 = [];\n        for (let j = 0; j &lt; 100; j++) {\n            let temp = {\n                id: j\n            };\n            for (let i = 0; i &lt; 5; i++) {\n                temp['f' + i] = '字段内容' + j + '_' + i;\n            }\n            list1.push(temp);\n        }\n        let me = this;\n        me.$list1 = list1;\n        me.$list1Page = 1;\n        me.$list1Size = 10;\n    },\n    getList(type) {\n        let me = this;\n        let list = me['$' + type];\n        let page = me['$' + type + 'Page'];\n        let size = me['$' + type + 'Size'];\n        return list.slice((page - 1) * size, page * size);\n    },\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: me.getList('list1'),\n            list1Page: me.$list1Page,\n            list1Size: me.$list1Size\n        });\n    },\n    'chageList1&lt;change&gt;' (e) {\n        let me = this;\n        me.$list1Page = e.page;\n        me.$list1Size = e.size;\n        me.render();\n    },\n    'showEx1&lt;click&gt;' () {\n        let list = this.getStoreState('example1');\n        if (list.length) {\n            this.gtipRT('选中的值：' + list.join(','));\n        } else {\n            this.gtipRT('请选择checkbox');\n        }\n    }\n});</pre></div>","subs":[{"keys":["list1"],"path":"tbody[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var i=0;i<$$.list1.length;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example1\" value=\"<%=$$.list1[i].id%>\"></td><%for(var j=0;j<5;j++){%><td><%=$$.list1[i]['f'+j]%></td><%}%></tr><%}%>","s":"2\u001d"},{"keys":["list1Page","list1Size"],"path":"td[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-checkbox/__test__/storestate.html"},
    mixins: [GTip, StoreState, Linkage],
    init() {
        let list1 = [];
        for (let j = 0; j < 100; j++) {
            let temp = {
                id: j
            };
            for (let i = 0; i < 5; i++) {
                temp['f' + i] = '字段内容' + j + '_' + i;
            }
            list1.push(temp);
        }
        let me = this;
        me.$list1 = list1;
        me.$list1Page = 1;
        me.$list1Size = 10;
    },
    getList(type) {
        let me = this;
        let list = me['$' + type];
        let page = me['$' + type + 'Page'];
        let size = me['$' + type + 'Size'];
        return list.slice((page - 1) * size, page * size);
    },
    render() {
        let me = this;
        me.updater.digest({
            list1: me.getList('list1'),
            list1Page: me.$list1Page,
            list1Size: me.$list1Size
        });
    },
    'chageList1<change>'(e) {
        let me = this;
        me.$list1Page = e.page;
        me.$list1Size = e.size;
        me.render();
    },
    'showEx1<click>'() {
        let list = this.getStoreState('example1');
        if (list.length) {
            this.gtipRT('选中的值：' + list.join(','));
        }
        else {
            this.gtipRT('请选择checkbox');
        }
    }
});

});