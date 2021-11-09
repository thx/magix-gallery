let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@48.html',
    render() {
        let parents = [], list = [];
        for (let i = 1; i < 5; i++) {
            parents.push({
                value: i,
                text: `第${i}组`
            });
            for (let j = 1; j < 11; j++) {
                list.push({
                    value: `${i}_${j}`,
                    text: `选项${i}_${j}`,
                    pValue: i
                })
            }
        }

        this.updater.digest({
            parents,
            list,
            selected: [],
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});