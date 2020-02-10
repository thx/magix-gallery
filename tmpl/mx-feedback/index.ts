import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';

export default View.extend({
    init(extra) {
        this.updater.set({
            config: extra
        })

        this.on('destroy', () => {
            this['@{hide}']();
        })
    },
    render() {
        let that = this;
        let { config } = that.updater.get();

        let triggerNode = $(`#${that.id}`);
        that['@{owner.node}'] = triggerNode;
        let triggerType = config.triggerType || 'click';
        switch (triggerType) {
            case 'click':
                triggerNode.on('click', () => {
                    that['@{prev.show}']();
                })
                break;
            case 'auto':
                that['@{prev.show}']();
                break;
        }

    },
    '@{prev.show}'() {
        let that = this;
        if (window.FeedBackLoader) {
            that['@{show}']();
        } else {
            seajs.use('//g.alicdn.com/mm/feedback-plus-loader/index.js', () => {
                that['@{show}']();
            })
        }
    },
    '@{show}'() {
        this['@{hide}']();

        // frequency
        // all：每次弹出
        // one：只弹出一次
        let { config } = this.updater.get();
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

        this.$feedback = new FeedBackLoader({
            id: config.fdId,
            frequency: config.fdFrequency || 'one',
            closeBtn: true,
            style: styles
        });
    },
    '@{hide}'() {
        let instance = this.$feedback;
        if (instance) {
            if (instance.then) {
                instance.then(function (one) {
                    one.destroy()
                })
            } else {
                instance.destroy();
            }
        }
    }
});