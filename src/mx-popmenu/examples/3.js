let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@3.less');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    },
    'select<change>'(e){
        let selected = e.selected;
        this.updater.digest({
            selected
        })
    }
});
