/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallery;:_" class="_zs_galleryh"><div mxa="_zs_gallery;:a" class="_zs_galleryk"><div mxa="_zs_gallery;:b" class="mb20"><label mxa="_zs_gallery;:c" class="mr20 w100"><span mx-view="mx-checkbox/index?name=' + $eu(viewId) + '_test&value=1&checked=true"></span>选中</label><label mxa="_zs_gallery;:d" class="mr20"><span mx-view="mx-checkbox/index?name=' + $eu(viewId) + '_test&value=2&checked=true&disabled=true"></span>选中禁选</label></div><div mxa="_zs_gallery;:e" class="mb20"><label mxa="_zs_gallery;:f" class="mr20 w100"><span mx-view="mx-checkbox/index?name=' + $eu(viewId) + '_test&value=3"></span>非选中</label><label mxa="_zs_gallery;:g" class="mr20"><span mx-view="mx-checkbox/index?name=' + $eu(viewId) + '_test&value=4&disabled=true"></span>非选中禁选</label></div><div mxa="_zs_gallery;:h" class="mb20"><label mxa="_zs_gallery;:i" class="mr20 w100"><span mx-view="mx-checkbox/index?name=' + $eu(viewId) + '_test&value=5&indeterminate=true"></span>indeterminate</label><label mxa="_zs_gallery;:j" class="mr20"><span mx-view="mx-checkbox/index?name=' + $eu(viewId) + '_test&value=6&indeterminate=true&disabled=true"></span>indeterminate禁选</label></div></div><div mxa="_zs_gallery;:k" class="_zs_galleryl"><div mxs="_zs_gallery;:_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallery;:l" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallery;:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="1"\n        checked="true"/&gt;\n    选中\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="2" \n        checked="true" \n        disabled="true"/&gt;\n    选中禁选\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="3"/&gt;\n    非选中\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="4" \n        disabled="true"/&gt;\n    非选中禁选\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="5"\n        indeterminate="true"/&gt;\n    indeterminate\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="6" \n        indeterminate="true" \n        disabled="true"/&gt;\n    indeterminate禁选\n&lt;/label&gt;\n        </pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});