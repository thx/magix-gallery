let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@loading.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});
