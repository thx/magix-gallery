let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@step.less')

module.exports = Base.extend({
    tmpl: '@89.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});