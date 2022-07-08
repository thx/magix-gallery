let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@content.html',
    init(e) {
        let data = e.data || {};
        this.updater.set({
            outer: data,
        })
    },
    render() {
        this.updater.digest({});
    }
});