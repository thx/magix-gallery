let $ = require('$');
let Magix = require('magix');
Magix.applyStyle('@index.less');
let Width = 150;
let Height = 36;
let Tmpl = '@index.html';

let Base = require('./base');
module.exports = Magix.mix({
    '@{loading.build}'() {
        let me = this;
        let maskId = me.id + '_loading';
        let node = $('#' + maskId);
        if (!node.length) {
            let tmpl = $.isFunction(Tmpl) ? Tmpl({
                id: maskId,
                width: Width + 'px',
                height: Height + 'px'
            }, me.id) : Tmpl;
            $(document.body).append(tmpl);
            node = $('#' + maskId);
        }
        return node;
    },
    showLoading(closeMask) {
        let me = this;
        let maskId = me.id + '_loading';
        let node = me['@{loading.build}']();
        let win = $(window);
        let left = ((win.width() - Width) / 2) | 0;
        let top = ((win.height() - Height) / 2) | 0;
        node.css({
            left: left,
            top: top,
            display: 'block'
        });

        // 是否禁止选择
        if (!closeMask) {
            let backNode = $('#' + maskId + '_mask');
            if (!backNode.length) {
                $(document.body).append('<div id="' + maskId + '_mask" class="@index.less:mask-loading-backdrop"></div>');
                backNode = $('#' + maskId + '_mask');
            }
            backNode.css({
                display: 'block'
            });
        }
    }
}, Base)