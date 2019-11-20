/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-area/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./3","./4","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("./4");
require("examples/api");
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
    $p += '<div mxv mxa="_zs_galleryX:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'默认数据(城市)\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'默认数据(省份)\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'自定义数据(平铺)\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'tab切换\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'默认数据(城市)\',                    key: viewId + \'_demo1\'                }, {                    name: \'默认数据(省份)\',                    key: viewId + \'_demo2\'                }, {                    name: \'自定义数据(平铺)\',                    key: viewId + \'_demo3\'                }, {                    name: \'tab切换\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '默认数据(城市)', key: viewId + '_demo1' }, { name: '默认数据(省份)', key: viewId + '_demo2' }, { name: '自定义数据(平铺)', key: viewId + '_demo3' }, { name: 'tab切换', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryX:a" class="clearfix mb20"><div mx-view="mx-area/examples/1" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-area/examples/2" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-area/examples/3" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-area/examples/4" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 32;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-area/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var viewId = this.id;
        var options = [{
                key: 'selected',
                desc: '当前选中值<br>每个省份和城市都有各自的id<br>若选择了省份，则其所有城市id都不传',
                type: 'array',
                def: '[]'
            }, {
                key: 'city',
                desc: '是否可选城市',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'data',
                desc: "<pre>\n\u81EA\u5B9A\u4E49\u6570\u636E\uFF0C\u6570\u636E\u683C\u5F0F\uFF1A\n[{\n    id, \n    name, \n    cities: [{\n        id, \n        name\n    }, {...}]\n}]\n</pre>",
                type: 'string',
                def: "<a href=\"javascript:;\" class=\"color-brand\" mx-click=\"to({id:'" + viewId + "_demo3'})\">\u67E5\u770B\u793A\u4F8B</a>"
            }, {
                key: 'type',
                desc: '展现形式，默认平铺，需要tab切换时配置type="tab"即可',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            viewId: viewId,
            options: options
        });
    }
});

});