/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-header___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-header___test___index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-header___test___index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-header___test___index_-content {\n  height: 1200px;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-header___test___index_-content ._zs_gallery_mx-header___test___index_-inner {\n  width: 1000px;\n  padding-top: 220px;\n  margin: auto;\n  font-size: 20px;\n  text-align: center;\n}\n._zs_gallery_mx-header___test___index_-wrapper {\n  height: 400px;\n  overflow-y: auto;\n  background-color: #fafafa;\n  border: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-header___test___index_-wrapper ._zs_gallery_mx-header___test___index_-inner {\n  height: 800px;\n}\n");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerya%:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallerya%:a" class="_zs_gallery___test___base_-eg-content"><div id="';
    $line = 3;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_test" class="_zs_gallery_mx-header___test___index_-wrapper"><div mx-view="mx-header/index?width=900&navs=';
    $line = 6;
    $art = '@[{\n                    value: 1,\n                    text: \'营销中台\'\n                }, {\n                    value: 2,\n                    text: \'创意中台\'\n                }]';
    ;
    $p += '' + ($expr = '<%@[{value:1,text:\'营销中台\'},{value:2,text:\'创意中台\'}]%>', $i([{ value: 1, text: '营销中台' }, { value: 2, text: '创意中台' }])) + '&wrapper=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_test"></div><div mxs="_zs_gallerya%:_" class="_zs_gallery_mx-header___test___index_-inner"></div></div></div><div mxa="_zs_gallerya%:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerya%:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 19;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya%:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 21;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya%:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_test"&gt;\n    &lt;mx-header \n        width="900" \n        navs="';
    $line = 28;
    $art = '@[{\n            value: 1,\n            text: \'营销中台\'\n        }, {\n            value: 2,\n            text: \'创意中台\'\n        }]';
    ;
    $p += '' + ($expr = '<%@[{value:1,text:\'营销中台\'},{value:2,text:\'创意中台\'}]%>', $i([{ value: 1, text: '营销中台' }, { value: 2, text: '创意中台' }])) + '" \n        wrapper="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_test"/&gt;\n&lt;/div&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});