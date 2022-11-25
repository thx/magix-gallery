let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        let v1 = this.getCssVar('--input-small-min-width'),
            v2 = this.getCssVar('--input-min-width'),
            v3 = this.getCssVar('--input-large-min-width');
        this.updater.digest({
            v1,
            v2,
            v3,
        });
    }
});