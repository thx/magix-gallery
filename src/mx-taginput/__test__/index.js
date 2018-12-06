/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
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
} ; var $g = '', $_temp, $p = '', list = $$.list, selected = $$.selected, userList = $$.userList, userSelected = $$.userSelected; var $expr, $art, $line; try {
    $p += '<h2 mxs="_M:_">mx-taginput</h2><h3 mxs="_M:a">默认情形</h3><div mxv mxa="_M:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB"></div></div><div mxs="_M:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ list %&gt;"\n    placeholder="请选择分类"\n&gt;&lt;/div&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [\'分类1\', \'分类2\', \'分类3\', \'分类4\', \'分类5\', \'分类6\', \'分类7\', \'分类8\', \'分类9\', \'分类10\']\n        });\n    }\n});</pre></div><h3 mxs="_M:c" class="__mx-style_index_-mt30">默认选中</h3><div mxv mxa="_M:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list,selected" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&selected=' + ($expr = '<%@selected%>', $i($$ref, selected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB"></div></div><div mxs="_M:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ list %&gt;"\n    selected="&lt;%@ selected %&gt;"\n    placeholder="请选择分类"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [\'分类1\', \'分类2\', \'分类3\', \'分类4\', \'分类5\', \'分类6\', \'分类7\', \'分类8\', \'分类9\', \'分类10\'],\n            selected: [\'分类1\', \'分类5\', \'分类10\']\n        });\n    }\n});</pre></div><h3 mxs="_M:e" class="__mx-style_index_-mt30">禁用</h3><div mxv mxa="_M:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list,selected" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&selected=' + ($expr = '<%@selected%>', $i($$ref, selected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true"></div></div><div mxs="_M:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ list %&gt;"\n    selected="&lt;%@ selected %&gt;"\n    placeholder="请选择分类"\n    disabled="true"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [\'分类1\', \'分类2\', \'分类3\', \'分类4\', \'分类5\', \'分类6\', \'分类7\', \'分类8\', \'分类9\', \'分类10\'],\n            selected: [\'分类1\', \'分类5\', \'分类10\']\n        });\n    }\n});</pre></div><h3 mxs="_M:g" class="__mx-style_index_-mt30">数据列表为对象</h3><div mxv mxa="_M:c" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="userList,userSelected" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@userList%>', $i($$ref, userList)) + '&selected=' + ($expr = '<%@userSelected%>', $i($$ref, userSelected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id"></div></div><div mxs="_M:h" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ userList %&gt;"\n    selected="&lt;%@ userSelected %&gt;"\n    placeholder="请选择用户"\n    text-key="name"\n    value-key="id"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    }\n});</pre></div><h3 mxs="_M:i" class="__mx-style_index_-mt30">change事件</h3><div mxv mxa="_M:d" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="userList,userSelected" mx-change="' + $viewId + 'showUserIds()" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@userList%>', $i($$ref, userList)) + '&selected=' + ($expr = '<%@userSelected%>', $i($$ref, userSelected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id"></div></div><div mxs="_M:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ userList %&gt;"\n    selected="&lt;%@ userSelected %&gt;"\n    placeholder="请选择用户"\n    text-key="name"\n    value-key="id"\n    mx-change="showUserIds()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [\'分类1\', \'分类2\', \'分类3\', \'分类4\', \'分类5\', \'分类6\', \'分类7\', \'分类8\', \'分类9\', \'分类10\'],\n            selected: [\'分类1\', \'分类5\', \'分类10\'],\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    },\n    \'showUserIds&lt;change&gt;\' (e) {\n        this.gtipRT(\'选中的用户ids:\'+e.ids);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],
            selected: ['分类1', '分类5', '分类10'],
            userList: [{
                    name: 'xinglie',
                    id: 58782
                }, {
                    name: 'xinglie1',
                    id: 587821
                }, {
                    name: 'xinglie2',
                    id: 587822
                }, {
                    name: 'xinglie3',
                    id: 587823
                }, {
                    name: 'xinglie4',
                    id: 587824
                }, {
                    name: 'xinglie5',
                    id: 587825
                }, {
                    name: 'xinglie6',
                    id: 587826
                }, {
                    name: 'xinglie7',
                    id: 587827
                }, {
                    name: 'xinglie8',
                    id: 587828
                }, {
                    name: 'xinglie9',
                    id: 587829
                }],
            userSelected: [58782]
        });
    },
    'showUserIds<change>': function (e) {
        this.gtipRT('选中的用户ids:' + e.ids);
    }
});

});