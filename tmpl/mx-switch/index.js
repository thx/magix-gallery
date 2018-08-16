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

        that['@{node.state}'] = (/^true$/i).test(extra.state) || false;
        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            on: that['@{node.state}']
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
        let state = !that['@{node.state}'];
        that.updater.set({
            on: state
        }).digest();
        that['@{node.state}'] = state;

        let event = $.Event('change', {
            state: state
        });
        that['@{owner.node}'].trigger(event);
    }

});