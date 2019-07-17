let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@31.html',
    render() {
        this.updater.digest({
            index: 1
        });
    },
    'change<click>'(event) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        });
    }
});