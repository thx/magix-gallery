/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-error/index",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_galleryM","._zs_galleryfH{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryfI{width:400px;margin:auto;padding-top:80px;padding-bottom:120px;text-align:center}._zs_galleryfI ._zs_galleryfJ{margin-bottom:30px;font-size:240px;color:#ccc}._zs_galleryfI ._zs_galleryfK{margin-bottom:20px;font-size:16px;color:#999}._zs_galleryfI ._zs_galleryfL,._zs_galleryfI ._zs_galleryfM{width:90px}._zs_galleryfI ._zs_galleryfL{margin-left:20px}._zs_galleryfI ._zs_galleryfN{display:block;width:400px;margin:auto}._zs_galleryfI ._zs_galleryfO{text-align:center;font-size:40px;font-family:Tahoma}");
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
} ; var $g = '', $_temp, $p = '', type = $$.type, tip = $$.tip, btns = $$.btns; $p += '<div mxa="_zs_gallerybe:_" class="_zs_galleryfI">'; if (type == '404') {
    ;
    $p += '<div mxs="_zs_gallerybe:_"><i class="mc-iconfont _zs_galleryfJ">&#xe6c7;</i></div><div mxa="_zs_gallerybe:a" class="_zs_galleryfK">' + $e(tip) + '</div>';
} ; $p += ' '; if (type == '502' || type == '500') {
    ;
    $p += '<img mxs="_zs_gallerybe:a" class="_zs_galleryfN" src="//img.alicdn.com/tfs/TB1gwinx9rqK1RjSZK9XXXyypXa-1122-678.png"/><span mxa="_zs_gallerybe:b" class="_zs_galleryfO">' + $e(type) + '</span><div mxa="_zs_gallerybe:c" class="_zs_galleryfK">' + $e(tip) + '</div>';
} ; $p += ' '; if (btns) {
    ;
    $p += '<div mxs="_zs_gallerybe:b"><a href="#!" class="btn btn-brand _zs_galleryfM">回到首页</a><a href="javascript:;" class="btn _zs_galleryfL" mx-click="' + $viewId + 'back()">返回上一页</a></div>';
} ; $p += '</div>'; return $p; },
    init: function (extra) {
        var type = extra.type || '404';
        var tip = extra.tip || '';
        if (!tip) {
            switch (type) {
                case '404':
                    tip = '抱歉，您查看的页面不存在或无权限查看当前页面';
                    break;
                case '500':
                    tip = 'Internal Server Error';
                    break;
                case '502':
                    tip = 'Bad Gateway';
                    break;
            }
        }
        this.updater.set({
            tip: tip,
            type: type,
            btns: (extra.btns + '' !== 'false')
        });
    },
    render: function () {
        this.updater.digest();
    },
    'back<click>': function (e) {
        e.preventDefault();
        history.back();
    }
});

});