/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/theme-vars",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryN:_" class="mb10 mr20">在本地项目 project/src/project/assets/vars_override.less 文件中覆盖可配置参数，可配置参数如下所示：</div><pre mxs="_zs_galleryN:a" class="tip-content has-border mr20">\n// 品牌色\n@color-brand: #4d7fff;   //品牌色\n@color-brand-hover: shade(@color-brand, 8%); //品牌色hover时色值\n@color-brand-vs: #14c9ce;   //品牌色对比色\n@color-brand-text: #ffffff;     //品牌色上文案色值\n@color-brand-text-hover: #ffffff;     //hover时品牌色上文案色值\n@color-brand-light : tint(@color-brand, 78%);\n@color-brand-opacity: tint(@color-brand, 95%);\n\n//边框\n@color-border: #e6e6e6;  \n@color-border-hover: #ccc;\n@border-radius: 4px;\n\n// 表格相关色值\n@table-color-border: #ebebeb;\n@table-operation-color-bg: tint(@color-brand, 88%);\n\n// 品牌按钮颜色，支持渐变，若不需要渐变，@btn-brand = @btn-brand-gradient 即可\n@btn-border-radius: @border-radius;\n@btn-brand: @color-brand;\n@btn-brand-gradient: @color-brand;\n@btn-brand-hover: @color-brand-hover;\n@btn-brand-gradient-hover: @color-brand-hover;\n@btn-brand-text: @color-brand-text;\n@btn-brand-text-hover: @color-brand-text-hover;\n\n//字体相关参数\n@line-height: 1.5;\n@font-size: 12px;\n\n// 提示颜色\n@color-primary: #333;\n@color-secondary: #666;\n@color-third: #999;\n@color-hover: #f0f0f0;\n@color-warn: #ffb400;\n@color-red: #a40100;\n@color-orange: #ff5500;\n@color-green: #51a300;\n@color-disabled: #eee;\n\n//背景色\n@color-bg: #fafafa;\n@color-bg-hover: #ccc;\n\n//输入或下拉框高度 \n@input-height: 32px;\n@input-small-height: 26px;\n\n//动画时长\n@duration: 0.25s;\n</pre>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/theme-vars.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});