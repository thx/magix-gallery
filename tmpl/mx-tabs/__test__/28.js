let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@pipeline.less');

module.exports = Base.extend({
    tmpl: '@28.html',
    render() {
        let list = [{
            value: 1,
            text: '一级菜单1',
            finished: true,
            icon: 'https://img.alicdn.com/tfs/TB13e.TioY1gK0jSZFCXXcwqXXa-28-34.png'
        }, {
            value: 2,
            text: '一级菜单2',
            finished: true,
            subs: [{
                value: 21,
                text: '二级菜单2_1'
            }, {
                value: 22,
                text: '二级菜单2_2'
            }]
        }, {
            value: 3,
            text: '一级菜单3',
            highlight: true,
            iconTip: '提示信息',
        }, {
            value: 4,
            text: '一级菜单4',
            disabled: true
        }, {
            value: 5,
            text: '一级菜单5',
            disabled: true
        }]

        this.updater.digest({
            viewId: this.id,
            list,
            selected: list[2].value,
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected,
        })
    }
});