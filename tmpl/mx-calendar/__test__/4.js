let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        let today = this['@{date.format}'](this['@{date.day}']());
        this.updater.digest({
            today
        });
    }
});