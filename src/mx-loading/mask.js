/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-loading/mask',["$","magix"],function(require,exports,module){
/*$,Magix*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var $ = require('$');
var Magix = require('magix');
Magix.applyStyle("u",".dU{padding:10px}.dV{position:fixed;width:150px;height:34px;background-color:#000;opacity:.3;border-radius:4px;z-index:999999;display:none}");
var MaskId = 'm_loading';
var Tmpl = "<div id=\"m_loading\" class=\"dV\"><div class=\"aA dU\"><span class=\"aB\"></span></div></div>";
var Win = $(window);
//let Doc = $(document);
module.exports = {
    ctor: function () {
        var me = this;
        me.on('rendercall', function () {
            if (me['_cu']) {
                me.showLoading();
            }
        });
        me.on('rendered', function () {
            me['_cu'] = true;
            me.hideLoading();
        });
        //Doc.on('ajaxSend', () => {
        //    console.log('xx1');
        //}).on('ajaxComplete', () => {
        //    console.log('yy2')
        //});
    },
    '_cv': function () {
        var node = $('#' + MaskId);
        if (!node.length) {
            $(document.body).append(Tmpl);
            node = $('#' + MaskId);
        }
        return node;
    },
    showLoading: function () {
        var me = this;
        var node = me['_cv']();
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
        var node = me['_cv']();
        node.css({
            display: 'none'
        });
    }
};

});