
import Magix from 'magix';
import * as $ from '$'
import Base from './base';
const { Vframe } = Magix;
Magix.applyStyle('@index.less');

export default Base.extend({
    assign(extra) {
        let me = this;
        let placement = extra.placement || 'bottom',
            align = extra.align || 'center';
        me['@{pos.placement}'] = placement;
        me['@{pos.align}'] = align;
        me['@{pos.light}'] = (extra.light + '' === 'true');
        me['@{pos.light.color}'] = extra.lightColor || 'var(--color-brand)';

        // 样式
        me['@{pos.class}'] = me.constants.classNames[[placement, align].join('-')];
        if (extra.mode == 'dark' || extra.type == 'dark') {
            me['@{pos.class}'] += ' @index.less:popover-dark';
            if (extra.type == 'dark') {
                // 自定义tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效
                // 为避免自定义tag失效，尽量避免参数命名与原生属性重名
                console.warn('type为历史配置，为避免与原生属性重命名触发自定义tag时的bug，请使用mode参数替换');
            }
        } else {
            me['@{pos.class}'] += ' @index.less:popover mx-shadow';
        }
        if (extra.transform + '' === 'false') {
            // mx-chart chartpark图表tip在容器内定位，transform情况下定位异常
            // popover支持关闭transform样式
            me['@{pos.class}'] += ' @index.less:no-transform';
        }


        // 用户指定定位，指定left + top时忽略placement + align
        me['@{pos.left}'] = extra.left;
        me['@{pos.top}'] = extra.top;

        // 微量偏移：在placement + align / left + top 基础上微量偏移
        me['@{pos.offset}'] = extra.offset;

        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;

        me['@{content}'] = extra.content || '';
        me['@{width}'] = extra.width || 200;
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
            }), me.constants.showDelay);
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
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), me.constants.showDelay);
        }

        me.bindScroll();
    },
    '@{init}'() {
        let me = this;

        let posClass = me['@{pos.class}'],
            posWidth = me['@{width}'],
            zIndex = me['@{zIndex}'],
            vId = me.id;

        let popId = `popover_${vId}`;
        let popBd = $(`#${popId}`);
        if (!popBd.length) {
            $(document.body).append(`<div mx-view class="@index.less:popover-hide ${posClass}" id="${popId}"
                style="width: ${posWidth}px; z-index: ${zIndex};"></div>`);
        }
        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe(popId, '');
        vf.on('created', () => {
            let popNode = me['@{setPos}']();
            popNode.removeClass('@index.less:popover-hide');

            popNode.hover(() => {
                clearTimeout(me['@{dealy.hide.timer}']);
            }, () => {
                me['@{hide}']();
            });
        });
        vf.mountView('@./content', {
            data: {
                light: me['@{pos.light}'],
                lightColor: me['@{pos.light.color}'],
                view: me['@{custom.view}'],
                viewData: me['@{custom.view.data}'],
                content: me['@{content}']
            }
        })
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
        // 每次show时都重新定位
        let popNode = me['@{setPos}']();
        popNode.addClass('@index.less:show-out');
        me['@{owner.node}'].trigger('focusin');
    },
    '@{hide}'() {
        let me = this;

        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            if (!me['@{pos.show}']) {
                return;
            }
            me['@{pos.show}'] = false;
            let popNode = $('#popover_' + me.id);
            popNode.removeClass('@index.less:show-out');
            me['@{owner.node}'].trigger('focusout');
        }), me.constants.hideDelay);
    }
});