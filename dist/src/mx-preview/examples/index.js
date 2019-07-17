/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/examples/index",["magix","$","examples/subs","mx-title/second","./1","./3","./4","./2","./9","./8","./7","examples/api","./6"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./3");
require("./4");
require("./2");
require("./9");
require("./8");
require("./7");
require("examples/api");
require("./6");
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
    $p += '<div mxv mxa="_zs_gallerydN:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'图片\',\n            key: viewId + \'_demo1\'\n        }, {\n            name: \'视频\',\n            key: viewId + \'_demo2\'\n        }, {\n            name: \'html(iframe展示)\',\n            key: viewId + \'_demo3\'\n        }, {\n            name: \'文字\',\n            key: viewId + \'_demo4\'\n        }, {\n            name: \'缩略图≠预览\',\n            key: viewId + \'_demo9\'\n        }, {\n            name: \'纯缩略图(无预览)\',\n            key: viewId + \'_demo7\'\n        }, {\n            name: \'左对齐\',\n            key: viewId + \'_demo8\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'关于懒加载\',\n        key: viewId + \'_lazyload\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'图片\',                    key: viewId + \'_demo1\'                }, {                    name: \'视频\',                    key: viewId + \'_demo2\'                }, {                    name: \'html(iframe展示)\',                    key: viewId + \'_demo3\'                }, {                    name: \'文字\',                    key: viewId + \'_demo4\'                }, {                    name: \'缩略图≠预览\',                    key: viewId + \'_demo9\'                }, {                    name: \'纯缩略图(无预览)\',                    key: viewId + \'_demo7\'                }, {                    name: \'左对齐\',                    key: viewId + \'_demo8\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'关于懒加载\',            key: viewId + \'_lazyload\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '图片', key: viewId + '_demo1' }, { name: '视频', key: viewId + '_demo2' }, { name: 'html(iframe展示)', key: viewId + '_demo3' }, { name: '文字', key: viewId + '_demo4' }, { name: '缩略图≠预览', key: viewId + '_demo9' }, { name: '纯缩略图(无预览)', key: viewId + '_demo7' }, { name: '左对齐', key: viewId + '_demo8' }] }, { name: 'API', key: viewId + '_api' }, { name: '关于懒加载', key: viewId + '_lazyload' }])) + '"></div><div id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B&tip=%E6%A0%B9%E6%8D%AE%E5%AE%9E%E9%99%85%E5%B0%BA%E5%AF%B8%E5%B1%95%E7%A4%BA%EF%BC%8C%E7%AD%89%E6%AF%94%E4%BE%8B%E7%BC%A9%E6%94%BE%EF%BC%8C%E4%B8%8D%E8%B6%85%E8%BF%87%E5%B1%8F%E5%B9%95%E5%8F%AF%E8%A7%86%E8%8C%83%E5%9B%B4%EF%BC%9B%3Cspan%20class%3D%27color-brand%27%3E%E5%AE%9E%E7%8E%B0%E7%B4%A0%E6%9D%90%E6%87%92%E5%8A%A0%E8%BD%BD%3C%2Fspan%3E"></div><div mxa="_zs_gallerydN:a" class="clearfix mb20"><div mxa="_zs_gallerydN:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-preview/examples/1" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-preview/examples/3" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-preview/examples/4" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div mxa="_zs_gallerydN:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-preview/examples/2" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-preview/examples/9" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mx-view="mx-preview/examples/8" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-preview/examples/7" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div></div></div><div id="';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 55;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_lazyload" mx-view="mx-title/second?content=%E5%85%B3%E4%BA%8E%E6%87%92%E5%8A%A0%E8%BD%BD"></div><div mxs="_zs_gallerydN:_" class="lh22">使用IntersectionObserver实现，滚动容器内依然支持懒加载；</div><div mxs="_zs_gallerydN:a" class="lh22 mb20">注意点：<span class="color-brand">需要提前给包裹容器设定一个高度，不然可能在素材未加载的时候，所有的元素都在可视区，会导致所有元素都被加载</span></div><div mxs="_zs_gallerydN:b" mx-view="mx-preview/examples/6"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        //         {
        //             key: 'format',
        //             desc: `<pre>展示类型，不配置类型默认展示为纯文本
        // 2：图片
        // 4：视频
        // 5：文字链
        // 10：html
        // 23：套图
        // </pre>`,
        //             type: 'number',
        //             def: '5'
        //         }, {
        //             key: 'url',
        //             desc: `<pre>展示内容
        // 2：图片链接
        // 4：视频链接
        // 5：文本内容
        // 10：html链接
        // </pre>`,
        //             type: 'string',
        //             def: ''
        //         },{
        //     key: 'datu-url',
        //     desc: '套图大图',
        //     type: 'string',
        //     def: ''
        // }, {
        //     key: 'xiaotu-url',
        //     desc: '套图小图',
        //     type: 'string',
        //     def: ''
        // }, 
        var options = [{
                key: 'type',
                desc: "<pre>\u5C55\u793A\u7C7B\u578B\uFF0C\u4E0D\u914D\u7F6E\u7C7B\u578B\u9ED8\u8BA4\u5C55\u793A\u4E3A\u7EAF\u6587\u672C\nimage\uFF1A\u56FE\u7247\nvideo\uFF1A\u89C6\u9891\ntext\uFF1A\u6587\u5B57\u94FE\niframe\uFF1A\u76F4\u63A5iframe\u5D4C\u5165\u9875\u9762\u5C55\u793A\n</pre>",
                type: 'number',
                def: 'text'
            }, {
                key: 'url',
                desc: "<pre>\u5C55\u793A\u5185\u5BB9\nimage\uFF1A\u56FE\u7247\u94FE\u63A5\nvideo\uFF1A\u89C6\u9891\u94FE\u63A5\ntext\uFF1A\u6587\u672C\u5185\u5BB9\niframe\uFF1Ahtml\u94FE\u63A5\n</pre>",
                type: 'string',
                def: ''
            }, {
                key: 'width',
                desc: "<pre>\u9884\u89C8\u5B9E\u9645\u5BBD\u5EA6\n\u7F29\u7565\u56FE\u6839\u636Ewidth\u548Cheight\u7B49\u6BD4\u4F8B\u7F29\u653E\n\u9884\u89C8\u65F6\u6839\u636E\u5F53\u524D\u5C4F\u5E55\u7684\u53EF\u89C6\u8303\u56F4\u8FDB\u884C\u7B49\u6BD4\u4F8B\u4FEE\u6B63\n<div class=\"color-brand\">\u9664\u56FE\u7247\u548C\u6587\u672C\u7C7B\u578B\u5916\uFF0C\u5176\u4F59\u60C5\u51B5\u4E0B\u5FC5\u586B</div>\n</pre>",
                type: 'number',
                def: ''
            }, {
                key: 'height',
                desc: "<pre>\u9884\u89C8\u5B9E\u9645\u9AD8\u5EA6\n\u7F29\u7565\u56FE\u6839\u636Ewidth\u548Cheight\u7B49\u6BD4\u4F8B\u7F29\u653E\n\u9884\u89C8\u65F6\u6839\u636E\u5F53\u524D\u5C4F\u5E55\u7684\u53EF\u89C6\u8303\u56F4\u8FDB\u884C\u7B49\u6BD4\u4F8B\u4FEE\u6B63\n<div class=\"color-brand\">\u9664\u56FE\u7247\u548C\u6587\u672C\u7C7B\u578B\u5916\uFF0C\u5176\u4F59\u60C5\u51B5\u4E0B\u5FC5\u586B</div>\n</pre>",
                type: 'number',
                def: ''
            }, {
                key: 'max-width',
                desc: '缩略图最大宽度',
                type: 'number',
                def: 100
            }, {
                key: 'max-height',
                desc: '缩略图最大高度',
                type: 'number',
                def: '100'
            }, {
                key: 'click-url',
                desc: '点击预览内容的跳转外链',
                type: 'string',
                def: ''
            }, {
                key: 'preview',
                desc: '是否需要预览，preview=false的时候只有缩略图没有预览',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'preview-data',
                desc: "\u9884\u89C8\u6570\u636E\uFF0C\u5F53\u9884\u89C8\u5185\u5BB9\u662F\u7F29\u7565\u5185\u5BB9\u4E0D\u4E00\u6837\u65F6\u53EF\u914D\u7F6E\uFF0C\u53EF\u914D\u5185\u5BB9\u5982\u4E0B\uFF1A<pre>{\n    type,\n    url,\n    width,\n    height,\n    scale: '\u7F29\u653E\u6BD4\u4F8B\uFF0C\u9ED8\u8BA41'\n}</pre>",
                type: 'object',
                def: '{}'
            }, {
                key: 'placement',
                desc: '相对目标的展示位置，可选left、right',
                type: 'string',
                def: 'right'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});