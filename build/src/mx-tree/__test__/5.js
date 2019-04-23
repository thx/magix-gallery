/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
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
} ; var $g = '', $_temp, $p = '', selectedItems = $$.selectedItems, viewId = $$.viewId, selectedValues = $$.selectedValues, list = $$.list, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerye7:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerye7:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerye7:_" class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'get()" class="btn btn-brand">获取当前选中单元完整信息</a></div><div mxa="_zs_gallerye7:b" class="mb20 clearfix"><div mxs="_zs_gallerye7:a" class="color-9 fl">选中单元：</div><div mxa="_zs_gallerye7:c" class="fl">';
    $line = 9;
    $art = 'each selectedItems as item';
    ;
    $expr = '<%for (var $art_ivizblckeh$art_i = 0, $art_cpwpbbq$art_c = selectedItems.length; $art_ivizblckeh$art_i < $art_cpwpbbq$art_c; $art_ivizblckeh$art_i++) {    var item = selectedItems[$art_ivizblckeh$art_i]%>';
    for (var $art_ivizblckeh$art_i = 0, $art_cpwpbbq$art_c = selectedItems.length; $art_ivizblckeh$art_i < $art_cpwpbbq$art_c; $art_ivizblckeh$art_i++) {
        var item = selectedItems[$art_ivizblckeh$art_i];
        $p += '<div>';
        $line = 10;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '（';
        $line = 10;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '）</div>';
        $line = 11;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv="selectedValues,list" id="';
    $line = 14;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_tree" mx-view="mx-tree/index?bottomValues=';
    $line = 15;
    $art = '@selectedValues';
    ;
    $p += ($expr = '<%@selectedValues%>', $i($$ref, selectedValues)) + '&list=';
    $line = 16;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&needAll=true"></div></div><div mxa="_zs_gallerye7:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerye7:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerye7:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerye7:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    bottom-values="&#123;&#123;@selectedValues&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    need-all="true"&gt;&lt;/mx-tree&gt;</pre></div><div mxa="_zs_gallerye7:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerye7:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerye7:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 36;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerye7:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            pValue: \'\',\n            text: \'计划1\'\n        &#125;, &#123;\n            value: 2,\n            pValue: \'\',\n            text: \'计划2\'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: \'单元1-1\'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: \'单元1-2\'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: \'单元2-1\'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: \'单元2-2\'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list,\n            selectedValues: [],\n            selectedItems: []\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\'(event)&#123;\n        let that = this;\n\n        let tree = Vframe.get(that.id + \'_tree\');\n        let selectedItems = tree.invoke(\'getBottomItems\');\n        let selectedValues = selectedItems.map(item =&gt; &#123;\n            return item.value;\n        &#125;)\n\n        this.updater.digest(&#123;\n            selectedValues,\n            selectedItems\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/__test__/5.html';
    throw msg;
} return $p; },
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