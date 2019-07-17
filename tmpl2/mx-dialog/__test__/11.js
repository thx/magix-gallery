let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@11.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxModal('@./full', {
            
        }, {
            width: 800,
            mask: false
        });
    }
});