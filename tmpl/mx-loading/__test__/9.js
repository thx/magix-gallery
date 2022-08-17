let Magix = require('magix');
let Base = require('__test__/example');


module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest();
    }
});