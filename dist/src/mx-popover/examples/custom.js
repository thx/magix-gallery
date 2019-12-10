let Magix = require('magix');
Magix.applyStyle('@custom.less');

module.exports = Magix.View.extend({
    tmpl: '@custom.html',
    init(e) {
        let that = this;
        this.updater.set(e.data);
    },
    render() {
        let that = this;
        let loc = Magix.Router.parse();

        that.updater.digest({});
    }
});