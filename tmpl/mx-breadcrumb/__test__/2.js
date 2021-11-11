let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        let list = [{
            text: '首页',
            value: 'home',
        }, {
            text: '计划名称',
            value: 'campaign',
        }, {
            text: '单元名称',
            value: 'adgroup',
        }];

        this.updater.digest({
            list,
            selected: list[list.length - 1].value,
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    },
    'empty<click>'(e) {
        let { list } = this.updater.get();
        this.updater.digest({
            selected: list[list.length - 1].value,
        });
    }
});