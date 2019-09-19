/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/index7",["magix","$","examples/subs","mx-title/second","./15","./14"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./15");
require("./14");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerye^:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'实时获取\',\n            key: viewId + \'_demo15\'\n        }, {\n            name: \'一次性获取\',\n            key: viewId + \'_demo14\'\n        }]\n    }, {\n        name: \'Methods\',\n        key: viewId + \'_method\',\n        subs: [{\n            name: \'getStoreState\',\n            key: viewId + \'_method\'\n        }, {\n            name: \'clearStoreState\',\n            key: viewId + \'_method\'\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'实时获取\',                    key: viewId + \'_demo15\'                }, {                    name: \'一次性获取\',                    key: viewId + \'_demo14\'                }]        }, {            name: \'Methods\',            key: viewId + \'_method\',            subs: [{                    name: \'getStoreState\',                    key: viewId + \'_method\'                }, {                    name: \'clearStoreState\',                    key: viewId + \'_method\'                }]        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '实时获取', key: viewId + '_demo15' }, { name: '一次性获取', key: viewId + '_demo14' }] }, { name: 'Methods', key: viewId + '_method', subs: [{ name: 'getStoreState', key: viewId + '_method' }, { name: 'clearStoreState', key: viewId + '_method' }] }])) + '"></div><div id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerye^:a" class="clearfix mb20"><div mx-view="mx-table/examples/15" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo15"></div><div mx-view="mx-table/examples/14" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo14"></div></div><div id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerye^:a" class="pr20"><table class="table _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>this.getStoreState([parent:string])</td><td><div>parent：父节点input.attr(\'linkage\')</div><div>有：获取父节点为该值的所有选中项</div><div>无：获取已配置的所有input的选中项</div></td></tr><tr><td>this.clearStoreState([parent:string, [child:string]])</td><td><div>parent：父节点input.attr(\'linkage\')</div><div>有：清空父节点为该值的所有选中项</div><div>无：清空已配置的所有input的选中项</div><br/><div>child：子节点input.attr(\'value\')</div><div>有：清楚选项input.attr(\'value\') == child && input.attr(\'linkage-parent\') == parent</div></td></tr></tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/index7.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});