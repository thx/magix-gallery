let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest({
            value: '',
            prefix: '<i class="mc-iconfont">&#xe620;</i>',
            suffix: '<i class="mc-iconfont">&#xe620;</i>',
        });
    },
});