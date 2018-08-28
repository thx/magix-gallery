/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/index",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

var $ = require("$");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-loading_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-loading_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-loading_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-loading_index_-loading-overwite {\n  padding: 10px;\n}\n._zs_gallery_mx-loading_index_-mask-loading {\n  display: none;\n  position: fixed;\n  z-index: 999999;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n}\n._zs_gallery_mx-loading_index_-mask-loading-backdrop {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999998;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n}\n");
var MaskId = 'm_loading';
var Width = 150;
var Height = 36;
var Tmpl = function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
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
} ; var $g = '', $_temp, $p = '', id = $$.id, width = $$.width, height = $$.height; var $expr, $art, $line; try {
    $p += '<div id="';
    $line = 1;
    $art = '=id';
    ;
    $p += '' + ($expr = '<%=id%>', $e(id)) + '" class="_zs_gallery_mx-loading_index_-mask-loading" style="width: ';
    $line = 1;
    $art = '=width';
    ;
    $p += '' + ($expr = '<%=width%>', $e(width)) + 'px; height: ';
    $line = 1;
    $art = '=height';
    ;
    $p += '' + ($expr = '<%=height%>', $e(height)) + 'px;"><div mxs="_zs_gallerybe:_" class="loading _zs_gallery_mx-loading_index_-loading-overwite"><span class="loading-anim"></span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/index.html';
    throw msg;
} return $p; };
var Win = $(window);
module.exports = {
    ctor: function () {
        var me = this;
        me.on('rendercall', function () {
            if (me['@{ui.rendered}']) {
                me.showLoading();
            }
        });
        me.on('rendered', function () {
            me['@{ui.rendered}'] = 1;
            me.hideLoading();
        });
        me.on('domready', function () {
            me['@{ui.rendered}'] = 1;
            me.hideLoading();
        });
        me.on('destroy', function () {
            me.hideLoading();
        });
    },
    '@{loading.build}': function () {
        var me = this;
        var node = $('#' + MaskId);
        if (!node.length) {
            var tmpl = $.isFunction(Tmpl) ? Tmpl({
                id: MaskId,
                width: Width + 'px',
                height: Height + 'px'
            }, me.id) : Tmpl;
            $(document.body).append(tmpl);
            node = $('#' + MaskId);
        }
        return node;
    },
    showLoading: function (closeMask) {
        var me = this;
        var node = me['@{loading.build}']();
        var left = ((Win.width() - Width) / 2) | 0;
        var top = ((Win.height() - Height) / 2) | 0;
        node.css({
            left: left,
            top: top,
            display: 'block'
        });
        // 是否禁止选择
        if (!closeMask) {
            var backNode = $('#' + MaskId + '_mask');
            if (!backNode.length) {
                $(document.body).append('<div id="' + MaskId + '_mask" class="_zs_gallery_mx-loading_index_-mask-loading-backdrop"></div>');
                backNode = $('#' + MaskId + '_mask');
            }
            backNode.css({
                display: 'block'
            });
        }
    },
    hideLoading: function () {
        var me = this;
        var node = me['@{loading.build}']();
        node.css({
            display: 'none'
        });
        var backNode = $('#' + MaskId + '_mask');
        if (backNode.length > 0) {
            backNode.css({
                display: 'none'
            });
        }
    }
};

});