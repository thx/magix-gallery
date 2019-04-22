let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest();
    },
    'uploadSuccess<success>'(e) {
        // e.response
    },
    'uploadError<error>'(e) {
        // e.error
    }
});