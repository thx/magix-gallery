/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/index",["magix","mx-gtip/index","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, list1 = $$.list1, list2 = $$.list2; var $expr, $art, $line; try {
    $p += '<h2 mxs="_L:_">mx-suggest</h2><h3 mxs="_L:a">默认情形</h3><div mxv mxa="_L:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list" class="__mx-style_index_-input" style="width:200px;" mx-view="mx-suggest/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxs="_L:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-suggest\n    class="input"\n    list="&lt;%@list%&gt;"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    }\n});</pre></div><h3 mxs="_L:c" class="__mx-style_index_-mt30">对象列表</h3><div mxv mxa="_L:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list1" class="__mx-style_index_-input" mx-view="mx-suggest/index?list=' + ($expr = '<%@list1%>', $i($$ref, list1)) + '&textKey=text&valueKey=id"></div></div><div mxs="_L:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-suggest\n    class="input"\n    list="&lt;%@list1%&gt;"\n    text-key="text"\n    value-key="id"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: [{\n                text: \'abc1\',\n                id: 1\n            }, {\n                text: \'abc2\',\n                id: 2\n            }, {\n                text: \'abc3\',\n                id: 3\n            }, {\n                text: \'abc4\',\n                id: 4\n            }, {\n                text: \'abc5\',\n                id: 5\n            }, {\n                text: \'abc6\',\n                id: 6\n            }, {\n                text: \'abc7\',\n                id: 7\n            }, {\n                text: \'abc8\',\n                id: 8\n            }, {\n                text: \'abc9\',\n                id: 9\n            }, {\n                text: \'abc0\',\n                id: 0\n            }]\n        });\n    }\n});</pre></div><h3 mxs="_L:e" class="__mx-style_index_-mt30">响应事件</h3><div mxv mxa="_L:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list" class="__mx-style_index_-input" mx-pick="' + $viewId + 'showPick()" mx-showlist="' + $viewId + 'showList()" mx-hidelist="' + $viewId + 'hideList()" mx-view="mx-suggest/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxs="_L:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-suggest\n    class="input"\n    list="&lt;%@list%&gt;"\n    mx-pick="showPick()"\n    mx-showlist="showList()"\n    mx-hidelist="hideList()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    },\n    \'showPick&lt;pick&gt;\' (e) {\n        this.gtipRT(\'选中：\' + e.item);\n    },\n    \'showList&lt;showlist&gt;\' () {\n        this.gtipRT(\'列表展示\');\n    },\n    \'hideList&lt;hidelist&gt;\' () {\n        this.gtipRT(\'列表关闭\');\n    }\n});</pre></div><h3 mxs="_L:g" class="__mx-style_index_-mt30">更新列表</h3><div mxv mxa="_L:c" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list2" class="__mx-style_index_-input" mx-input="' + $viewId + 'updateList()" mx-view="mx-suggest/index?list=' + ($expr = '<%@list2%>', $i($$ref, list2)) + '"></div></div><div mxs="_L:h" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-suggest\n    class="input"\n    list="&lt;%@list2%&gt;"\n    mx-input="updateList()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet $ = require(\'$\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list2: []\n        });\n    },\n    \'updateList&lt;input&gt;\' (e) {\n        let target = $(e.eventTarget);\n        let list = [\'163.com\', \'qq.com\', \'126.com\', \'sina.com\'];\n        let v = $.trim(target.val());\n        let newList = [];\n        if (v) {\n            if (v.indexOf(\'@\') == -1) {\n                for (let a of list) {\n                    newList.push(v + \'@\' + a);\n                }\n            } else {\n                let parts = v.split(\'@\');\n                for (let a of list) {\n                    if (a.indexOf(parts[1]) >= 0) {\n                        newList.push(parts[0] + \'@\' + a);\n                    }\n                }\n            }\n        }\n        target.invokeView(\'update\', [newList]);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-suggest/__test__/index.html';
    throw msg;
} return $p; },
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
        if (e.vframe) {
            e.vframe.invoke('update', [newList]);
        }
        else {
            target.invokeView('update', [newList]);
        }
    }
});

});