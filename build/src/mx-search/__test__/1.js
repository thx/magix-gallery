/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', searchKey = $$.searchKey, searchValue = $$.searchValue, list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerydb:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerydb:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerydb:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>支持上下键切换选择项</div><div>未搜索状态下，回车默认搜索第一个</div><div>已搜索状态下，回车搜索当前选中项</div><div>默认placeholder=list.map(item => {return item.text;})，对item.text去重</div><div>事件处理</div></div></div><div mxa="_zs_gallerydb:b" class="mb20"><span mxs="_zs_gallerydb:a" class="color-9">当前搜索：</span>';
    $line = 15;
    $art = 'if searchKey';
    ;
    $expr = '<%if (searchKey) {%>';
    if (searchKey) {
        ;
        $p += '<span>';
        $line = 16;
        $art = '=searchKey';
        ;
        $p += ($expr = '<%=searchKey%>', $e(searchKey)) + ' = ';
        $line = 16;
        $art = '=searchValue';
        ;
        $p += ($expr = '<%=searchValue%>', $e(searchValue)) + '</span>';
        $line = 17;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv><div mxv="list" class="w200" mx-search="' + $viewId + 'change()" mx-view="mx-search/index?list=';
    $line = 21;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&searchKey=';
    $line = 22;
    $art = '=searchKey';
    ;
    $p += ($expr = '<%!$eu(searchKey)%>', $eu(searchKey)) + '&searchValue=';
    $line = 23;
    $art = '=searchValue';
    ;
    $p += ($expr = '<%!$eu(searchValue)%>', $eu(searchValue)) + '"></div></div></div><div mxa="_zs_gallerydb:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydb:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydb:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 31;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydb:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-search class="w200"\n    list="&#123;&#123;@list&#125;&#125;" \n    search-key="&#123;&#123;=searchKey&#125;&#125;"\n    search-value="&#123;&#123;=searchValue&#125;&#125;"\n    mx-search="change()"&gt;&lt;/mx-search&gt;</pre></div><div mxa="_zs_gallerydb:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydb:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydb:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 45;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydb:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [&#123;\n                text: \'计划\',\n                value: \'campaignId\'\n            &#125;, &#123;\n                text: \'单元\',\n                value: \'adgroupId\'\n            &#125;],\n            searchKey: \'\',\n            searchValue: \'\'\n        &#125;);\n    &#125;,\n    \'change&lt;search&gt;\' (e) &#123;\n        e.preventDefault();\n        // e.searchKey 搜索对应的key值\n        // e.searchValue input文本框输入的对应的内容\n        this.updater.digest(&#123;\n            searchKey: e.searchKey,\n            searchValue: e.searchValue\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-search/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            list: [{
                    text: '计划',
                    value: 'campaignId'
                }, {
                    text: '单元',
                    value: 'adgroupId'
                }],
            searchKey: '',
            searchValue: ''
        });
    },
    'change<search>': function (e) {
        e.preventDefault();
        // e.searchKey 搜索对应的key值
        // e.searchValue input文本框输入的对应的内容
        this.updater.digest({
            searchKey: e.searchKey,
            searchValue: e.searchValue
        });
    }
});

});