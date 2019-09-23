let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@13.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'show<click>'(e) {
        // this.mxLoginView(viewPath[, viewOptions])
        // viewPath：登录框view
        // viewOptions：object，带入viewPath的参数
        this.mxLoginView('@../../mx-header/examples/login')
    }
});