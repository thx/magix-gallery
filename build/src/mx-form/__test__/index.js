/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }; var $expr, $art, $line; try {
    $p += 'Todo';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: '对象数组，如[{value:1,text:"选项1"}]',
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中值',
                type: 'string',
                def: '不传默认取list第一个'
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
                key: 'tag',
                desc: '打标内容',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    },
    'changeTab<change>': function (e) {
        // e.value 当前选中的key值
        // e.text 当前选中的文案
        this.updater.set({
            selectedId: e.value
        }).digest();
    }
});

});