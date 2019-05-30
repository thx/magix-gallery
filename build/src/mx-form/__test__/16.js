/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/16",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, name = $$.name, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb^:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryb^:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_galleryb^:b" class="clearfix mb20"><span mxs="_zs_galleryb^:_" class="color-9 mr20">节点1：</span><input class="input w240 mr20" placeholder="节点1" id="';
    $line = 5;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_1" value="1"/><span mxs="_zs_galleryb^:a" class="color-9 mr20">节点2：</span><input class="input w240" placeholder="节点2" id="';
    $line = 7;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_2" value="2"/></div><div mxv mxa="_zs_galleryb^:c" class="mb20"><span mxs="_zs_galleryb^:b" class="color-9 mr20" style="opacity: 0;">节点3：</span><input mxe="' + $viewId + '_0" mxc="[';
    $line = 12;
    $art = ':name{unequalto:viewId + \'_1,\' + viewId + \'_2\'}';
    ;
    $p += '{p:\'name\',f:{unequalto:\'' + ($expr = '<%@ viewId + \'_1,\' + viewId + \'_2\'%>', $i($$ref, viewId + '_1,' + viewId + '_2')) + '\'}}]" class="input w240 mr20" placeholder="不同于节点1与节点2" value="';
    $line = 12;
    $art = ':name{unequalto:viewId + \'_1,\' + viewId + \'_2\'}';
    ;
    $p += ($expr = '<%=name%>', $e(name)) + '"/><span mxs="_zs_galleryb^:c" class="color-9 mr20" style="opacity: 0;">节点4：</span><input mxe="' + $viewId + '_1" mxc="[';
    $line = 15;
    $art = ':name{unequalto:[viewId + \'_1,\' + viewId + \'_2\',\'不要输入重复的内容\']}';
    ;
    $p += '{p:\'name\',f:{unequalto:[\'' + ($expr = '<%@ viewId + \'_1,\' + viewId + \'_2\'%>', $i($$ref, viewId + '_1,' + viewId + '_2')) + '\',\'不要输入重复的内容\']}}]" class="input w240" placeholder="不同于节点1与节点2，自定义提示" value="';
    $line = 15;
    $art = ':name{unequalto:[viewId + \'_1,\' + viewId + \'_2\',\'不要输入重复的内容\']}';
    ;
    $p += ($expr = '<%=name%>', $e(name)) + '"/></div></div><div mxa="_zs_galleryb^:d" class="clearfix"><div mxa="_zs_galleryb^:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryb^:d" class="_zs_gallery___test___layout_-eg-title">与某个节点的结果不重复</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb^:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb^:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="节点1" \n    id="&#123;&#123;=viewId&#125;&#125;_1" value="1"/&gt;\n\n&lt;input class="input" placeholder="节点2" \n    id="&#123;&#123;=viewId&#125;&#125;_2" value="2"/&gt;\n\n&lt;input class="input" placeholder="不同于节点1与节点2" \n    value="&#123;&#123;:name&#123;unequalto:viewId + \'_1,\' + viewId + \'_2\'&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="不同于节点1与节点2，自定义提示" \n    value="&#123;&#123;:name&#123;unequalto:[viewId + \'_1,\' + viewId + \'_2\',\'不要输入重复的内容\']&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryb^:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryb^:f" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryb^:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 43;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryb^:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../mx-form/index\');\nlet Validator = require(\'@../mx-form/validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            viewId: this.id\n        });\n    }\n});</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/16.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});