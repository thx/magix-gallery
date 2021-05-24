let Magix = require('magix');
let Base = require('__test__/example');
let Vframe = Magix.Vframe;
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: [{
                week: '1234567',
                times: [2, 3, 4]
            }]
        });
    },
    'get<click>'() {
        let vf = Vframe.get(this.id + '_hour');
        let selected = vf.invoke('val');
        this.updater.digest({
            selected
        })
    }
});