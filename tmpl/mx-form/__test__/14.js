let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@14.html',
    render() {
        let list = [];
        for (let index = 0; index < 2; index++) {
            list.push({
                key: index,
                value: ''
            })
        }

        this.updater.digest({
            list
        });
    },
    'add<click>'(e) {
        let list = this.updater.get('list');
        let len = list.length;
        list.push({
            key: len,
            value: 'test'
        })
        this.updater.digest({
            list
        });
    }
});