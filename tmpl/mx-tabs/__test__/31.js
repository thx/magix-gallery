let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@pipeline.less');

module.exports = Base.extend({
    tmpl: '@31.html',
    render() {
        let list = [{
            value: 1,
            text: '一级菜单1',
            icon: 'https://img.alicdn.com/imgextra/i2/O1CN014Tqfav1kV9WwsKZzJ_!!6000000004688-2-tps-24-28.png'
        }, {
            value: 2,
            text: '一级菜单2',
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
            iconTip: '提示信息',
        }, {
            value: 4,
            text: '一级菜单4',
        }, {
            value: 5,
            text: '一级菜单5',
        }]

        this.updater.digest({
            viewId: this.id,
            list,
            selected: list[2].value,
        });
    }
});
