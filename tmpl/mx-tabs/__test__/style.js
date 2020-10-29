let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@style.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});