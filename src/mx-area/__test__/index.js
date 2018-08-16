/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-area/__test__/index",["magix","$","mx-title/second","./1","./2","./3","./4","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("./4");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryB:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryB:a" class="clearfix mb20"><div mx-view="mx-area/__test__/1"></div><div mx-view="mx-area/__test__/2"></div><div mx-view="mx-area/__test__/3"></div><div mx-view="mx-area/__test__/4"></div></div><div mxs="_zs_galleryB:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 10;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-area/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'selected',
                desc: '当前选中值<br>每个省份和城市都有各自的id<br>若选择了省份，则其所有城市id都不传',
                type: 'array',
                def: '[]'
            }, {
                key: 'city',
                desc: '是否可选城市',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'data',
                desc: '自定义数据<br>格式[{id, name, cities:[id, name]}]',
                type: 'string',
                def: '见示例1'
            }, {
                key: 'type',
                desc: '展现形式，默认平铺，需要tab切换时配置type="tab"即可',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});

});