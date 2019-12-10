/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/examples/card",["magix","$","examples/subs","mx-title/second","./6","examples/api","examples/event"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./6");
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
    $p += '<div mxv mxa="_zs_galleryar:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\'\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\'        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo' }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryar:a" class="clearfix mb20"><div mx-view="mx-cascade/examples/6" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div></div><div id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 19;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options=';
    $line = 22;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-cascade/examples/card.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'list',
                desc: "<pre>\n\u9875\u9762\u5C55\u793A\u6570\u636E\u5217\u8868\uFF0C\u4F8B\u5982\uFF1A\n[{\n    value: 1,\n    pValue: '', //\u7236\u8282\u70B9value\u503C\uFF0C\u6839\u8282\u70B9\u65E0\n    text: '\u8BA1\u52121',\n    text: '\u76F4\u901A\u8F66',\n    img: '//img.alicdn.com/tfs/TB1HrXVkbH1gK0jSZFwXXc7aXXa-92-92.png',\n    tip: '\u5173\u952E\u8BCD\u641C\u7D22\u63A8\u5E7F\u8425\u9500\u5DE5\u5177'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '\u5355\u51431-1'\n}]\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'selected',
                desc: '已选中的最底层value值',
                type: 'string',
                def: ''
            }, {
                key: 'text-key',
                desc: '渲染text时读取的key',
                type: 'string',
                def: 'text'
            }, {
                key: 'value-key',
                desc: '渲染value时读取的key',
                type: 'string',
                def: 'value'
            }, {
                key: 'parent-key',
                desc: '表示父节点value的字段',
                type: 'string',
                def: 'pValue'
            }, {
                key: 'tip-key',
                desc: '渲染tip时读取的key',
                type: 'string',
                def: 'tip'
            }, {
                key: 'img-key',
                desc: '渲染img时读取的key',
                type: 'string',
                def: 'img'
            }, {
                key: 'width',
                desc: '单个卡片宽度',
                type: 'number',
                def: '280'
            }, {
                key: 'height',
                desc: '单个卡片高度',
                type: 'number',
                def: '360'
            }, {
                key: 'header-title',
                desc: '卡片标题',
                type: 'string',
                def: ''
            }, {
                key: 'header-tip',
                desc: '标题旁提示',
                type: 'string',
                def: ''
            }];
        var events = [{
                type: 'change',
                desc: '选中某个叶子节点时触发',
                params: [{
                        key: 'item',
                        desc: '当前选中完整对象',
                        type: 'object'
                    }, {
                        key: 'selected',
                        desc: '当前选中value值',
                        type: 'string'
                    }]
            }];
        that.updater.digest({
            viewId: that.id,
            options: options,
            events: events
        });
    }
});

});