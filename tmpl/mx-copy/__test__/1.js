let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest();
    },
    'done2<success>'(e) {
        this.updater.digest({
            success: true
        })
    }
});