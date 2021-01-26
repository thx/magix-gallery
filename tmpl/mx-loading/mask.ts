import Magix from 'magix';
import * as $ from '$';
import * as Base from './base';
const Tmpl = '@mask.html';
const Duration = 250;

export = Magix.mix({
    '@{loading.build}'(configs) {
        let me = this;
        let maskId = me.id + '_loading';
        configs = configs || {};

        let data = {
            viewId: maskId
        };
        let element = configs.sizzle ? $(configs.sizzle) : null;
        if (element && element.length) {
            // 相对于某个模块遮罩：默认白色遮罩 + 无提示文案
            Magix.mix(data, {
                top: element.offset().top,
                left: element.offset().left,
                width: element.outerWidth(),
                height: element.outerHeight(),
                content: configs.content,
                dark: (configs.dark + '' === 'true'),
            })
        } else {
            // 全屏遮罩：默认默认深底色 + 有提示文案
            Magix.mix(data, {
                full: true,
                content: configs.content || '加载中...',
                dark: (configs.dark + '' !== 'false'),
            });
        }

        let node = $('#' + maskId);
        if (!node.length) {
            let tmpl = $.isFunction(Tmpl) ? Tmpl(data, me.id) : Tmpl;
            $(document.body).append(tmpl);
            node = $('#' + maskId);
        }
        return node;
    },
    showLoading(configs) {
        let me = this;
        me['@{clear.timers}']();
        
        let node = me['@{loading.build}'](configs);
        node.css({
            display: 'table'
        });
        this['@{show.timer}'] = setTimeout(() => {
            node.css({
                opacity: 1
            });
        }, Duration)
    },
}, Base)
