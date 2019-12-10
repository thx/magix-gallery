let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            width: 100
        });
    },
    'change<click>'(e) {
        let width = this.updater.get('width');
        if (width == 100) {
            width = 76;
        } else {
            width = 100;
        }
        this.updater.digest({
            width
        });
    }
});