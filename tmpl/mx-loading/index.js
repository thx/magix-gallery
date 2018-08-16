let $ = require('$');
let Magix = require('magix');
Magix.applyStyle('@index.less');
let MaskId = 'm_loading';
let Width = 150;
let Height = 36;
let Tmpl = '@index.html';
let Win = $(window);


module.exports = {
    ctor() {
        let me = this;
        me.on('rendercall', () => {
            if (me['@{ui.rendered}']) {
                me.showLoading();
            }
        });
        me.on('rendered', () => {
            me['@{ui.rendered}'] = 1;
            me.hideLoading();
        });
        me.on('domready', () => {
            me['@{ui.rendered}'] = 1;
            me.hideLoading();
        });
        me.on('destroy', () => {
            me.hideLoading();
        });
    },
    '@{loading.build}'() {
        let me = this;
        let node = $('#' + MaskId);
        if (!node.length) {
            let tmpl = $.isFunction(Tmpl) ? Tmpl({
                id: MaskId,
                width: Width + 'px',
                height: Height + 'px'
            }, me.id) : Tmpl;
            $(document.body).append(tmpl);
            node = $('#' + MaskId);
        }
        return node;
    },
    showLoading(closeMask) {
        let me = this;
        let node = me['@{loading.build}']();
        let left = ((Win.width() - Width) / 2) | 0;
        let top = ((Win.height() - Height) / 2) | 0;
        node.css({
            left: left,
            top: top,
            display: 'block'
        });

        // 是否禁止选择
        if(!closeMask){
            let backNode = $('#' + MaskId + '_mask');
            if(!backNode.length){
                $(document.body).append('<div id="' + MaskId + '_mask" class="@index.less:mask-loading-backdrop"></div>');
                backNode = $('#' + MaskId + '_mask');
            }
            backNode.css({
                display: 'block'
            });
        }
    },
    hideLoading() {
        let me = this;
        let node = me['@{loading.build}']();
        node.css({
            display: 'none'
        });

        let backNode = $('#' + MaskId + '_mask');
        if(backNode.length > 0){
            backNode.css({
                display: 'none'
            });
        }
    }
};