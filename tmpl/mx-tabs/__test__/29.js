let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@pipeline.less');

module.exports = Base.extend({
    tmpl: '@29.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});