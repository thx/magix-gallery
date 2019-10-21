/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/examples/index",["magix","$","examples/subs","mx-title/second","./3","./4","./5","./2","examples/api","examples/event"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./3");
require("./4");
require("./5");
require("./2");
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
    $p += '<div mxv mxa="_zs_gallerycY:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 3;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'全屏使用\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'容器内使用\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'自定义key\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'深底色版本\',\n            key: viewId + \'_demo2\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'全屏使用\',                    key: viewId + \'_demo3\'                }, {                    name: \'容器内使用\',                    key: viewId + \'_demo4\'                }, {                    name: \'自定义key\',                    key: viewId + \'_demo5\'                }, {                    name: \'深底色版本\',                    key: viewId + \'_demo2\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '全屏使用', key: viewId + '_demo3' }, { name: '容器内使用', key: viewId + '_demo4' }, { name: '自定义key', key: viewId + '_demo5' }, { name: '深底色版本', key: viewId + '_demo2' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycY:a" class="clearfix mb20"><div mx-view="mx-header/examples/3" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-header/examples/4" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-header/examples/5" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-header/examples/2" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div></div><div id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 40;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options=';
    $line = 43;
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
                desc: "\u5BFC\u822A\u6570\u7EC4<pre>[{\n    text:\"\u4E00\u7EA7\u83DC\u5355\u5C55\u793A\u6587\u6848\",\n    value:\"\u4E00\u7EA7\u83DC\u5355value\u503C\",\n    link: \"\u914D\u7F6E\u4E86\u8BE5\u5B57\u6BB5\u65F6\u76F4\u63A5\u5916\u94FE\u6253\u5F00link\",\n    tag: \"\u6253\u6807\",\n    subs: [{\n        text:\"\u4E8C\u7EA7\u83DC\u5355\u5C55\u793A\u6587\u6848\",\n        value:\"\u4E8C\u7EA7\u83DC\u5355value\u503C\",\n        link: \"\u914D\u7F6E\u4E86\u8BE5\u5B57\u6BB5\u65F6\u76F4\u63A5\u5916\u94FE\u6253\u5F00link\"\n    }]\n}]</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'value-key',
                desc: 'navs里value取值字段',
                type: 'string',
                def: 'value'
            }, {
                key: 'text-key',
                desc: 'navs里text取值字段',
                type: 'string',
                def: 'text'
            }, {
                key: 'link-key',
                desc: 'navs里link取值字段',
                type: 'string',
                def: 'link'
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
                desc: '项目logo的图片地址，高度40，长度图片自适应，无间距预留，留白在logo上体现',
                type: 'string',
                def: '<img width="200" src="//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png">'
            }, {
                key: 'links',
                desc: '顶部妈妈相关产品线信息是否需要',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'ceiling',
                desc: '是否需要滚定吸顶功能',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'login',
                desc: '<div>是否需要显示用户登录信息，links=true时才生效</div><img width="600" src="https://img.alicdn.com/tfs/TB17_QneYj1gK0jSZFOXXc7GpXa-1652-200.png">',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'user',
                desc: '登录的用户名称，有该值认为已登录，否则未登录，login=true时必有',
                type: 'string',
                def: ''
            }, {
                key: 'login-view',
                desc: '未登录时点击登录弹出的淘宝登录框view，350*340，login=true时必有',
                type: 'string',
                def: ''
            }, {
                key: 'logout-url',
                desc: '登出接口，login=true时必有',
                type: 'string',
                def: ''
            }, {
                key: 'right-view',
                desc: '<div>右侧预留自定义view</div><img width="600" src="https://img.alicdn.com/tfs/TB1y0Ame1L2gK0jSZFmXXc7iXXa-1652-200.png">',
                type: 'string',
                def: ''
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
                        desc: "\u9009\u4E2D\u7684\u83DC\u5355\u5B8C\u6574\u4FE1\u606F\uFF0C\u4E00\u7EA7 or \u4E8C\u7EA7\uFF0C\u4F20\u5165\u7684\u6570\u636E\u539F\u6837\u8FD4\u56DE",
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