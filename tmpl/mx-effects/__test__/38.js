let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@38.html',
    render() {
        this.updater.digest();
    }
});