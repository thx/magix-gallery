let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: ''
        });
    },
    'get<click>'(event){
        let comp = $('#' + this.id + '_comp');
        this.updater.digest({
            selected: comp.val()
        })
    }
});