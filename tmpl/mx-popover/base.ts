import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
const { Vframe } = Magix;

export default View.extend({
    constants: {
        showDelay: 100,
        hideDelay: 200,
        classNames: 'names@index.less[bottom-left,bottom-right,bottom-center,top-left,top-right,top-center,left-top,left-bottom,left-center,right-top,right-bottom,right-center]'
    },
    init(extra) {
        this.assign(extra);
    },
    bindScroll() {
        let me = this;
        let scrollWrapper = me['@{scroll.wrapper}'];
        if (!scrollWrapper) {
            return;
        }

        $(scrollWrapper).scroll(() => {
            if (me['@{pos.show}']) {
                me['@{setPos}']();
            }
        });
    },
    '@{setPos}'() {
        let me = this;
        let oNode = me['@{owner.node}'];
        let popNode = $('#popover_' + me.id);

        if (!popNode || !popNode.length) {
            return;
        }

        let width = oNode.outerWidth();
        let height = oNode.outerHeight();
        let offset = oNode.offset();
        let rWidth = popNode.outerWidth();
        let rHeight = popNode.outerHeight();

        // 默认下方居中
        let top = offset.top + 10,
            left = offset.left - (rWidth - width) / 2;

        let customTop = +me['@{pos.top}'],
            customLeft = +me['@{pos.left}'];
        if (isNaN(customTop) || isNaN(customLeft)) {
            // 可选组合：
            //     下：右中左
            //     上：右中左
            //     右：上中下
            //     左：上中下
            let placement = me['@{pos.placement}'],
                align = me['@{pos.align}'];
            let place = placement + '_' + align;
            switch (place) {
                case 'top_left':
                    top = offset.top - rHeight - 10;
                    left = offset.left;
                    break;
                case 'top_center':
                    top = offset.top - rHeight - 10;
                    left = offset.left - (rWidth - width) / 2
                    break;
                case 'top_right':
                    top = offset.top - rHeight - 10;
                    left = offset.left + width - rWidth;
                    break;
                case 'bottom_left':
                    top = offset.top + height + 10;
                    left = offset.left;
                    break;
                case 'bottom_center':
                    top = offset.top + height + 10;
                    left = offset.left - (rWidth - width) / 2
                    break;
                case 'bottom_right':
                    top = offset.top + height + 10;
                    left = offset.left + width - rWidth;
                    break;
                case 'left_top':
                    top = offset.top;
                    left = offset.left - rWidth - 10;
                    break;
                case 'left_center':
                    top = offset.top - (rHeight - height) / 2;
                    left = offset.left - rWidth - 10;
                    break;
                case 'left_bottom':
                    top = offset.top - (rHeight - height);
                    left = offset.left - rWidth - 10;
                    break;
                case 'right_top':
                    top = offset.top;
                    left = offset.left + width + 10;
                    break;
                case 'right_center':
                    top = offset.top - (rHeight - height) / 2;
                    left = offset.left + width + 10;
                    break;
                case 'right_bottom':
                    top = offset.top - (rHeight - height);
                    left = offset.left + width + 10;
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

        popNode.css({
            textAlign: me['@{text.align}'],
            left: left,
            top: top
        });

        return popNode;
    },
    /**
     * 页面滚动的时候
     * 如果popover展开则重新定位popover
     */
    '$win<scroll>'(e) {
        let me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>'(e) {
        let me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    }
});