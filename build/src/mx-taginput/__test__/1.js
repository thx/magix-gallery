/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, list = $$.list, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryeB:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryeB:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryeB:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>双向绑定，node.val()可以获取数据</div><div>支持上下键切换，回车选择</div><div>支持键盘delete键删除</div><div>支持输入关键词搜索</div></div></div><div mxa="_zs_galleryeB:b" class="mb20"><a mxs="_zs_galleryeB:a" href="javascript:;" class="btn btn-brand mr20" mx-click="' + $viewId + 'get()">获取选中值</a><span mxs="_zs_galleryeB:b" class="color-9">当前选择：</span><span>';
    $line = 15;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</span></div><div mxv mxa="_zs_galleryeB:c" class="mb20"><div mxv="list" class="w280" id="';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_taginput" mx-view="mx-taginput/index?list=';
    $line = 20;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&selected=';
    $line = 21;
    $art = '=selected';
    ;
    $p += ($expr = '<%!$eu(selected)%>', $eu(selected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E9%9C%80%E8%A6%81%E7%9A%84%E5%80%BC"></div></div></div><div mxa="_zs_galleryeB:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryeB:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryeB:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 29;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryeB:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="get()"&gt;获取选中值&lt;/a&gt;\n\n&lt;mx-taginput class="w280"\n    id="&#123;&#123;=viewId&#125;&#125;_taginput"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    placeholder="请选择需要的值"/&gt;</pre></div><div mxa="_zs_galleryeB:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryeB:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryeB:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryeB:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 5; index++) &#123;\n            list.push(&#123;\n                text: \'test\' + index,\n                value: index\n            &#125;)\n        &#125;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list,\n            selected: \'1,2\'\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\'()&#123;\n        let node = $(\'#\' + this.id + \'_taginput\');\n        this.updater.digest(&#123;\n            selected: node.val()\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [];
        for (var index = 0; index < 5; index++) {
            list.push({
                text: 'test' + index,
                value: index
            });
        }
        this.updater.digest({
            viewId: this.id,
            list: list,
            selected: '1,2'
        });
    },
    'get<click>': function () {
        var node = $('#' + this.id + '_taginput');
        this.updater.digest({
            selected: node.val()
        });
    }
});

});