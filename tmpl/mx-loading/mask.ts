import Magix from 'magix';
import * as $ from '$';
const Tmpl = '@mask.html';
const Duration = 250;

export = {
    '@{clear.timers}'() {
        // 清除timer
        ['@{show.timer}', '@{show.mask.timer}', '@{hide.timer}', '@{hide.mask.timer}'].forEach(key => {
            if (this[key]) {
                clearTimeout(this[key]);
            }
        })
    },

    ctor() {
        let me = this;
        let ownerId = me.id;
        me.on('destroy', () => {
            me.hideLoading();

            // 删除节点
            let node = $(`[data-loading-owner="${ownerId}"]`);
            node.remove();

            me['@{clear.timers}']();
        });
    },

    showLoading(configs) {
        configs = configs || {};
        let me = this;
        let ownerId = me.id;

        if (configs.firstIgnore && !me['$mx.loading.first']) {
            me['$mx.loading.first'] = true;
            return;
        }

        me['@{clear.timers}']();

        // 每次重新计算node样式，移除历史节点
        $(`[data-loading-owner="${ownerId}"]`).remove();

        let elements = configs.sizzle ? $(configs.sizzle) : null;
        if (elements && elements.length) {
            // 相对于某个模块遮罩：默认白色遮罩 + 无提示文案
            for (let i = 0; i < elements.length; i++) {
                let element = $(elements[i]);
                $(document.body).append($.isFunction(Tmpl) ? Tmpl({
                    ownerId,
                    viewId: `${ownerId}${parseInt(Math.random() * 100000 + '')}`,
                    sizzleId: element[0].id,
                    top: element.offset().top,
                    left: element.offset().left,
                    width: element.outerWidth(),
                    height: element.outerHeight(),
                    content: configs.content,
                    dark: (configs.dark + '' === 'true'),
                }, ownerId) : Tmpl);
            }
        } else {
            // 全屏遮罩：默认默认深底色 + 有提示文案
            $(document.body).append($.isFunction(Tmpl) ? Tmpl({
                ownerId,
                viewId: `${ownerId}${parseInt(Math.random() * 100000 + '')}`,
                full: true,
                content: configs.content || '加载中...',
                dark: (configs.dark + '' !== 'false'),
            }, ownerId) : Tmpl);
        }

        let node = $(`[data-loading-owner="${ownerId}"]`);
        node.css({
            display: 'table'
        });
        this['@{show.timer}'] = setTimeout(() => {
            node.css({
                opacity: 1
            });
        }, Duration)
    },

    hideLoading() {
        let me = this;
        let node = $(`[data-loading-owner="${me.id}"]`);
        node.css({
            opacity: 0
        });
        this['@{hide.timer}'] = setTimeout(() => {
            node.css({
                display: 'none'
            });
        }, Duration)
    },
}