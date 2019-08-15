/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/examples/index",["magix","$","examples/subs","mx-title/second","./1","./3","./2","./4","examples/api","examples/event"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./3");
require("./2");
require("./4");
require("examples/api");
require("examples/event");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options, events = $$.events; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycK:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 3;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'深底色全屏\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'白底全屏\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'深底色容器内\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'白底容器内\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'深底色全屏\',                    key: viewId + \'_demo1\'                }, {                    name: \'白底全屏\',                    key: viewId + \'_demo3\'                }, {                    name: \'深底色容器内\',                    key: viewId + \'_demo2\'                }, {                    name: \'白底容器内\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '深底色全屏', key: viewId + '_demo1' }, { name: '白底全屏', key: viewId + '_demo3' }, { name: '深底色容器内', key: viewId + '_demo2' }, { name: '白底容器内', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycK:a" class="clearfix mb20"><div mx-view="mx-header/examples/1" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-header/examples/3" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-header/examples/2" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-header/examples/4" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 35;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options=';
    $line = 38;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'width',
                desc: '导航中间区域宽度，默认1200，会根据屏幕宽度进行修正',
                type: 'number',
                def: 1200
            }, {
                key: 'navs',
                desc: "\u5BFC\u822A\u6570\u7EC4<pre>[{\n    text:\"\u4E00\u7EA7\u83DC\u5355\u5C55\u793A\u6587\u6848\",\n    value:\"\u4E00\u7EA7\u83DC\u5355value\u503C\",\n    subs: [{\n        text:\"\u4E8C\u7EA7\u83DC\u5355\u5C55\u793A\u6587\u6848\",\n        value:\"\u4E8C\u7EA7\u83DC\u5355value\u503C\",\n    }]\n}]</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'cur',
                desc: '当前哪个导航，对应navs的value，默认不选中任何一个导航',
                type: 'string',
                def: ''
            }, {
                key: 'wrapper',
                desc: '导航相对定位的容器节点，默认为window',
                type: 'string',
                def: ''
            }, {
                key: 'logo',
                desc: '项目logo的图片地址',
                type: 'string',
                def: '<img width="200" src="//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png">'
            }, {
                key: 'dark',
                desc: '深底色版本',
                type: 'boolean',
                def: 'true'
            }];
        var events = [{
                type: 'navchange',
                desc: '菜单切换的时候触发',
                params: [{
                        key: 'nav',
                        desc: "\u9009\u4E2D\u7684\u83DC\u5355\uFF0C\u4E00\u7EA7 or \u4E8C\u7EA7 <pre>{\n    text:\"\u83DC\u5355\u5C55\u793A\u6587\u6848\",\n    value:\"\u83DC\u5355value\u503C\"\n}</pre>",
                        type: 'object'
                    }]
            }];
        this.updater.digest({
            viewId: this.id,
            options: options,
            events: events
        });
    }
});

});