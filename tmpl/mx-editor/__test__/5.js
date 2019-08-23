let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@5.html',
    mixins: [Form],
    render() {
        this.updater.digest({
            content: 2000
        });
    }
});