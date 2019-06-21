/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-error/index",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-error_index_","._zs_gallery_mx-error_index_-error {\n  width: 400px;\n  margin: auto;\n  padding-top: 80px;\n  padding-bottom: 120px;\n  text-align: center;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-bad-img {\n  display: block;\n  width: 400px;\n  margin: auto;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-info {\n  font-size: 16px;\n  color: #999;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-home-btn,\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-back-btn {\n  width: calc(var(--font-size) * 7);\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-back-btn {\n  margin-left: 20px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', src = $$.src, tip = $$.tip, btns = $$.btns; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryb#:_" class="_zs_gallery_mx-error_index_-error"><img class="_zs_gallery_mx-error_index_-bad-img" src="';
    $line = 2;
    $art = '=src';
    ;
    $p += ($expr = '<%=src%>', $e(src)) + '"/><div mxa="_zs_galleryb#:a" class="_zs_gallery_mx-error_index_-info mt40">';
    $line = 3;
    $art = '=tip';
    ;
    $p += ($expr = '<%=tip%>', $e(tip)) + '</div>';
    $line = 5;
    $art = 'if btns';
    ;
    $expr = '<%if (btns) {%>';
    if (btns) {
        ;
        $p += '<div mxs="_zs_galleryb#:_" class="mt20"><a href="#!" class="btn btn-brand _zs_gallery_mx-error_index_-home-btn">回到首页</a><a href="javascript:;" class="btn _zs_gallery_mx-error_index_-back-btn" mx-click="' + $viewId + 'back()">返回上一页</a></div>';
        $line = 10;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-error/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var type = extra.type || 404;
        var src = '', def = '';
        switch (+type) {
            case 404:
                src = '//img.alicdn.com/tfs/TB1tAmuRCzqK1RjSZFpXXakSXXa-1262-668.png';
                def = '抱歉，您查看的页面不存在或无权限查看当前页面';
                break;
            case 500:
                src = '//img.alicdn.com/tfs/TB1yZ5sRAvoK1RjSZPfXXXPKFXa-1182-792.png';
                def = '500 Internal Server Error';
                break;
            case 502:
                src = '//img.alicdn.com/tfs/TB1yZ5sRAvoK1RjSZPfXXXPKFXa-1182-792.png';
                def = '502 Bad Gateway';
                break;
        }
        this.updater.set({
            src: src,
            tip: extra.tip || def,
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