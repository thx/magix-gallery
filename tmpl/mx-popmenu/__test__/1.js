let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            menus: [{
                value: 1,
                text: '操作选项（id=1）'
            }, {
                value: 2,
                text: '操作选项（id=2）'
            }, {
                value: 3,
                text: '操作选项（id=3）'
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
