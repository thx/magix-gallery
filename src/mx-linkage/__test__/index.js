/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-linkage/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, headers = $$.headers; var $expr, $art, $line; try {
    $p += '<h2 mxs="_z:_">mx-linkage</h2><h3 mxs="_z:a">默认情形</h3><div mxv mxa="_z:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list,headers" mx-change="' + $viewId + 'showValue()" mx-view="mx-linkage/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&splitter=-&headers=' + ($expr = '<%@headers%>', $i($$ref, headers)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA"></div></div><div mxs="_z:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-linkage\n    list="&lt;%@list%&gt;"\n    splitter=\'-\'\n    headers="&lt;%@headers%&gt;"\n    placeholder="请选择省市区" /&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            headers: [\'省份\', \'城市\', \'地区\'],\n            list: [{\n                id: 1,\n                text: \'浙江省\'\n            }, {\n                id: 2,\n                text: \'河南省\'\n            }, {\n                id: 3,\n                text: \'杭州市\',\n                pId: 1\n            }, {\n                id: 4,\n                text: \'周口市\',\n                pId: 2\n            }, {\n                id: 5,\n                text: \'安徽省\'\n            }, {\n                id: 6,\n                text: \'新疆维吾尔自治区\'\n            }, {\n                id: 7,\n                pId: 3,\n                text: \'余杭区\'\n            }, {\n                id: 8,\n                text: \'湖州市\',\n                pId: 1\n            }, {\n                id: 9,\n                text: \'长吉县\',\n                pId: 8\n            }]\n        });\n    }\n});</pre></div><h3 mxs="_z:c" class="__mx-style_index_-mt30">禁用</h3><div mxv mxa="_z:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list,headers" mx-change="' + $viewId + 'showValue()" mx-view="mx-linkage/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&selected=1%2C3&splitter=-&headers=' + ($expr = '<%@headers%>', $i($$ref, headers)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true"></div></div><div mxs="_z:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-linkage\n    list="&lt;%@list%&gt;"\n    selected="1,3"\n    splitter=\'-\'\n    headers="&lt;%@headers%&gt;"\n    disabled="true"\n    placeholder="请选择分类" /&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-linkage/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
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
    'showValue<change>': function (e) {
        console.log(e);
    }
});

});