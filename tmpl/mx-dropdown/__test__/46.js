let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@46.html',
    render() {
        let list = [];
        for (let i = 0; i < 40; i++) {
            list.push(i);
        }
        this.updater.digest({
            // list,
            list: [1, 2, 3]
        });
    }
});