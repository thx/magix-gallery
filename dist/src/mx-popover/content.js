let Magix = require('magix');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@content.html',
    init(e) {
        let that = this;
        let data = e.data || {};
        this.updater.set({
            content: data.content || ''
        })
    },
    render() {
        this.updater.digest({});
    }
});