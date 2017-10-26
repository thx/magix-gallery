/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-suggest/__test__/index',["magix","mx-gtip/index","$","../index"],function(require,exports,module){
/*Magix,GTip,$*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var GTip = require('mx-gtip/index');
var $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-suggest</h2><h3>默认情形</h3><div class=\"B ag\"><input mx-guid=\"g0\u001f\" mx-view=\"mx-suggest/index?list=<%@$$.list%>\" class=\"an\" style=\"width:200px\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    }\n});</pre></div><h3 class=\"f\">对象列表</h3><div class=\"B ag\"><input mx-guid=\"g1\u001f\" mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\" class=\"an\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list1%&gt;\"\n    text-key=\"text\"\n    value-key=\"id\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: [{\n                text: 'abc1',\n                id: 1\n            }, {\n                text: 'abc2',\n                id: 2\n            }, {\n                text: 'abc3',\n                id: 3\n            }, {\n                text: 'abc4',\n                id: 4\n            }, {\n                text: 'abc5',\n                id: 5\n            }, {\n                text: 'abc6',\n                id: 6\n            }, {\n                text: 'abc7',\n                id: 7\n            }, {\n                text: 'abc8',\n                id: 8\n            }, {\n                text: 'abc9',\n                id: 9\n            }, {\n                text: 'abc0',\n                id: 0\n            }]\n        });\n    }\n});</pre></div><h3 class=\"f\">响应事件</h3><div class=\"B ag\"><input mx-guid=\"g2\u001f\" mx-view=\"mx-suggest/index?list=<%@$$.list%>\" class=\"an\" mx-pick=\"\u001f\u001eshowPick()\" mx-showlist=\"\u001f\u001eshowList()\" mx-hidelist=\"\u001f\u001ehideList()\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"app/gallery/mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"\n    mx-pick=\"showPick()\"\n    mx-showlist=\"showList()\"\n    mx-hidelist=\"hideList()\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    },\n    'showPick&lt;pick&gt;' (e) {\n        this.gtipRT('选中：' + e.item);\n    },\n    'showList&lt;showlist&gt;' () {\n        this.gtipRT('列表展示');\n    },\n    'hideList&lt;hidelist&gt;' () {\n        this.gtipRT('列表关闭');\n    }\n});</pre></div><h3 class=\"f\">更新列表</h3><div class=\"B ag\"><input mx-guid=\"g3\u001f\" mx-view=\"mx-suggest/index?list=<%@$$.list2%>\" class=\"an\" mx-input=\"\u001f\u001eupdateList()\"></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list2%&gt;\"\n    mx-input=\"updateList()\"/&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet $ = require('$');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list2: []\n        });\n    },\n    'updateList&lt;input&gt;' (e) {\n        let target = $(e.eventTarget);\n        let list = ['163.com', 'qq.com', '126.com', 'sina.com'];\n        let v = $.trim(target.val());\n        let newList = [];\n        if (v) {\n            if (v.indexOf('@') == -1) {\n                for (let a of list) {\n                    newList.push(v + '@' + a);\n                }\n            } else {\n                let parts = v.split('@');\n                for (let a of list) {\n                    if (a.indexOf(parts[1]) >= 0) {\n                        newList.push(parts[0] + '@' + a);\n                    }\n                }\n            }\n        }\n        target.invokeView('update', [newList]);\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list1"],"path":"input[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list2"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list2%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    mixins: [GTip],
    render: function () {
        var me = this;
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
    'showPick<pick>': function (e) {
        this.gtipRT('选中：' + e.item);
    },
    'showList<showlist>': function () {
        this.gtipRT('列表展示');
    },
    'hideList<hidelist>': function () {
        this.gtipRT('列表关闭');
    },
    'updateList<input>': function (e) {
        var target = $(e.eventTarget);
        var list = ['163.com', 'qq.com', '126.com', 'sina.com'];
        var v = $.trim(target.val());
        var newList = [];
        if (v) {
            if (v.indexOf('@') == -1) {
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var a = list_1[_i];
                    newList.push(v + '@' + a);
                }
            }
            else {
                var parts = v.split('@');
                for (var _a = 0, list_2 = list; _a < list_2.length; _a++) {
                    var a = list_2[_a];
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