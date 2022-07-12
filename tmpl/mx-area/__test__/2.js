let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            values: [1, 19]
        });
    },
    'get<click>'(event) {
        let id = this.id + '_area'
        let values = Magix.Vframe.get(id).invoke('val');
        this.updater.digest({
            values
        })
    }
});