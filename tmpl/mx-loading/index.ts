import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@index.less');
const Width = 150;
const Height = 36;
const Duration = 250;
const Tmpl = '@index.html';

export = {
    ctor() {
        let me = this;
        let maskId = me.id + '_loading';
        me.on('destroy', () => {
            me.hideLoading();

            // 删除节点
            [maskId, `${maskId}_mask`].forEach(key => {
                let node = $(`#${key}`);
                if (node && node.length) {
                    node.remove();
                }
            });

            me['@{clear.timers}']();
        });
    },

    '@{clear.timers}'() {
        // 清除timer
        ['@{show.timer}', '@{show.mask.timer}', '@{hide.timer}', '@{hide.mask.timer}'].forEach(key => {
            if (this[key]) {
                clearTimeout(this[key]);
            }
        })
    },

    hideLoading() {
        let me = this;
        let maskId = me.id + '_loading';
        let node = $('#' + maskId);
        node.css({
            opacity: 0
        });
        this['@{hide.timer}'] = setTimeout(() => {
            node.css({
                display: 'none'
            });
        }, Duration)

        let backNode = $('#' + maskId + '_mask');
        if (backNode.length > 0) {
            backNode.css({
                opacity: 0
            });
            this['@{hide.mask.timer}'] = setTimeout(() => {
                backNode.css({
                    display: 'none'
                });
            }, Duration)
        }
    },
    '@{loading.build}'() {
        let me = this;
        let maskId = me.id + '_loading';
        let node = $('#' + maskId);
        if (!node.length) {
            let tmpl = $.isFunction(Tmpl) ? Tmpl({
                viewId: maskId,
                width: Width,
                height: Height
            }, me.id) : Tmpl;
            $(document.body).append(tmpl);
            node = $('#' + maskId);
        }
        return node;
    },

    showLoading(closeMask) {
        let me = this;
        me['@{clear.timers}']();

        let maskId = me.id + '_loading';
        let node = me['@{loading.build}']();
        let left = ((window.innerWidth - Width) / 2) | 0;
        let top = ((window.innerHeight - Height) / 2) | 0;
        node.css({
            display: 'block',
            left: left,
            top: top
        });
        me['@{show.timer}'] = setTimeout(() => {
            node.css({
                opacity: 1
            });
        }, Duration)

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
            me['@{show.mask.timer}'] = setTimeout(() => {
                backNode.css({
                    opacity: 1
                });
            }, Duration)
        }
    }
}