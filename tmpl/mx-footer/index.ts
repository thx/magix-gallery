/**
 * https://yuque.antfin-inc.com/fe-p2/sg5kfn/gxm1ua
 */
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

        let map = {
            alimama: {
                reg: /alimama\.(com|net)/i, // 默认
                links: [{
                    text: '法律声明',
                    link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'
                }],
                copyrights: [{
                    text: '© 2007-现在 阿里妈妈版权所有'
                }, {
                    text: '增值电信业务经营许可证：浙B2-20070195',
                    link: 'http://beian.miit.gov.cn/'
                }],
                imgs: [{
                    img: 'https://img.alicdn.com/tfs/TB1D24er.T1gK0jSZFrXXcNCXXa-65-70.png',
                    link: 'http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&id=3301843301080000022791'
                }, {
                    img: 'https://img.alicdn.com/tfs/TB1hIher4z1gK0jSZSgXXavwpXa-20-20.png',
                    link: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000075',
                    text: '浙公网安备 33010002000075号'
                }]
            },
            taobao: {
                reg: /taobao\.(com|net)/i,
                links: [{
                    text: '法律声明',
                    link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201811121436_80276.html?spm=a21bo.2017.1997523009.39.5af911d9GMpDe4'
                }, {
                    text: '知识产权',
                    link: 'https://ipp.alibabagroup.com/?spm=a21bo.2017.1997523009.40.5af911d9GMpDe4'
                }],
                copyrights: [{
                    text: '© 2003-现在 Taobao.com 版权所有'
                }, {
                    text: '增值电信业务经营许可证：浙B2-20080224',
                    link: 'http://beian.miit.gov.cn/'
                }],
                imgs: [{
                    img: 'https://img.alicdn.com/tfs/TB1D24er.T1gK0jSZFrXXcNCXXa-65-70.png', // 电子营业执照
                    link: 'http://idinfo.zjamr.zj.gov.cn//bscx.do?method=lzxx&id=3301843301002003002431'
                }, {
                    img: 'https://img.alicdn.com/tfs/TB1hIher4z1gK0jSZSgXXavwpXa-20-20.png',
                    link: 'http://www.beian.gov.cn/portal/registerSystemInfo?spm=a21bo.2017.1997523009.44.5af911d9lFN3S1&recordcode=33010002000078',
                    text: '浙公网安备 33010002000078号'
                }]
            },
            etao: {
                reg: /etao\.(com|net)/i,
                links: [{
                    text: '法律声明',
                    link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111819_38335.html?spm=1002.8274268.2699127.2.10b42c34Hh4mvT'
                }],
                copyrights: [{
                    text: '© 2010-现在 etao.com 版权所有'
                }, {
                    text: '增值电信业务经营许可证：浙B2-20080224',
                    link: 'http://beian.miit.gov.cn/'
                }],
                imgs: [{
                    img: 'https://img.alicdn.com/tfs/TB1D24er.T1gK0jSZFrXXcNCXXa-65-70.png',
                    link: 'http://idinfo.zjamr.zj.gov.cn//bscx.do?method=lzxx&id=3301843301002003002431'
                }, {
                    img: 'https://img.alicdn.com/tfs/TB1hIher4z1gK0jSZSgXXavwpXa-20-20.png',
                    link: 'http://beian.gov.cn/portal/registerSystemInfo?spm=a21bo.2017.1997523009.44.5af911d9lFN3S1&recordcode=33010002000093',
                    text: '浙公网安备 33010002000093号'
                }]
            },
            tanx: {
                reg: /tanx\.(com|net)/i,
                links: [{
                    text: '隐私权保护',
                    link: 'http://tanx.com/web/opt.html'
                }],
                copyrights: [{
                    text: '© Tanx.com版权所有'
                }, {
                    text: '增值电信业务经营许可证：浙ICP备09109183号',
                    link: 'http://beian.miit.gov.cn/'
                }],
                imgs: [{
                    img: 'https://img.alicdn.com/tfs/TB1D24er.T1gK0jSZFrXXcNCXXa-65-70.png',
                    link: 'http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&id=3301843301002004003505'
                }, {
                    img: 'https://img.alicdn.com/tfs/TB1hIher4z1gK0jSZSgXXavwpXa-20-20.png',
                    link: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000150',
                    text: '浙公网安备 33010002000150号'
                }]
            },
            iconfont: {
                reg: /iconfont\.cn/i,
                copyrights: [{
                    text: '© ALIMAMA MUX, powered by alimama THX.'
                }, {
                    text: '增值电信业务经营许可证：浙ICP备09109183号',
                    link: 'http://beian.miit.gov.cn/'
                }],
                imgs: [{
                    img: 'https://img.alicdn.com/tfs/TB1D24er.T1gK0jSZFrXXcNCXXa-65-70.png',
                    link: 'http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&id=3301843301002004003505'
                }, {
                    img: 'https://img.alicdn.com/tfs/TB1hIher4z1gK0jSZSgXXavwpXa-20-20.png',
                    link: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000124',
                    text: '浙公网安备 33010002000124号'
                }]
            },
            adStrategy: {
                links: [{
                    text: '法律声明',
                    link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201909182047_76647.html'
                }],
                copyrights: [{
                    text: '© 2003-现在 Taobao.com 版权所有'
                }, {
                    text: '增值电信业务经营许可证：浙B2-20080224',
                    link: 'http://beian.miit.gov.cn/'
                }],
                imgs: [{
                    img: 'https://img.alicdn.com/tfs/TB1D24er.T1gK0jSZFrXXcNCXXa-65-70.png', // 电子营业执照
                    link: 'http://idinfo.zjamr.zj.gov.cn//bscx.do?method=lzxx&id=3301843301002003002431'
                }, {
                    img: 'https://img.alicdn.com/tfs/TB1hIher4z1gK0jSZSgXXavwpXa-20-20.png',
                    link: 'http://www.beian.gov.cn/portal/registerSystemInfo?spm=a21bo.2017.1997523009.44.5af911d9lFN3S1&recordcode=33010002000078',
                    text: '浙公网安备 33010002000078号'
                }]
            }
        }
        let href = window.location.href;
        let type;
        if (extra.bizCode) {
            type = extra.bizCode;
        } else {
            type = extra.type || '';
            if (!type) {
                for (let k in map) {
                    if (map[k].reg && map[k].reg.test(href)) {
                        type = k;
                    }
                }
            }
        }
        let { links = [], copyrights = [], imgs = [] } = map[type || 'alimama'];
        let year = (new Date()).getFullYear();
        this.updater.set({
            simple: (extra.mode === 'simple'), // 简易模式
            products,
            len: products.length,
            width,
            textAlign: extra.textAlign || 'left',
            links,
            copyrights,
            imgs
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
