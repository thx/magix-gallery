let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@22.html',
    render() {
        this.updater.digest({
            start: this['@{date.format}'](this['@{date.day}']()),
            end: this['@{date.format}'](this['@{date.day}'](5))
        });
    }
});