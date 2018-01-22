/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-menu/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Menu*/
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Menu = require("../index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-menu</h2><h3>展示</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-menu/index?list=<%@$$.list%>&width=200\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-menu.index\n    list=\"&lt;%@list%&gt;\"\n    width=\"200\"\n&gt;&lt;/mx-menu.index&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Menu = require('../index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: '新建'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: '复制'\n            }, {\n                id: '0-1',\n                pId: '',\n                text: '删除'\n            }, {\n                id: 1,\n                pId: 0,\n                text: '新建word文件'\n            }, {\n                id: 2,\n                pId: 0,\n                text: '新建excel文件'\n            }, {\n                id: 3,\n                pId: 0,\n                text: '新建ppt文件'\n            }]\n        });\n    },\n    'showcm&lt;contextmenu&gt;'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get('list'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div><h3 class=\"_f\">context menu</h3><div class=\"_B _ai\"><button class=\"_an _ao\" mx-contextmenu=\"\u001f\u001eshowcm()\">在这里点右键</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;button class=\"btn btn-brand\" mx-contextmenu=\"showcm()\"&gt;在这里点右键&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Menu = require('../index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: '新建'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: '复制'\n            }, {\n                id: '0-1',\n                pId: '',\n                text: '删除'\n            }, {\n                id: 1,\n                pId: 0,\n                text: '新建word文件'\n            }, {\n                id: 2,\n                pId: 0,\n                text: '新建excel文件'\n            }, {\n                id: 3,\n                pId: 0,\n                text: '新建ppt文件'\n            }]\n        });\n    },\n    'showcm&lt;contextmenu&gt;'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get('list'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div>"},
    render: function () {
        var me = this;
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
    'showcm<contextmenu>': function (e) {
        e.preventDefault();
        Menu.show(this, e, {
            list: this.updater.get('list'),
            picked: function (item) {
                console.log(item);
            },
            width: 220
        });
    }
});

});