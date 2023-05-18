/**
 * thead-group
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@16.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            num: 6,
            line: 4,
            index: 1
        });
    },
    'add<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line + 1
        });
    },
    'changeIndex<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: +index + 1
        });
    },
    'copySuccess<success>'(e){
    }
});