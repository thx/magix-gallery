let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@19.html',
    render() {
        let tabs = [{
            text: '菜单1',
            value: 1
        }, {
            text: '菜单2',
            value: 2
        }];


        let list = [];
        for (let i = 0; i < 20; i++) {
            list.push({
                value: i,
                text: `模块${i}`
            })
        }

        this.updater.digest({
            tabs,
            selectedTab: 1,
            list,
            selected: 18
        });
    }
});