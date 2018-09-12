/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/content",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-popover_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-popover_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-popover_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-popover_index_-bottom-left,\n._zs_gallery_mx-popover_index_-bottom-right,\n._zs_gallery_mx-popover_index_-bottom-center,\n._zs_gallery_mx-popover_index_-top-left,\n._zs_gallery_mx-popover_index_-top-right,\n._zs_gallery_mx-popover_index_-top-center,\n._zs_gallery_mx-popover_index_-right-top,\n._zs_gallery_mx-popover_index_-right-bottom,\n._zs_gallery_mx-popover_index_-right-center,\n._zs_gallery_mx-popover_index_-left-top,\n._zs_gallery_mx-popover_index_-left-bottom,\n._zs_gallery_mx-popover_index_-left-center {\n  opacity: 0;\n  transition: opacity 0.15s, -webkit-transform 0.15s;\n  transition: transform 0.15s, opacity 0.15s;\n  transition: transform 0.15s, opacity 0.15s, -webkit-transform 0.15s;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n/**\n * popover下左 初始隐藏状态\n * 注意使用opacity控制popover的显示和隐藏，不要设置display: none\n */\n._zs_gallery_mx-popover_index_-bottom-left,\n._zs_gallery_mx-popover_index_-right-top {\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n._zs_gallery_mx-popover_index_-bottom-right,\n._zs_gallery_mx-popover_index_-left-top {\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n}\n._zs_gallery_mx-popover_index_-bottom-center {\n  -webkit-transform-origin: 50% 0;\n          transform-origin: 50% 0;\n}\n._zs_gallery_mx-popover_index_-top-left,\n._zs_gallery_mx-popover_index_-right-bottom {\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n}\n._zs_gallery_mx-popover_index_-top-right,\n._zs_gallery_mx-popover_index_-left-bottom {\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n._zs_gallery_mx-popover_index_-top-center {\n  -webkit-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n}\n._zs_gallery_mx-popover_index_-left-center {\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n._zs_gallery_mx-popover_index_-right-center {\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n._zs_gallery_mx-popover_index_-show-out {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/**\n * popover显示\n */\n._zs_gallery_mx-popover_index_-popover-hide {\n  display: none;\n}\n._zs_gallery_mx-popover_index_-popover,\n._zs_gallery_mx-popover_index_-popover-dark {\n  position: absolute;\n  z-index: 9999;\n  height: auto;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 22px;\n  white-space: normal;\n  font-weight: normal;\n  font-family: Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;\n}\n._zs_gallery_mx-popover_index_-popover {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n  background-color: #fff;\n  color: #333;\n}\n._zs_gallery_mx-popover_index_-popover ._zs_gallery_mx-popover_index_-popover-content {\n  padding: 10px;\n  word-break: break-all;\n}\n._zs_gallery_mx-popover_index_-popover-dark {\n  background-color: rgba(33, 33, 33, 0.72);\n  color: #fff;\n}\n._zs_gallery_mx-popover_index_-popover-dark ._zs_gallery_mx-popover_index_-popover-content {\n  padding: 4px 10px;\n}\n[mx-view*=\"mx-popover/index\"] {\n  position: relative;\n  cursor: pointer;\n}\n");
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
} ; var $g = '', $_temp, $p = '', content = $$.content; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybK:_" class="_zs_gallery_mx-popover_index_-popover-content">';
    $line = 1;
    $art = '!content';
    ;
    $p += '' + ($expr = '<%!content%>', $n(content)) + '</div><div mxs="_zs_gallerybK:_" class="pl10 pt10 pb10"><a href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="' + $viewId + 'submit()">确定</a><a href="javascript:;" class="btn btn-small" mx-click="' + $viewId + 'cancel()">取消</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popconfirm/content.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.viewOptions = e;
        var that = this;
        var data = e.data || {};
        this.updater.set({
            content: data.content || ''
        });
    },
    render: function () {
        this.updater.digest({});
    },
    'submit<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit();
        }
    },
    'cancel<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.cancel) {
            viewOptions.cancel();
        }
    }
});

});