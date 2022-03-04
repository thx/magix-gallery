let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@grid-body.html',
    render() {
        this.updater.digest();
    }
});