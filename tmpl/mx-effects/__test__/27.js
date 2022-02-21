let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@../ua.less');

module.exports = Base.extend({
    tmpl: '@27.html',
    render() {
        this.updater.digest({
            show1: true,
            title1: 'Chrome升级提示',
            tip1: '系统检测到您当前的Chrome浏览器不是高级版本，为了产品功能更好的性能及体验，请下载高级版。',
            show2: true,
            title2: '建议您使用Chorme浏览器',
            tip2: '系统检测到您当前使用的不是Chrome浏览器，为了产品功能更好的性能及体验，建议您切换为Chorme浏览器。'
        });
    },
    'close<click>'(event){
        let id = event.params.id;
        this.updater.digest({
            [`show${id}`]: false
        })
    },
    'test<hide>'(e){
        e.forever
    }
});