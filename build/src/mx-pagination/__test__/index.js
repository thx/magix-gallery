/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/__test__/index",["magix","__test__/example","$","__test__/subs","mx-title/second","../index","mx-copy/index","__test__/hl","./1","./2","./4","./3","./5","__test__/api","__test__/event"],(require,exports,module)=>{
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
require("./5");
require("__test__/api");
require("__test__/event");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, page = $$.page, size = $$.size, text1 = $$.text1, text2 = $$.text2, options = $$.options, events = $$.events; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryc5:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'完整示例\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'禁止修改页数\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'精简版\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'顺序翻页\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'居中显示\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'offset\',\n            key: viewId + \'_demo5\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'完整示例\',                    key: viewId + \'_demo6\'                }, {                    name: \'禁止修改页数\',                    key: viewId + \'_demo1\'                }, {                    name: \'精简版\',                    key: viewId + \'_demo2\'                }, {                    name: \'顺序翻页\',                    key: viewId + \'_demo3\'                }, {                    name: \'居中显示\',                    key: viewId + \'_demo4\'                }, {                    name: \'offset\',                    key: viewId + \'_demo5\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '完整示例', key: viewId + '_demo6' }, { name: '禁止修改页数', key: viewId + '_demo1' }, { name: '精简版', key: viewId + '_demo2' }, { name: '顺序翻页', key: viewId + '_demo3' }, { name: '居中显示', key: viewId + '_demo4' }, { name: 'offset', key: viewId + '_demo5' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div class="_zs_gallery___test___layout_-example" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"><div mxa="_zs_galleryc5:a" class="_zs_gallery___test___layout_-eg-content clearfix"><div mxa="_zs_galleryc5:b" class="mb20"><span mxs="_zs_galleryc5:_" class="color-9">当前页数：</span><span mxa="_zs_galleryc5:c" class="mr20">';
    $line = 37;
    $art = '=page';
    ;
    $p += ($expr = '<%=page%>', $e(page)) + '</span><span mxs="_zs_galleryc5:a" class="color-9">每页展示：</span><span>';
    $line = 39;
    $art = '=size';
    ;
    $p += ($expr = '<%=size%>', $e(size)) + '</span></div><div mx-change="' + $viewId + 'change()" mx-view="mx-pagination/index?total=600&sizes=';
    $line = 43;
    $art = '@[20,40,50]';
    ;
    $p += ($expr = '<%@[20, 40, 50]%>', $i($$ref, [20, 40, 50])) + '&size=';
    $line = 44;
    $art = '=size';
    ;
    $p += ($expr = '<%!$eu(size)%>', $eu(size)) + '&page=';
    $line = 45;
    $art = '=page';
    ;
    $p += ($expr = '<%!$eu(page)%>', $eu(page)) + '"></div></div><div mxa="_zs_galleryc5:d" class="clearfix"><div mxa="_zs_galleryc5:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryc5:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc5:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 54;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc5:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-pagination\n    total="600" \n    sizes="&#123;&#123;@[20,40,50]&#125;&#125;"\n    size="&#123;&#123;=size&#125;&#125;" \n    page="&#123;&#123;=page&#125;&#125;"\n    mx-change="change()"&gt;\n&lt;/mx-pagination&gt;\n                </pre></div><div mxa="_zs_galleryc5:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryc5:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryc5:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 71;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryc5:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 74;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            page: 1,\n            size: 40\n        &#125;);\n    &#125;,\n    \'change&lt;change&gt;\' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        // e.offset 偏移量\n        this.updater.digest(&#123;\n            page: e.page,\n            size: e.size\n        &#125;)\n    &#125;\n&#125;);\n                </pre></div></div></div><div mx-view="mx-pagination/__test__/1" id="';
    $line = 100;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mxa="_zs_galleryc5:i" class="clearfix mb20"><div mxa="_zs_galleryc5:j" class="_zs_gallery___test___layout_-half"><div mx-view="mx-pagination/__test__/2" id="';
    $line = 103;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-pagination/__test__/4" id="';
    $line = 104;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div mxa="_zs_galleryc5:k" class="_zs_gallery___test___layout_-half"><div mx-view="mx-pagination/__test__/3" id="';
    $line = 107;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-pagination/__test__/5" id="';
    $line = 108;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div></div><div id="';
    $line = 112;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 113;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 115;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 116;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
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
                key: 'offset',
                desc: '偏移量，优先级 page > offset',
                type: 'number',
                def: 0
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
        var events = [{
                type: 'change',
                desc: '切换页码，分页数时均会触发',
                params: [{
                        key: 'page',
                        desc: '当前页码',
                        type: 'number'
                    }, {
                        key: 'size',
                        desc: '每页条数',
                        type: 'number'
                    }, {
                        key: 'offset',
                        desc: '偏移量：offset = (size - 1) * page',
                        type: 'number'
                    }]
            }];
        this.updater.digest({
            viewId: this.id,
            options: options,
            events: events,
            page: 1,
            size: 40
        });
    },
    'change<change>': function (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        // e.offset 偏移量
        this.updater.digest({
            page: e.page,
            size: e.size
        });
    }
});

});