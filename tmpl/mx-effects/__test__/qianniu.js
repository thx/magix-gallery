let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@qianniu.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});