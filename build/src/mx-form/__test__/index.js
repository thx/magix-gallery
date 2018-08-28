/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/index",["magix","__test__/subs","mx-title/second","./17","./1"],(require,exports,module)=>{
/*Magix*/
require("__test__/subs");
require("mx-title/second");
require("./17");
require("./1");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerya|:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'isValid定义\',\n        key: viewId + \'_method\'\n    }, {\n        name: \'完整表单应用示例\',\n        key: viewId + \'_demo\'\n    }, {\n        name: \'警告场景示例\',\n        key: viewId + \'_warn\'\n    }]';
    ;
    $p += '' + ($expr = '<%@[{            name: \'isValid定义\',            key: viewId + \'_method\'        }, {            name: \'完整表单应用示例\',            key: viewId + \'_demo\'        }, {            name: \'警告场景示例\',            key: viewId + \'_warn\'        }]%>', $i($$ref, [{ name: 'isValid定义', key: viewId + '_method' }, { name: '完整表单应用示例', key: viewId + '_demo' }, { name: '警告场景示例', key: viewId + '_warn' }])) + '"></div><div id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerya|:_" class="pr20 mb40"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>isValid(configs: object)</td><td><pre>this.isValid(&#123;\n        // 单独校验某个节点，可以传入dom节点，或者#id，.class，直接传入字符串默认为id\n        // 1. 默认null，整个view校验\n        // 2. 传入element的时候\n        //    2.1 如果element本身有校验，则只校验该节点\n        //    2.2 如果element本身无校验，则找该节点下所有的校验项去校验\n        element: null,\n    \n        // 校验有错误的情况下是否要滚动到错误节点，默认true\n        scrollIntoView: true, \n    \n        //是否调用子view校验，children.isValid，默认true\n        checkSubs: true \n    &#125;)\n    </pre></td></tr></tbody></table></div><div id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E5%AE%8C%E6%95%B4%E8%A1%A8%E5%8D%95%E5%BA%94%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerya|:a" class="clearfix mb20"><div mx-view="mx-form/__test__/17"></div></div><div id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_warn" mx-view="mx-title/second?content=warn%E8%AD%A6%E5%91%8A%E5%9C%BA%E6%99%AF%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerya|:b" class="clearfix mb20"><div mx-view="mx-form/__test__/1"></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});