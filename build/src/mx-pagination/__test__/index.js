/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/__test__/index",["magix","__test__/example","$","mx-title/second","../index","mx-copy/index","__test__/hl","./1","./2","./4","./3","__test__/api"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-title/second");
require("../index");
require("mx-copy/index");
require("__test__/hl");
require("./1");
require("./2");
require("./4");
require("./3");
require("__test__/api");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, page = $$.page, size = $$.size, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerya+:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerya+:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallerya+:a" class="_zs_gallery___test___base_-eg-content clearfix"><div mxa="_zs_gallerya+:b" class="mb20"><span mxs="_zs_gallerya+:a" class="color-9">当前页数：</span><span mxa="_zs_gallerya+:c" class="mr20">';
    $line = 6;
    $art = '=page';
    ;
    $p += '' + ($expr = '<%=page%>', $e(page)) + '</span><span mxs="_zs_gallerya+:b" class="color-9">每页展示：</span><span>';
    $line = 8;
    $art = '=size';
    ;
    $p += '' + ($expr = '<%=size%>', $e(size)) + '</span></div><div mx-change="' + $viewId + 'change()" mx-view="mx-pagination/index?total=600&sizes=';
    $line = 12;
    $art = '@[20,40,50]';
    ;
    $p += '' + ($expr = '<%@[20,40,50]%>', $i([20, 40, 50])) + '&step=6&size=';
    $line = 14;
    $art = '=size';
    ;
    $p += '' + ($expr = '<%!$eu(size)%>', $eu(size)) + '&page=';
    $line = 15;
    $art = '=page';
    ;
    $p += '' + ($expr = '<%!$eu(page)%>', $eu(page)) + '"></div></div><div mxa="_zs_gallerya+:d" class="clearfix"><div mxa="_zs_gallerya+:e" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half"><div mxs="_zs_gallerya+:c" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya+:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya+:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-pagination\n    total="600" \n    sizes="&#123;&#123;@[20,40,50]&#125;&#125;"\n    step="6"\n    size="&#123;&#123;=size&#125;&#125;" \n    page="&#123;&#123;=page&#125;&#125;"\n    mx-change="change()"&gt;\n&lt;/mx-pagination&gt;</pre></div><div mxa="_zs_gallerya+:g" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half _zs_gallery___test___base_-half-right"><div mxs="_zs_gallerya+:e" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 39;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya+:h" class="_zs_gallery___test___base_-desc-tip">';
    $line = 41;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya+:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            page: 1,\n            size: 40\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        this.updater.digest(&#123;\n            page: e.page,\n            size: e.size\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div><div mxs="_zs_gallerya+:f" mx-view="mx-pagination/__test__/1"></div><div mxs="_zs_gallerya+:g" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-pagination/__test__/2"></div><div mx-view="mx-pagination/__test__/4"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-pagination/__test__/3"></div></div></div><div mxs="_zs_gallerya+:h" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 80;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-pagination/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'total',
                desc: '总数',
                type: 'number'
            }, {
                key: 'page',
                desc: '当前第几页',
                type: 'number',
                def: 1
            }, {
                key: 'size',
                desc: '每页多少条',
                type: 'number',
                def: 40
            }, {
                key: 'sizes',
                desc: '可选分页数',
                type: 'array',
                def: '[10,20,30,40]'
            }, {
                key: 'jump',
                desc: '是否有快捷跳转',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'simplify',
                desc: '只有翻页器，没有汇总数据版本',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'sizes-change',
                desc: '是否可切换分页数',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'mini',
                desc: '顺序翻页版本',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'step',
                desc: '页码过多时，中间显示多少条页码',
                type: 'number',
                def: '5'
            }];
        this.updater.digest({
            options: options,
            page: 1,
            size: 40
        });
    },
    'change<change>': function (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        this.updater.digest({
            page: e.page,
            size: e.size
        });
    }
});

});