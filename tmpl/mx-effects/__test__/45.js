let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@45.html',
    render() {
        this.updater.digest({
            viewId: this.id,
        });
    }
});