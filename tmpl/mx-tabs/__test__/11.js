let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@11.html',
    render() {
        this.updater.digest({
            list: [{
                value: 1,
                text: '<i class="mc-iconfont mr5">&#xe60e;</i>模块1'
            }, {
                value: 2,
                text: '<i class="mc-iconfont mr5">&#xe604;</i>模块2'
            }]
        });
    }
});