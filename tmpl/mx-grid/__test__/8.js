let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        this.updater.digest({
            iconContent: '<i class="mc-iconfont fontsize-20 bold color-9 mr5">&#xe60e;</i>标题',
            icon: '<i class="mc-iconfont fontsize-20 bold">&#xe60e;</i>',
            img: '<img src="//img.alicdn.com/tfs/TB1LtU5V5LaK1RjSZFxXXamPFXa-500-100.png" />'
        });
    }
});