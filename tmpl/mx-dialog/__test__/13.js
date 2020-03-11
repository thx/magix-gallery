let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@13.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'show<click>'(e) {
        // this.mxLoginView(viewOptions)
        // viewOptions：object
        //      bizCode：项目bizCode，包装了登陆框逻辑
        let bizCode = e.params.bizCode;
        this.mxLoginView({
            bizCode
        })
    }
});