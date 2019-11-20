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
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        // 宽度范围修正
        let width = extra.width || 1000;
        let maxWidth = window.innerWidth;
        if (+width > maxWidth) {
            width = maxWidth;
        }

        // 是否需要产品线信息
        let needProducts = (extra.products + '' === 'true'),
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

        let alimamaCopyrights = [{
            text: '法律声明',
            link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'
        }, {
            text: '阿里妈妈版权所有 2007-现在'
        }, {
            text: 'ICP证：浙B2-20070195',
            link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
        }]
        let taobaoCopyrights = [{
            text: '法律声明',
            link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'
        }, {
            text: 'Taobao.com版权所有 2003-现在'
        }, {
            text: 'ICP证：浙B2-20080224-1',
            link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
        }]
        let tanxCopyrights = [{
            text: '隐私权保护',
            link: 'http://tanx.com/web/opt.html'
        }, {
            text: 'Tanx.com版权所有'
        }, {
            text: '浙ICP备09109183号-10',
            link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
        }]

        let copyrights = extra.copyrights || [];
        if (copyrights.length == 0) {
            let alimamaReg = /alimama\.(com|net)/i,
                tanxReg = /tanx\.(com|net)/i,
                taobaoReg = /taobao\.(com|net)/i;
            if (alimamaReg.test(window.location.href)) {
                copyrights = alimamaCopyrights;
            } else if (taobaoReg.test(window.location.href)) {
                copyrights = taobaoCopyrights;
            } else if (tanxReg.test(window.location.href)) {
                copyrights = tanxCopyrights;
            } else {
                copyrights = alimamaCopyrights;
            }
        }

        let year = (new Date()).getFullYear();
        this.updater.set({
            simple: (extra.mode === 'simple'), // 简易模式
            products,
            len: products.length,
            width,
            textAlign: extra.textAlign || 'center',
            copyrights
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
