let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            id: this.id + '_node',
        });
    }
});