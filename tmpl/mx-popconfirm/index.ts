import Magix, { Vframe } from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
Magix.applyStyle('@../mx-popover/index.less');
Magix.applyStyle('@index.less');

export default View.extend({
    init(extra) {
        this.updater.set({
            constants: {
                showDelay: extra.showDelay || 100,
                hideDelay: extra.hideDelay || 200,
                classNames: 'names@../mx-popover/index.less[bottom-left,bottom-right,bottom-center,top-left,top-right,top-center,left-top,left-bottom,left-center,right-top,right-bottom,right-center]',
            }
        });
        this.assign(extra);
    },

    assign(extra) {
        let me = this;
        Monitor['@{setup}']();
        me['@{owner.node}'] = $('#' + me.id);

        me['@{text.align}'] = (extra.textAlign || extra.alignText || 'left');

        let { showDelay, classNames } = me.updater.get('constants');
        let map = {
            t: 'top',
            l: 'left',
            r: 'right',
            b: 'bottom',
            c: 'center'
        }
        let place = extra.place || 'bc';
        let places = place.split('');
        let placement = map[places[0]],
            align = map[places[1]];
        me['@{pos.place}'] = place;
        me['@{pos.class}'] = classNames[[placement, align].join('-')] + ' @../mx-popover/index.less:popover  @../mx-popover/index.less:with-transform';

        me['@{pos.init}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;

        let reg = /^[0-9]*$/;
        me['@{width}'] = reg.test(extra.width) ? (extra.width + 'px') : (extra.width || '200px');
        me['@{content}'] = extra.content || '';

        me['@{owner.node}'].on('click', () => {
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), showDelay);
        });

        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            $('#popconfirm_' + me.id).remove();

            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });

        // 固定刷新
        return true;
    },

    render() {
        this.updater.digest();
    },

    '@{init}'() {
        let me = this;

        let popId = `popconfirm_${me.id}`;
        let popBd = $(`#${popId}`);
        if (!popBd.length) {
            $(document.body).append(`<div mx-view id="${popId}" style="width: ${me['@{width}']};"></div>`);
        }

        // 每次都重新初始化样式class
        document.getElementById(popId).className = `@../mx-popover/index.less:popover-hide ${me['@{pos.class}']}`;

        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe(popId, '');
        vf.on('created', () => {
            let popNode = me['@{set.pos}']();
            popNode.removeClass('@../mx-popover/index.less:popover-hide');
        });
        vf.mountView('@./content', {
            data: {
                content: me['@{content}']
            },
            submit: () => {
                me['@{hide}']();
                me['@{owner.node}'].trigger({
                    type: 'popconfirm'
                });
            },
            cancel: () => {
                me['@{hide}']();
            }
        })
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'popconfirm_' + this.id);
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
        let popNode = me['@{set.pos}']();
        popNode.addClass('@../mx-popover/index.less:show-out');
        Monitor['@{add}'](me);
    },

    '@{hide}'() {
        let me = this;
        if (!me['@{pos.show}']) {
            return;
        }
        me['@{pos.show}'] = false;
        let popNode = $('#popconfirm_' + me.id);
        popNode.removeClass('@../mx-popover/index.less:show-out');
        Monitor['@{remove}'](me);
    },

    '@{set.pos}'() {
        let me = this;
        let popNode = $('#popconfirm_' + me.id);
        if (!popNode || !popNode.length) {
            return;
        };

        let oNode = me['@{owner.node}'];
        let width = oNode.outerWidth();
        let height = oNode.outerHeight();
        let offset = oNode.offset();
        let rWidth = popNode.outerWidth();
        let rHeight = popNode.outerHeight();

        let arrowGap = 0;
        let gap = 10;

        // 默认下方居中
        let top = offset.top + gap,
            left = offset.left - (rWidth - width) / 2;

        let customTop = +me['@{pos.top}'],
            customLeft = +me['@{pos.left}'];
        if (isNaN(customTop) || isNaN(customLeft)) {
            // 可选组合：
            //     下：右中左
            //     上：右中左
            //     右：上中下
            //     左：上中下
            let place = me['@{pos.place}'];
            switch (place) {
                case 'tl':
                    top = offset.top - rHeight - gap;
                    left = offset.left - arrowGap;
                    break;

                case 'tc':
                    top = offset.top - rHeight - gap;
                    left = offset.left - (rWidth - width) / 2
                    break;

                case 'tr':
                    top = offset.top - rHeight - gap;
                    left = offset.left + width - rWidth + arrowGap;
                    break;

                case 'bl':
                    top = offset.top + height + gap;
                    left = offset.left - arrowGap;
                    break;

                case 'bc':
                    top = offset.top + height + gap;
                    left = offset.left - (rWidth - width) / 2
                    break;

                case 'br':
                    top = offset.top + height + gap;
                    left = offset.left + width - rWidth + arrowGap;
                    break;

                case 'lt':
                    top = offset.top - arrowGap;
                    left = offset.left - rWidth - gap;
                    break;

                case 'lc':
                    top = offset.top - (rHeight - height) / 2;
                    left = offset.left - rWidth - gap;
                    break;

                case 'lb':
                    top = offset.top - (rHeight - height) + arrowGap;
                    left = offset.left - rWidth - gap;
                    break;

                case 'rt':
                    top = offset.top - arrowGap;
                    left = offset.left + width + gap;
                    break;

                case 'rc':
                    top = offset.top - (rHeight - height) / 2;
                    left = offset.left + width + gap;
                    break;

                case 'rb':
                    top = offset.top - (rHeight - height) + arrowGap;
                    left = offset.left + width + gap;
                    break;
            }
        } else {
            top = customTop;
            left = customLeft;
        };

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

        popNode.css({
            textAlign: me['@{text.align}'],
            left: left,
            top: top
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
    }
});