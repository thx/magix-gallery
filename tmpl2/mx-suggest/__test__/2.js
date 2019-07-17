let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            selectedValue: '',
            selectedText: ''
        });
    },
    'suggest<suggest>'(e) {
        // e.selected [object]
        //      value
        //      text
        let selected = e.selected;
        this.updater.digest({
            selectedValue: selected.value,
            selectedText: selected.text
        })
    }
});