let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
Magix.applyStyle('@menu.less');

module.exports = Base.extend({
    tmpl: '@34.html',
    mixins: [Form, Validator],
    init() {
        this.updater.set({
            expand: true
        })
    },
    render() {
        let list = [{
            value: 1,
            text: '一级菜单1',
            icon: '<i class="mx-iconfont">&#xe70f;</i>',
        }, {
            value: 2,
            text: '一级菜单2',
            icon: '<i class="mc-iconfont">&#xe671;</i>',
            tagContent: '<img src="https://img.alicdn.com/imgextra/i2/O1CN014Tqfav1kV9WwsKZzJ_!!6000000004688-2-tps-24-28.png" />',
            subs: [{
                value: 21,
                text: '二级菜单2_1',
            }, {
                value: 22,
                text: '二级菜单2_2',
            }]
        }, {
            value: 3,
            text: '一级菜单3',
            icon: '<i class="mc-iconfont">&#xe780;</i>',
            subs: [{
                value: 31,
                text: '二级菜单3_1',
                tag: 'HOT',
            }, {
                value: 32,
                text: '二级菜单3_2'
            }]
        }, {
            value: 4,
            text: '一级菜单4',
            icon: '<i class="mc-iconfont">&#xe60e;</i>',
        }]

        this.updater.digest({
            viewId: this.id,
            list,
            selected: 21,
        });
    },
    'toggle<click>'(e) {
        this.updater.digest({
            expand: !this.updater.get('expand')
        })
    },
});
