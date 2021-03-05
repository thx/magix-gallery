/**
 * drag
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@30.html',
    render() {
        let fields = [];
        for (let i = 0; i < 10; i++) {
            fields.push({
                value: i,
                width: 200,
                minWidth: 100,
                maxWidth: 400
            })
        }
        this.updater.digest({
            fields,
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
    'remove<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line - 1
        });
    },
    'changeIndex<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: +index + 1
        });
    },
    'drag<dragfinish>'(e) {
        let items = e.items;
        let { fields } = this.updater.get();
        fields.forEach(field => {
            field.width = items[field.value] || field.width;
        })
        this.updater.digest({
            fields
        })
    }
});