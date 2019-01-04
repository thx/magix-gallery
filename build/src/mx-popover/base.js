/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/base",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var Vframe = Magix.Vframe;
var $ = require("$");
module.exports = Magix.View.extend({
    constants: {
        showDelay: 100,
        hideDelay: 200,
        classNames: {
            bottomLeft: '_zs_galleryjT',
            bottomRight: '_zs_galleryjU',
            bottomCenter: '_zs_galleryjS',
            topLeft: '_zs_gallerykb',
            topRight: '_zs_gallerykc',
            topCenter: '_zs_galleryka',
            leftTop: '_zs_galleryjX',
            leftBottom: '_zs_galleryjV',
            leftCenter: '_zs_galleryjW',
            rightTop: '_zs_galleryk_',
            rightBottom: '_zs_galleryjY',
            rightCenter: '_zs_galleryjZ'
        }
    },
    bindScroll: function () {
        var me = this;
        var scrollWrapper = me['__bs'];
        if (!scrollWrapper) {
            return;
        }
        var wrapper;
        if ((typeof scrollWrapper == 'string') && !(/^#/.test(scrollWrapper)) && !(/^\./.test(scrollWrapper))) {
            wrapper = $('#' + scrollWrapper);
        }
        else {
            wrapper = $(scrollWrapper);
        }
        wrapper.scroll(function () {
            if (me['__br']) {
                me['__bx']();
            }
        });
    },
    '__bx': function () {
        var me = this;
        var oNode = me['__j'];
        var popNode = $('#popover_' + me.id);
        if (!popNode || !popNode.length) {
            return;
        }
        var width = oNode.outerWidth();
        var height = oNode.outerHeight();
        var offset = oNode.offset();
        var rWidth = popNode.outerWidth();
        var rHeight = popNode.outerHeight();
        // 默认下方居中
        var top = offset.top + 10, left = offset.left - (rWidth - width) / 2;
        // 可选组合：
        //     下右中左
        //     上右中左
        //     右上中下
        //     左上中下
        var placement = me['__cl'], align = me['__cm'];
        var place = placement + '_' + align;
        switch (place) {
            case 'top_left':
                top = offset.top - rHeight - 10;
                left = offset.left;
                break;
            case 'top_center':
                top = offset.top - rHeight - 10;
                left = offset.left - (rWidth - width) / 2;
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
                left = offset.left - (rWidth - width) / 2;
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
        var customOffset = me['__cs'] || {};
        if (!$.isEmptyObject(customOffset)) {
            left += customOffset.left;
            top += customOffset.top;
        }
        popNode.css({
            textAlign: me['__cq'],
            left: left,
            top: top
        });
        return popNode;
    },
    /**
     * 页面滚动的时候
     * 如果popover展开则重新定位popover
     */
    '$win<scroll>': function (e) {
        var me = this;
        if (me['__br']) {
            me['__bx']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>': function (e) {
        var me = this;
        if (me['__br']) {
            me['__bx']();
        }
    }
});

});