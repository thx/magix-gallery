/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./7","./8","./6","./5","./3","./4","./9","./14","./10","./15","examples/api","./11","./12"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./7");
require("./8");
require("./6");
require("./5");
require("./3");
require("./4");
require("./9");
require("./14");
require("./10");
require("./15");
require("examples/api");
require("./11");
require("./12");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerydV:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'下方\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'上方\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'左边\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'右边\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'自定义view\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'自定义tag\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'黑底白字\',\n            key: viewId + \'_demo9\'\n        },{\n            name: \'偏移量offset\',\n            key: viewId + \'_demo14\'\n        },{\n            name: \'默认展开\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'top + left\',\n            key: viewId + \'_demo15\'\n        },{\n            name: \'内容缩略显示\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'内容包含html\',\n            key: viewId + \'_demo6\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'异常情况说明\',\n        key: viewId + \'_error\',\n        subs: [{\n            name: \'滚动定位\',\n            key: viewId + \'_demo11\'\n        }, {\n            name: \'影响CSSOM\',\n            key: viewId + \'_demo12\'\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'下方\',                    key: viewId + \'_demo1\'                }, {                    name: \'上方\',                    key: viewId + \'_demo2\'                }, {                    name: \'左边\',                    key: viewId + \'_demo7\'                }, {                    name: \'右边\',                    key: viewId + \'_demo8\'                }, {                    name: \'自定义view\',                    key: viewId + \'_demo3\'                }, {                    name: \'自定义tag\',                    key: viewId + \'_demo4\'                }, {                    name: \'黑底白字\',                    key: viewId + \'_demo9\'                }, {                    name: \'偏移量offset\',                    key: viewId + \'_demo14\'                }, {                    name: \'默认展开\',                    key: viewId + \'_demo10\'                }, {                    name: \'top + left\',                    key: viewId + \'_demo15\'                }, {                    name: \'内容缩略显示\',                    key: viewId + \'_demo5\'                }, {                    name: \'内容包含html\',                    key: viewId + \'_demo6\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'异常情况说明\',            key: viewId + \'_error\',            subs: [{                    name: \'滚动定位\',                    key: viewId + \'_demo11\'                }, {                    name: \'影响CSSOM\',                    key: viewId + \'_demo12\'                }]        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '下方', key: viewId + '_demo1' }, { name: '上方', key: viewId + '_demo2' }, { name: '左边', key: viewId + '_demo7' }, { name: '右边', key: viewId + '_demo8' }, { name: '自定义view', key: viewId + '_demo3' }, { name: '自定义tag', key: viewId + '_demo4' }, { name: '黑底白字', key: viewId + '_demo9' }, { name: '偏移量offset', key: viewId + '_demo14' }, { name: '默认展开', key: viewId + '_demo10' }, { name: 'top + left', key: viewId + '_demo15' }, { name: '内容缩略显示', key: viewId + '_demo5' }, { name: '内容包含html', key: viewId + '_demo6' }] }, { name: 'API', key: viewId + '_api' }, { name: '异常情况说明', key: viewId + '_error', subs: [{ name: '滚动定位', key: viewId + '_demo11' }, { name: '影响CSSOM', key: viewId + '_demo12' }] }])) + '"></div><div id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydV:a" class="clearfix mb20"><div mxa="_zs_gallerydV:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-popover/examples/1" id="';
    $line = 65;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-popover/examples/2" id="';
    $line = 66;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-popover/examples/7" id="';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-popover/examples/8" id="';
    $line = 68;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-popover/examples/6" id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-popover/examples/5" id="';
    $line = 70;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div><div mxa="_zs_gallerydV:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-popover/examples/3" id="';
    $line = 73;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-popover/examples/4" id="';
    $line = 74;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-popover/examples/9" id="';
    $line = 75;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mx-view="mx-popover/examples/14" id="';
    $line = 76;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo14"></div><div mx-view="mx-popover/examples/10" id="';
    $line = 77;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div><div mx-view="mx-popover/examples/15" id="';
    $line = 78;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo15"></div></div></div><div id="';
    $line = 82;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 83;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 85;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_error" mx-view="mx-title/second?content=%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_gallerydV:d" class="clearfix mb20"><div mxa="_zs_gallerydV:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-popover/examples/11" id="';
    $line = 88;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div></div><div mxa="_zs_gallerydV:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-popover/examples/12" id="';
    $line = 91;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo12"></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'content',
                desc: '提示内容 ',
                type: 'string'
            }, {
                key: 'width',
                desc: '提示框宽度',
                type: 'number',
                def: 200
            }, {
                key: 'placement',
                desc: '提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
                type: 'string',
                def: 'bottom'
            }, {
                key: 'align',
                desc: '提示框与目标的对齐方式，top，bottom，left，right，center',
                type: 'string',
                def: 'center'
            }, {
                key: 'left',
                desc: '最终定位相对于屏幕左侧，配置 left + top 时忽略 placement + align',
                type: 'number',
                def: ''
            }, {
                key: 'top',
                desc: '最终定位相对于屏幕高侧，配置 left + top 时忽略 placement + align',
                type: 'number',
                def: ''
            }, {
                key: 'offset',
                desc: "<pre>\u5728placement + align / left + top \u57FA\u7840\u4E0A\u5FAE\u91CF\u504F\u79FB\noffset: {\n    left: -10,\n    top: 10\n}</pre>",
                type: 'object',
                def: ''
            }, {
                key: 'auto',
                desc: '默认自动展开提示框',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'view',
                desc: '自定义提示内容view，配置的view以view为准，绝对路径',
                type: 'string'
            }, {
                key: 'data',
                desc: '自定义提示内容view需要传入的数据',
                type: 'object&nbsp;&nbsp;|&nbsp;&nbsp;array',
                def: ''
            }, {
                key: 'mode',
                desc: '展现样式，默认白底，需要黑底时配置type="dark"',
                type: 'string',
                def: ''
            },
            //         type参数修改为mode，尽量与原生属性避开命名，避免自定义标签时出错
            //         {
            //             key: 'type',
            //             desc: `
            // <div>展现样式，默认白底，需要黑底时配置type="dark"</div>
            // <div class="color-brand">异常情况说明：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效</div>
            // <div class="color-brand">可以使用view-type与原生属性type区分来解决该问题</div>
            //             `,
            //             type: 'string',
            //             def: ''
            //         }, 
            {
                key: 'align-text',
                desc: '文字对齐方式，left，right，center',
                type: 'string',
                def: 'left'
            }, {
                key: 'scroll-wrapper',
                desc: '相对滚动父元素，支持格式#id，.class，id，$(node)',
                type: 'string',
                def: ''
            }, {
                key: 'z-index',
                desc: '自定义z-index',
                type: 'number',
                def: '999999'
            }];
        that.updater.digest({
            viewId: that.id,
            options: options
        });
    }
});

});