let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@26.html',
    render() {
        this.updater.digest({
            selected1: 3,
            selected2: 3,
        });
    }
});