let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: [1]
        });
    },
    'get<click>' (event) {
        let id = this.id + '_area'
        let selected = Magix.Vframe.get(id).invoke('val');
        this.updater.digest({
            selected: selected
        })
    }
});