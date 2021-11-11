let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@10.html',
    render() {
        this.updater.digest({
            list: [{
                text: '模块1',
                value: 1,
                tag: '<i class="mc-iconfont">&#xe601;</i>',
                tip: '提示信息',
            }, {
                text: '模块2',
                value: 2,
                tagContent: '<span style="position: absolute; left: 0; top: -6px; width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-red);"></span>',
            }],
            icon: '<i class="mc-iconfont">&#xe601;</i>'
        });
    }
});