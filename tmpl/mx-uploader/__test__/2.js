let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            csrfId: Math.random()
        });
    },
    'uploadStart<start>'(e) {
        // e.files
        // 异步处理
        e.result = new Promise((resolve, reject) => {
            // do something
            // resolve 继续提交
            // reject 中断提交
            resolve();
        })
    },
    'uploadSuccess<success>'(e) {
        // e.files
        // e.response
    },
    'uploadError<error>'(e) {
        // e.error
    }
});