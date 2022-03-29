let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@dingding.less');

module.exports = Base.extend({
    tmpl: '@dingding.html',
    render() {
        this.updater.digest({});
    }
});