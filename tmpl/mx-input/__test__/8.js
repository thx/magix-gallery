let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@8.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            value: 'test',
        });
    },
    '@{suggest}<keyup,paste,focusin>'(e) {
    },
    '@{stop}<focusout,change>'(e) {
    }
});