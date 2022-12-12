let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@27.html',
    render() {
        let list = [{
            value: 1,
            text: '第一个时段',
            tip: '04.27 - 04.30'
        }, {
            value: 2,
            text: '第二个时段',
            tip: '05.01 - 05.08'
        }, {
            value: 3,
            text: '第三个时段',
            tip: '05.09 - 05.13',
            icon: 'https://img.alicdn.com/imgextra/i2/O1CN014Tqfav1kV9WwsKZzJ_!!6000000004688-2-tps-24-28.png'
        }, {
            value: 4,
            text: '第四个时段',
            tip: '05.14 - 05.23'
        }];
        this.updater.digest({
            list,
            selected: list[1].value,
        });
    }
});