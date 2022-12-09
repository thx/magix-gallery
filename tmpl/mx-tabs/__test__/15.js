let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@15.html',
    render() {
        let list = [{
            value: 1,
            text: '菜单1',
        }, {
            value: 2,
            text: '菜单2',
        }, {
            value: 3,
            text: '菜单3',
        }];

        let values = {};
        list.forEach(item => {
            values[item.value] = '';
        })

        this.updater.digest({
            list,
            selected: list[0].value,
            values
        });
    },

    'changeTab<change>'(e) {
        let that = this;
        if (that.isValid()) {
            that.updater.digest({
                selected: e.value
            })
        } else {
            e.preventDefault();
        }
    },
});