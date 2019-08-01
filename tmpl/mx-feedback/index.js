'top@./vendor/feedback.js';
let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    init(extra) {
        let that = this;

        let node = $(`#${that.id}`);
        node.on('click', () => {
            if (that.$feedback) {
                that.$feedback.destroy();
            }

            // frequency
            // all：每次弹出
            // one：只弹出一次
            let styles = {};
            if($.isEmptyObject(extra.fdStyle)){
                let offset = node.offset();
                let w = node.outerWidth(),
                    h = node.outerHeight();
                styles = {
                    position: 'absolute',
                    top: `${offset.top + h + 10}px`,
                    left: `${offset.left - 100}px`,
                    zIndex: 1000
                };
            }else{
                styles = extra.fdStyle;
            }

            that.$feedback = new FeedBack({
                id: extra.fdId,
                frequency: 'all',
                style: styles
            });
        })

        that.on('destroy', () => {
            if (that.$feedback) {
                that.$feedback.destroy();
            }
        })
    },
    assign(ops) {
        return true;
    }
});