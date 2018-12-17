/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-wanxiang/__test__/index",["magix","$","mx-title/second","./1","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
require("__test__/api");
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
} ; var $g = '', $_temp, $p = '', options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryd):_" mx-view="mx-title/second?content=%E5%BC%95%E5%85%A5%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE%E5%B7%A5%E4%BD%9C"></div><div mxs="_zs_galleryd):a" class="mb40">详情参见<a href="https://yuque.antfin-inc.com/wanxiang/technology/description" target="_blank" rel="noopener noreferrer" class="color-brand">https://yuque.antfin-inc.com/wanxiang/technology/description</a></div><div mxs="_zs_galleryd):b" mx-view="mx-title/second?content=%E5%BC%95%E5%85%A5%E6%9C%8D%E5%8A%A1%E7%AA%97"></div><div mxs="_zs_galleryd):c" mx-view="mx-wanxiang/__test__/1" class="mb40"></div><div mxs="_zs_galleryd):d" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 8;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-wanxiang/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'biz-code',
                desc: '必填，引入配置中申请到的bizCode，项目唯一标识',
                type: 'string',
                def: ''
            }, {
                key: 'default-source-id',
                desc: '必填，页面问答的默认sourceId，若当前页面路径不在source-map，则默认为该sourceId',
                type: 'string',
                def: 'text'
            }, {
                key: 'source-map',
                desc: "\u5982\u679C\u4E0D\u540C\u8DEF\u5F84\u7684\u5BF9\u5E94\u4E0D\u540C\u7684\u95EE\u7B54\uFF0C\u914D\u7F6E\u8DEF\u5F84\u5230sourceId\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u4F8B\u5982\uFF1A<pre>\n{\n    '/wanxiang/demo1': 432,\n    '/wanxiang/demo2': 496\n}\n</pre>\n<br/>\n<span class=\"color-red\">\u9700\u8981\u6CE8\u610F\u4E0D\u540CsourceId\u7684\u9875\u9762\u9ED8\u8BA4\u914D\u7F6E\u9879\u5FC5\u987B\u76F8\u540C\uFF0C\u4E0D\u7136\u4F1A\u4EA7\u751F\u4F4D\u7F6E\u5DEE\u9519</span>",
                type: 'object',
                def: '{}'
            }, {
                key: 'bottom',
                desc: '万象模块相对于页面右下角定位，该字段表示距离右边底部的距离',
                type: 'number',
                def: '0'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});