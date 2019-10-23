/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/examples/7",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', number = $$.number, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycq:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerycq:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxv mxa="_zs_gallerycq:b" class="clearfix"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 4;
    $art = ':number{range:[4, 8]}';
    ;
    $p += '{p:\'number\',f:{range:[4, 8]}}]" class="input w180 mr20 mb20" placeholder="4到8之间的数字(包括4和8)" value="';
    $line = 4;
    $art = ':number{range:[4, 8]}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 5;
    $art = ':number{range:[4, 8, \'自定义提示：4~8中间的数字，包含4和8\']}';
    ;
    $p += '{p:\'number\',f:{range:[4, 8, \'自定义提示：4~8中间的数字，包含4和8\']}}]" class="input w180 mr20 mb20" placeholder="4到8之间的数字(包括4和8)" value="';
    $line = 5;
    $art = ':number{range:[4, 8, \'自定义提示：4~8中间的数字，包含4和8\']}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_2" mxc="[';
    $line = 6;
    $art = ':number{rangeborder:[4, 8]}';
    ;
    $p += '{p:\'number\',f:{rangeborder:[4, 8]}}]" class="input w180 mr20 mb20" placeholder="4到8之间的数字(不包括4和8)" value="';
    $line = 6;
    $art = ':number{rangeborder:[4, 8]}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_3" mxc="[';
    $line = 7;
    $art = ':number{rangeborder:[4, 8, \'自定义提示：4~8中间的数字，不包含4和8\']}';
    ;
    $p += '{p:\'number\',f:{rangeborder:[4, 8, \'自定义提示：4~8中间的数字，不包含4和8\']}}]" class="input w180 mr20 mb20" placeholder="4到8之间的数字(不包括4和8)" value="';
    $line = 7;
    $art = ':number{rangeborder:[4, 8, \'自定义提示：4~8中间的数字，不包含4和8\']}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/></div><div mxv mxa="_zs_gallerycq:c" class="clearfix"><input mxe="' + $viewId + '_4" mxc="[';
    $line = 10;
    $art = ':number{min:20}';
    ;
    $p += '{p:\'number\',f:{min:20}}]" class="input w180 mr20 mb20" placeholder="大于等于20" value="';
    $line = 10;
    $art = ':number{min:20}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_5" mxc="[';
    $line = 11;
    $art = ':number{min:[20, \'自定义提示：大于等于20\']}';
    ;
    $p += '{p:\'number\',f:{min:[20, \'自定义提示：大于等于20\']}}]" class="input w180 mr20 mb20" placeholder="大于等于20" value="';
    $line = 11;
    $art = ':number{min:[20, \'自定义提示：大于等于20\']}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_6" mxc="[';
    $line = 12;
    $art = ':number{minborder:20}';
    ;
    $p += '{p:\'number\',f:{minborder:20}}]" class="input w180 mr20 mb20" placeholder="大于20" value="';
    $line = 12;
    $art = ':number{minborder:20}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_7" mxc="[';
    $line = 13;
    $art = ':number{minborder:[20, \'自定义提示：大于20\']}';
    ;
    $p += '{p:\'number\',f:{minborder:[20, \'自定义提示：大于20\']}}]" class="input w180 mr20 mb20" placeholder="大于20" value="';
    $line = 13;
    $art = ':number{minborder:[20, \'自定义提示：大于20\']}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/></div><div mxv mxa="_zs_gallerycq:d" class="clearfix"><input mxe="' + $viewId + '_8" mxc="[';
    $line = 16;
    $art = ':number{max:30}';
    ;
    $p += '{p:\'number\',f:{max:30}}]" class="input w180 mr20 mb20" placeholder="小于等于30" value="';
    $line = 16;
    $art = ':number{max:30}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_9" mxc="[';
    $line = 17;
    $art = ':number{max:[30, \'自定义提示：小于等于30\']}';
    ;
    $p += '{p:\'number\',f:{max:[30, \'自定义提示：小于等于30\']}}]" class="input w180 mr20 mb20" placeholder="小于等于30" value="';
    $line = 17;
    $art = ':number{max:[30, \'自定义提示：小于等于30\']}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_a" mxc="[';
    $line = 18;
    $art = ':number{maxborder:30}';
    ;
    $p += '{p:\'number\',f:{maxborder:30}}]" class="input w180 mr20 mb20" placeholder="小于30" value="';
    $line = 18;
    $art = ':number{maxborder:30}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_b" mxc="[';
    $line = 19;
    $art = ':number{maxborder:[30, \'自定义提示：小于30\']}';
    ;
    $p += '{p:\'number\',f:{maxborder:[30, \'自定义提示：小于30\']}}]" class="input w180 mr20 mb20" placeholder="小于30" value="';
    $line = 19;
    $art = ':number{maxborder:[30, \'自定义提示：小于30\']}';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '"/></div></div><div mxa="_zs_gallerycq:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerycq:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">数字范围</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycq:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 26;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycq:a" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="4到8之间的数字(包括4和8)" value="&#123;&#123;:number&#123;range:[4, 8]&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="4到8之间的数字(包括4和8)" value="&#123;&#123;:number&#123;range:[4, 8, \'自定义提示：4~8中间的数字，包含4和8\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="4到8之间的数字(不包括4和8)" value="&#123;&#123;:number&#123;rangeborder:[4, 8]&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="4到8之间的数字(不包括4和8)" value="&#123;&#123;:number&#123;rangeborder:[4, 8, \'自定义提示：4~8中间的数字，不包含4和8\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="大于等于20" value="&#123;&#123;:number&#123;min:20&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="大于等于20" value="&#123;&#123;:number&#123;min:[20, \'自定义提示：大于等于20\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="大于20" value="&#123;&#123;:number&#123;minborder:20&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="大于20" value="&#123;&#123;:number&#123;minborder:[20, \'自定义提示：大于20\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="小于等于30" value="&#123;&#123;:number&#123;max:30&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="小于等于30" value="&#123;&#123;:number&#123;max:[30, \'自定义提示：小于等于30\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="小于30" value="&#123;&#123;:number&#123;maxborder:30&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="小于30" value="&#123;&#123;:number&#123;maxborder:[30, \'自定义提示：小于30\']&#125;&#125;&#125;"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/examples/7.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            rules: {
                required: true
            }
        });
    }
});

});