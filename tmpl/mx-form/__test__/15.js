let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Base.extend({
    tmpl: '@15.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            list: [1, 2, 3],
            tags: [1]
        });
    }
})