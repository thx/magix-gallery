let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index8.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});