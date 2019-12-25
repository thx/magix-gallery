let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@tip.html',
    init(extra) {
        this.updater.set(extra.info);
    },
    render() {
        this.updater.digest();
    }
});