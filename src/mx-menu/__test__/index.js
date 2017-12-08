/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-menu/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix,Menu*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Menu = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-menu</h2><h3>展示</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-menu/index?list=<%@$$.list%>&width=200\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-menu.index\n    list=\"&lt;%@list%&gt;\"\n    width=\"200\"\n&gt;&lt;/mx-menu.index&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Menu = require('../index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: '新建'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: '复制'\n            }, {\n                id: '0-1',\n                pId: '',\n                text: '删除'\n            }, {\n                id: 1,\n                pId: 0,\n                text: '新建word文件'\n            }, {\n                id: 2,\n                pId: 0,\n                text: '新建excel文件'\n            }, {\n                id: 3,\n                pId: 0,\n                text: '新建ppt文件'\n            }]\n        });\n    },\n    'showcm&lt;contextmenu&gt;'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get('list'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">context menu</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-contextmenu=\"\u001f\u001eshowcm()\">在这里点右键</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button class=\"btn btn-brand\" mx-contextmenu=\"showcm()\"&gt;在这里点右键&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Menu = require('../index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: '新建'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: '复制'\n            }, {\n                id: '0-1',\n                pId: '',\n                text: '删除'\n            }, {\n                id: 1,\n                pId: 0,\n                text: '新建word文件'\n            }, {\n                id: 2,\n                pId: 0,\n                text: '新建excel文件'\n            }, {\n                id: 3,\n                pId: 0,\n                text: '新建ppt文件'\n            }]\n        });\n    },\n    'showcm&lt;contextmenu&gt;'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get('list'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-menu/index?list=<%@$$.list%>&width=200\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-menu/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            list: [{
                    id: 0,
                    pId: '',
                    text: '新建'
                }, {
                    id: '0-0',
                    pId: '',
                    text: '复制'
                }, {
                    id: '0-1',
                    pId: '',
                    text: '删除'
                }, {
                    id: 1,
                    pId: 0,
                    text: '新建word文件'
                }, {
                    id: 2,
                    pId: 0,
                    text: '新建excel文件'
                }, {
                    id: 3,
                    pId: 0,
                    text: '新建ppt文件'
                }]
        });
    },
    'showcm<contextmenu>'(e) {
        e.preventDefault();
        Menu.show(this, e, {
            list: this.updater.get('list'),
            picked(item) {
                console.log(item);
            },
            width: 220
        });
    }
});

});