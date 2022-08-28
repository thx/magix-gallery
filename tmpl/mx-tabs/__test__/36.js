let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@36.html',
    render() {
        let list = [{
            value: 1,
            text: '步骤一',
            tip: '简单说明',
            iconTip: '提示信息',
            finished: true,
        }, {
            value: 2,
            text: '步骤二',
            tip: '简单说明',
            finished: true,
        }, {
            value: 3,
            text: '步骤三',
            tip: '简单说明',
        }, {
            value: 4,
            text: '步骤四',
            tip: '简单说明',
            disabled: true
        }];

        this.updater.digest({
            list,
            selected: list[2].value
        });
    },

    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});