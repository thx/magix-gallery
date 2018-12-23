/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-error/index",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-error_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-error_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-error_index_-error {\n  width: 400px;\n  margin: auto;\n  padding-top: 80px;\n  padding-bottom: 120px;\n  text-align: center;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-error-unfound {\n  margin-bottom: 30px;\n  font-size: 240px;\n  color: #ccc;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-info {\n  margin-bottom: 20px;\n  font-size: 16px;\n  color: #999;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-home-btn,\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-back-btn {\n  width: 90px;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-back-btn {\n  margin-left: 20px;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-error-bad-img {\n  display: block;\n  width: 400px;\n  margin: auto;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-error-bad-num {\n  text-align: center;\n  font-size: 40px;\n  font-family: \"Tahoma\";\n}\n");
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
} ; var $g = '', $_temp, $p = '', type = $$.type, tip = $$.tip, btns = $$.btns; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybc:_" class="_zs_gallery_mx-error_index_-error">';
    $line = 2;
    $art = 'if (type == \'404\')';
    ;
    $expr = '<%if (type == \'404\') {%>';
    if (type == '404') {
        ;
        $p += '<div mxs="_zs_gallerybc:_"><i class="mc-iconfont _zs_gallery_mx-error_index_-error-unfound">&#xe6c7;</i></div><div mxa="_zs_gallerybc:a" class="_zs_gallery_mx-error_index_-info">';
        $line = 4;
        $art = '=tip';
        ;
        $p += ($expr = '<%=tip%>', $e(tip)) + '</div>';
        $line = 5;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 7;
    $art = 'if (type == \'502\' || type == \'500\')';
    ;
    $expr = '<%if (type == \'502\' || type == \'500\') {%>';
    if (type == '502' || type == '500') {
        ;
        $p += '<img mxs="_zs_gallerybc:a" class="_zs_gallery_mx-error_index_-error-bad-img" src="https://img.alicdn.com/tfs/TB1RljduirpK1RjSZFhXXXSdXXa-1313-678.png"/><span mxa="_zs_gallerybc:b" class="_zs_gallery_mx-error_index_-error-bad-num">';
        $line = 9;
        $art = '=type';
        ;
        $p += ($expr = '<%=type%>', $e(type)) + '</span><div mxa="_zs_gallerybc:c" class="_zs_gallery_mx-error_index_-info">';
        $line = 10;
        $art = '=tip';
        ;
        $p += ($expr = '<%=tip%>', $e(tip)) + '</div>';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 13;
    $art = 'if btns';
    ;
    $expr = '<%if (btns) {%>';
    if (btns) {
        ;
        $p += '<div mxs="_zs_gallerybc:b"><a href="#!" class="btn btn-brand _zs_gallery_mx-error_index_-home-btn">回到首页</a><a href="javascript:;" class="btn _zs_gallery_mx-error_index_-back-btn" mx-click="' + $viewId + 'back()">返回上一页</a></div>';
        $line = 18;
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