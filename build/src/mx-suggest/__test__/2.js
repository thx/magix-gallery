/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', selectedValue = $$.selectedValue, selectedText = $$.selectedText, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerydp:_" class="_zs_galleryh"><div mxa="_zs_gallerydp:a" class="_zs_galleryk"><div mxs="_zs_gallerydp:_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>支持上下键切换选择项</div><div>模糊检索不区分大小写</div></div></div><div mxa="_zs_gallerydp:b" class="mb20"><span mxs="_zs_gallerydp:a" class="color-9">当前选中：</span>'; if (selectedValue) {
    ;
    $p += ' ' + $e(selectedValue) + '（' + $e(selectedText) + '） ';
} ; $p += '</div><div class="w250" mx-suggest="' + $viewId + 'suggest()" mx-view="mx-suggest/index?selected=' + $eu(selectedValue) + '&placeholder=%E8%BE%93%E5%85%A5%E5%85%B3%E9%94%AE%E8%AF%8D%E6%90%9C%E7%B4%A2&list=' + $i($$ref, [{ text: 'test1', value: 1 }, { text: 'test12', value: 2 }, { text: 'abc1', value: 3 }, { text: 'abc2', value: 4 }]) + '"></div></div><div mxa="_zs_gallerydp:c" class="_zs_galleryl"><div mxs="_zs_gallerydp:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydp:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydp:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-suggest class="w250"\n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    placeholder="输入关键词搜索"\n    list="&#123;&#123;@[&#123;\n        text: \'test1\',\n        value: 1\n    &#125;, &#123;\n        text: \'test12\',\n        value: 2\n    &#125;, &#123;\n        text: \'abc1\',\n        value: 3\n    &#125;, &#123;\n        text: \'abc2\',\n        value: 4\n    &#125;]&#125;&#125;"\n    mx-suggest="suggest()"/&gt;</pre></div><div mxa="_zs_gallerydp:e" class="_zs_galleryl"><div mxs="_zs_gallerydp:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerydp:f" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerydp:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            selectedValue: \'\'\n        &#125;);\n    &#125;,\n    \'suggest&lt;suggest&gt;\'(e) &#123;\n        // e.selected [object]\n        //      value\n        //      text\n        let selected = e.selected;\n        this.updater.digest(&#123;\n            selectedValue: selected.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            selectedValue: '',
            selectedText: ''
        });
    },
    'suggest<suggest>': function (e) {
        // e.selected [object]
        //      value
        //      text
        var selected = e.selected;
        this.updater.digest({
            selectedValue: selected.value,
            selectedText: selected.text
        });
    }
});

});