import Magix, { Vframe } from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    init(extra) {
        this.updater.set({
            constants: {
                showDelay: extra.showDelay || 100,
                hideDelay: extra.hideDelay || 200,
                classNames: 'names@index.less[bottom-left,bottom-right,bottom-center,top-left,top-right,top-center,left-top,left-bottom,left-center,right-top,right-bottom,right-center]',
            }
        });

        this.assign(extra);
    },
    assign(extra) {
        let me = this;
        let { showDelay, classNames } = me.updater.get('constants');

        me['@{dis.closable}'] = extra.closable + '' === 'true'; // 是否可关闭
        me['@{dis.img}'] = extra.img; // 引导图片
        me['@{dis.icon}'] = extra.icon;

        // placement:top，bottom，left，right
        // align:top，bottom，left，right，center
        // 异常兼容
        let placement = extra.placement || 'bottom';
        if (['top', 'bottom', 'left', 'right'].indexOf(placement) < 0) {
            placement = 'bottom';
        };
        let align = extra.align || 'center';
        if (['top', 'bottom', 'left', 'right', 'center'].indexOf(align) < 0) {
            align = 'center';
        };
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
        me['@{pos.mode}'] = mode;
        me['@{pos.light.color}'] = extra.lightColor || 'var(--color-brand)';
        me['@{pos.styles}'] = extra.customStyles || '';
        if (extra.colorBg) {
            // 背景色
            me['@{pos.styles}'] += `--mx-popover-color-bg: ${extra.colorBg};`;
        };
        if (extra.colorText) {
            // 文案颜色
            me['@{pos.styles}'] += `--mx-popover-font-color: ${extra.colorText};`;
        };
        if (extra.colorBorder) {
            // 边框色
            me['@{pos.styles}'] += `--mx-popover-color-border: ${extra.colorBorder};`;
        };

        // 用户指定定位，指定left + top时忽略placement + align
        me['@{pos.left}'] = extra.left;
        me['@{pos.top}'] = extra.top;

        // 微量偏移：在placement + align / left + top 基础上微量偏移
        me['@{pos.offset}'] = extra.offset;

        me['@{pos.init}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;

        let reg = /^[0-9]*$/;
        me['@{width}'] = reg.test(extra.width) ? (extra.width + 'px') : (extra.width || '200px');
        me['@{content}'] = extra.content || '';
        me['@{zIndex}'] = extra.zIndex || 999999;
        me['@{auto}'] = (/^true$/i).test(extra.auto) || false;
        me['@{custom.view}'] = extra.view || '';
        me['@{custom.view.data}'] = extra.data || {};
        me['@{text.align}'] = (extra.textAlign || extra.alignText || 'left');

        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter.popover mouseleave.popover');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#popover_' + me.id).remove();
        });

        me['@{owner.node}'] = $('#' + me.id);

        me['@{owner.node}'].off('mouseenter.popover').on('mouseenter.popover', (e) => {
            clearTimeout(me['@{dealy.hide.timer}']);
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}']();
            }), showDelay);
        });
        me['@{owner.node}'].off('mouseleave.popover').on('mouseleave.popover', (e) => {
            me['@{delay.hide}']();
        });

        // 固定刷新
        return true;
    },
    render() {
        let me = this;
        me.updater.digest();

        // 组件内置icon
        switch (me['@{dis.icon}']) {
            case 'help':
                me['@{owner.node}'].html('<i class="mx-iconfont fontsize-16">&#xe629;</i>')
                break;
        }

        if (me['@{auto}']) {
            // 自动打开浮层
            let { showDelay } = me.updater.get('constants');
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), showDelay);
        } else {
            // digest时移除已打开浮层
            me['@{hide}']();
        }
    },

    '@{init}'() {
        let me = this;
        let popId = `popover_${me.id}`;
        let scrollOwner = $(me['@{scroll.wrapper}']);
        if (!scrollOwner || !scrollOwner.length) {
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
                popNode.off('mouseenter.popover').on('mouseenter.popover', (e) => {
                    clearTimeout(me['@{dealy.hide.timer}']);
                });
                popNode.off('mouseleave.popover').on('mouseleave.popover', (e) => {
                    me['@{delay.hide}']();
                });
            });
        } else {
            // 指定事件节点scroll-wrapper
            $(`#${popId}`).remove();
            $(me['@{scroll.wrapper}']).css({
                position: 'relative'
            }).append(`<div id="${popId}" class="@index.less:popover-hide ${me['@{pos.class}']}" 
                style="width: ${me['@{width}']}; z-index: 99999;">
                <div class="@index.less:popover-content">${me['@{content}']}</div>
            </div>`);

            let popNode = me['@{set.pos}']();
            popNode.removeClass('@index.less:popover-hide');
            popNode.off('mouseenter.popover').on('mouseenter.popover', (e) => {
                clearTimeout(me['@{dealy.hide.timer}']);
            });
            popNode.off('mouseleave.popover').on('mouseleave.popover', (e) => {
                me['@{delay.hide}']();
            });
        }
    },

    '@{show}'() {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);

        let scrollOwner = $(me['@{scroll.wrapper}']);
        if (!scrollOwner || !scrollOwner.length) {
            // 相对window定位，初始化一次
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
                vf.mountView('@./content', {
                    data: {
                        mode: me['@{pos.mode}'],
                        lightColor: me['@{pos.light.color}'],
                        closable: me['@{dis.closable}'],
                        img: me['@{dis.img}'],
                        content: me['@{content}'],
                        view: me['@{custom.view}'],
                        viewData: me['@{custom.view.data}'],
                    },
                    prepare: () => {
                        if (me['@{pos.show}']) {
                            // 有延迟，只在现实的情况下重新定位
                            // 每次show时都重新定位
                            let popNode = me['@{set.pos}']();
                            popNode.addClass('@index.less:show-out');

                            // trigger
                            me['@{owner.node}'].trigger('focusin');
                        }
                    },
                    close() {
                        me['@{hide}']();
                    }
                })
            }
        } else {
            // 指定事件节点scroll-wrapper
            // 每次都重新init
            me['@{init}']();

            // 标记打开状态
            me['@{pos.show}'] = true;

            // 每次show时都重新定位
            let popNode = me['@{set.pos}']();
            popNode.addClass('@index.less:show-out');

            // trigger
            me['@{owner.node}'].trigger('focusin');
        }
    },
    '@{delay.hide}'() {
        let me = this;

        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        let { hideDelay } = me.updater.get('constants');
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{hide}']();
        }), hideDelay);
    },

    '@{hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        if (!me['@{pos.show}']) {
            return;
        }

        me['@{pos.show}'] = false;

        // 样式
        let popNode = $('#popover_' + me.id);
        popNode.removeClass('@index.less:show-out');

        // trigger
        me['@{owner.node}'].trigger('focusout');
    },

    '@{set.pos}'() {
        let me = this;
        let popNode = $('#popover_' + me.id);
        if (!popNode || !popNode.length) {
            return;
        };

        let oNode = me['@{owner.node}'];
        let placement = me['@{pos.placement}'],
            align = me['@{pos.align}'];
        let place = placement + '_' + align;
        let left, top;
        let scrollOwner = $(me['@{scroll.wrapper}']);
        if (!scrollOwner || !scrollOwner.length) {
            // 相对window定位
            let width = oNode.outerWidth();
            let height = oNode.outerHeight();
            let offset = oNode.offset();
            let rWidth = popNode.outerWidth();
            let rHeight = popNode.outerHeight();

            let arrowGap = 0;
            if (this['@{pos.mode}'] == 'arrow') {
                // popover border + 三角形boder
                arrowGap = +this['@{get.css.var}']('--mx-popover-arrow-gap').replace('px', '');
                arrowGap = arrowGap + 2;
            }
            let gap = 10;

            // 默认下方居中
            top = offset.top + gap;
            left = offset.left - (rWidth - width) / 2;

            let customTop = +me['@{pos.top}'],
                customLeft = +me['@{pos.left}'];
            if (isNaN(customTop) || isNaN(customLeft)) {
                switch (place) {
                    case 'top_left':
                        top = offset.top - rHeight - gap;
                        left = offset.left - arrowGap;
                        break;

                    case 'top_center':
                        top = offset.top - rHeight - gap;
                        left = offset.left - (rWidth - width) / 2
                        break;

                    case 'top_right':
                        top = offset.top - rHeight - gap;
                        left = offset.left + width - rWidth + arrowGap;
                        break;

                    case 'bottom_left':
                        top = offset.top + height + gap;
                        left = offset.left - arrowGap;
                        break;

                    case 'bottom_center':
                        top = offset.top + height + gap;
                        left = offset.left - (rWidth - width) / 2
                        break;

                    case 'bottom_right':
                        top = offset.top + height + gap;
                        left = offset.left + width - rWidth + arrowGap;
                        break;

                    case 'left_top':
                        top = offset.top - arrowGap;
                        left = offset.left - rWidth - gap;
                        break;

                    case 'left_center':
                        top = offset.top - (rHeight - height) / 2;
                        left = offset.left - rWidth - gap;
                        break;

                    case 'left_bottom':
                        top = offset.top - (rHeight - height) + arrowGap;
                        left = offset.left - rWidth - gap;
                        break;

                    case 'right_top':
                        top = offset.top - arrowGap;
                        left = offset.left + width + gap;
                        break;

                    case 'right_center':
                        top = offset.top - (rHeight - height) / 2;
                        left = offset.left + width + gap;
                        break;

                    case 'right_bottom':
                        top = offset.top - (rHeight - height) + arrowGap;
                        left = offset.left + width + gap;
                        break;
                }
            } else {
                top = customTop;
                left = customLeft;
            }

            let customOffset = me['@{pos.offset}'] || {};
            if (!$.isEmptyObject(customOffset)) {
                left += (customOffset.left || 0);
                top += (customOffset.top || 0);
            }

            let winWidth = $(window).width();
            if (left < 0) {
                left = 0;
            } else if (left + rWidth > winWidth) {
                left = winWidth - rWidth;
            }
        } else {
            // 自定滚动节点
            let pWidth = popNode.outerWidth(),
                pHeight = popNode.outerHeight(),
                oWidth = oNode.outerWidth(),
                oHeight = oNode.outerHeight(),
                { left: oLeft, top: oTop } = oNode.offset();

            // {scroll.wrapper} 需要设置为relative
            let sNode = $(me['@{scroll.wrapper}']);
            top = oTop - sNode.offset().top;
            left = oLeft - sNode.offset().left;

            // 可选组合：
            //     下：右中左
            //     上：右中左
            //     右：上中下
            //     左：上中下
            switch (place) {
                case 'top_left':
                    top = top - pHeight - 10;
                    break;
                case 'top_center':
                    top = top - pHeight - 10;
                    left = left - (pWidth - oWidth) / 2
                    break;
                case 'top_right':
                    top = top - pHeight - 10;
                    left = left + oWidth - pWidth;
                    break;
                case 'bottom_left':
                    top = top + oHeight + 10;
                    break;
                case 'bottom_center':
                    top = top + oHeight + 10;
                    left = left - (pWidth - oWidth) / 2
                    break;
                case 'bottom_right':
                    top = top + oHeight + 10;
                    left = left + oWidth - pWidth;
                    break;
                case 'left_top':
                    left = left - pWidth - 10;
                    break;
                case 'left_center':
                    top = top - (pHeight - oHeight) / 2;
                    left = left - pWidth - 10;
                    break;
                case 'left_bottom':
                    top = top - (pHeight - oHeight);
                    left = left - pWidth - 10;
                    break;
                case 'right_top':
                    left = left + oWidth + 10;
                    break;
                case 'right_center':
                    top = top - (pHeight - oHeight) / 2;
                    left = left + oWidth + 10;
                    break;
                case 'right_bottom':
                    top = top - (pHeight - oHeight);
                    left = left + oWidth + 10;
                    break;
            }
        }

        popNode.css({
            textAlign: me['@{text.align}'],
            left,
            top,
        });

        return popNode;
    },

    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScoll>'(e) {
        if (this['@{pos.show}']) {
            this['@{set.pos}']();
        }
    },

    /**
    * 外部调用，立即关闭
    */
    hide() {
        this['@{hide}']();
    },
});