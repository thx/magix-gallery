let Magix = require('magix');
let $ = require('$');
let Data = require('@../mx-header/data');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(ops) {
        this['@{mode.simple}'] = (ops.mode === 'simple');
        this['@{need.products}'] = (ops.products + '' === 'true');
        this['@{products.width}'] = ops.width || 1184;
        this['@{ui.dark}'] = (ops.dark + '' === 'true');
    },
    render() {
        let me = this;
        let needProducts = me['@{need.products}'];

        let products = [];
        if(needProducts){
            Data.products.forEach(item => {
                item.seconds.forEach(sec => {
                    if(!sec.title){
                        sec.title = item.title;
                    }
                })
                products = products.concat(item.seconds);
            })
        }

        let simple = me['@{mode.simple}'];
        let alimamaReg = /alimama\.(com|net)/i;
        let tanxReg = /tanx\.(com|net)/i;
        let taobaoReg = /taobao\.(com|net)/i;
        let alimama, taobao, tanx;
        if (alimamaReg.test(window.location.href)) {
            alimama = true;
        } else if (taobaoReg.test(window.location.href)) {
            taobao = true;
        } else if (tanxReg.test(window.location.href)) {
            tanx = true;
        } else {
            alimama = true;
        }

        let year = (new Date()).getFullYear();

        let info = {
            simple: simple,
            alimama: alimama,
            taobao: taobao,
            tanx: tanx,
            products,
            len: products.length,
            width: me['@{products.width}'],
            dark: me['@{ui.dark}'],
            year
        }

        me.updater.digest(info);
    }
});