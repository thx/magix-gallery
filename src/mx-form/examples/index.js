let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        that.updater.digest({
            viewId: that.id
        });
    }
});