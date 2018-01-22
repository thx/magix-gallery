/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/mask",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var $ = require("$");
var Magix = require("magix");
Magix.applyStyle("_A","._ec{padding:10px}._ed{position:fixed;width:150px;height:34px;background-color:#000;opacity:.3;border-radius:4px;z-index:999999;display:none}");
var MaskId = 'm_loading';
var Tmpl = "<div id=\"m_loading\" class=\"_ed\"><div class=\"_aC _ec\"><span class=\"_aD\"></span></div></div>";
var Win = $(window);
//let Doc = $(document);
module.exports = {
    ctor: function () {
        var me = this;
        me.on('rendercall', function () {
            if (me['__dn']) {
                me.showLoading();
            }
        });
        me.on('rendered', function () {
            me['__dn'] = 1;
            me.hideLoading();
        });
        me.on('domready', function () {
            me['__dn'] = 1;
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
    '__do': function () {
        var node = $('#' + MaskId);
        if (!node.length) {
            $(document.body).append(Tmpl);
            node = $('#' + MaskId);
        }
        return node;
    },
    showLoading: function () {
        var me = this;
        var node = me['__do']();
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
        var node = me['__do']();
        node.css({
            display: 'none'
        });
    }
};

});