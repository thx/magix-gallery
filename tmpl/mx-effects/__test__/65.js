let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@65.html',
    render() {
        this.updater.digest({
            time: (new Date()).getTime(),
            btns: [{
                text: '深色按钮',
                brand: true,
                callback: () => {
                    window.open('https://www.taobao.com/');
                }
            }, {
                text: '浅色按钮',
                callback: () => {
                    window.open('https://www.tmall.com/');
                }
            }]
        });
    }
});