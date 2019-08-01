let Magix = require('magix');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra){
        let type = extra.type || 404;
        let src = '', def = '';
        switch (+type){
            case 404:
                src = '//img.alicdn.com/tfs/TB1tAmuRCzqK1RjSZFpXXakSXXa-1262-668.png';
                def = '抱歉，您查看的页面不存在或无权限查看当前页面';
                break;
            case 500:
                src = '//img.alicdn.com/tfs/TB1yZ5sRAvoK1RjSZPfXXXPKFXa-1182-792.png';
                def = '500 Internal Server Error';
                break;
            case 502:
                src = '//img.alicdn.com/tfs/TB1yZ5sRAvoK1RjSZPfXXXPKFXa-1182-792.png';
                def = '502 Bad Gateway';
                break;
        }
        this.updater.set({
            src,
            tip: extra.tip || def,
            btns: (extra.btns + '' !== 'false')
        })
    },
    render() {
        this.updater.digest();
    },
    'back<click>' (e) {
        e.preventDefault();
        history.back();
    }
});