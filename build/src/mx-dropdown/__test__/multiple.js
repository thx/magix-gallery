/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/multiple",["magix","$","mx-title/second","./7","./11","./9","./13","./8","./10","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./7");
require("./11");
require("./9");
require("./13");
require("./8");
require("./10");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryab:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryab:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-dropdown/__test__/7"></div><div mx-view="mx-dropdown/__test__/11"></div><div mx-view="mx-dropdown/__test__/9"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-dropdown/__test__/13"></div><div mx-view="mx-dropdown/__test__/8"></div><div mx-view="mx-dropdown/__test__/10"></div></div></div><div mxs="_zs_galleryab:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 16;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/multiple.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: '列表数组，可为简单数组或[1,2,3]或对象数组，如[{id:1,text:"a"}]',
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中值',
                type: 'string',
                def: '选中值，支持：<br>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br>不传默认为空'
            }, {
                key: 'trigger-type',
                desc: '浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）',
                type: 'string',
                def: 'click'
            }, {
                key: 'text-key',
                desc: '渲染text时读取的key',
                type: 'string',
                def: 'text'
            }, {
                key: 'value-key',
                desc: '渲染value时读取的key',
                type: 'string',
                def: 'value'
            }, {
                key: 'searchbox',
                desc: '是否开启搜索框',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'need-all',
                desc: '多选下拉框是否需要全选功能，默认true',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'height',
                desc: '下拉框最大高度',
                type: 'number',
                def: '400'
            }, {
                key: 'mx-disabled',
                desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;',
                type: '',
                def: ''
            }, {
                key: 'name',
                desc: '全选时候的提示文案，比如“全部XX”',
                type: 'string',
                def: ''
            }, {
                key: 'empty-text',
                desc: '没有选择时的提示文案',
                type: 'string',
                def: ''
            },];
        this.updater.digest({
            options: options
        });
    }
});

});