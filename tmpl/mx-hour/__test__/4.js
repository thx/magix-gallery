let Magix = require('magix');
let Vframe = Magix.Vframe;
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: [{
                week: 1,
                name: '周一',
                times: [2, 3, 4, 21, 22, 23]
            }, {
                week: 3,
                name: '周三',
                times: [0, 1, 2, 3, 4, 10, 11, 12]
            }]
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});