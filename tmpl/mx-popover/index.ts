import Magix, { Vframe } from 'magix';
import * as $ from '$';
import Base from './base';
Magix.applyStyle('@index.less');

export default Base.extend({
    assign(extra) {
        let me = this;
        let { showDelay, classNames } = me.updater.get('constants');

        // placement:top，bottom，left，right
        // align:top，bottom，left，right，center
        // 异常兼容
        let placement = extra.placement || 'bottom';
        if (['top', 'bottom', 'left', 'right'].indexOf(placement) < 0) {
            placement = 'bottom';
        }

        let align = extra.align || 'center';
        if (['top', 'bottom', 'left', 'right', 'center'].indexOf(align) < 0) {
            align = 'center';
        }
        me['@{pos.placement}'] = placement;
        me['@{pos.align}'] = align;

        // 样式
        let classes = [classNames[[placement, align].join('-')]];
        // mx-chart chartpark图表tip在容器内定位，transform情况下定位异常
        // popover支持关闭transform样式
        classes.push((extra.transform + '' !== 'false') ? '@index.less:with-transform' : '@index.less:without-transform');

        // mode可选值：
        //      dark: 深色版
        //      light：带呼吸灯
        //      arrow：带箭头
        //      common：默认样式
        let mode = extra.mode;
        if (['dark', 'light', 'arrow', 'common'].indexOf(mode) < 0) {
            mode = 'common';
        }
        if (extra.type == 'dark') {
            // 自定义tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效
            // 为避免自定义tag失效，尽量避免参数命名与原生属性重名
            mode = 'dark';
            console.warn('type为历史配置，为避免与原生属性重命名触发自定义tag时的bug，请使用mode参数替换');
        } else if (extra.light + '' === 'true') {
            mode = 'light';
        }
        switch (mode) {
            case 'dark':
                classes.push('@index.less:popover-dark');
                break;

            case 'light':
            case 'arrow':
            case 'common':
                classes.push('@index.less:popover')
                break;
        }

        me['@{pos.class}'] = classes.join(' ');
        me['@{pos.styles}'] = extra.customStyles;
        me['@{pos.mode}'] = mode;
        me['@{pos.light.color}'] = extra.lightColor || 'var(--color-brand)';

        // 用户指定定位，指定left + top时忽略placement + align
        me['@{pos.left}'] = extra.left;
        me['@{pos.top}'] = extra.top;

        // 微量偏移：在placement + align / left + top 基础上微量偏移
        me['@{pos.offset}'] = extra.offset;

        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;

        let reg = /^[0-9]*$/;
        me['@{width}'] = reg.test(extra.width) ? (extra.width + 'px') : (extra.width || '200px');
        me['@{content}'] = extra.content || '';
        me['@{zIndex}'] = extra.zIndex || 999999;
        me['@{auto}'] = (/^true$/i).test(extra.auto) || false;
        me['@{custom.view}'] = extra.view || '';
        me['@{custom.view.data}'] = extra.data || {};
        me['@{text.align}'] = (extra.alignText || 'left');
        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#popover_' + me.id).remove();
        });
        let oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;
        oNode.hover(() => {
            clearTimeout(me['@{dealy.hide.timer}']);
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), showDelay);
        }, () => {
            me['@{hide}']();
        });

        // 固定刷新
        return true;
    },
    render() {
        let me = this;
        me.updater.digest();

        if (me['@{auto}']) {
            let { showDelay } = me.updater.get('constants');
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), showDelay);
        }
    },
    '@{init}'() {
        let me = this;
        let vId = me.id;

        let popId = `popover_${vId}`;
        if (!$(`#${popId}`).length) {
            $(document.body).append(`<div mx-view id="${popId}" style="width: ${me['@{width}']}; z-index: ${me['@{zIndex}']};"></div>`);
        }

        // 每次都重新初始化样式class
        document.getElementById(popId).className = `@index.less:popover-hide ${me['@{pos.class}']}`;
        if (me['@{pos.styles}']) {
            document.getElementById(popId).style.cssText += me['@{pos.styles}'];
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe(popId, '');
        vf.on('created', () => {
            let popNode = me['@{set.pos}']();
            popNode.removeClass('@index.less:popover-hide');

            popNode.hover(() => {
                clearTimeout(me['@{dealy.hide.timer}']);
            }, () => {
                me['@{hide}']();
            });
        });
    },
    '@{show}'() {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        if (!me['@{pos.init}']) {
            me['@{pos.init}'] = true;
            me['@{init}']();
        }
        if (me['@{pos.show}']) {
            return;
        }
        me['@{pos.show}'] = true;

        // 每次展开重新渲染内容
        let vf = Vframe.get(`popover_${me.id}`);
        if (vf) {
            vf.unmountView();
        }
        vf.mountView('@./content', {
            data: {
                mode: me['@{pos.mode}'],
                lightColor: me['@{pos.light.color}'],
                view: me['@{custom.view}'],
                viewData: me['@{custom.view.data}'],
                content: me['@{content}']
            },
            prepare: () => {
                if (me['@{pos.show}']) {
                    // 有延迟，只在现实的情况下重新定位
                    // 每次show时都重新定位
                    let popNode = me['@{set.pos}']();
                    popNode.addClass('@index.less:show-out');
                }
            }
        })

        // trigger
        me['@{owner.node}'].trigger('focusin');
    },
    '@{hide}'() {
        let me = this;

        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        let { hideDelay } = me.updater.get('constants');
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            if (!me['@{pos.show}']) {
                return;
            }
            me['@{pos.show}'] = false;

            // 样式
            let popNode = $('#popover_' + me.id);
            popNode.removeClass('@index.less:show-out');

            // trigger
            me['@{owner.node}'].trigger('focusout');
        }), hideDelay);
    },

    /**
     * 外部调用，立即关闭
     */
    hide() {
        clearTimeout(this['@{dealy.show.timer}']);
        clearTimeout(this['@{dealy.hide.timer}']);
        this['@{pos.show}'] = false;

        // 样式
        let popNode = $('#popover_' + this.id);
        popNode.removeClass('@index.less:show-out');

        // trigger
        this['@{owner.node}'].trigger('focusout');
    }
});