let Magix = require('magix');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra){
        let type = extra.type || '404';
        let tip = extra.tip || '';
        if(!tip){
            switch (type){
                case '404':
                    tip = '抱歉，您查看的页面不存在或无权限查看当前页面';
                    break;
                case '502':
                    tip = 'Bad Gateway';
                    break;
            }
        }
        this.updater.set({
            tip,
            type,
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