/*
ver:1.3.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let $ = require('$');
let Magix = require('magix');
Magix.applyStyle('@mask.less');
let MaskId = 'm_loading';
let Tmpl = '@mask.html';
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