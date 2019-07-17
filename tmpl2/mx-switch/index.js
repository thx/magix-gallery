let Magix = require('magix');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        that['@{owner.node}'] = $('#' + that.id);

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');
        that.updater.set({
            on: (extra.state + '' === 'true'),
            disabled,
            tip: extra.tip || ''
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();
    },

    '@{toggle}<click>' (e) {
        let that = this;
        let updater = that.updater;

        if(updater.get('disabled')){
            return;
        }

        let state = !updater.get('on');
        that.updater.set({
            on: state
        }).digest();

        let event = $.Event('change', {
            state: state
        });
        that['@{owner.node}'].val(state).trigger(event);
    }

});