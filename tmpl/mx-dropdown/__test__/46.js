let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@46.html',
    render() {
        let list = [];
        for (let i = 1; i < 4; i++) {
            list.push({
                text: i,
                value: i
            });
        }
        this.updater.digest({
            list,
            selected: 1,
        });
    }
});