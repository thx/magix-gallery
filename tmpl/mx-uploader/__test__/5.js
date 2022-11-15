let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest();
    },
    'uploadSuccess<success>'(e) {
        // e.files
        // e.response
    },
    'uploadError<error>'(e) {
        // e.error
    }
});