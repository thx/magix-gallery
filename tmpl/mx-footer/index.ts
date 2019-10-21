import Magix from 'magix';
import * as View from '../mx-util/view';
import * as Data from '../mx-header/data';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(ops) {
        let that = this;
        let altered = that.updater.altered();

        // 宽度范围修正
        let width = ops.width || 1200;
        let maxWidth = window.innerWidth;
        if (+width > maxWidth) {
            width = maxWidth;
        }

        // 是否需要产品线信息
        let needProducts = (ops.products + '' === 'true'),
            products = [];
        if (needProducts) {
            Data.products.forEach(item => {
                item.seconds.forEach(sec => {
                    if (!sec.title) {
                        sec.title = item.title;
                    }
                })
                products = products.concat(item.seconds);
            })
        }

        let alimamaReg = /alimama\.(com|net)/i;
        let tanxReg = /tanx\.(com|net)/i;
        let taobaoReg = /taobao\.(com|net)/i;
        let alimama = false, taobao = false, tanx = false;
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
        this.updater.set({
            simple: (ops.mode === 'simple'), // 简易模式
            alimama,
            taobao,
            tanx,
            products,
            len: products.length,
            width,
            textAlign: ops.textAlign || 'center',
            year: '现在'
        });

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();
    }
});
