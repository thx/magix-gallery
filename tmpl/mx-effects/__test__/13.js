let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@13.html',
    render() {
        this.updater.digest({
            icon1: '<i class="mc-iconfont">&#xe635;</i>',
            icon2: '<i class="mc-iconfont">&#xe60c;</i>'
        });
    }
});