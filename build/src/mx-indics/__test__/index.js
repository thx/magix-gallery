/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += 'Todo';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'mode',
                desc: '页脚类型，简单版（simple）还是复杂版本',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});
// let Magix = require('magix');
// let View = require('zs_scaffold/view')
// module.exports = View.extend({
//     tmpl: '@sort.html',
//     init() {
//         let that = this;
//     },
//     render() {
//         let that = this;
//         let options = [{
//             key: 'limit',
//             desc: '指标选中上限，不传不限制选择个数',
//             type: 'number',
//             def: ''
//         }, {
//             key: 'sortable',
//             desc: '是否需要排序',
//             type: 'boolean',
//             def: 'false'
//         }, {
//             key: 'selected',
//             desc: '当前选中的指标key值的数组，["cost", "impression", "click"]',
//             type: 'array'
//         }, {
//             key: 'pageKey',
//             desc: '保存用户到memberConfig设置对应的key值，无需保存可不传',
//             type: 'string',
//             def: ''
//         }]
//         that.updater.digest({
//             options,
//             selected: ['cost', 'impression', 'click'],
//             selected2: ['cost', 'impression', 'click'],
//             selected3: ['cost', 'impression', 'click']
//         });
//     },
//     'changeFields<change>'(event) {
//         let selected = event.selected;
//         // selected 选择指标数组
//         this.updater.set({
//             selected: selected
//         }).digest();
//     },
//     'changeFields2<change>'(event) {
//         let selected = event.selected;
//         this.updater.set({
//             selected2: selected
//         }).digest();
//     }
// });

});