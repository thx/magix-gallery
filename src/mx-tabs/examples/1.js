let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let list = [{
            value: 1,
            text: '模块1',
            tag: 'New'
        }, {
            value: 2,
            text: '模块2'
        }, {
            value: 3,
            text: '模块3',
            tag: '内容上新'
        }];


        this.updater.digest({
            list,
            selected: list[1].value
        });
    },
    'changeData<click>' (e) {
        let list = [{
            value: 4,
            text: '新模块1',
            tag: 'New'
        }, {
            value: 5,
            text: '新模块2'
        }];
        let selected = list[0].value;
        this.updater.digest({
            list,
            selected
        })
    },

    'changeTab<change>' (e) {
        // e.value 当前选中的key值
        // e.text 当前选中的文案
        this.updater.digest({
            selected: e.value
        })
    }
});