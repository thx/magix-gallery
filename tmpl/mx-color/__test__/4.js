let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            color: '#9a3c3c'
        });
    }
});