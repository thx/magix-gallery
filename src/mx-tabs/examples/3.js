let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        let list = [{
            value: 1,
            text: '模块1'
        }, {
            value: 2,
            text: '模块2'
        }, {
            value: 3,
            text: '模块3'
        }];

        this.updater.digest({
            list,
            selected: list[0].value
        });
    },

    'changeTab<change>' (e) {
        // e.value 当前选中的key值
        // e.text 当前选中的文案
        this.updater.digest({
            selected: e.value
        })
    }
});