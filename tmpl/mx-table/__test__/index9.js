let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index9.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});