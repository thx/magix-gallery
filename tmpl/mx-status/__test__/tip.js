let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@tip.html',
    init(extra) {
        this.updater.set(extra.data);
    },
    render() {
        this.updater.digest();
    }
});