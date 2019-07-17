let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest();
    },
    'done2<success>'(e) {
        this.updater.digest({
            success: true
        })
    }
});