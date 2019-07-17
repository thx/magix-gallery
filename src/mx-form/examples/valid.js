let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@valid.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});