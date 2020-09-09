let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@custom.less');

module.exports = Base.extend({
    tmpl: '@custom.html',
    init(e) {
        let that = this;
        this.updater.set(e.data);
    },
    render() {
        this.updater.digest();
    }
});