/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/theme",["magix","$","../subs","mx-title/second","./theme-demo","./theme-vars","./theme-style"],(require,exports,module)=>{
/*Magix,$*/
require("../subs");
require("mx-title/second");
require("./theme-demo");
require("./theme-vars");
require("./theme-style");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryI:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'不同主题示例\',\n        key: viewId + \'_demo\'\n    }, {\n        name: \'变量配置\',\n        key: viewId + \'_vars\'\n    }, {\n        name: \'样式覆盖\',\n        key: viewId + \'_style\'\n    }]';
    ;
    $p += '' + ($expr = '<%@[{            name: \'不同主题示例\',            key: viewId + \'_demo\'        }, {            name: \'变量配置\',            key: viewId + \'_vars\'        }, {            name: \'样式覆盖\',            key: viewId + \'_style\'        }]%>', $i($$ref, [{ name: '不同主题示例', key: viewId + '_demo' }, { name: '变量配置', key: viewId + '_vars' }, { name: '样式覆盖', key: viewId + '_style' }])) + '"></div><div id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%B8%8D%E5%90%8C%E4%B8%BB%E9%A2%98%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryI:_" mx-view="__test__/pro/theme-demo" class="mb40"></div><div id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_vars" mx-view="mx-title/second?content=%E4%BF%AE%E6%94%B9%E7%BB%84%E4%BB%B6%E9%80%8F%E5%87%BA%E7%9A%84%E5%8F%AF%E9%85%8D%E7%BD%AE%E5%8F%98%E9%87%8F"></div><div mxs="_zs_galleryI:a" mx-view="__test__/pro/theme-vars" class="mb40"></div><div id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_custom" mx-view="mx-title/second?content=%E7%9B%B4%E6%8E%A5%E8%A6%86%E7%9B%96%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F"></div><div mxs="_zs_galleryI:b" mx-view="__test__/pro/theme-style" class="mb40"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/theme.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});