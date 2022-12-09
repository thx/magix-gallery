let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@16.html',
    render() {
        let list = [{
            value: 1,
            text: '模块1'
        }, {
            value: 2,
            text: '模块2'
        }, {
            value: 3,
            text: '模块3'
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