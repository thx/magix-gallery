/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-switch/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', state = $$.state, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerydw:_" class="_zs_galleryh"><div mxa="_zs_gallerydw:a" class="_zs_galleryk clearfix"><span class="fl mr20 mt5" mx-change="' + $viewId + 'toggle()" mx-view="mx-switch/index?state=' + $eu(state) + '"></span><a mxs="_zs_gallerydw:_" href="javascript:;" class="btn btn-brand fl mr20" mx-click="' + $viewId + 'change()">切换状态</a><span mxa="_zs_gallerydw:b" class="lh32 fl">当前状态：' + $e(state) + '</span></div><div mxa="_zs_gallerydw:c" class="_zs_galleryl"><div mxs="_zs_gallerydw:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydw:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydw:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-switch class="mr20"\n    state="&#123;&#123;=state&#125;&#125;"\n    mx-change="toggle()"/&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="change()"&gt;切换状态&lt;/a&gt;</pre></div><div mxa="_zs_gallerydw:e" class="_zs_galleryl"><div mxs="_zs_gallerydw:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerydw:f" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerydw:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            state: true\n        &#125;);\n    &#125;,\n    \'toggle&lt;change&gt;\' (event) &#123;\n        // event.state 当前开还是关\n        // true 开，false关\n        this.updater.digest(&#123;\n            state: event.state\n        &#125;);\n    &#125;,\n    \'change&lt;click&gt;\'(event)&#123;\n        let state = this.updater.get(\'state\');\n        this.updater.digest(&#123;\n            state: !state\n        &#125;);\n&#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            state: true
        });
    },
    'toggle<change>': function (event) {
        // event.state 当前开还是关
        this.updater.digest({
            state: event.state
        });
    },
    'change<click>': function (event) {
        var state = this.updater.get('state');
        this.updater.digest({
            state: !state
        });
    }
});

});