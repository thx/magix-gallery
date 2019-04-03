/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/__test__/index",["magix","$","__test__/subs","mx-title/second","./10","./7","./8","./9","./1","./2","./3","./6","./4","./5","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./10");
require("./7");
require("./8");
require("./9");
require("./1");
require("./2");
require("./3");
require("./6");
require("./4");
require("./5");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, rows = $$.rows, cols = $$.cols; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb?:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'组合示例\',\n        key: viewId + \'_demo10\',\n    }, {\n        name: \'单格样式\',\n        key: viewId + \'_grid\',\n        subs: [{\n            name: \'顶部+内容区域\',\n            key: viewId + \'_grid1\'\n        },{\n            name: \'只顶部\',\n            key: viewId + \'_grid2\'\n        },{\n            name: \'只内容区域\',\n            key: viewId + \'_grid3\'\n        }]\n    }, {\n        name: \'布局示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'水平等比例\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'嵌套\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'某一个固定宽度\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'justify\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'align\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'垂直等比例\',\n            key: viewId + \'_demo5\'\n        }]\n    }, {\n        name: \'mx-grid.row\',\n        key: viewId + \'_row\',\n    }, {\n        name: \'mx-grid.col\',\n        key: viewId + \'_col\',\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'组合示例\',            key: viewId + \'_demo10\'        }, {            name: \'单格样式\',            key: viewId + \'_grid\',            subs: [{                    name: \'顶部+内容区域\',                    key: viewId + \'_grid1\'                }, {                    name: \'只顶部\',                    key: viewId + \'_grid2\'                }, {                    name: \'只内容区域\',                    key: viewId + \'_grid3\'                }]        }, {            name: \'布局示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'水平等比例\',                    key: viewId + \'_demo1\'                }, {                    name: \'嵌套\',                    key: viewId + \'_demo6\'                }, {                    name: \'某一个固定宽度\',                    key: viewId + \'_demo2\'                }, {                    name: \'justify\',                    key: viewId + \'_demo3\'                }, {                    name: \'align\',                    key: viewId + \'_demo4\'                }, {                    name: \'垂直等比例\',                    key: viewId + \'_demo5\'                }]        }, {            name: \'mx-grid.row\',            key: viewId + \'_row\'        }, {            name: \'mx-grid.col\',            key: viewId + \'_col\'        }]%>', $i($$ref, [{ name: '组合示例', key: viewId + '_demo10' }, { name: '单格样式', key: viewId + '_grid', subs: [{ name: '顶部+内容区域', key: viewId + '_grid1' }, { name: '只顶部', key: viewId + '_grid2' }, { name: '只内容区域', key: viewId + '_grid3' }] }, { name: '布局示例', key: viewId + '_demo', subs: [{ name: '水平等比例', key: viewId + '_demo1' }, { name: '嵌套', key: viewId + '_demo6' }, { name: '某一个固定宽度', key: viewId + '_demo2' }, { name: 'justify', key: viewId + '_demo3' }, { name: 'align', key: viewId + '_demo4' }, { name: '垂直等比例', key: viewId + '_demo5' }] }, { name: 'mx-grid.row', key: viewId + '_row' }, { name: 'mx-grid.col', key: viewId + '_col' }])) + '"></div><div mxs="_zs_galleryb?:_" mx-view="mx-title/second?content=%E7%BB%84%E5%90%88%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb?:a" class="clearfix mb40"><div mx-view="mx-grid/__test__/10" id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div></div><div id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_grid" mx-view="mx-title/second?content=%E5%8D%95%E6%A0%BC%E6%A0%B7%E5%BC%8F"></div><div mxa="_zs_galleryb?:b" class="clearfix mb40"><div mx-view="mx-grid/__test__/7" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_grid1"></div><div mx-view="mx-grid/__test__/8" id="';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_grid2"></div><div mx-view="mx-grid/__test__/9" id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_grid3"></div></div><div id="';
    $line = 60;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E5%B8%83%E5%B1%80%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb?:c" class="clearfix mb20"><div mxa="_zs_galleryb?:d" class="_zs_gallery___test___layout_-half"><div mx-view="mx-grid/__test__/1" id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-grid/__test__/2" id="';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-grid/__test__/3" id="';
    $line = 65;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_galleryb?:e" class="_zs_gallery___test___layout_-half"><div mx-view="mx-grid/__test__/6" id="';
    $line = 68;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-grid/__test__/4" id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-grid/__test__/5" id="';
    $line = 70;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div></div><div id="';
    $line = 74;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_row" mx-view="mx-title/second?content=mx-grid.row&tip=flex%E5%AE%B9%E5%99%A8"></div><div mxv="rows" mx-view="__test__/api?options=';
    $line = 77;
    $art = '@rows';
    ;
    $p += ($expr = '<%@rows%>', $i($$ref, rows)) + '" class="mb40"></div><div id="';
    $line = 79;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_col" mx-view="mx-title/second?content=mx-grid.col&tip=flex%E9%A1%B9%E7%9B%AE"></div><div mxv="cols" mx-view="__test__/api?options=';
    $line = 82;
    $art = '@cols';
    ;
    $p += ($expr = '<%@cols%>', $i($$ref, cols)) + '" class="mb20"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var rows = [{
                key: 'width',
                desc: '容器宽度',
                type: 'number',
                def: 'auto'
            }, {
                key: 'height',
                desc: '容器高度',
                type: 'number',
                def: 'auto'
            }, {
                key: 'direction',
                desc: '主轴方向(flex项目的排列方向)，可选值：<br/>row：主轴为水平方向，起点在左端<br/>column：主轴为垂直方向，起点在上沿',
                type: 'string',
                def: 'row'
            }, {
                key: 'justify',
                desc: '主轴对齐方式，可选值：<br/>1. left（默认值）：左对齐<br/>2. right：右对齐<br/>3. center：居中<br/>4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。<br/>5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。',
                type: 'string',
                def: 'left'
            }, {
                key: 'align',
                desc: '交叉轴对齐方式，可选值：<br/>1. stretch（默认值）：如果项目未设置高度或者设为 auto，将占满整个容器的高度<br/>2. top：交叉轴的起点对齐<br/>3. bottom：交叉轴的终点对齐<br/>4. center：交叉轴的中点对齐',
                type: 'string',
                def: 'stretch'
            }, {
                key: 'gutter',
                desc: 'flex项目的间隔距离<br/>direction=row：margin-right<br/>direction=column：margin-bottom',
                type: 'number',
                def: '0'
            }];
        var cols = [{
                key: 'flex',
                desc: 'flex: flex-grow, flex-shrink 和 flex-basis',
                type: 'string',
                def: '1'
            }, {
                key: 'width',
                desc: '指定项目固定宽度，优先级 width > flex',
                type: 'number',
                def: ''
            }, {
                key: 'height',
                desc: '项目高度',
                type: 'number',
                def: ''
            }];
        this.updater.digest({
            rows: rows,
            cols: cols,
            viewId: this.id
        });
    }
});

});