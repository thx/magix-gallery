/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/multiple",["magix","mx-gtip/index","../multiple","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../multiple");
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
} ; var $g = '', $_temp, $p = '', searchbox = $$.searchbox, usersSelected = $$.usersSelected, userList = $$.userList; var $expr, $art, $line; try {
    $p += '<h2 mxs="_o:_">mx-dropdown.multiple</h2><h3 mxs="_o:a" class="__mx-style_index_-mt30">默认</h3><div mxv mxa="_o:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="searchbox" mx-change="' + $viewId + 'showWeeks()" class="__mx-style_index_-fl" style="width:150px;" mx-view="mx-dropdown/multiple?searchbox=' + ($expr = '<%@searchbox%>', $i($$ref, searchbox)) + '&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i mxs="_o:b" value="mon" class="__mx-style_index_-none">周一</i><i mxs="_o:c" value="wed" class="__mx-style_index_-none">周三</i><i mxs="_o:d" value="thu" class="__mx-style_index_-none">周四</i><i mxs="_o:e" value="fri" class="__mx-style_index_-none">周五</i><i mxs="_o:f" value="sat" class="__mx-style_index_-none">周六</i></div></div><div mxs="_o:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-dropdown.multiple\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeeks()"\n    class="fl" style="width:150px;"&gt;\n    &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeeks&lt;change&gt;\' (e) {\n        this.gtipRB(\'values:\' + e.values);\n    }\n});</pre></div><h3 mxs="_o:h" class="__mx-style_index_-mt30">多选带分组</h3><div mxs="_o:i" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showWeeks()" class="__mx-style_index_-fl" style="width:150px;" mx-view="mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i group="true" class="__mx-style_index_-none">本周日期</i><i value="mon" class="__mx-style_index_-none">周一</i><i value="wed" class="__mx-style_index_-none">周三</i><i value="thu" class="__mx-style_index_-none">周四</i><i value="fri" class="__mx-style_index_-none">周五</i><i value="sat" class="__mx-style_index_-none">周六</i><i group="true" class="__mx-style_index_-none">下周日期</i><i value="next-mon" class="__mx-style_index_-none">下周一</i><i value="next-wed" class="__mx-style_index_-none">下周三</i><i value="next-thu" class="__mx-style_index_-none">下周四</i><i value="next-fri" class="__mx-style_index_-none">下周五</i><i value="next-sat" class="__mx-style_index_-none">下周六</i></div></div><div mxs="_o:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-dropdown.multiple\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeeks()"\n    class="fl" style="width:150px;"&gt;\n    &lt;mx-dropdown.item group="true"&gt;本周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item group="true"&gt;下周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-mon"&gt;下周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-wed"&gt;下周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-thu"&gt;下周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-fri"&gt;下周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-sat"&gt;下周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeeks&lt;change&gt;\' (e) {\n        this.gtipRB(\'values:\' + e.values);\n    }\n});</pre></div><h3 mxs="_o:k" class="__mx-style_index_-mt30">动态数据并设置选中</h3><div mxv mxa="_o:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="usersSelected,userList" mx-change="' + $viewId + 'showUsers()" class="__mx-style_index_-fl" style="width:200px;" mx-view="mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=' + ($expr = '<%@usersSelected%>', $i($$ref, usersSelected)) + '&list=' + ($expr = '<%@userList%>', $i($$ref, userList)) + '"></div></div><div mxs="_o:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre lang="html" mx-view="__test__/hl">&lt;mx-dropdown.multiple\n    searchbox="true"\n    empty-text="请选择用户"\n    text-key="name"\n    value-key="id"\n    selected="&lt;%@ usersSelected %&gt;"\n    list="&lt;%@ userList %&gt;"\n    mx-change="showUsers()"\n    class="fl" style="width:200px;"&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            usersSelected: [58782,587829]\n        });\n    },\n    \'showUsers&lt;change&gt;\' (e) {\n        this.gtipRB(\'user ids:\' + e.values);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/multiple.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
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
            userSelected: 587828,
            usersSelected: [58782, 587829]
        });
    },
    'showWeek<change>': function (e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>': function (e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>': function (e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>': function (e) {
        this.gtipRB('user ids:' + e.values);
    },
    'test<click>': function (e) {
        this.updater.digest({
            searchbox: !this.updater.get('searchbox')
        });
        console.log(this.updater.get('searchbox'));
    }
});

});