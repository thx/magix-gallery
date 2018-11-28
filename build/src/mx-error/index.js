/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-error/index",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-error_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-error_index_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-error_index_-error {\n  width: 400px;\n  margin: auto;\n  padding-top: 80px;\n  padding-bottom: 120px;\n  text-align: center;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-error-unfound {\n  margin-bottom: 30px;\n  font-size: 240px;\n  color: #ccc;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-info {\n  margin-bottom: 20px;\n  font-size: 16px;\n  color: #999;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-home-btn,\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-back-btn {\n  width: 90px;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-back-btn {\n  margin-left: 20px;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-error-bad {\n  position: relative;\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-error-bad ._zs_gallery_mx-error_index_-error-bad-icon {\n  font-size: 160px;\n  color: #ccc;\n}\n._zs_gallery_mx-error_index_-error ._zs_gallery_mx-error_index_-error-bad ._zs_gallery_mx-error_index_-error-bad-num {\n  position: absolute;\n  top: 52px;\n  left: 50%;\n  width: 160px;\n  margin-left: -78px;\n  text-align: center;\n  font-size: 50px;\n  color: #ccc;\n  font-weight: bold;\n  letter-spacing: 4px;\n}\n");
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
    $p += '<div mxa="_zs_gallerya]:_" class="_zs_gallery_mx-error_index_-error">';
    $line = 2;
    $art = 'if (type == \'404\')';
    ;
    $expr = '<%if (type == \'404\') {%>';
    if (type == '404') {
        ;
        $p += '<div mxs="_zs_gallerya]:_"><i class="mc-iconfont _zs_gallery_mx-error_index_-error-unfound">&#xe6c7;</i></div><div mxa="_zs_gallerya]:a" class="_zs_gallery_mx-error_index_-info">';
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
    $art = 'if (type == \'502\')';
    ;
    $expr = '<%if (type == \'502\') {%>';
    if (type == '502') {
        ;
        $p += '<div mxs="_zs_gallerya]:a" class="_zs_gallery_mx-error_index_-error-bad"><i class="mc-iconfont _zs_gallery_mx-error_index_-error-bad-icon">&#xe640;</i><span class="_zs_gallery_mx-error_index_-error-bad-num">502</span></div><div mxa="_zs_gallerya]:b" class="_zs_gallery_mx-error_index_-info">';
        $line = 12;
        $art = '=tip';
        ;
        $p += ($expr = '<%=tip%>', $e(tip)) + '</div>';
        $line = 13;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 15;
    $art = 'if btns';
    ;
    $expr = '<%if (btns) {%>';
    if (btns) {
        ;
        $p += '<div mxs="_zs_gallerya]:b"><a href="#!" class="btn btn-brand _zs_gallery_mx-error_index_-home-btn">回到首页</a><a href="javascript:;" class="btn _zs_gallery_mx-error_index_-back-btn" mx-click="' + $viewId + 'back()">返回上一页</a></div>';
        $line = 20;
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