'top@./vendor/feedback.js';
let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    init(extra) {
        let that = this;
        let config = extra || {};
        that.updater.set({
            config
        })

        let triggerNode = $(`#${that.id}`);
        that['@{owner.node}'] = triggerNode;

        let triggerType = config.triggerType || 'click';
        switch (triggerType) {
            case 'click':
                triggerNode.on('click', () => {
                    that['@{show}']();
                })
                break;
            case 'auto':
                that['@{show}']();
                break;
        }
        that.on('destroy', () => {
            that['@{hide}']();
        })
    },
    assign(ops) {
        return true;
    },
    '@{show}'() {
        let { config } = this.updater.get();
        if (this.$feedback) {
            this.$feedback.destroy();
        }

        // frequency
        // all：每次弹出
        // one：只弹出一次
        let styles = {};
        if ($.isEmptyObject(config.fdStyle)) {
            let triggerNode = this['@{owner.node}'];
            let offset = triggerNode.offset();
            let w = triggerNode.outerWidth(),
                h = triggerNode.outerHeight();
            styles = {
                position: 'absolute',
                top: `${offset.top + h + 10}px`,
                left: `${offset.left - 100}px`,
                zIndex: 1000
            };
        } else {
            styles = config.fdStyle;
        }

        this.$feedback = new FeedBack({
            id: config.fdId,
            frequency: 'all',
            style: styles
        });
    },
    '@{hide}'() {
        if (this.$feedback) {
            this.$feedback.destroy();
        }
    }
});