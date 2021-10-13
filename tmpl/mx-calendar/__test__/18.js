let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@18.html',
    render() {
        let formatter = 'YYYY/MM/DD';
        let start = this['@{date.format}'](this['@{date.day}'](), formatter);
        let end = this['@{date.format}'](this['@{date.day}'](2), formatter);
        this.updater.digest({
            formatter,
            start,
            end,
        });
    }
});