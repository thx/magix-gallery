let Magix = require('magix');
Magix.applyStyle('@width.less');

module.exports = Magix.View.extend({
    tmpl: '@desc.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            num: 6
        });
    }
});