let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let list = [];
        for (let index = 0; index < 5; index++) {
            list.push({
                text: 'test' + index,
                value: index
            })
        }
        this.updater.digest({
            viewId: this.id,
            list,
            selected: '1,2'
        });
    },
    'get<click>'(){
        let node = $('#' + this.id + '_taginput');
        this.updater.digest({
            selected: node.val()
        })
    }
});