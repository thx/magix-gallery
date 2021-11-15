let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Base.extend({
    tmpl: '@24.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            name1: '',
            name2: '',
            name3: '4',
            name4: '4',
        });
        this.isValid({
            scrollIntoView: false
        });
    }
});