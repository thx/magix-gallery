let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    },
    't<click>'() {
        let test = this.updater.get('test')
        this.updater.digest({
            test: !test
        })
    }
});