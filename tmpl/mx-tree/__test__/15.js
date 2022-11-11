let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@15.html',
    mixins: [Form, Validator],
    render() {
        let list = [];
        for (let i = 1; i < 10; i++) {
            list.push({
                value: i,
                text: i,
            })
        }

        this.updater.digest({
            list,
            bottomValues: []
        });
    }
});