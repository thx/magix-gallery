/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-loading/mask',["$","magix"],(require,exports,module)=>{
/*$,Magix*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let $ = require('$');
let Magix = require('magix');
Magix.applyStyle("__mx-loading_mask_",".__mx-loading_mask_-loading-overwite {\n  padding: 10px;\n}\n.__mx-loading_mask_-mask-loading {\n  position: fixed;\n  width: 150px;\n  height: 34px;\n  background-color: #000;\n  opacity: 0.3;\n  border-radius: 4px;\n  z-index: 999999;\n  display: none;\n}\n");
let MaskId = 'm_loading';
let Tmpl = "<div id=\"m_loading\" class=\"__mx-loading_mask_-mask-loading\"><div class=\"__mx-style_index_-loading __mx-loading_mask_-loading-overwite\"><span class=\"__mx-style_index_-loading-anim\"></span></div></div>";
let Win = $(window);
//let Doc = $(document);
module.exports = {
    ctor() {
        let me = this;
        me.on('rendercall', () => {
            if (me['@{ui.rendered}']) {
                me.showLoading();
            }
        });
        me.on('rendered', () => {
            me['@{ui.rendered}'] = true;
            me.hideLoading();
        });
        //Doc.on('ajaxSend', () => {
        //    console.log('xx1');
        //}).on('ajaxComplete', () => {
        //    console.log('yy2')
        //});
    },
    '@{loading.build}'() {
        let node = $('#' + MaskId);
        if (!node.length) {
            $(document.body).append(Tmpl);
            node = $('#' + MaskId);
        }
        return node;
    },
    showLoading() {
        let me = this;
        let node = me['@{loading.build}']();
        let left = ((Win.width() - 150) / 2) | 0;
        let top = ((Win.height() - 40) / 2) | 0;
        node.css({
            left: left,
            top: top,
            display: 'block'
        });
    },
    hideLoading() {
        let me = this;
        let node = me['@{loading.build}']();
        node.css({
            display: 'none'
        });
    }
};

});