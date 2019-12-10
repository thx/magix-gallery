let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index11.html',
    render() {
        this.updater.digest({
            index: 1,
            count: 10,
            viewId: this.id
        });
    },
    'test<click>'(e) {
        let { index, count } = this.updater.get();
        if (+index < count) {
            index = +index + 1;
        }
        this.updater.digest({
            index
        })
    }
});