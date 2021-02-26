let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@thead-group.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});