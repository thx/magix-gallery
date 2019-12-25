let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@ua.less');

module.exports = Magix.View.extend({
    tmpl: '@ua.html',
    render() {
        let that = this;
        let explorer = navigator.userAgent.toLocaleLowerCase();
        let isChrome = (explorer.indexOf('chrome') > -1);
        let config = {};
        if (isChrome) {
            let expr = /(chrome)\/([\w.]+)/;
            let matches = expr.exec(explorer);
            let ver = matches[2].slice(0, 2);
            if (+ver < 73) {
                config = {
                    show: true,
                    title: 'Chrome升级提示',
                    tip: '系统检测到您当前的Chrome浏览器不是高级版本，为了产品功能更好的性能及体验，请下载高级版。'
                }
            } else {
                config = {
                    show: false
                }
            }
        } else {
            config = {
                show: true,
                title: '建议您使用Chorme浏览器',
                tip: '系统检测到您当前使用的不是Chrome浏览器，为了您能体验到更好的产品性能及体验，建议您切换为Chorme浏览器。'
            }
        }

        that.updater.digest(config);
    },
    'close<click>'(e) {
        this.updater.digest({
            show: false
        })

        $(`#${this.id}`).trigger($.Event('hide', {
            forever: e.params.forever
        }));
    }
});