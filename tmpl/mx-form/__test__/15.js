let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@15.html',
    render() {
        this.updater.digest({
            list: [1, 2, 3],
            tags: [1]
        });
    }
})