let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Base.extend({
    tmpl: '@26.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            name1: '',
            name2: '',
            name3: '4',
            name4: '4',
            name5: '4',
            name6: '4',
            name7: '4',
            name8: '4',
            selected1: '',
            selected2: '2',
            selected3: '',
            selected4: '',
        });
        this.isValid({
            scrollIntoView: false
        });
    }
});