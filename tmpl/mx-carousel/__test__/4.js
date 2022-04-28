let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@4.less');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});