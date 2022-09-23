let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@dlg.html',
    render() {
        this.updater.digest();
    },
});