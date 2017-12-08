/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-suggest/__test__/index',["magix","mx-gtip/index","$","../index"],(require,exports,module)=>{
/*Magix,GTip,$*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-suggest</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g0\u001f\" class=\"__mx-style_index_-input\" style=\"width:200px\" mx-view=\"mx-suggest/index?list=<%@$$.list%>\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">对象列表</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g1\u001f\" class=\"__mx-style_index_-input\" mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list1%&gt;\"\n    text-key=\"text\"\n    value-key=\"id\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: [{\n                text: 'abc1',\n                id: 1\n            }, {\n                text: 'abc2',\n                id: 2\n            }, {\n                text: 'abc3',\n                id: 3\n            }, {\n                text: 'abc4',\n                id: 4\n            }, {\n                text: 'abc5',\n                id: 5\n            }, {\n                text: 'abc6',\n                id: 6\n            }, {\n                text: 'abc7',\n                id: 7\n            }, {\n                text: 'abc8',\n                id: 8\n            }, {\n                text: 'abc9',\n                id: 9\n            }, {\n                text: 'abc0',\n                id: 0\n            }]\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">响应事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g2\u001f\" class=\"__mx-style_index_-input\" mx-pick=\"\u001f\u001eshowPick()\" mx-showlist=\"\u001f\u001eshowList()\" mx-hidelist=\"\u001f\u001ehideList()\" mx-view=\"mx-suggest/index?list=<%@$$.list%>\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"\n    mx-pick=\"showPick()\"\n    mx-showlist=\"showList()\"\n    mx-hidelist=\"hideList()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    },\n    'showPick&lt;pick&gt;' (e) {\n        this.gtipRT('选中：' + e.item);\n    },\n    'showList&lt;showlist&gt;' () {\n        this.gtipRT('列表展示');\n    },\n    'hideList&lt;hidelist&gt;' () {\n        this.gtipRT('列表关闭');\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">更新列表</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g3\u001f\" class=\"__mx-style_index_-input\" mx-input=\"\u001f\u001eupdateList()\" mx-view=\"mx-suggest/index?list=<%@$$.list2%>\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list2%&gt;\"\n    mx-input=\"updateList()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet $ = require('$');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list2: []\n        });\n    },\n    'updateList&lt;input&gt;' (e) {\n        let target = $(e.eventTarget);\n        let list = ['163.com', 'qq.com', '126.com', 'sina.com'];\n        let v = $.trim(target.val());\n        let newList = [];\n        if (v) {\n            if (v.indexOf('@') == -1) {\n                for (let a of list) {\n                    newList.push(v + '@' + a);\n                }\n            } else {\n                let parts = v.split('@');\n                for (let a of list) {\n                    if (a.indexOf(parts[1]) >= 0) {\n                        newList.push(parts[0] + '@' + a);\n                    }\n                }\n            }\n        }\n        target.invokeView('update', [newList]);\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list1"],"path":"input[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list2"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list2%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-suggest/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            list1: [{
                    text: 'abc1',
                    id: 1
                }, {
                    text: 'abc2',
                    id: 2
                }, {
                    text: 'abc3',
                    id: 3
                }, {
                    text: 'abc4',
                    id: 4
                }, {
                    text: 'abc5',
                    id: 5
                }, {
                    text: 'abc6',
                    id: 6
                }, {
                    text: 'abc7',
                    id: 7
                }, {
                    text: 'abc8',
                    id: 8
                }, {
                    text: 'abc9',
                    id: 9
                }, {
                    text: 'abc0',
                    id: 0
                }],
            list2: []
        });
    },
    'showPick<pick>'(e) {
        this.gtipRT('选中：' + e.item);
    },
    'showList<showlist>'() {
        this.gtipRT('列表展示');
    },
    'hideList<hidelist>'() {
        this.gtipRT('列表关闭');
    },
    'updateList<input>'(e) {
        let target = $(e.eventTarget);
        let list = ['163.com', 'qq.com', '126.com', 'sina.com'];
        let v = $.trim(target.val());
        let newList = [];
        if (v) {
            if (v.indexOf('@') == -1) {
                for (let a of list) {
                    newList.push(v + '@' + a);
                }
            }
            else {
                let parts = v.split('@');
                for (let a of list) {
                    if (a.indexOf(parts[1]) >= 0) {
                        newList.push(parts[0] + '@' + a);
                    }
                }
            }
        }
        target.invokeView('update', [newList]);
    }
});

});