let Magix = require('magix');
Magix.applyStyle('@width.less');

module.exports = Magix.View.extend({
    tmpl: '@width.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});