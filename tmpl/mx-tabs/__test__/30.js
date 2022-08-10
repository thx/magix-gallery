let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@pipeline.less');

module.exports = Base.extend({
    tmpl: '@30.html',
    render() {
        let list1 = [{
            value: 1,
            text: '一级菜单1',
            finished: true,
        }, {
            value: 2,
            text: '一级菜单2',
            finished: true,
        }, {
            value: 3,
            text: '一级菜单3',
            highlight: true,
        }, {
            value: 4,
            text: '一级菜单4',
            disabled: true
        }, {
            value: 5,
            text: '一级菜单5',
            disabled: true
        }];

        let list2 = [{
            value: 1,
            text: '一级菜单1',
            finished: true,
        }, {
            value: 2,
            text: '一级菜单2',
            finished: true,
        }, {
            value: 3,
            text: '一级菜单3',
            finished: true,
        }, {
            value: 4,
            text: '一级菜单4',
            highlight: true,
        }, {
            value: 5,
            text: '一级菜单5',
            disabled: true,
        }];

        let list3 = [{
            value: 1,
            text: '一级菜单1',
            finished: true,
            disabled: true,
        }, {
            value: 2,
            text: '一级菜单2',
            finished: true,
            disabled: true,
        }, {
            value: 3,
            text: '一级菜单3',
            finished: true,
            disabled: true,
        }, {
            value: 4,
            text: '一级菜单4',
            finished: true,
            disabled: true,
        }, {
            value: 5,
            text: '一级菜单5',
            highlight: true
        }];

        this.updater.digest({
            viewId: this.id,
            list1,
            selected1: 2,
            list2,
            selected2: 4,
            list3,
            selected3: 5,
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            [`selected${e.params.index}`]: e.selected,
        })
    }
});