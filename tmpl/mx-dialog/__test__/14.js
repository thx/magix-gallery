let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@14.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxModal('@./quick', {

        }, {
            width: 800,
            header: {
                title: '全屏右出浮层',
                tip: '提示信息'
            },
            footer: {
                enterText: '确认',
                cancelText: '取消'
            }
        });
    }
});