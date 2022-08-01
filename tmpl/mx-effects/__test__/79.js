let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@progress.less');

module.exports = Base.extend({
    tmpl: '@79.html',
    render() {
        this.updater.digest({
            num: 40,
        });
    }
});