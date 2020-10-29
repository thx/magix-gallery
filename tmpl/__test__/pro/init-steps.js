let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@init-steps.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});