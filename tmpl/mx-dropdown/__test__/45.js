let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@45.html',
    render() {
        let list1 = [], list2 = [];
        for (let i = 0; i < 4; i++) {
            list1.push({
                value: i,
                text: `选项${i}`
            })
            list2.push({
                value: i,
                text: `选项${i}`
            })
        }
        this.updater.digest({
            list1,
            selected1: list1[0].value,
            list2,
            selected2: list2[0].value,
        });
    }
});