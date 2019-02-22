/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', content = $$.content, rules = $$.rules, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerya{:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerya{:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya{:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>部分文案可编辑，配置展示模板</div><div>hover元素显示编辑按钮</div><div>回车和失去焦点都可触发回调，只触发一次</div></div></div><div mxa="_zs_gallerya{:b" class="mb20"><span mxs="_zs_gallerya{:a" class="color-9">当前内容：</span><span>';
    $line = 13;
    $art = '=content';
    ;
    $p += ($expr = '<%=content%>', $e(content)) + '（要求必填且不小于200）</span></div><div mxa="_zs_gallerya{:c" class="mb20"><div mx-edit="' + $viewId + 'change()" mx-view="mx-editor/index?tmpl=%3Cspan%3E%24%7Bcontent%7D%3C%2Fspan%3E%3Cspan%20class%3D%27grey-solid-icon%20ml5%27%3E%E6%89%93%E6%A0%87%3C%2Fspan%3E&content=';
    $line = 18;
    $art = '=content';
    ;
    $p += ($expr = '<%!$eu(content)%>', $eu(content)) + '&rules=';
    $line = 19;
    $art = '@rules';
    ;
    $p += ($expr = '<%@rules%>', $i($$ref, rules)) + '"></div></div></div><div mxa="_zs_gallerya{:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya{:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya{:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya{:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-editor\n    tmpl="&lt;span&gt;$&#123;content&#125;&lt;/span&gt;&lt;span class=\'grey-solid-icon ml5\'&gt;打标&lt;/span&gt;"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@rules&#125;&#125;"\n    mx-edit="change()"&gt;&lt;/mx-editor&gt;</pre></div><div mxa="_zs_gallerya{:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya{:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya{:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 41;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya{:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            content: 2000,\n            rules: &#123;\n                required: true,\n                min: [200, \'不小于200\']\n            &#125;\n        &#125;);\n    &#125;,\n    \'change&lt;edit&gt;\' (e) &#123;\n        // editText编辑后的文案\n        this.updater.digest(&#123;\n            content: e.editText\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-editor/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            content: 2000,
            rules: {
                required: true,
                min: [200, '不小于200']
            }
        });
    },
    'change<edit>': function (e) {
        // editText编辑后的文案
        this.updater.digest({
            content: e.editText
        });
    }
});

});