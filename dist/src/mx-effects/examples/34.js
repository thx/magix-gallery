let Magix = require('magix');
let Base = require('examples/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@34.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            num: 1.4
        });
    }
});