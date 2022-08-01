let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@27.html',
    mixins: [Form, Validator],
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
            icon: 'https://img.alicdn.com/tfs/TB13e.TioY1gK0jSZFCXXcwqXXa-28-34.png'
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