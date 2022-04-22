let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            val: 123
        });
    },
    'uploadSuccess<success>'(e) {
        // e.response
    },
    'uploadError<error>'(e) {
        // e.error
    },
    'click<click>'(e) {
        this.updater.digest({
            val: 23234
        })
    },
    'test<change>'(e) {
        // JS更新input的value属性，为什么不触发"change"事件呢？
        // https://juejin.im/post/5cb71fa2f265da03a97ae31b
    }
});