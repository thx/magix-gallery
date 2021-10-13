let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let today = this['@{date.format}'](this['@{date.day}']()),
            yesterday = this['@{date.format}'](this['@{date.day}'](-1)),
            tomorrow = this['@{date.format}'](this['@{date.day}'](1));
        this.updater.digest({
            today,
            yesterday,
            tomorrow,
        });
    }
});