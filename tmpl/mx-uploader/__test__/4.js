let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            csrfId: Math.random()
        });
    },
    'uploadStart<start>'(e) {
        // 同步处理
        e.preventDefault();
    },
    'uploadSuccess<success>'(e) {
        // e.files
        // e.response
    },
    'uploadError<error>'(e) {
        // e.error
    }
});