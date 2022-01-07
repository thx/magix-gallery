let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@index-demo3.html',
    render() {
        this.updater.digest();
    }
});