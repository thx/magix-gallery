let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@74.html',
    render() {
        this.updater.digest({
            time: (new Date()).getTime(),
            btns: [{
                text: '深色按钮',
                mode: 'primary',
                callback: () => {
                    window.open('https://www.taobao.com/');
                }
            }, {
                text: '浅色按钮',
                callback: () => {
                    window.open('https://www.tmall.com/');
                }
            }, {
                text: '外链打开链接',
                mode: 'primary',
                link: 'https://www.tmall.com/',
                outer: true, // 配置的link是否外链打开，默认true
            }, {
                text: '本页打开链接',
                brand: false,
                link: '#!/effects/degree',
                outer: false,
            }]
        });
    }
});