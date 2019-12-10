let Magix = require('magix');
let $ = require('$');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Magix.View.extend({
    tmpl: '@error.html',
    mixins: [Form, Validator],
    render() {
        let that = this;
        that.updater.digest({
            viewId: that.id,
            name: 'test'
        });
    }
});