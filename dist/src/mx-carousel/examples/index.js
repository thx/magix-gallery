/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/examples/index",["magix","examples/subs","mx-title/second","./2","./4","./1","./3","./5","./6","examples/api"],(require,exports,module)=>{
/*Magix*/
require("examples/subs");
require("mx-title/second");
require("./2");
require("./4");
require("./1");
require("./3");
require("./5");
require("./6");
require("examples/api");
var Magix = require("magix");
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
    $p += '<div mxv mxa="_zs_galleryaj:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'跑马灯水平滚动\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'默认轮播点样式\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'轮播点可定义变量\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'垂直滚动\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'渐显渐隐\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'自定义左右切换\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'跑马灯水平滚动\',                    key: viewId + \'_demo2\'                }, {                    name: \'默认轮播点样式\',                    key: viewId + \'_demo5\'                }, {                    name: \'轮播点可定义变量\',                    key: viewId + \'_demo6\'                }, {                    name: \'垂直滚动\',                    key: viewId + \'_demo3\'                }, {                    name: \'渐显渐隐\',                    key: viewId + \'_demo1\'                }, {                    name: \'自定义左右切换\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '跑马灯水平滚动', key: viewId + '_demo2' }, { name: '默认轮播点样式', key: viewId + '_demo5' }, { name: '轮播点可定义变量', key: viewId + '_demo6' }, { name: '垂直滚动', key: viewId + '_demo3' }, { name: '渐显渐隐', key: viewId + '_demo1' }, { name: '自定义左右切换', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaj:a" class="clearfix mb20"><div mxa="_zs_galleryaj:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-carousel/examples/2" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-carousel/examples/4" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-carousel/examples/1" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-carousel/examples/3" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_galleryaj:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-carousel/examples/5" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-carousel/examples/6" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div></div></div><div id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 44;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'mode',
                desc: [
                    '动画播放模式',
                    'carousel：跑马灯切换',
                    'fade：渐显渐隐'
                ].join('<br>'),
                type: 'string',
                def: 'carousel'
            }, {
                key: 'height',
                desc: '容器高度',
                type: 'number',
                def: 200
            }, {
                key: 'active',
                desc: '默认激活第几帧，第一帧为0',
                type: 'number',
                def: 0
            }, {
                key: 'autoplay',
                desc: '是否自动播放，自动播放时鼠标hover暂停播放，移出恢复播放',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'dots',
                desc: '是否显示缩略点',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'dot-type',
                desc: "<pre>\u5185\u7F6E\u8F6E\u64AD\u70B9\u6837\u5F0F\n1. line-in-center\uFF1A\u8F6E\u64AD\u5185\u5BB9\u5185\u90E8\u7EBF\u578B\u70B9\u5C45\u4E2D\u663E\u793A\n2. line-in-left\uFF1A\u8F6E\u64AD\u5185\u5BB9\u5185\u90E8\u7EBF\u578B\u70B9\u5C45\u5DE6\u663E\u793A\n3. line-in-right\uFF1A\u8F6E\u64AD\u5185\u5BB9\u5185\u90E8\u7EBF\u578B\u70B9\u5C45\u53F3\u663E\u793A\n4. line-out-center\uFF1A\u8F6E\u64AD\u5185\u5BB9\u5916\u90E8\u7EBF\u578B\u70B9\u5C45\u4E2D\u663E\u793A\n5. dot-in-center\uFF1A\u8F6E\u64AD\u5185\u5BB9\u5185\u90E8\u5706\u5F62\u70B9\u5C45\u4E2D\u663E\u793A\n6. dot-in-left\uFF1A\u8F6E\u64AD\u5185\u5BB9\u5185\u90E8\u5706\u5F62\u70B9\u5C45\u5DE6\u663E\u793A\n7. dot-in-right\uFF1A\u8F6E\u64AD\u5185\u5BB9\u5185\u90E8\u5706\u5F62\u70B9\u5C45\u53F3\u663E\u793A\n8. dot-out-center\uFF1A\u8F6E\u64AD\u5185\u5BB9\u5916\u90E8\u5706\u5F62\u70B9\u5C45\u4E2D\u663E\u793A\n</pre>",
                type: 'string',
                def: 'dot-in-center'
            }, {
                key: 'dot-vars',
                desc: '轮播点可定义变量，使用css变量格式',
                type: 'object',
                def: "<pre style=\"width: 320px;\">\n{\n    // \u8F6E\u64AD\u70B9\u9ED8\u8BA4\u989C\u8272\uFF0C\u9ED8\u8BA40.4\uFF0Chover0.8\uFF0C\u9009\u4E2D\u60011\n    '--mx-carousel-trigger-color': '#ffffff', \n\n    // \u8F6E\u64AD\u70B9\u663E\u793A\u4F4D\u7F6E\u4E0E\u8FB9\u754C\u7684\u8DDD\u79BB\n    '--mx-carousel-trigger-gap': '12px',\n\n    // \u7EBF\u578B\u8F6E\u64AD\u70B9\u5BBD\u5EA6\n    '--mx-carousel-line-width': '20px',\n\n    // \u7EBF\u578B\u8F6E\u64AD\u70B9\u9AD8\u5EA6\n    '--mx-carousel-line-height': '5px',\n\n    // \u7EBF\u578B\u8F6E\u64AD\u70B9\u8DDD\u79BB\n    '--mx-carousel-line-gap': '2px',\n\n    // \u5706\u70B9\u8F6E\u64AD\u70B9\u5927\u5C0F\uFF0C\u70B9\u4E0E\u70B9\u7684\u8DDD\u79BB=\u8BE5\u76F4\u5F84\n    '--mx-carousel-dot-size': '12px'\n}\n</pre>"
            }, {
                key: 'triggers',
                desc: '是否显示左右切换箭头，默认不显示，配置显示时hover出现切换箭头',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'trigger-class',
                desc: '自定义切换箭头样式',
                type: 'string',
                def: ''
            }, {
                key: 'prev-trigger',
                desc: '自定义上一帧trigger的id',
                type: 'string',
                def: ''
            }, {
                key: 'next-trigger',
                desc: '自定义下一帧trigger的id',
                type: 'string',
                def: ''
            }, {
                key: 'interval',
                desc: '播放暂停间隔，单位毫秒',
                type: 'number',
                def: '3000'
            }, {
                key: 'timing',
                desc: [
                    '定义同transition-timing-function',
                    'linear：规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）',
                    'ease：规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）',
                    'ease-in：规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）',
                    'ease-out：规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）',
                    'ease-in-out：规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）',
                    'cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值'
                ].join('<br>'),
                type: 'string',
                def: 'ease-in-out'
            }, {
                key: 'duration',
                desc: '动画持续时间',
                type: 'string',
                def: '0.5s'
            }, {
                key: 'vertical',
                desc: '是否垂直方向播放',
                type: 'boolean',
                def: 'false'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});