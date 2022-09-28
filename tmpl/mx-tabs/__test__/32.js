let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@menu.less');

module.exports = Base.extend({
    tmpl: '@32.html',
    render() {
        let list = [{
            value: 1,
            text: '一级菜单菜单',
            icon: '<i class="mx-iconfont">&#xe70f;</i>',
            tag: 'NEW',
        }, {
            value: 2,
            text: '一级菜单2',
            icon: '<i class="mc-iconfont">&#xe671;</i>',
            // tag: 'HOT',
            tagContent: '<img src="https://img.alicdn.com/imgextra/i2/O1CN014Tqfav1kV9WwsKZzJ_!!6000000004688-2-tps-24-28.png" />',
            subs: [{
                value: 21,
                text: '二级菜单2_1',
                // tag: 'HOT',
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
            expand: true,
        });
    },
    'toggle<click>'(e) {
        this.updater.digest({
            expand: !this.updater.get('expand')
        })
    },
    // 'toggle2<click>'(e) {
    //     let expand = !this.updater.get('expand');
    //     this.updater.set({
    //         expand,
    //     })

    //     let vf = Magix.Vframe.get(`${this.id}_menu`);
    //     vf.invoke('toggle', [expand])
    // },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected,
        })
    },
    'test<click>'(e) {
        let list = [];

        this['$test'] = this['$test'] || 0;
        this['$test']++;
        if (this['$test'] % 3 == 0) {
            list = [{
                value: 9,
                text: '一级菜单9',
                icon: '<i class="mx-iconfont">&#xe70f;</i>',
            }, {
                value: 8,
                text: '一级菜单8',
                icon: '<i class="mc-iconfont">&#xe671;</i>',
                subs: [{
                    value: 81,
                    text: '二级菜单8_1',
                }, {
                    value: 88,
                    text: '二级菜单8_8',
                }]
            }, {
                value: 7,
                text: '一级菜单7',
                icon: '<i class="mc-iconfont">&#xe60e;</i>',
            }]
        } else if (this['$test'] % 3 == 1) {
            list = [{
                value: 9,
                text: '一级菜单9',
                icon: '<i class="mx-iconfont">&#xe70f;</i>',
            }, {
                value: 7,
                text: '一级菜单7',
                icon: '<i class="mc-iconfont">&#xe60e;</i>',
            }]
        }
        this.updater.digest({
            list,
            selected: list[0]?.value || '',
        });
    }
});