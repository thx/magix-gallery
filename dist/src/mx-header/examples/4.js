/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-header_examples_index_","._zs_gallery_mx-header_examples_index_-content {\n  height: 1200px;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-header_examples_index_-content ._zs_gallery_mx-header_examples_index_-inner {\n  width: 1000px;\n  padding-top: 100px;\n  margin: auto;\n}\n._zs_gallery_mx-header_examples_index_-wrapper {\n  height: 400px;\n  overflow-y: auto;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_mx-header_examples_index_-wrapper ._zs_gallery_mx-header_examples_index_-inner {\n  height: 800px;\n}\n._zs_gallery_mx-header_examples_index_-cut {\n  margin-left: 15px;\n  border: 1px solid var(--color-border);\n}\n");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycO:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerycO:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div id="';
    $line = 3;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test" class="_zs_gallery_mx-header_examples_index_-wrapper"><div mx-view="mx-header/index?width=900&dark=false&navs=';
    $line = 7;
    $art = '@[{\n                    value: 1,\n                    text: \'营销中台\'\n                }, {\n                    value: 2,\n                    text: \'创意中台\'\n                }]';
    ;
    $p += ($expr = '<%@[{            value: 1,            text: \'营销中台\'        }, {            value: 2,            text: \'创意中台\'        }]%>', $i($$ref, [{ value: 1, text: '营销中台' }, { value: 2, text: '创意中台' }])) + '&login=false&wrapper=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_test"></div><div mxs="_zs_gallerycO:_" class="_zs_gallery_mx-header_examples_index_-inner"></div></div></div><div mxa="_zs_gallerycO:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerycO:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycO:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycO:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div id="&#123;&#123;=viewId&#125;&#125;_test"&gt;\n    &lt;mx-header \n        width="900" \n        dark="false"\n        navs="&#123;&#123;@[&#123;\n            value: 1,\n            text: \'营销中台\'\n        &#125;, &#123;\n            value: 2,\n            text: \'创意中台\'\n        &#125;]&#125;&#125;" \n        login="false"\n        wrapper="&#123;&#123;=viewId&#125;&#125;_test"/&gt;\n&lt;/div&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/examples/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});