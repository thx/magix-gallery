/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, custom = $$.custom, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybs:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerybs:a" class="_zs_gallery___test___base_-eg-content"><span mxv="custom" class="btn" mx-view="mx-popover/index?width=420&view=mx-popover%2F__test__%2Fcustom&data=';
    $line = 6;
    $art = '@custom';
    ;
    $p += '' + ($expr = '<%@custom%>', $i(custom)) + '&placement=bottom">提示内容为自定义view</span></div><div mxa="_zs_gallerybs:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybs:_" class="_zs_gallery___test___base_-eg-title">view自定义页面地址，data为传入view的数据</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 11;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybs:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 13;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybs:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popover class="btn"\n    width="420"\n    view="@./custom"\n    data="&#123;&#123;@custom&#125;&#125;"&gt;提示内容为自定义view&lt;/mx-popover&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            custom: {
                list: [{
                        name: '消耗',
                        key: 'charge',
                        type: 'double'
                    }, {
                        name: '展现量',
                        key: 'adPv',
                        type: 'integer'
                    }, {
                        name: '点击量',
                        key: 'click',
                        type: 'integer'
                    }, {
                        name: '点击率',
                        key: 'ctr',
                        type: 'percent'
                    }]
            }
        });
    }
});

});