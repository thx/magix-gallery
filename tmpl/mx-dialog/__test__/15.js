let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@../index.less');

module.exports = Base.extend({
    tmpl: '@15.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open<click>'(event) {
        this.mxDialog('@./demo3', {}, {
            width: 400,
            height: 400,
            target: $(event.target),
        });
    }
});