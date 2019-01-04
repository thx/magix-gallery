/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Vframe = Magix.Vframe;
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
} ; var $g = '', $_temp, $p = '', selectedItems = $$.selectedItems, viewId = $$.viewId, selectedValues = $$.selectedValues, list = $$.list, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryea:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryea:a" class="_zs_galleryk"><div mxs="_zs_galleryea:_" class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'get()" class="btn btn-brand">获取当前选中单元完整信息</a></div><div mxa="_zs_galleryea:b" class="mb20 clearfix"><div mxs="_zs_galleryea:a" class="color-9 fl">选中单元：</div><div mxa="_zs_galleryea:c" class="fl">'; for (var $art_ivppfnjywa$art_i = 0, $art_cvmzqgrwpql$art_c = selectedItems.length; $art_ivppfnjywa$art_i < $art_cvmzqgrwpql$art_c; $art_ivppfnjywa$art_i++) {
    var item = selectedItems[$art_ivppfnjywa$art_i];
    $p += '<div>' + $e(item.text) + '（' + $e(item.value) + '）</div>';
} ; $p += '</div></div><div mxv="selectedValues,list" id="' + $e(viewId) + '_tree" mx-view="mx-tree/index?bottomValues=' + $i($$ref, selectedValues) + '&list=' + $i($$ref, list) + '&needAll=true"></div></div><div mxa="_zs_galleryea:d" class="_zs_galleryl"><div mxs="_zs_galleryea:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryea:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryea:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    bottom-values="&#123;&#123;@selectedValues&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    need-all="true"&gt;&lt;/mx-tree&gt;</pre></div><div mxa="_zs_galleryea:f" class="_zs_galleryl"><div mxs="_zs_galleryea:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryea:g" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryea:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            pValue: \'\',\n            text: \'计划1\'\n        &#125;, &#123;\n            value: 2,\n            pValue: \'\',\n            text: \'计划2\'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: \'单元1-1\'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: \'单元1-2\'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: \'单元2-1\'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: \'单元2-2\'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list,\n            selectedValues: [],\n            selectedItems: []\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\'(event)&#123;\n        let that = this;\n\n        let tree = Vframe.get(that.id + \'_tree\');\n        let selectedItems = tree.invoke(\'getBottomItems\');\n        let selectedValues = selectedItems.map(item =&gt; &#123;\n            return item.value;\n        &#125;)\n\n        this.updater.digest(&#123;\n            selectedValues,\n            selectedItems\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        var list = [{
                value: 1,
                pValue: '',
                text: '计划1'
            }, {
                value: 2,
                pValue: '',
                text: '计划2'
            }, {
                value: 11,
                pValue: 1,
                text: '单元1-1'
            }, {
                value: 12,
                pValue: 1,
                text: '单元1-2'
            }, {
                value: 21,
                pValue: 2,
                text: '单元2-1'
            }, {
                value: 22,
                pValue: 2,
                text: '单元2-2'
            }];
        this.updater.digest({
            list: list,
            selectedValues: [],
            selectedItems: []
        });
    },
    'get<click>': function (event) {
        var that = this;
        var tree = Vframe.get(that.id + '_tree');
        var selectedItems = tree.invoke('getBottomItems');
        var selectedValues = selectedItems.map(function (item) {
            return item.value;
        });
        this.updater.digest({
            selectedValues: selectedValues,
            selectedItems: selectedItems
        });
    }
});

});