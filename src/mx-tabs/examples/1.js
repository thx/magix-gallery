let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let list = [{
            value: 1,
            text: '默认打标',
            tag: 'New'
        }, {
            value: 2,
            text: '无打标'
        }, {
            value: 3,
            text: '自定义打标模块',
            tagContent: '<span style="display: inline-block; width: 8px; height: 8px; background-color: #ff0000; border-radius: 50%;"></span>'
        }, {
            value: 4,
            text: '图片打标',
            tagContent: '<img src="https://img.alicdn.com/tfs/TB1pvD4dkP2gK0jSZPxXXacQpXa-100-34.png" style="max-width: none; width: 50px;"/>'
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