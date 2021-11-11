let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@50.html',
    render() {
        let list = [];
        for (let i = 1; i < 5; i++) {
            list.push({
                value: i,
                text: `选项${i}`,
            })
        }

        this.updater.digest({
            list,
            selected: list[0].value,
        });
    },
    'select<change>'(event) {
        this.updater.digest({
            selected: event.value,
        });
    },
});