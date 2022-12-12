let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let list = [];
        for (let index = 0; index < 6; index++) {
            list.push({
                text: ((index % 2 == 0) ? 'test_' : 'hello_') + index,
                value: index
            })
        }
        this.updater.digest({
            viewId: this.id,
            list,
            selected: '1,2'
        });
    },
    'get<click>'() {
        let node = document.getElementById(this.id + '_taginput');
        this.updater.digest({
            selected: node.value,
        })
    }
});