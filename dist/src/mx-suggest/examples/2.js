let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            selectedValue: '',
            selectedText: ''
        });
    },
    'suggest<change>'(e) {
        // e.item [object]
        //      value
        //      text
        // e.selected [item.value]
        let item = e.item;
        this.updater.digest({
            selectedValue: item.value,
            selectedText: item.text
        })
    }
});