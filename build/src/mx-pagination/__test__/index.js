/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/__test__/index",["magix","__test__/example","$","__test__/subs","mx-title/second","../index","mx-copy/index","__test__/hl","./1","./2","./4","./3","__test__/api"],(require,exports,module)=>{
/*Magix,Base,$*/
require("__test__/subs");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, page = $$.page, size = $$.size, text1 = $$.text1, text2 = $$.text2, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybN:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'完整示例\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'精简版\',\n            key: viewId + \'_demo2\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'完整示例\',                    key: viewId + \'_demo1\'                }, {                    name: \'精简版\',                    key: viewId + \'_demo2\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '完整示例', key: viewId + '_demo1' }, { name: '精简版', key: viewId + '_demo2' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div class="_zs_gallery___test___layout_-example" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"><div mxa="_zs_gallerybN:a" class="_zs_gallery___test___layout_-eg-content clearfix"><div mxa="_zs_gallerybN:b" class="mb20"><span mxs="_zs_gallerybN:_" class="color-9">当前页数：</span><span mxa="_zs_gallerybN:c" class="mr20">';
    $line = 22;
    $art = '=page';
    ;
    $p += ($expr = '<%=page%>', $e(page)) + '</span><span mxs="_zs_gallerybN:a" class="color-9">每页展示：</span><span>';
    $line = 24;
    $art = '=size';
    ;
    $p += ($expr = '<%=size%>', $e(size)) + '</span></div><div mx-change="' + $viewId + 'change()" mx-view="mx-pagination/index?total=600&sizes=';
    $line = 28;
    $art = '@[20,40,50]';
    ;
    $p += ($expr = '<%@[20, 40, 50]%>', $i($$ref, [20, 40, 50])) + '&step=6&size=';
    $line = 30;
    $art = '=size';
    ;
    $p += ($expr = '<%!$eu(size)%>', $eu(size)) + '&page=';
    $line = 31;
    $art = '=page';
    ;
    $p += ($expr = '<%!$eu(page)%>', $eu(page)) + '"></div></div><div mxa="_zs_gallerybN:d" class="clearfix"><div mxa="_zs_gallerybN:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerybN:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybN:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 40;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybN:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n    &lt;mx-pagination\n        total="600" \n        sizes="&#123;&#123;@[20,40,50]&#125;&#125;"\n        step="6"\n        size="&#123;&#123;=size&#125;&#125;" \n        page="&#123;&#123;=page&#125;&#125;"\n        mx-change="change()"&gt;\n    &lt;/mx-pagination&gt;</pre></div><div mxa="_zs_gallerybN:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerybN:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybN:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 57;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybN:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 60;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n    let Magix = require(\'magix\');\n    let $ = require(\'$\');\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: \'@index.html\',\n        render() &#123;\n            this.updater.digest(&#123;\n                page: 1,\n                size: 40\n            &#125;);\n        &#125;,\n        \'change&lt;change&gt;\' (e) &#123;\n            // e.page 当前第几页\n            // e.size 每页多少条\n            this.updater.digest(&#123;\n                page: e.page,\n                size: e.size\n            &#125;)\n        &#125;\n    &#125;);</pre></div></div></div><div mxs="_zs_gallerybN:e" mx-view="mx-pagination/__test__/1"></div><div class="clearfix mb20" id="';
    $line = 85;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"><div mxs="_zs_gallerybN:f" class="_zs_gallery___test___layout_-half"><div mx-view="mx-pagination/__test__/2"></div><div mx-view="mx-pagination/__test__/4"></div></div><div mxs="_zs_gallerybN:g" class="_zs_gallery___test___layout_-half"><div mx-view="mx-pagination/__test__/3"></div></div></div><div id="';
    $line = 95;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 96;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
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
                key: 'sizes-placement',
                desc: '分页选择框展示方向，bottom（下方），top（上方）',
                type: 'string',
                def: 'bottom'
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
            viewId: this.id,
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