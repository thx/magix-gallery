let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            state: 1,
            valueMap: {
                true: 1,
                false: 0
            }
        });
    }
});