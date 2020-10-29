let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index1.html',
    render() {
        this.updater.digest({});
    }
});