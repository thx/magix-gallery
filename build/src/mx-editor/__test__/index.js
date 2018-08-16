/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/__test__/index",["magix","$","mx-title/second","./1","./2","./3","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryam:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryam:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-editor/__test__/1"></div><div mx-view="mx-editor/__test__/2"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-editor/__test__/3"></div></div></div><div mxs="_zs_galleryam:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 13;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-editor/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'content',
                desc: '需要编辑的文案',
                type: 'string',
                def: ''
            }, {
                key: 'tmpl',
                desc: '编辑内容不是纯文本，需要有html片段的，配置展示模板，使用${content}当占位符显示编辑内容',
                type: 'string',
                def: '${content}'
            }, {
                key: 'rules',
                desc: '校验规则',
                type: 'object',
                def: '支持form所支持的所有类型校验'
            }, {
                key: 'small',
                desc: '是否是缩小尺寸的input',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'width',
                desc: 'input的宽度',
                type: 'number',
                def: 140
            }];
        this.updater.digest({
            options: options
        });
    }
});

});