let Magix = require('magix');
let Vframe = Magix.Vframe;
let $ = require('$');

module.exports = Magix.View.extend({
    constants: {
        showDelay: 100,
        hideDelay: 200,
        classNames: {
            bottomLeft: '@index.less:bottom-left',
            bottomRight: '@index.less:bottom-right',
            bottomCenter: '@index.less:bottom-center',
            topLeft: '@index.less:top-left',
            topRight: '@index.less:top-right',
            topCenter: '@index.less:top-center',
            leftTop: '@index.less:left-top',
            leftBottom: '@index.less:left-bottom',
            leftCenter: '@index.less:left-center',
            rightTop: '@index.less:right-top',
            rightBottom: '@index.less:right-bottom',
            rightCenter: '@index.less:right-center'
        }
    },
    bindScroll() {
        let me = this;
        let scrollWrapper = me['@{scroll.wrapper}'];
        if (!scrollWrapper) {
            return;
        }

        let wrapper;
        if ((typeof scrollWrapper == 'string') && !(/^#/.test(scrollWrapper)) && !(/^\./.test(scrollWrapper))) {
            wrapper = $('#' + scrollWrapper);
        } else {
            wrapper = $(scrollWrapper);
        }
        wrapper.scroll(() => {
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
        // 可选组合：
        //     下右中左
        //     上右中左
        //     右上中下
        //     左上中下
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