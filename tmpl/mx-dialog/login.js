var Magix = require('magix');
Magix.applyStyle('@login.less');

module.exports = Magix.View.extend({
    tmpl: '@login.html',
    init(extra) {
        this.updater.set({
            path: extra.loginViewPath,
            data: extra.loginViewData
        })
    },
    render() {
        this.updater.digest();
    }
});