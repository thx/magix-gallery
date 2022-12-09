let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@24-inner.html',
    render() {
        let list = [];
        for (let i = 0; i < 20; i++) {
            list.push({
                value: i,
                text: `模块${i}`
            })
        }

        this.updater.digest({
            list,
            selected: 2
        });
    }
});