let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@12.html',
    render() {
        this.updater.digest({
            val1: '120,140',
            val2: [120, 140]
        });
    },
    'test<click>'(e) {
        this.updater.digest({
            val1: '90,140'
        })
    }
});