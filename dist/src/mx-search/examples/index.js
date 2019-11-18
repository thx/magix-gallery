/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/examples/index",["magix","$","examples/subs","mx-title/second","./1","./4","./5","./3","./2","examples/api","examples/event"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./4");
require("./5");
require("./3");
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
    $p += '<div mxv mxa="_zs_galleryd,:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'多类型搜索\',\n            key: viewId + \'_demo1\'\n        }, {\n            name: \'自定义搜索文案\',\n            key: viewId + \'_demo5\'\n        }, {\n            name: \'右对齐\',\n            key: viewId + \'_demo3\'\n        }, {\n            name: \'单个搜索\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'多类型搜索\',                    key: viewId + \'_demo1\'                }, {                    name: \'自定义搜索文案\',                    key: viewId + \'_demo5\'                }, {                    name: \'右对齐\',                    key: viewId + \'_demo3\'                }, {                    name: \'单个搜索\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '多类型搜索', key: viewId + '_demo1' }, { name: '自定义搜索文案', key: viewId + '_demo5' }, { name: '右对齐', key: viewId + '_demo3' }, { name: '单个搜索', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd,:a" class="clearfix mb20"><div mxa="_zs_galleryd,:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-search/examples/1" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-search/examples/4" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div mxa="_zs_galleryd,:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-search/examples/5" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-search/examples/3" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mxs="_zs_galleryd,:_" mx-view="mx-search/examples/2"></div></div></div><div id="';
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
    msg += $expr + '\r\n\tat file:mx-search/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: "\u53EF\u641C\u7D20\u7C7B\u578B\u5217\u8868\uFF0C\u4F8B\u5982<pre>[{\n    text: '\u6587\u6848',\n    value: '\u8DDF\u540E\u7AEF\u4EA4\u4E92\u5B57\u6BB5',\n    tmpl: '\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5217\u8868\u6A21\u677F'\n}]\n\n\u5173\u4E8Etmpl\uFF1A\n\u9ED8\u8BA4\u4E3A = \u641C\u7D22\u542B\u6709\u201C$&#123;content&#125;\u201D\u7684$&#123;text&#125;\n\u81EA\u5B9A\u4E49\u65F6\u8F93\u5165\u5185\u5BB9\u4F4D\u7F6E\u4F7F\u7528\u5360\u4F4D\u7B26$&#123;content&#125;\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'list-text',
                desc: '可搜索类型展示文案',
                type: 'string',
                def: 'text'
            }, {
                key: 'list-value',
                desc: '可搜索类型对应的key值',
                type: 'string',
                def: 'value'
            }, {
                key: 'search-key',
                desc: '当前选中的搜索值，对应list-value的某个值',
                type: 'string',
                def: ''
            }, {
                key: 'search-value',
                desc: '搜索框的输入文案',
                type: 'string',
                def: ''
            }, {
                key: 'align',
                desc: '左对齐还是右对齐，left or right',
                type: 'string',
                def: 'left'
            }, {
                key: 'placeholder',
                desc: '空状态提示文案',
                type: 'string',
                def: '配置了placeholder，显示placeholder，否则<br>配置了list，默认显示list-text.join(\'/\')<br>单个类型搜索默认显示搜素'
            }];
        var events = [{
                type: 'change',
                desc: '回车（默认搜索第一个）<br/>或者点选下拉列表某个选项时触发',
                params: [{
                        key: 'searchKey',
                        desc: '下拉列表选中项',
                        type: 'string'
                    }, {
                        key: 'searchValue',
                        desc: '输入框输入的内容',
                        type: 'string'
                    }, {
                        key: 'selected',
                        desc: '输入框输入的内容，=searchValue',
                        type: 'string'
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