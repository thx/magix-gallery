let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@35.html',
    render() {
        let list = [];
        for (let i = 1; i < 30; i++) {
            list.push({
                value: i,
                text: `模块${i}`,
            })
        };

        this.updater.digest({
            list,
            // selected1: 1,
            // selected2: 1,
            // selected3: 1,
            selected1: 18,
            selected2: 18,
            selected3: 18,
        });
    },

    'changeTab<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});