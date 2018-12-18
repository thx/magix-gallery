/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/14",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybk:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerybk:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybk:_" class="mb20"><span class="color-9 mr20">动态添加（要求2 ~ 4个字符）：</span><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'add()">+ 再加一条</a></div><div mxv>';
    $line = 9;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ifrfnlogx$art_i = 0, $art_caaavyhdh$art_c = list.length; $art_ifrfnlogx$art_i < $art_caaavyhdh$art_c; $art_ifrfnlogx$art_i++) {    var item = list[$art_ifrfnlogx$art_i]%>';
    for (var $art_ifrfnlogx$art_i = 0, $art_caaavyhdh$art_c = list.length; $art_ifrfnlogx$art_i < $art_caaavyhdh$art_c; $art_ifrfnlogx$art_i++) {
        var item = list[$art_ifrfnlogx$art_i];
        $p += '<input mxe="' + $viewId + '_0_' + ($expr = '<%=$art_ifrfnlogx$art_i%>', $e($art_ifrfnlogx$art_i)) + '" mxc="[';
        $line = 11;
        $art = ':item.value{required:true,blength:[2,4]}';
        ;
        $p += '{p:\'list.' + ($expr = '<%=$art_ifrfnlogx$art_i%>', $e($art_ifrfnlogx$art_i)) + '.value\',f:{required:true,blength:[2,4]}}]" class="input mr20 mb20 w120" placeholder="请填写" value="';
        $line = 11;
        $art = ':item.value{required:true,blength:[2,4]}';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '"/>';
        $line = 12;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerybk:b" class="clearfix"><div mxa="_zs_gallerybk:c" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerybk:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybk:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybk:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;"class="link-brand"\n    mx-click="add()"&gt;+ 再加一条&lt;/a&gt;\n\n&#123;&#123;each list as item&#125;&#125;\n&lt;input class="input mr20" placeholder="请填写" \n    value="&#123;&#123;:item.value&#123;required:true,blength:[2,4]&#125;&#125;&#125;"/&gt;\n&#123;&#123;/each&#125;&#125;</pre></div><div mxa="_zs_gallerybk:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerybk:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybk:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 36;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybk:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../index\');\nlet Validator = require(\'@../validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 2; index++) &#123;\n            list.push(&#123;\n                key: index,\n                value: \'\'\n            &#125;)\n        &#125;\n\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    \'add&lt;click&gt;\'(e)&#123;\n        let list = this.updater.get(\'list\');\n        let len = list.length;\n        list.push(&#123;\n            key: len,\n            value: \'test\'\n        &#125;)\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/14.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        var list = [];
        for (var index = 0; index < 2; index++) {
            list.push({
                key: index,
                value: ''
            });
        }
        this.updater.digest({
            list: list
        });
    },
    'add<click>': function (e) {
        var list = this.updater.get('list');
        var len = list.length;
        list.push({
            key: len,
            value: 'test'
        });
        this.updater.digest({
            list: list
        });
    }
});

});