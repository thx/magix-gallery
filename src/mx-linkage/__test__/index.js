/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-linkage/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-linkage</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001eshowValue()\" mx-view=\"mx-linkage/index?list=<%@$$.list%>&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-linkage\n    list=\"&lt;%@list%&gt;\"\n    splitter='-'\n    headers=\"&lt;%@headers%&gt;\"\n    placeholder=\"请选择省市区\" /&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            headers: ['省份', '城市', '地区'],\n            list: [{\n                id: 1,\n                text: '浙江省'\n            }, {\n                id: 2,\n                text: '河南省'\n            }, {\n                id: 3,\n                text: '杭州市',\n                pId: 1\n            }, {\n                id: 4,\n                text: '周口市',\n                pId: 2\n            }, {\n                id: 5,\n                text: '安徽省'\n            }, {\n                id: 6,\n                text: '新疆维吾尔自治区'\n            }, {\n                id: 7,\n                pId: 3,\n                text: '余杭区'\n            }, {\n                id: 8,\n                text: '湖州市',\n                pId: 1\n            }, {\n                id: 9,\n                text: '长吉县',\n                pId: 8\n            }]\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g1\u001f\" mx-change=\"\u001f\u001eshowValue()\" mx-view=\"mx-linkage/index?list=<%@$$.list%>&selected=1%2C3&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-linkage\n    list=\"&lt;%@list%&gt;\"\n    selected=\"1,3\"\n    splitter='-'\n    headers=\"&lt;%@headers%&gt;\"\n    disabled=\"true\"\n    placeholder=\"请选择分类\" /&gt;</pre></div>","subs":[{"keys":["list","headers"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-linkage/index?list=<%@$$.list%>&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","headers"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-linkage/index?list=<%@$$.list%>&selected=1%2C3&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-linkage/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            headers: ['省份', '城市', '地区'],
            list: [{
                    id: 1,
                    text: '浙江省'
                }, {
                    id: 2,
                    text: '河南省'
                }, {
                    id: 3,
                    text: '杭州市',
                    pId: 1
                }, {
                    id: 4,
                    text: '周口市',
                    pId: 2
                }, {
                    id: 5,
                    text: '安徽省'
                }, {
                    id: 6,
                    text: '新疆维吾尔自治区'
                }, {
                    id: 7,
                    pId: 3,
                    text: '余杭区'
                }, {
                    id: 8,
                    text: '湖州市',
                    pId: 1
                }, {
                    id: 9,
                    text: '长吉县',
                    pId: 8
                }]
        });
    },
    'showValue<change>'(e) {
        console.log(e);
    }
});

});