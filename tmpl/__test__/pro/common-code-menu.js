let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@common-code-menu.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});