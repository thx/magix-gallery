/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/multi2",["magix","mx-popover/index","../index"],(require,exports,module)=>{
/*Magix,Dialog*/
require("../index");
var Magix = require("magix");
var Dialog = require("mx-popover/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId, custom = $$.custom; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerybC:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div mxv class="dialog-body" style="height: 200px; overflow-y: scroll;" id="';
    $line = 5;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_wrapper"><div mxs="_zs_gallerybC:a" class="mb20">滚动区域</div><div mxv mxa="_zs_gallerybC:_" style="height: 400px; padding: 20px; border: 1px solid #e6e6e6;"><span mxv="custom" class="btn" mx-view="mx-popover/index?width=420&scrollWrapper=';
    $line = 10;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_wrapper&view=mx-popover%2F__test__%2Fcustom&data=';
    $line = 12;
    $art = '@custom';
    ;
    $p += '' + ($expr = '<%@custom%>', $i(custom)) + '">提示内容为自定义view</span></div></div><div mxs="_zs_gallerybC:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="' + $viewId + 'cancel()">取消</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/multi2.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    init: function (e) {
        this.viewOptions = e;
    },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            custom: {
                list: [{
                        name: '消耗',
                        key: 'charge',
                        type: 'double'
                    }, {
                        name: '展现量',
                        key: 'adPv',
                        type: 'integer'
                    }, {
                        name: '点击量',
                        key: 'click',
                        type: 'integer'
                    }, {
                        name: '点击率',
                        key: 'ctr',
                        type: 'percent'
                    }]
            }
        });
    },
    'cancel<click>': function (event) {
        event.preventDefault();
        var viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});

});