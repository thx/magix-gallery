let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@85.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});