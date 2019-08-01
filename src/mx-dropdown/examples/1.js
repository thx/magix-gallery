let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let that = this;
        let first = [],
            second = [];
        for (var i = 0; i < 2; i++) {
            first.push('1' + i);
            second.push('2' + i);
        }
        that.updater.digest({
            first,
            second,
            selected: 11
        });
    },
    'changeData<click>' (e) {
        let first = [],
            second = [];
        for (var i = 0; i < 2; i++) {
            first.push('3' + i);
            second.push('4' + i);
        }

        this.updater.digest({
            first,
            second,
            selected: 31
        });
    }
});