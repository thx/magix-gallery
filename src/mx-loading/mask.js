/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/mask",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var $ = require("$");
var Magix = require("magix");
Magix.applyStyle("__mx-loading_mask_","/* @dependent: ./index.less */\n.__mx-loading_mask_-loading-overwite {\n  padding: 10px;\n}\n.__mx-loading_mask_-mask-loading {\n  position: fixed;\n  width: 150px;\n  height: 34px;\n  background-color: #000;\n  opacity: 0.3;\n  border-radius: 4px;\n  z-index: 999999;\n  display: none;\n}\n");
var MaskId = 'm_loading';
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_*:_" id="m_loading" class="__mx-loading_mask_-mask-loading"><div class="__mx-style_index_-loading __mx-loading_mask_-loading-overwite"><span class="__mx-style_index_-loading-anim"></span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/mask.html';
    throw msg;
} return $p; };
var Win = $(window);
//let Doc = $(document);
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
        //Doc.on('ajaxSend', () => {
        //    console.log('xx1');
        //}).on('ajaxComplete', () => {
        //    console.log('yy2')
        //});
    },
    '@{loading.build}': function () {
        var node = $('#' + MaskId);
        if (!node.length) {
            $(document.body).append(Tmpl);
            node = $('#' + MaskId);
        }
        return node;
    },
    showLoading: function () {
        var me = this;
        var node = me['@{loading.build}']();
        var left = ((Win.width() - 150) / 2) | 0;
        var top = ((Win.height() - 40) / 2) | 0;
        node.css({
            left: left,
            top: top,
            display: 'block'
        });
    },
    hideLoading: function () {
        var me = this;
        var node = me['@{loading.build}']();
        node.css({
            display: 'none'
        });
    }
};

});