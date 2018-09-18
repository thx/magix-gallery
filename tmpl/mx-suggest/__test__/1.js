let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest();
    },
    'updateList<showList>'(e) {
        let id = this.id + '_test';

        let list = [];
        for (let index = 1; index < 5; index++) {
            list.push({
                text: index,
                value: index
            })
        }
        Vframe.get(id).invoke('update', [list]);
        // 等同于
        // Vframe.get(id).invoke('update', [[1,2,3,4]]);
    }
});