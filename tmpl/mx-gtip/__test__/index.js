let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});