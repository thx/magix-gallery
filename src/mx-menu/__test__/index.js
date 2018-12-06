/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-menu/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Menu*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Menu = require("../index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $p += '<h2 mxs="_B:_">mx-menu</h2><h3 mxs="_B:a">展示</h3><div mxv mxa="_B:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list" class="__mx-style_index_-fl" mx-view="mx-menu/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&width=200"></div></div><div mxs="_B:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-menu.index\n    list="&lt;%@list%&gt;"\n    width="200"\n&gt;&lt;/mx-menu.index&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Menu = require(\'../index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: \'\',\n                text: \'新建\'\n            }, {\n                id: \'0-0\',\n                pId: \'\',\n                text: \'复制\'\n            }, {\n                id: \'0-1\',\n                pId: \'\',\n                text: \'删除\'\n            }, {\n                id: 1,\n                pId: 0,\n                text: \'新建word文件\'\n            }, {\n                id: 2,\n                pId: 0,\n                text: \'新建excel文件\'\n            }, {\n                id: 3,\n                pId: 0,\n                text: \'新建ppt文件\'\n            }]\n        });\n    },\n    \'showcm&lt;contextmenu&gt;\'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get(\'list\'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div><h3 mxs="_B:c" class="__mx-style_index_-mt30">context menu</h3><div mxs="_B:d" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-contextmenu="' + $viewId + 'showcm()">在这里点右键</button></div><div mxs="_B:e" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button class="btn btn-brand" mx-contextmenu="showcm()"&gt;在这里点右键&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Menu = require(\'../index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: \'\',\n                text: \'新建\'\n            }, {\n                id: \'0-0\',\n                pId: \'\',\n                text: \'复制\'\n            }, {\n                id: \'0-1\',\n                pId: \'\',\n                text: \'删除\'\n            }, {\n                id: 1,\n                pId: 0,\n                text: \'新建word文件\'\n            }, {\n                id: 2,\n                pId: 0,\n                text: \'新建excel文件\'\n            }, {\n                id: 3,\n                pId: 0,\n                text: \'新建ppt文件\'\n            }]\n        });\n    },\n    \'showcm&lt;contextmenu&gt;\'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get(\'list\'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-menu/__test__/index.html';
    throw msg;
} return $p; },
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