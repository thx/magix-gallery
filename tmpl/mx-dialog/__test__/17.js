let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@17.html',
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        this.alert({
            title: '系统提示',
            content: '${countdown}s后自动关闭',
            countdown: 3, // 倒计时时间
            enterCallback: () => {
                console.log('点击确认后响应')
            }
        });
    },
    'open2<click>'(e) {
        this.confirm({
            title: '系统提示',
            content: '${countdown}s后自动确认，取消则不确认',
            countdown: 3,
            enterCallback: () => {
                console.log('确定按钮响应事件');
            },
            cancelCallback: () => {
                console.log('取消按钮响应事件');
            }
        });
    },
});