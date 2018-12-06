/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-copy/__test__/index",["magix","../../mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
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
var GTip = require("../../mx-gtip/index");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<h2 mxs="_j:_">mx-copy</h2><div mxa="_j:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div id="text_' + ($expr = '<%=viewId%>', $e(viewId)) + '">这里是要复制的<span mxs="_j:a" style="font-weight:bold">内容</span>的节点</div><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20" mx-success="' + $viewId + 'done()" mx-error="' + $viewId + 'bad()" mx-view="mx-copy/index?copyNode=text_' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '">复制</button></div><div mxs="_j:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;div id="text_&lt;%=viewId%&gt;"&gt;\n    这里是要复制的&lt;span style="font-weight:bold"&gt;内容&lt;/span&gt;的节点\n&lt;/div&gt;\n&lt;mx-copy\n    copy-node="text_&lt;%=viewId%&gt;"\n    tag="button"\n    type="button"\n    class="btn btn-brand mr20"\n    mx-success="done()"\n    mx-error="bad()"&gt;\n        复制\n    &lt;/mx-copy&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    \'done&lt;success&gt;\'() {\n        this.gtipRT(\'复制成功～\');\n    },\n    \'bad&lt;error&gt;\'() {\n        this.gtipRT(\'复制失败～\');\n    }\n});    \n</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-copy/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'done<success>': function () {
        this.gtipRT('复制成功～');
    },
    'bad<error>': function () {
        this.gtipRT('复制失败～');
    }
});

});