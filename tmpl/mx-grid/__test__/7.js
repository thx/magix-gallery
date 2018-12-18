let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            icon: '<i class="mc-iconfont fontsize-20">&#xe670;</i>'
        });
    }
});