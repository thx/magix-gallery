let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            menus: [{
                value: 1,
                text: '操作1'
            }, {
                value: 2,
                text: '操作2'
            }, {
                value: 3,
                text: '操作3'
            }]
        });
    },
    'select<change>'(e){
        let text = e.params.text;
        let selected = e.selected;
        this.updater.digest({
            text,
            selected
        })
    }
});
