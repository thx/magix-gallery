/**
 * 底边线tab切换
 * 兼容老的写法，type还是可配置，建议直接使用mx-tabs.box
 */
let Magix = require('magix');
let Base = require('@./base');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        that.updater.digest();

        that['@{sync.line}'](that['@{data.selected}']);
    },

    '@{sync.line}' (hover) {
        let that = this;
        let type = that['@{display.type}'];
        if (type == 'border') {
            that['@{data.hover}'] = hover;
            let node = $('#' + that.id + '_' + hover);
            let nodeOffsetLeft = node.offset().left;
            let owner = that['@{owner.node}'];
            let ownerOffsetLeft = owner.offset().left;
            let left = nodeOffsetLeft - ownerOffsetLeft;
            let width = node.outerWidth();
            that.updater.digest({
                left,
                width
            })
        }
    },

    '@{over}<mouseover>' (e) {
        let that = this;
        let value = e.params.value;

        that['@{sync.line}'](value);

    },
    '@{out}<mouseout>' (e) {
        this['@{sync.line}'](this['@{data.selected}']);
    }
});