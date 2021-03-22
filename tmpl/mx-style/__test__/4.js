let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@4.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            list: [{
                value: 1,
                text: '选中'
            }, {
                value: 2,
                text: '未选中'
            }, {
                value: 3,
                text: '未选中禁止选择',
                disabled: true
            }],
            selected: 1,
            index: 10
        });
    },
    'test<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 10
        })
    }
});