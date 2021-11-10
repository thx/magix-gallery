let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@18.html',
    render() {
        let list = [];
        for (let i = 1; i < 4; i++) {
            list.push({
                value: i,
                text: `模块${i}`,
            })
        }

        this.updater.digest({
            list,
            selected: list[0].value
        });
    },

    'changeTab<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});