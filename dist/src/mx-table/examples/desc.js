/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/desc",["magix","$","examples/subs","mx-title/second","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
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
    $p += '<div mxv mxa="_zs_galleryeT:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'注意事项\',\n        key: viewId + \'_note\'\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'注意事项\',            key: viewId + \'_note\'        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '注意事项', key: viewId + '_note' }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_note" mx-view="mx-title/second?content=%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"></div><div mxs="_zs_galleryeT:_" class="mb40 lh28"><div>1. mixins组件是附件行为，涉及操作dom，渲染表格涉及的参数建议直接挂载在组件上，确保每次digest更新时，数据能和展现保持一致&lt;mx-table sticky="true"<span class="color-brand ml5">list="&#123;&#123;@list&#125;&#125;"</span>&gt;）。</div><div>2. 表格内如果渲染了子view，请<span class="color-brand">提前设置子view的高度</span>；组件内计算高度的时候，如果子view未渲染完成，可能会出现偏差。</div><div>3. 表格组件会重新计算th，td的宽度，若自定义加上了table-layout: fixed;会导致重置宽度失效，所以组件内会覆盖设置table-layout: automatic;</div></div><div id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 18;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/desc.html';
    throw msg;
} return $p; },
    render: function () {
        // {
        //     key: 'sticky-interval',
        //     desc: 'sticky == true && scroll-wrapper == window时生效<br/>吸顶预留间隔，筛选项也需要吸顶的场景下用到',
        //     type: 'number',
        //     def: '0'
        // }
        var options = [{
                key: 'sticky',
                desc: '是否需要表头吸顶功能',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'sticky-end',
                desc: '表头吸顶时，是否结束滚动时显示吸顶，滚动时隐藏吸顶',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'scroll-wrapper',
                desc: '自定义滚动节点id',
                type: 'string',
                def: 'window'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});