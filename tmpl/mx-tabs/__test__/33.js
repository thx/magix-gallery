let Magix = require('magix');
let Router = Magix.Router;
let Base = require('__test__/example');
Magix.applyStyle('@menu.less');

module.exports = Base.extend({
    tmpl: '@33.html',
    init() {
        this.updater.set({
            expand: true,
        })
        this.observeLocation(['menuId']);
    },
    render() {
        let { path, params } = Router.parse();

        let list = [{
            value: 1,
            link: '#!' + Magix.toUrl(path, {
                ...params,
                menuId: 1
            }),
            text: '一级菜单1',
            icon: '<i class="mc-iconfont">&#xe91d;</i>',
        }, {
            value: 2,
            text: '一级菜单2',
            icon: '<i class="mc-iconfont">&#xe671;</i>',
            tagContent: '<img src="https://img.alicdn.com/tfs/TB13e.TioY1gK0jSZFCXXcwqXXa-28-34.png" />',
            subs: [{
                value: 21,
                link: '#!' + Magix.toUrl(path, {
                    ...params,
                    menuId: 21
                }),
                text: '二级菜单2_1',
            }, {
                value: 22,
                link: '#!' + Magix.toUrl(path, {
                    ...params,
                    menuId: 22
                }),
                text: '二级菜单2_2',
            }]
        }, {
            value: 3,
            text: '一级菜单3',
            icon: '<i class="mc-iconfont">&#xe780;</i>',
            subs: [{
                value: 31,
                link: '#!' + Magix.toUrl(path, {
                    ...params,
                    menuId: 31
                }),
                text: '二级菜单3_1',
                tag: 'HOT',
            }, {
                value: 32,
                link: '#!' + Magix.toUrl(path, {
                    ...params,
                    menuId: 32
                }),
                text: '二级菜单3_2'
            }]
        }, {
            value: 4,
            link: '#!' + Magix.toUrl(path, {
                ...params,
                menuId: 4
            }),
            text: '一级菜单4',
            icon: '<i class="mc-iconfont">&#xe60e;</i>',
        }]

        this.updater.digest({
            viewId: this.id,
            list,
            selected: params.menuId || list[0].value,
        });
    },

    'toggle<click>'(e) {
        this.updater.digest({
            expand: !this.updater.get('expand')
        })
    },
});