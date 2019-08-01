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
        if(isChrome){
            let expr = /(chrome)\/([\w.]+)/;
            let matches = expr.exec(explorer); 
            let ver = matches[2].slice(0,2);
            if(+ver < 73){
                config = {
                    show: true,
                    title: 'Chrome升级提示',
                    tip: '系统检测到您当前的Chrome浏览器不是高级版本，为了产品功能更好的性能及体验，请下载高级版。'
                }
            }else{
                config = {
                    show: false
                }
            }
        }else{
            config = {
                show: true,
                title: '浏览器检测提示',
                tip: '系统检测到您当前使用的是非Chrome浏览器，如果该浏览器在产品性能和体验上存在问题，请下载chrome高级版。'
            }
        }

        that.updater.digest(config);
    },
    'close<click>'(){
        this.updater.digest({
            show: false
        })
    }
});