let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@wangwang.html',
    render() {
        this.updater.digest();
    }
});