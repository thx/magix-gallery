let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@38.html',
    mixins: [Form, Validator],
    render() {
        let list1 = [], list2 = [];
        for (let i = 0; i < 4; i++) {
            list1.push({
                value: i,
                text: `选项${i}`
            })
            list2.push({
                value: i,
                text: `选项${i}`
            })
        }
        this.updater.digest({
            list1,
            selected1: list1[0].value,
            list2,
            selected2: list2[0].value,
        });
    }
});