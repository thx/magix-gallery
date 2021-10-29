let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            color: '#9a3c3c'
        });
    },
    'changeColor<change>'(e) {
        this.updater.digest({
            color: e.color
        });
    }
});