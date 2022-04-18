let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@3.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            test: '123',
            value: '123'
        });
    },
    'change<change>'(e) {
        // console.error('out', e.type, e.value, e.target.value)
    },
    '@{suggest}<keyup,paste,focusin>'(e) {
    },
    '@{stop}<focusout,change>'(e) {
    }
});