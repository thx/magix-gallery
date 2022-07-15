let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
Magix.applyStyle('@edit.less')

module.exports = Base.extend({
    tmpl: '@18.html',
    mixins: [Form, Validator],
    render() {
        let list1 = [];
        for (let i = 1; i < 4; i++) {
            list1.push({
                value: i,
                text: `模块${i}`
            })
        }

        let list2 = [];
        for (let i = 1; i < 20; i++) {
            list2.push({
                value: i,
                text: `<span ${(i % 2 == 0) ? 'class="@edit.less:dot-red"' : 'class="@edit.less:dot-green"'}></span>模块${i}`
            })
        }

        this.updater.digest({
            list1,
            selected1: 2,
            list2,
            selected2: 18,
        });
    }
});