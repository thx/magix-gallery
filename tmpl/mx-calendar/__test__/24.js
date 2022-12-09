let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@24.html',
    render() {
        this.updater.digest({
            start: '2018-03',
            end: '2018-04'
        });
    }
});