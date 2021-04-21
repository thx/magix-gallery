let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@7.html',
    mixins: [Form, Validator],
    render() {
        let list = [];
        for (let i = 1; i < 5; i++) {
            list.push({
                value: i,
                text: `选项${i}`,
                tip: '提示信息',
                tag: '打标',
            })
        }

        this.updater.digest({
            viewId: this.id,
            list,
            selected1: 1,
            selected2: 1,
            selected3: 1,
            selected4: 1,
            selected5: 1,
            selected6: 1,
        });
    },

    'change<change>'(e) {
        let { index, value } = e.params;
        this.updater.digest({
            [`selected${index}`]: value
        })
    },

    'test<click>'(e) {
        this.updater.digest({
            selected1: 1
        })
    },

    'check<click>'(e) {
        let result = this.isValid();
    }
});